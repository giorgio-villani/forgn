import MyCalendar from '@/components/MyCalendar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Calendar | Forgn Studio',
  description:
    'Stay updated with the latest events, workshops, and exhibitions at Forgn Studio. View our calendar for upcoming dates and details.',
  openGraph: {
    title: 'Forgn Studio Event Calendar',
    description:
      'Check out the event calendar for Forgn Studio and join us for exciting workshops, exhibitions, and more.',
    url: 'https://forgn.art/calendar',
  },
}

export default function Calendar() {
  return (
    // <main className="flex flex-col items-center justify-between w-full min-h-screen">
    <MyCalendar />
    // </main>
  )
}
