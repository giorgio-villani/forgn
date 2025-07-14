const axios = require('axios');

exports.handler = async function(event, context) {
  console.log('Calendar function called with event:', {
    httpMethod: event.httpMethod,
    path: event.path,
    headers: event.headers,
    queryStringParameters: event.queryStringParameters
  });

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    console.log('Handling OPTIONS request');
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
    console.log('Invalid method:', event.httpMethod);
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
    const calendarUrl = 'https://calendar.google.com/calendar/ical/1825616f43534c0f70af67648708bf2c5bd054cfb56583597b3c16b86b49b32c%40group.calendar.google.com/public/basic.ics';
    console.log('Fetching calendar from:', calendarUrl);
    
    // Fetch the iCal data from Google Calendar
    const response = await axios.get(calendarUrl, {
      timeout: 10000, // 10 second timeout
      headers: {
        'User-Agent': 'Forgn-Studio-Calendar/1.0',
        'Accept': 'text/calendar, text/plain, */*',
      },
    });

    console.log('Calendar API Response Status:', response.status);
    console.log('Calendar API Response Headers:', response.headers);
    console.log('Calendar API Response Data Length:', response.data ? response.data.length : 'No data');

    if (response.status !== 200) {
      throw new Error(`Failed to fetch calendar data: ${response.status}`);
    }

    // Check if we actually got calendar data
    if (!response.data || response.data.length < 100) {
      console.log('Calendar data seems too short, might be empty or error page');
      console.log('First 200 characters of response:', response.data ? response.data.substring(0, 200) : 'No data');
    }

    // Check if response starts with BEGIN:VCALENDAR (valid iCal format)
    if (!response.data || !response.data.startsWith('BEGIN:VCALENDAR')) {
      console.log('Response does not start with BEGIN:VCALENDAR - might be HTML error page');
      console.log('Response starts with:', response.data ? response.data.substring(0, 100) : 'No data');
      throw new Error('Invalid iCal format received');
    }

    console.log('Valid iCal data received, length:', response.data.length);

    // If debug parameter is present, return raw data for debugging
    if (event.queryStringParameters && event.queryStringParameters.debug) {
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          data: response.data,
          length: response.data.length,
          startsWithVCALENDAR: response.data.startsWith('BEGIN:VCALENDAR'),
          first100Chars: response.data.substring(0, 100)
        }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      },
      body: response.data,
    };
  } catch (error) {
    console.error('Error fetching calendar:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      response: error.response ? {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data ? error.response.data.substring(0, 200) : 'No data'
      } : 'No response'
    });
    
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