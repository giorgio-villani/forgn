'use client'

import { notFound, useSearchParams } from 'next/navigation'
import workshops from '@/data/workshops'
import { useEffect, useState } from 'react'
import SubscribeToClassPopup from '@/components/SubscribeToClassPopup' // Ensure this path is correct
import Image from 'next/image'
import SubscribeToClassForm from '@/components/SubscribeToClassForm'
import { Metadata } from 'next'
import Script from 'next/script'

// export const metadata: Metadata = {
//   title: 'Sculpture Classes | Shape Your Creativity',
//   description:
//     'Discover the art of sculpture at Forgn Studio. Our classes offer hands-on learning to bring your creative visions to life, from traditional to modern techniques.',
//   openGraph: {
//     title: 'Sculpture Classes by Forgn Studio',
//     description:
//       'Unleash your artistic potential with Forgn Studio's sculpture classes. Explore diverse materials and techniques with expert guidance.',
//     url: 'https://forgn.art/sculpture',
//   },
// }

interface ClassDetailsProps {
  params: {
    workshopId: string
  }
}


export default function ClassDetails({ params }: ClassDetailsProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { workshopId } = params
  const searchParams = useSearchParams()
  
  // Track UTM parameters
  const utmSource = searchParams.get('utm_source')
  const utmMedium = searchParams.get('utm_medium')
  const utmCampaign = searchParams.get('utm_campaign')

  const workshop = workshops.find((workshop) => workshop.id === workshopId)

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
      return
    }
    
    // Debug logging
    console.log('Component mounted, checking UTM params:', { utmSource, utmMedium, utmCampaign })
    
    // Log when Facebook pixel is active
    if (workshopId === '0' && typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      console.log('Facebook Pixel: Pixel is active for workshop ID 0 on production')
    } else {
      console.log('Facebook Pixel: Pixel is NOT active - conditions not met:', {
        workshopId,
        isWindow: typeof window !== 'undefined',
        hostname: typeof window !== 'undefined' ? window.location.hostname : 'undefined',
        isLocalhost: typeof window !== 'undefined' ? window.location.hostname === 'localhost' : 'unknown'
      })
    }
    
    const logAnalytics = async () => {
      if (utmSource || utmMedium || utmCampaign) {
        const visitId = `${workshopId}-${utmSource}-${utmMedium}-${utmCampaign}`
        const hasLogged = localStorage.getItem(`analytics-${visitId}`)
        
        if (!hasLogged) {
          try {
            console.log('Preparing to send analytics data')
            const response = await fetch('/api/analytics', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                type: 'campaign_view',
                source: utmSource || '',
                medium: utmMedium || '',
                campaign: utmCampaign || '',
                workshopId,
                timestamp: new Date().toISOString()
              })
            })

            const data = await response.json()
            
            if (!response.ok) {
              throw new Error(data.error || 'Failed to log analytics')
            }
            
            console.log('Analytics logged successfully:', data)
            localStorage.setItem(`analytics-${visitId}`, 'true')
          } catch (error) {
            console.error('Error sending analytics:', error)
            // Don't set localStorage if the request failed
          }
        } else {
          console.log('Analytics already logged for this visit')
        }
      }
    }

    logAnalytics()
  }, [isMounted, utmSource, utmMedium, utmCampaign, workshopId])

  if (!workshop) {
    return notFound()
  }

  // Return null or loading state before mounting
  if (!isMounted) {
    return null // or return a loading spinner
  }

  console.log(workshops);
  console.log("Received workshopId:", workshopId);

  // Modify the booking link to include UTM parameters if they exist
  const getBookingUrl = (originalUrl: string) => {
    if (!originalUrl) return '';
    const url = new URL(originalUrl);
    if (utmSource) url.searchParams.append('utm_source', utmSource);
    if (utmMedium) url.searchParams.append('utm_medium', utmMedium);
    if (utmCampaign) url.searchParams.append('utm_campaign', utmCampaign);
    return url.toString();
  }

  return (
    <>
      {/* Meta Pixel Code - Only for Terracotta Sculpture Class (ID: 0) and not on localhost */}
      {workshopId === '0' && typeof window !== 'undefined' && window.location.hostname !== 'localhost' && (
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
      
      <div className="max-w-screen-xl mx-auto font-poppins p-4">
        <h1 className="text-3xl lg:text-4xl text-center font-inter mb-8">
          {workshop.title}
        </h1>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 p-4">
            {workshop.image ? (
              <Image
                src={workshop.image}
                alt={workshop.title}
                width={750}
                height={500}
                className="w-full h-auto object-cover max-w-full max-h-[500px]"
              />
            ) : (
              <div className="w-full h-auto bg-gray-200 flex items-center justify-center">
                No Image Available
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="px-5">
              <p className="text-sm lg:text-lg leading-relaxed mb-4">
                {workshop.description}
              </p>
              {/* <p className="text-sm lg:text-lg mb-4">
                <strong>Price:</strong> {workshop.price}
              </p> */}
              <h2 className="text-sm lg:text-lg mb-4">
                🎨<strong>Instructor:</strong> {workshop.instructor || "To be announced"}
              </h2>
              <p className="text-sm lg:text-lg mb-4">
              ⚒️<strong>Sessions:</strong> {workshop.sessions || "To be announced"}
              </p>
              <p className="text-sm lg:text-lg mb-4">
                🕰️<strong>Time:</strong> {workshop.time || "To be announced"}
              </p>
              <p className="text-sm lg:text-lg mb-4">
                📍<strong>Location:</strong> <a href='https://g.co/kgs/fHhjxQn' className='text-blue-600 font-italic hover:underline'>{workshop.location || "To be announced"}</a>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                🏷️<strong>Price:</strong> {
                  workshop.discountedPrice ? (
                    <>
                      <span className="line-through text-gray-500">{workshop.price}</span>
                      {' '}
                      <span className="text-red-600">{workshop.discountedPrice}</span>
                    </>
                  ) : (
                    workshop.price || "To be announced"
                  )
                }
              </p>
              {/* <SubscribeToClassForm workshopId={workshopId} /> */}

              {
                workshop.booking && (
                  <a href={getBookingUrl(workshop.discount_booking || workshop.booking)} target="_blank">
                    <button type="submit" className={`w-full rounded py-3 text-white hover:bg-red-500 mb-2 ${
                      workshop.discount_booking ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600'
                    }`}>
                      {workshop.discount_booking ? 'Sign up with Discount' : 'Sign up for Class'}
                    </button>
                  </a>
                )
              }
              <a href="http://eepurl.com/i7qwzg" target="_blank">
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
