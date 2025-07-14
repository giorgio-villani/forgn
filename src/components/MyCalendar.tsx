'use client'

import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import iCalendarPlugin from '@fullcalendar/icalendar'

const MyCalendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [publicLink, setPublicLink] = useState<string | null>(null) // State to store the extracted link
  const [calendarRef, setCalendarRef] = useState<any>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleEventClick = (info: any) => {
    const description =
      info.event.extendedProps.description || 'No description available'
    const linkFromDescription = extractLink(description) // Extract link from description

    setSelectedEvent({
      title: info.event.title,
      start: info.event.start?.toLocaleString(),
      end: info.event.end?.toLocaleString(),
      description,
    })

    setPublicLink(linkFromDescription) // Set the extracted link to state
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  const handleRefresh = async () => {
    if (!calendarRef) return
    
    setIsRefreshing(true)
    try {
      // Force refresh by refetching events with timestamp
      await calendarRef.getApi().refetchEvents()
      console.log('Calendar refreshed successfully')
    } catch (error) {
      console.error('Error refreshing calendar:', error)
    } finally {
      setIsRefreshing(false)
    }
  }

  function extractLink(text: string) {
    if (!text) return null

    // Match the first <a href="..."> tag
    const match = text.match(/<a\s+href="([^"]+)"/)
    if (!match) return null

    let url = match[1] // Extract the URL inside href

    // Check if it's a Google redirect link
    if (url.includes('https://www.google.com/url?q=')) {
      const params = new URLSearchParams(url.split('?')[1]) // Extract query parameters
      url = params.get('q') as string // Get the actual URL from 'q' parameter
    }

    // Remove trailing arguments if any
    url = url?.split('&')[0] // Split at '&' and take the base URL

    return url
  }

  return (
    <div className="max-w-5xl mx-auto m-8 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Event Calendar</h1>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          {isRefreshing ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Refreshing...
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Events
            </>
          )}
        </button>
      </div>
      <FullCalendar
        ref={setCalendarRef}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          listPlugin,
          interactionPlugin,
          iCalendarPlugin,
        ]}
        initialView="listMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        }}
        weekends={true}
        events={{
          url: '/api/calendar',
          format: 'ics',
          failure: function (error: any) {
            console.error('Calendar fetch error:', error)
            console.error('Error details:', {
              message: error.message,
              status: error.status,
              response: error.response
            })
            // Try alternative approach - direct Google Calendar URL
            console.log('Attempting direct Google Calendar fetch...')
            return {
              url: 'https://calendar.google.com/calendar/ical/1825616f43534c0f70af67648708bf2c5bd054cfb56583597b3c16b86b49b32c%40group.calendar.google.com/public/basic.ics',
              format: 'ics',
              failure: function (directError: any) {
                console.error('Direct calendar fetch also failed:', directError)
                console.error('Direct error details:', {
                  message: directError.message,
                  status: directError.status,
                  response: directError.response
                })
                // Silently fail without interrupting user experience
              }
            }
          },
          success: function(events: any) {
            console.log('Calendar events loaded successfully:', events)
            console.log('Number of events:', events.length)
          }
        }}
        eventClick={handleEventClick} // Add event click handler
      />

      {/* Display the extracted link if available */}
      {publicLink && (
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <p>
            <strong>Public Page Link:</strong>{' '}
            <a
              href={publicLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {publicLink}
            </a>
          </p>
        </div>
      )}

      {/* Modal for event details */}
      {isModalOpen && selectedEvent && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to close modal
          >
            <h2 className="text-xl font-bold mb-4">{selectedEvent.title}</h2>
            <p>
              <strong>Start:</strong> {selectedEvent.start}
            </p>
            {selectedEvent.end && (
              <p>
                <strong>End:</strong> {selectedEvent.end}
              </p>
            )}
            <p>
              <strong>Description:</strong>{' '}
              <a
                href={extractLink(selectedEvent.description) as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {extractLink(selectedEvent.description)}
              </a>
            </p>
            <button
              onClick={closeModal}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyCalendar
