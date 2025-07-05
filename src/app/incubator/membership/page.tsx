import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Forgn Incubator Membership | Houston Art-Tech Creative Business Support',
  description:
    'Join Houston\'s leading art-tech incubator at East End Maker Hub. Get mentorship, workspace access, and resources to launch innovative art and technology consumer products. Apply to our creative business incubator today.',
  openGraph: {
    title: 'Forgn Incubator Membership - Houston Art-Tech Creative Business Support',
    description:
      'Discover Houston\'s top art startup accelerator offering mentorship, maker space access, and support for creative entrepreneurs. Launch your art-tech consumer products with our comprehensive incubator program.',
    url: 'https://forgn.art/incubator/membership',
  },
}

export default function IncubatorMembership() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.double('Incubator', '/incubator', 'Membership', '/incubator/membership')} />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-8">
            Forgn Incubator Membership
          </h1>
          <p className="text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Join Houston's leading art-tech incubator and creative business incubator at East End Maker Hub. Our comprehensive program provides everything you need to transform your creative vision into successful art and technology consumer products. From maker space access to expert mentorship, we've designed this art startup accelerator to maximize your chances of success.
          </p>
        </div>

        {/* What We Offer - Membership Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-inter font-semibold mb-8 text-center">What We Offer - Houston Innovation Hub for Artists</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-customButton rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Studio Space Access</h3>
              <p className="text-sm text-gray-600">24/7 access to professional studio space at East End Maker Hub with dedicated work areas for your projects</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-customButton rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">TXRX Labs Membership</h3>
              <p className="text-sm text-gray-600">Full membership access to TXRX Labs with advanced fabrication tools, 3D printers, laser cutters, and CNC machines</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-customButton rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Project Storage</h3>
              <p className="text-sm text-gray-600">Secure storage space for your projects, prototypes, and materials throughout the incubator program</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-customButton rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Classes</h3>
              <p className="text-sm text-gray-600">Access to our network of expert-led classes in product design, business strategy, marketing, and technical skills</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-customButton rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Investor Network</h3>
              <p className="text-sm text-gray-600">Direct access to our network of investors, venture capitalists, and funding opportunities for your product launch</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-customButton rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">One-on-One Mentorship</h3>
              <p className="text-sm text-gray-600">Personalized mentorship from industry experts in product development, business strategy, and creative entrepreneurship</p>
            </div>
          </div>
        </div>

        {/* How It Works - Product Development Journey */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-inter font-semibold mb-6 text-center">How It Works</h2>
            <div className="space-y-4 text-left mb-8">
              <div className="flex items-start">
                <span className="bg-customButton text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                <div>
                  <h4 className="font-semibold">Product Concept & Market Research</h4>
                  <p className="text-gray-600">Define your product vision and validate market demand</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-customButton text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                <div>
                  <h4 className="font-semibold">Prototyping & Design</h4>
                  <p className="text-gray-600">Build prototypes and refine your product design</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-customButton text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                <div>
                  <h4 className="font-semibold">Manufacturing & Production</h4>
                  <p className="text-gray-600">Scale production and establish supply chains</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-customButton text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                <div>
                  <h4 className="font-semibold">Launch & Market Entry</h4>
                  <p className="text-gray-600">Bring your product to market and grow your customer base</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resident Innovators */}
        <div className="mb-12">
          <h2 className="text-2xl font-inter font-semibold mb-8 text-center">Houston Art-Tech Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/incubator/thomas-macdonald-halo-speaker.jpg"
                alt="Thomas MacDonald - Founder of Halo Speaker"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Halo Speaker</h3>
                <p className="text-gray-600 mb-3">by Thomas MacDonald</p>
                <p className="text-sm text-gray-700 mb-4">
                  An innovative audio device that combines cutting-edge technology with artistic design, 
                  creating a unique consumer product that enhances both form and function.
                </p>
                <a 
                  href="https://halospeakers.webflow.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-customButton text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition duration-300"
                >
                  Visit Halo Speakers →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/incubator/kieren-skelly-gridlights.jpg"
                alt="Kieren Skelly's Grid Lights - interactive lighting consumer product"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Grid Lights</h3>
                <p className="text-gray-600 mb-3">by Kieren Skelly</p>
                <p className="text-sm text-gray-700 mb-4">
                  Interactive lighting system that transforms spaces through programmable LED grids, 
                  demonstrating how art and technology can create engaging consumer experiences.
                </p>
                <a 
                  href="https://www.gridlights.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-customButton text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition duration-300"
                >
                  Visit Grid Lights →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-inter font-semibold mb-6 text-center">Apply to Houston's Creative Business Incubator</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-customButton">Who Should Apply</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Artists and designers with innovative product ideas
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Technologists looking to commercialize creative solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Entrepreneurs with art-tech consumer product concepts
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Teams ready to build and launch market-ready products
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-customButton">What We Look For</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Innovative ideas that blend art and technology
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Clear market potential and consumer appeal
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Commitment to building and launching products
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Passion for creative entrepreneurship
                  </li>
                </ul>
              </div>
            </div>
            

            
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-4 text-customButton">Application Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg shadow">
                  <strong className="text-customButton">1. Submit Application</strong><br/>
                  <span className="text-gray-600">Complete our online form with your project details</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <strong className="text-customButton">2. Review & Interview</strong><br/>
                  <span className="text-gray-600">We'll review your application and schedule a call</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <strong className="text-customButton">3. Program Start</strong><br/>
                  <span className="text-gray-600">Begin your incubator journey with full access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Now */}
        <div className="text-center">
          <div className="bg-customButton rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-inter font-semibold mb-4 text-white">Ready to Launch Your Art-Tech Product?</h2>
            <p className="text-white mb-6">
              Join Houston's premier art startup accelerator and turn your creative vision into successful art and technology consumer products.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdb6F-CKP7ajwHi3R8_05k-noKlEI11deJV4oTxbG0HgicoBA/viewform?usp=header" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-customButton px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 text-lg font-semibold"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 