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
      <FullCalendar
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
            alert('There was an error while fetching events! Please try refreshing the page.')
          },
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
