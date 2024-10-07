// /app/api/calendar/route.ts

import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  try {
    // Fetch the iCal data from Google Calendar
    const response = await axios.get(
      'https://calendar.google.com/calendar/ical/1825616f43534c0f70af67648708bf2c5bd054cfb56583597b3c16b86b49b32c%40group.calendar.google.com/public/basic.ics'
    )

    return new NextResponse(response.data, {
      headers: {
        'Content-Type': 'text/calendar',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Error fetching calendar data' }),
      { status: 500 }
    )
  }
}
