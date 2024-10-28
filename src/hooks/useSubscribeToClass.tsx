import { useEffect, useState } from 'react'

interface UseHandleSubmitProps {
  emailAddress: string
  className: string
}

const useSubscribeToClass = ({
  emailAddress,
  className,
}: UseHandleSubmitProps) => {
  const [email, setEmail] = useState(emailAddress)

  // If you want to log every time email changes, you can keep this useEffect
  useEffect(() => {
    console.log('useHandleSubmit: useEffect')
    console.log(`Email Address Updated: ${email}`)
  }, [email])

  const handleSubscribeToClass = async () => {
    try {
      const apiUrl = '/api/mailing-lists/set-class-mailing-list-item' // Assuming this is relative to your base URL
      const formData = { email: emailAddress, className: className }

      console.log(`Submitting email: ${emailAddress}`)
      console.log(`Submitting className: ${className}`)

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Success:', result)
        return result
      } else {
        console.log('Failed:', response.status, response.statusText)
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

  return { handleSubscribeToClass }
}

export default useSubscribeToClass
