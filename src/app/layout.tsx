import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Forgn Studio</title>
        <meta
          name="description"
          content="Learn Skills, Make Art and Meet People"
        />
        <meta
          name="keywords"
          content="art, workshops, teachers, school, learning, art classes, sculpture, digital art, painting, drawing, creative classes, art education, Houston art studio, art lessons, art events, art exhibitions, creative community, art techniques, artistic skills, art for kids, art for adults, art courses, visual arts"
        />
        <meta property="og:title" content="Forgn Studio" />
        <meta
          property="og:description"
          content="Learn Skills, Make Art and Meet People"
        />
        <meta property="og:url" content="https://forgn.art" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://forgn.art/forgn_metadata.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Forgn Studio Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forgn Studio" />
        <meta
          name="twitter:description"
          content="Learn Skills, Make Art and Meet People"
        />
        <meta
          name="twitter:image"
          content="https://forgn.art/forgn_metadata.png"
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
