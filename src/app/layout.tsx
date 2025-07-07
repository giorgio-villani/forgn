import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forgn Studio | Digital Art Classes & Workshops',
  description:
    'Join Forgn Studio to learn art, connect with visionary artists, participate in hands-on classes, and engage in creative workshops blending physical and digital creativity.',
  keywords:
    'art, artists, classes, digital, gallery, workshops, teachers, school, learning, learn, art classes, sculpture, digital art, painting, drawing, creative classes, art education, Houston art studio, art lessons, art events, art exhibitions, creative community, art techniques, artistic skills, art for kids, art for adults, art courses, visual arts',
  openGraph: {
    title: 'Forgn Studio',
    description: 'Learn Skills, Make Art and Meet People',
    url: 'https://forgn.art',
    type: 'website',
    images: [
      {
        url: 'https://forgn.art/forgn_v2.png',
        width: 1200,
        height: 630,
        alt: 'Forgn Studio Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgn Studio',
    description: 'Learn Skills, Make Art and Meet People',
    images: ['https://forgn.art/forgn_v2.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Define structured data using JSON-LD (Organization schema)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Forgn Studio',
    url: 'https://forgn.art',
    logo: 'https://forgn.art/logo.png',
    sameAs: ['https://www.instagram.com/forgnstudio'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  }

  return (
    <html lang="en">
      <head>
        {/* Add structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NVP7C6MS');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVP7C6MS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {/* Performance Monitoring - Development Only */}
        {process.env.NODE_ENV === 'development' && (
          <Script
            id="web-vitals"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof window !== 'undefined') {
                  import('web-vitals').then((webVitals) => {
                    webVitals.getCLS(console.log);
                    webVitals.getFID(console.log);
                    webVitals.getFCP(console.log);
                    webVitals.getLCP(console.log);
                    webVitals.getTTFB(console.log);
                  }).catch(err => {
                    console.log('Web Vitals not available:', err);
                  });
                }
              `,
            }}
          />
        )}
        
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
