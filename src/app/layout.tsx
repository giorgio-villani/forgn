import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Forgn Studio',
//   description: 'Learn Skills, Make Art and Meet People',
// }

export const metadata: Metadata = {
  title: 'Forgn Studio',
  description: 'Learn Skills, Make Art and Meet People',
  openGraph: {
    title: 'Forgn Studio',
    description: 'Learn Skills, Make Art and Meet People',
    url: 'https://forgn.art',
    type: 'website',
    images: [
      {
        url: 'forgn.png',
        width: 1956,
        height: 448,
        alt: 'Forgn Studio Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
