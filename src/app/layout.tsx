import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'Explore Digital Art at Forgn Studio – Classes, Workshops, and Creative Learning',
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
        url: 'https://forgn.art/forgn_metadata.png',
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
    images: ['https://forgn.art/forgn_metadata.png'],
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
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YK63ESRMTF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YK63ESRMTF');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
