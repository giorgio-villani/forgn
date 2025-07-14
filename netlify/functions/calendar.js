const axios = require('axios');

exports.handler = async function(event, context) {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

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
    );

    console.log('Calendar API Response Status:', response.status);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch calendar data: ${response.status}`);
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/calendar',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      },
      body: response.data,
    };
  } catch (error) {
    console.error('Error fetching calendar:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Error fetching calendar data',
        details: error.message,
        timestamp: new Date().toISOString(),
      }),
    };
  }
}; 