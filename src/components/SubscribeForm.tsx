'use client'

import React, { useState } from 'react'

const SubscribeForm: React.FC = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus('success')
          form.reset()
        } else {
          setStatus('error')
        }
      })
      .catch(() => setStatus('error'))
  }

  return (
    <div className="bg-red-600 flex items-center justify-center text-center py-5">
      <div className="bg-white rounded-lg w-[1200px]">
        <div className="m-10">
          <h2 className="text-4xl mb-4 font-inter">Subscribe</h2>
          <p className="mb-4">
            Stay in the loop with everything you need to know.
          </p>
          <form
            action="https://formspree.io/f/xwpebvon"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter email here..."
              className="border border-red-500 p-2 mb-4 w-full rounded"
              required
            />
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </form>
          {status === 'success' && <p>Thank you for subscribing!</p>}
          {status === 'error' && (
            <p>Oops, something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SubscribeForm
