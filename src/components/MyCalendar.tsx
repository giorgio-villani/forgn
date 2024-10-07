'use client'

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import iCalendarPlugin from '@fullcalendar/icalendar' // Import iCalendar plugin

const MyCalendar: React.FC = () => {
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
          url: '/api/calendar', // Use the new App Router API route
          format: 'ics',
          failure: function () {
            alert('There was an error while fetching events!')
          },
        }}
      />
    </div>
  )
}

export default MyCalendar
