import React, { useState, useEffect } from 'react'
import useSubscribeToClass from '@/hooks/useSubscribeToClass'
import workshops from '@/data/workshops'

interface SubscribeFormProps {
  workshopId: string
}

const SubscribeToClassForm: React.FC<SubscribeFormProps> = ({ workshopId }) => {
  const [email, setEmail] = useState('')
  const [className, setClassName] = useState('')
  const [showCheckmark, setShowCheckmark] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const workshop = workshops.find((workshop) => workshop.id === workshopId)

  useEffect(() => {
    if (workshop) {
      setClassName(workshop.title || 'Unknown Workshop')
    } else {
      console.error(`Workshop with ID ${workshopId} not found.`)
      setClassName('Unknown Workshop')
    }
  }, [workshop, workshopId])

  const { handleSubscribeToClass } = useSubscribeToClass({
    emailAddress: email,
    className: className,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (email && email.includes('@')) {
      try {
        await handleSubscribeToClass()
        setShowCheckmark(true)
        setSubscribed(true)
        setEmail('')

        setTimeout(() => {
          setShowCheckmark(false)
          setSubscribed(false)
        }, 2000)
      } catch (error) {
        console.error('Error subscribing to class:', error)
      }
    } else {
      alert('Please enter a valid email.')
    }
  }

  return (
    <div className=" mx-auto ">
      {/* <h3 className="text-lg font-semibold mb-2">Subscribe to {className}</h3> */}
      <p className="text-sm lg:text-lg leading-relaxed mb-4">
      ✨ Exciting News! By joining our mailing list, you'll get exclusive updates on this class, early access to registrations, and notifications about <span className="text-red-600 font-bold">FREE</span> workshops and <span className="text-red-600 font-bold">special events!</span>
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className={`block w-full rounded-md border p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              subscribed ? 'border-green-500' : 'border-gray-300'
            }`}
          />
          {showCheckmark && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <svg
                className="h-5 w-5 text-green-600 animate-checkmark"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          )}
        </div>

        {subscribed && (
          <p className="text-sm text-green-600">Subscribed!</p>
        )}

        <button
          type="submit"
          className="w-full rounded bg-red-600 py-3 text-white hover:bg-red-500"
        >
          Register for Class Mailing List
        </button>
      </form>
    </div>
  )
}

export default SubscribeToClassForm