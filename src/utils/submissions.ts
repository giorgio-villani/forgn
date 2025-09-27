// Generic submission handler for Strapi collections
export interface SubmissionData {
  [key: string]: any
}

export interface SubmissionResponse {
  success: boolean
  message: string
  data?: any
  error?: string
}

export class SubmissionHandler {
  private baseUrl: string
  private collectionName: string

  constructor(collectionName: string) {
    this.baseUrl = process.env.STRAPI_BASE_URL || 'http://localhost:1337/api'
    this.collectionName = collectionName
  }

  async create(data: SubmissionData): Promise<SubmissionResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/${this.collectionName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        let errorData
        try {
          errorData = JSON.parse(errorText)
        } catch {
          errorData = { error: errorText }
        }
        
        return {
          success: false,
          message: 'Submission failed',
          error: errorData.error || `HTTP ${response.status}: ${response.statusText}`
        }
      }

      const result = await response.json()
      console.log(`[${this.collectionName}] === STRAPI CREATE RESPONSE ===`)
      console.log(`[${this.collectionName}] Status: ${response.status} ${response.statusText}`)
      console.log(`[${this.collectionName}] Full Response:`, JSON.stringify(result, null, 2))
      console.log(`[${this.collectionName}] Response Data:`, result.data)
      console.log(`[${this.collectionName}] Document ID:`, result.data?.documentId)
      console.log(`[${this.collectionName}] Database ID:`, result.data?.id)
      return {
        success: true,
        message: 'Submission successful',
        data: result
      }
    } catch (error) {
      return {
        success: false,
        message: 'Network error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  async update(id: string, data: SubmissionData): Promise<SubmissionResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/${this.collectionName}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        let errorData
        try {
          errorData = JSON.parse(errorText)
        } catch {
          errorData = { error: errorText }
        }
        
        return {
          success: false,
          message: 'Update failed',
          error: errorData.error || `HTTP ${response.status}: ${response.statusText}`
        }
      }

      const result = await response.json()
      console.log(`[${this.collectionName}] === STRAPI UPDATE RESPONSE ===`)
      console.log(`[${this.collectionName}] Status: ${response.status} ${response.statusText}`)
      console.log(`[${this.collectionName}] Full Response:`, JSON.stringify(result, null, 2))
      console.log(`[${this.collectionName}] Response Data:`, result.data)
      console.log(`[${this.collectionName}] Document ID:`, result.data?.documentId)
      console.log(`[${this.collectionName}] Database ID:`, result.data?.id)
      return {
        success: true,
        message: 'Update successful',
        data: result
      }
    } catch (error) {
      return {
        success: false,
        message: 'Network error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  async delete(id: string): Promise<SubmissionResponse> {
    try {
      const url = `${this.baseUrl}/${this.collectionName}/${id}`
      console.log(`[${this.collectionName}] DELETE URL:`, url)
      console.log(`[${this.collectionName}] DELETE ID:`, id)
      
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.log(`[${this.collectionName}] DELETE ERROR:`, {
          status: response.status,
          statusText: response.statusText,
          errorText: errorText
        })
        
        let errorData
        try {
          errorData = JSON.parse(errorText)
        } catch {
          errorData = { error: errorText }
        }
        
        return {
          success: false,
          message: 'Delete failed',
          error: errorData.error || `HTTP ${response.status}: ${response.statusText}`
        }
      }

      console.log(`[${this.collectionName}] === STRAPI DELETE RESPONSE ===`)
      console.log(`[${this.collectionName}] Status: ${response.status} ${response.statusText}`)
      console.log(`[${this.collectionName}] Delete successful for ID: ${id}`)
      return {
        success: true,
        message: 'Delete successful'
      }
    } catch (error) {
      return {
        success: false,
        message: 'Network error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  async get(id: string): Promise<SubmissionResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/${this.collectionName}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        let errorData
        try {
          errorData = JSON.parse(errorText)
        } catch {
          errorData = { error: errorText }
        }
        
        return {
          success: false,
          message: 'Fetch failed',
          error: errorData.error || `HTTP ${response.status}: ${response.statusText}`
        }
      }

      const result = await response.json()
      return {
        success: true,
        message: 'Fetch successful',
        data: result
      }
    } catch (error) {
      return {
        success: false,
        message: 'Network error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  async getAll(): Promise<SubmissionResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/${this.collectionName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        let errorData
        try {
          errorData = JSON.parse(errorText)
        } catch {
          errorData = { error: errorText }
        }
        
        return {
          success: false,
          message: 'Fetch failed',
          error: errorData.error || `HTTP ${response.status}: ${response.statusText}`
        }
      }

      const result = await response.json()
      return {
        success: true,
        message: 'Fetch successful',
        data: result
      }
    } catch (error) {
      return {
        success: false,
        message: 'Network error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }
}

// Factory function to create submission handlers
export function createSubmissionHandler(collectionName: string) {
  return new SubmissionHandler(collectionName)
}

// Pre-configured handlers for common collections
export const workshopSubmissions = createSubmissionHandler('workshop-submissions')
export const locationSubmissions = createSubmissionHandler('location-submissions')
