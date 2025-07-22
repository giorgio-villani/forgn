'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import ImageCarousel from '@/components/ImageCarousel'
import Link from 'next/link'
import artists from '@/data/artists'

interface Workshop {
  id: string
  title: string
  type: string
  instructor?: string
  description: string
  keywords?: string
  location?: string
  sessions?: string | string[]
  time?: string
  price?: string
  discountedPrice?: string
  image?: string
  images?: string[]
  booking?: string
  discount_booking?: string
  slug: string
  model_fee?: string
  materials?: string | { name: string; url: string }[]
  discountedEndDate?: string
  materials_list?: string
}

interface WorkshopDetailsProps {
  workshop: Workshop
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function WorkshopDetails({ workshop, searchParams }: WorkshopDetailsProps) {
  const [isMounted, setIsMounted] = useState(false)
  
  // Track UTM parameters
  const utmSource = Array.isArray(searchParams.utm_source) ? searchParams.utm_source[0] : searchParams.utm_source
  const utmMedium = Array.isArray(searchParams.utm_medium) ? searchParams.utm_medium[0] : searchParams.utm_medium
  const utmCampaign = Array.isArray(searchParams.utm_campaign) ? searchParams.utm_campaign[0] : searchParams.utm_campaign

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
      return
    }
    
    // Debug logging
    console.log('Component mounted, checking UTM params:', { utmSource, utmMedium, utmCampaign })
    
