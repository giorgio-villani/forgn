import React, { useState } from 'react'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState('')
  const [showCheckmark, setShowCheckmark] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple email validation
    if (email && email.includes('@')) {
      setShowCheckmark(true)
      setSubscribed(true) // Show "Subscribed!" message
      setEmail('')

      // Reset checkmark after some time, or close modal
      setTimeout(() => {
        setIsOpen(false) // Close modal after showing checkmark
        setShowCheckmark(false)
        setSubscribed(false) // Reset the subscribed message after closing
      }, 2000)
    } else {
      // Handle invalid email
      alert('Please enter a valid email.')
    }
  }

  if (!isOpen) return null // Do not render anything if modal is not open

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        onClick={() => setIsOpen(false)} // Close when the backdrop is clicked
      ></div>

      <div className="relative z-20 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div>
                  {showCheckmark ? (
                    // Animate the checkmark
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-green-600 animate-checkmark"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Subscription
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Please enter your email to be notified when this class is
                      scheduled.
                    </p>
                  </div>
                  {/* Wrap the text and input inside a div with same width */}
                  <div className="mt-2 w-full max-w-sm">
                    <form onSubmit={handleSubmit}>
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
                      {/* Subscribed message */}
                      {subscribed && (
                        <p className="mt-1 text-sm text-green-600">
                          Subscribed!
                        </p>
                      )}
                      <div className="mt-4 flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 sm:w-auto"
                        >
                          Subscribe
                        </button>
                        <button
                          type="button"
                          className="ml-3 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
                          onClick={() => setIsOpen(false)} // Close modal on click
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
