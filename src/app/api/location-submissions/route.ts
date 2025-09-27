import { NextRequest, NextResponse } from 'next/server'
import { locationSubmissions } from '@/utils/submissions'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log('=== LOCATION SUBMISSION API ===')
    console.log('Received data:', JSON.stringify(body, null, 2))
    
    const result = await locationSubmissions.create(body.data)
    
    if (result.success) {
      console.log('=== SUBMISSION SUCCESS ===')
      console.log('Response:', result.data)
      return NextResponse.json({ success: true, message: result.message, data: result.data })
    } else {
      console.error('=== SUBMISSION FAILED ===')
      console.error('Error:', result.error)
      return NextResponse.json(
        { 
          success: false, 
          error: result.message, 
          details: result.error
        }, 
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('=== API ERROR ===')
    console.error('Error in location submission API:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }, 
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, data } = body
    
    console.log('=== LOCATION UPDATE API ===')
    console.log('ID:', id)
    console.log('Data:', JSON.stringify(data, null, 2))
    
    const result = await locationSubmissions.update(id, data)
    
    if (result.success) {
      console.log('=== UPDATE SUCCESS ===')
      return NextResponse.json({ success: true, message: result.message, data: result.data })
    } else {
      console.error('=== UPDATE FAILED ===')
      return NextResponse.json(
        { success: false, error: result.message, details: result.error },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('=== UPDATE API ERROR ===')
    return NextResponse.json(
      { success: false, error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    console.log('=== LOCATION DELETE API ===')
    console.log('ID:', id)
    
    const result = await locationSubmissions.delete(id)
    
    if (result.success) {
      console.log('=== DELETE SUCCESS ===')
      return NextResponse.json({ success: true, message: result.message })
    } else {
      console.error('=== DELETE FAILED ===')
      return NextResponse.json(
        { success: false, error: result.message, details: result.error },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('=== DELETE API ERROR ===')
    return NextResponse.json(
      { success: false, error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}



