import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Header />
      <About />
      <Footer />
    </main>
  )
}
