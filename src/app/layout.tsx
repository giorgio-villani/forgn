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
        <meta property="og:title" content="Forgn Studio" />
        <meta
          property="og:description"
          content="Learn Skills, Make Art and Meet People"
        />
        <meta property="og:url" content="https://forgn.art" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://forgn.art/forgn.png" />
        <meta property="og:image:width" content="1956" />
        <meta property="og:image:height" content="448" />
        <meta property="og:image:alt" content="Forgn Studio Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forgn Studio" />
        <meta
          name="twitter:description"
          content="Learn Skills, Make Art and Meet People"
        />
        <meta name="twitter:image" content="https://forgn.art/forgn.png" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