    // Log when Facebook pixel is active
    if (workshop.id === '0' && typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      console.log('Facebook Pixel: Pixel is active for workshop ID 0 on production')
    } else {
      console.log('Facebook Pixel: Pixel is NOT active - conditions not met:', {
        workshopId: workshop.id,
        isWindow: typeof window !== 'undefined',
        hostname: typeof window !== 'undefined' ? window.location.hostname : 'undefined',
        isLocalhost: typeof window !== 'undefined' ? window.location.hostname === 'localhost' : 'unknown'
      })
    }
  }, [isMounted, utmSource, utmMedium, utmCampaign, workshop.id])

  // Return null or loading state before mounting
  if (!isMounted) {
    return null // or return a loading spinner
  }

  // Modify the booking link to include UTM parameters if they exist
  const getBookingUrl = (originalUrl: string) => {
    if (!originalUrl) return '';
    const url = new URL(originalUrl);
    if (utmSource) url.searchParams.append('utm_source', utmSource);
    if (utmMedium) url.searchParams.append('utm_medium', utmMedium);
    if (utmCampaign) url.searchParams.append('utm_campaign', utmCampaign);
    return url.toString();
  }

  // Helper function to format dates nicely
  const formatSessions = (sessions: string | string[] | undefined) => {
    if (!sessions) return "To be announced";
    
    if (Array.isArray(sessions)) {
      if (sessions.length === 0) return "To be announced";
      
      const formattedDates = sessions.map((date: string) => {
        // Parse the date correctly by adding 'T00:00:00' to ensure local timezone
        const sessionDate = new Date(date + 'T00:00:00');
        return sessionDate.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      });
      
      if (formattedDates.length === 1) {
        return formattedDates[0];
      } else {
        return formattedDates.join('\n');
      }
    }
    
    return sessions;
  }

  // Helper to calculate Early Bird countdown
  const getEarlyBirdCountdown = (endDate?: string) => {
    if (!endDate) return null;
    const now = new Date();
    const end = new Date(endDate + 'T23:59:59');
    const diff = end.getTime() - now.getTime();
    if (diff <= 0) return 'ended';
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days > 0) return `${days} day${days === 1 ? '' : 's'} left`;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} left`;
    return 'ending soon';
  };

  // Helper to check if Early Bird is active
  const isEarlyBirdActive = (endDate?: string) => {
    if (!endDate) return true;
    const now = new Date();
    const end = new Date(endDate + 'T23:59:59');
    return end.getTime() > now.getTime();
  };

  // Type guard for materials array
  function isMaterialsArray(materials: any): materials is { name: string; url: string }[] {
    return Array.isArray(materials) && materials.every(item => item && typeof item === 'object' && 'name' in item && 'url' in item);
  }

  return (
    <>
      {/* Meta Pixel Code - Only for Terracotta Sculpture Class (ID: 0) and not on localhost */}
      {workshop.id === '0' && typeof window !== 'undefined' && window.location.hostname !== 'localhost' && (
        <>
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              console.log('Facebook Pixel: Initializing pixel...');
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '725525180424391');
              fbq('track', 'PageView');
              console.log('Facebook Pixel: Pixel initialized and PageView tracked');
            `}
          </Script>
          <noscript>
            <img 
              height="1" 
              width="1" 
              style={{display: 'none'}}
              src="https://www.facebook.com/tr?id=725525180424391&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
        </>
      )}
      {/* End Meta Pixel Code */}
      
      <Breadcrumbs items={createBreadcrumbs.workshop(workshop.title, `/workshops/${workshop.slug}`)} />
      
      <div className="max-w-screen-xl mx-auto font-poppins p-4">
        <h1 className="text-3xl lg:text-4xl text-center font-inter mb-8">
          {workshop.title}
        </h1>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 p-4">
            <ImageCarousel
              images={workshop.images || (workshop.image ? [workshop.image] : [])}
                alt={workshop.title}
              className="w-full"
              />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="px-5">
              <div className="text-sm lg:text-lg leading-relaxed mb-4 whitespace-pre-line">
                {workshop.description}
              </div>
              <h2 className="text-sm lg:text-lg mb-4">
                🎨<strong>Instructor:</strong> {
                  (() => {
                    const artist = artists.find(a => a.active !== false && a.name === workshop.instructor)
                    if (artist && artist.slug) {
                      return (
                        <Link href={`/team/${artist.slug}`} className="text-blue-600 hover:underline">
                          {artist.name}
                        </Link>
                      )
                    }
                    return workshop.instructor || "To be announced"
                  })()
                }
              </h2>
              <div className="text-sm lg:text-lg mb-4">
                ⚒️<strong>Sessions:</strong>
                <div className="mt-2 ml-4">
                  {Array.isArray(workshop.sessions) && workshop.sessions.length > 0 ? (
                    workshop.sessions.map((date: string, index: number) => {
                      // Parse the date correctly by adding 'T00:00:00' to ensure local timezone
                      const sessionDate = new Date(date + 'T00:00:00');
                      const formattedDate = sessionDate.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      });
                      return (
                        <div key={index} className="mb-1">
                          {formattedDate}
                        </div>
                      );
                    })
                  ) : (
                    <div>{formatSessions(workshop.sessions)}</div>
                  )}
                </div>
              </div>
              <p className="text-sm lg:text-lg mb-4">
                🕰️<strong>Time:</strong> {workshop.time || "To be announced"}
              </p>
              <p className="text-sm lg:text-lg mb-4">
                📍<strong>Location:</strong> <a href='https://g.co/kgs/fHhjxQn' className='text-blue-600 font-italic hover:underline'>{workshop.location || "To be announced"}</a>
              </p>
              {workshop.model_fee && (
                <p className="text-sm lg:text-lg mb-4">
                  💵<strong> Model Fee:</strong> {workshop.model_fee}
                </p>
              )}
              {isMaterialsArray(workshop.materials) && workshop.materials.length > 0 && (
                <div className="text-sm lg:text-lg mb-4">
                  🧰<strong> Materials:</strong>
                  <ul className="list-disc ml-6 mt-2">
                    {workshop.materials.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {typeof workshop.materials === 'string' && workshop.materials && (
                <div className="text-sm lg:text-lg mb-4">
                  🧰<strong> Materials:</strong> {workshop.materials}
                </div>
              )}
              {workshop.materials_list && typeof workshop.materials_list === 'string' && (
                <div className="text-sm lg:text-lg mb-4">
                  📝<strong> Materials List:</strong> <a href={workshop.materials_list} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">View Full Materials List</a>
                </div>
              )}
              <p className="text-sm lg:text-lg mb-4">
                🏷️<strong>Price:</strong> {
                  workshop.discountedPrice && isEarlyBirdActive(workshop.discountedEndDate) ? (
                    <>
                      <span className="line-through text-gray-500">{workshop.price}</span>
                      {' '}
                      <span className="text-red-600">
                        {workshop.discountedPrice}
                        {workshop.discountedEndDate && getEarlyBirdCountdown(workshop.discountedEndDate) !== 'ended' && (
                          <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded align-middle">
                            Early Bird ({getEarlyBirdCountdown(workshop.discountedEndDate)})
                          </span>
                        )}
                        {!workshop.discountedEndDate && (
                          <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded align-middle">Early Bird</span>
                        )}
                      </span>
                    </>
                  ) : (
                    workshop.price || "To be announced"
                  )
                }
              </p>

              {
                workshop.booking && (
                  <a href={getBookingUrl(workshop.discount_booking || workshop.booking)} target="_blank">
                    <button type="submit" className={`w-full rounded py-3 text-white hover:bg-green-500 mb-2 bg-green-600 hover:bg-green-500'
                    }`}>
                      {workshop.discount_booking && isEarlyBirdActive(workshop.discountedEndDate) ? 'Sign up with Discount' : 'Sign Up'}
                    </button>
                  </a>
                )
              }
              <a href="https://eepurl.com/i7qwzg" target="_blank">
                <button
                  type="submit"
                  className="w-full rounded bg-white hover:bg-gray-200 py-3 text-red-600 border-red-600 border-2"
                >
                  Register for Mailing List
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 