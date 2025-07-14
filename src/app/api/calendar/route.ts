// /app/api/calendar/route.ts

import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  try {
    // Fetch the iCal data from Google Calendar
    const response = await axios.get(
      'https://calendar.google.com/calendar/ical/1825616f43534c0f70af67648708bf2c5bd054cfb56583597b3c16b86b49b32c%40group.calendar.google.com/public/basic.ics',
      {
        timeout: 10000, // 10 second timeout
        headers: {
          'User-Agent': 'Forgn-Studio-Calendar/1.0',
        },
      }
    )

    console.log('Calendar API Response Status:', response.status)
    console.log('Calendar API Response Headers:', response.headers)

    if (response.status !== 200) {
      throw new Error(`Failed to fetch calendar data: ${response.status}`)
    }

    return new NextResponse(response.data, {
      headers: {
        'Content-Type': 'text/calendar',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      },
    })
  } catch (error) {
    console.error('Error fetching calendar:', error)
    
    // Return a more detailed error response
    return new NextResponse(
      JSON.stringify({ 
        error: 'Error fetching calendar data',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    )
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
