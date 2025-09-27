'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'

interface WorkshopSubmission {
  documentId: string
  title: string
  instructor_name: string
  instructor_email: string
  instructor_phone: string
  description: string
  duration: string
  years_of_experience: string
  submittedAt: string
  status: 'pending' | 'approved' | 'rejected'
  // Auto-generated fields from Strapi
  slug?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
}

export default function SubmitWorkshopPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [submissions, setSubmissions] = useState<WorkshopSubmission[]>([])
  const [showSubmissions, setShowSubmissions] = useState(false)
  const [hasLoadedFromStorage, setHasLoadedFromStorage] = useState(false)
  const [editingSubmission, setEditingSubmission] = useState<WorkshopSubmission | null>(null)
  const router = useRouter()

  // Load submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('workshop-submissions')
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions))
    }
    setHasLoadedFromStorage(true)
  }, [])

  // Save submissions to localStorage whenever submissions change (but only after initial load)
  useEffect(() => {
    if (hasLoadedFromStorage) {
      localStorage.setItem('workshop-submissions', JSON.stringify(submissions))
    }
  }, [submissions, hasLoadedFromStorage])

  const handleEditSubmission = (submission: WorkshopSubmission) => {
    setEditingSubmission(submission)
    setSubmitStatus('idle')
    setErrorMessage('')
  }

  const handleCancelEdit = () => {
    setEditingSubmission(null)
    setSubmitStatus('idle')
    setErrorMessage('')
  }

  const handleDeleteSubmission = async (submissionId: string) => {
    if (confirm('Are you sure you want to delete this submission? This action cannot be undone.')) {
      try {
        // Find the submission to get the documentId
        const submission = submissions.find(sub => sub.documentId === submissionId)
        if (submission && submission.documentId) {
          // Only make API call if it's a real Strapi document (not a local-only submission)
          console.log('=== DELETING WORKSHOP ===')
          console.log('Submission ID:', submissionId)
          console.log('Submission data:', submission)
          
          // Use the documentId for deletion (Strapi v5 requirement)
          console.log('Available IDs in submission:', {
            documentId: submission.documentId
          })
          
          // Use documentId for deletion as per Strapi documentation
          const deleteId = submission.documentId
          console.log('Using documentId for deletion:', deleteId)
          
          const response = await fetch(`/api/workshop-submissions?id=${deleteId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })

          const result = await response.json()
          console.log('Delete response:', result)

          if (!response.ok) {
            console.error('Failed to delete from Strapi:', response.status, result)
            alert(`Failed to delete from server: ${result.error || response.statusText}`)
            return // Don't remove from localStorage if API fails
          }
        }

        // Remove from localStorage only if API call succeeded or it's a local-only submission
        setSubmissions(prev => prev.filter(sub => sub.documentId !== submissionId))
        if (editingSubmission?.documentId === submissionId) {
          setEditingSubmission(null)
        }
      } catch (error) {
        console.error('Error deleting submission:', error)
        alert(`Error deleting submission: ${error instanceof Error ? error.message : 'Unknown error'}`)
        // Don't remove from localStorage if there's an error
      }
    }
  }

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const form = event.currentTarget
      const formData = new FormData(form)
      
      const submissionData = {
        data: {
          title: formData.get('title'),
          instructor_name: formData.get('instructor_name'),
          instructor_email: formData.get('instructor_email'),
          instructor_phone: formData.get('instructor_phone'),
          duration: formData.get('duration'),
          years_of_experience: formData.get('years_of_experience'),
          description: formData.get('description'),
        }
      }

      // Use PUT for updates, POST for new submissions
      const isUpdate = !!editingSubmission
      const method = isUpdate ? 'PUT' : 'POST'
      const url = '/api/workshop-submissions'
      
      // For updates, include the documentId in the request body
      const requestData = isUpdate ? {
        id: editingSubmission.documentId,
        data: submissionData.data
      } : submissionData
      
      console.log('=== WORKSHOP SUBMISSION REQUEST ===')
      console.log('Method:', method)
      console.log('Is Update:', isUpdate)
      console.log('Request Data:', JSON.stringify(requestData, null, 2))
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('=== WORKSHOP SUBMISSION RESPONSE ===')
        console.log('Full response:', JSON.stringify(result, null, 2))
        console.log('result.data:', result.data)
        console.log('result.data.data:', result.data?.data)
        setSubmitStatus('success')
        
        if (editingSubmission) {
          // Update existing submission with response data
          const strapiData = result.data?.data || result.data
          const updatedSubmission: WorkshopSubmission = {
            ...editingSubmission,
            documentId: strapiData.documentId,
            title: strapiData.title || formData.get('title') as string,
            instructor_name: strapiData.instructor_name || formData.get('instructor_name') as string,
            instructor_email: strapiData.instructor_email || formData.get('instructor_email') as string,
            instructor_phone: strapiData.instructor_phone || formData.get('instructor_phone') as string,
            duration: strapiData.duration || formData.get('duration') as string,
            years_of_experience: strapiData.years_of_experience?.toString() || formData.get('years_of_experience') as string,
            description: strapiData.description || formData.get('description') as string,
            // Auto-generated fields from Strapi
            slug: strapiData.slug,
            createdAt: strapiData.createdAt,
            updatedAt: strapiData.updatedAt,
            publishedAt: strapiData.publishedAt,
          }
          
          setSubmissions(prev => prev.map(sub => 
            sub.documentId === editingSubmission.documentId ? updatedSubmission : sub
          ))
          setEditingSubmission(null)
        } else {
          // Add new submission with response data
          const strapiData = result.data?.data || result.data
          const newSubmission: WorkshopSubmission = {
            documentId: strapiData.documentId,  // Use Strapi documentId
            title: strapiData.title || formData.get('title') as string,
            instructor_name: strapiData.instructor_name || formData.get('instructor_name') as string,
            instructor_email: strapiData.instructor_email || formData.get('instructor_email') as string,
            instructor_phone: strapiData.instructor_phone || formData.get('instructor_phone') as string,
            duration: strapiData.duration || formData.get('duration') as string,
            years_of_experience: strapiData.years_of_experience?.toString() || formData.get('years_of_experience') as string,
            description: strapiData.description || formData.get('description') as string,
            submittedAt: new Date().toISOString(),
            status: 'pending',
            // Auto-generated fields from Strapi
            slug: strapiData.slug,
            createdAt: strapiData.createdAt,
            updatedAt: strapiData.updatedAt,
            publishedAt: strapiData.publishedAt,
          }
          
          setSubmissions(prev => [newSubmission, ...prev])
        }
        
        form.reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage('Submission failed')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs items={createBreadcrumbs.workshopSubmission()} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submissions List - Left Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg h-full">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">My Submissions</h2>
                <p className="text-sm text-gray-600 mt-1">{submissions.length} submission{submissions.length !== 1 ? 's' : ''}</p>
              </div>
              <div className="p-6 h-full overflow-y-auto">
                {submissions.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">No submissions yet.</p>
                    <p className="text-gray-400 text-xs mt-1">Submit your first class to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {submissions.map((submission) => (
                      <div 
                        key={submission.documentId} 
                        onClick={() => handleEditSubmission(submission)}
                        className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors hover:shadow-md cursor-pointer"
                      >
                        <div className="mb-3">
                          <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{submission.title}</h4>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p><strong>Instructor:</strong> {submission.instructor_name}</p>
                          <p><strong>Duration:</strong> {submission.duration}</p>
                          <p><strong>Experience:</strong> {submission.years_of_experience}</p>
                          <p><strong>Submitted:</strong> {new Date(submission.updatedAt || submission.submittedAt).toLocaleDateString()}</p>
                        </div>
                        {submission.description && (
                          <p className="text-xs text-gray-600 mt-2 line-clamp-2">{submission.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submission Form - Right Side */}
          <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {editingSubmission ? 'Update Class' : 'Submit a Class'}
                </h1>
            <p className="text-gray-600">
                  {editingSubmission 
                    ? 'Update your class information below.' 
                    : 'Share your expertise with the community by submitting a class proposal.'
                  }
                </p>
                {editingSubmission && (
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Editing:</strong> {editingSubmission.title}
                    </p>
                  </div>
                )}
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Class submitted successfully!
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Thank you for your submission! Your class has been added to your submissions list.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Submission failed
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{errorMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmitForm} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Class Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                defaultValue={editingSubmission?.title || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="e.g., Introduction to Mycology"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="instructor_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Instructor Name *
                </label>
                <input
                  type="text"
                  id="instructor_name"
                  name="instructor_name"
                  required
                  defaultValue={editingSubmission?.instructor_name || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="instructor_email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="instructor_email"
                  name="instructor_email"
                  required
                  defaultValue={editingSubmission?.instructor_email || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="instructor_phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="instructor_phone"
                  name="instructor_phone"
                  required
                  defaultValue={editingSubmission?.instructor_phone || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                  Class Duration *
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  required
                  defaultValue={editingSubmission?.duration || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="e.g., 4 weeks, 2 hours, 1 day"
                />
              </div>
            </div>

            <div>
              <label htmlFor="years_of_experience" className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience *
              </label>
              <input
                type="text"
                id="years_of_experience"
                name="years_of_experience"
                required
                defaultValue={editingSubmission?.years_of_experience || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="e.g., 5 years, 10+ years"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Class Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                defaultValue={editingSubmission?.description || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Describe what students will learn, materials needed, prerequisites, etc."
              />
            </div>

            <div className="flex items-center justify-between pt-6">
              <button
                type="button"
                onClick={editingSubmission ? handleCancelEdit : () => router.back()}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {editingSubmission ? 'Cancel Edit' : 'Cancel'}
              </button>
              
              <div className="flex items-center gap-3">
                {editingSubmission && (
                  <button
                    type="button"
                    onClick={() => handleDeleteSubmission(editingSubmission.documentId)}
                    className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete Class
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting 
                    ? (editingSubmission ? 'Updating...' : 'Submitting...') 
                    : (editingSubmission ? 'Update Class' : 'Submit Class')
                  }
                </button>
              </div>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


