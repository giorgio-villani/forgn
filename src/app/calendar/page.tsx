import MyCalendar from '@/components/MyCalendar'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'

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
    <>
      <Breadcrumbs items={createBreadcrumbs.single('Calendar', '/calendar')} />
    <MyCalendar />
    </>
  )
}
