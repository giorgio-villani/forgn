import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Forgn Accelerator | Consumer Product Development',
  description:
    'Transform your art-tech ideas into market-ready consumer products. Get mentorship, funding, and support to launch innovative products that blend art and technology.',
  openGraph: {
    title: 'Forgn Accelerator - Consumer Product Development',
    description:
      'Launch your art-tech consumer products with Forgn Studio&apos;s accelerator program. From concept to market, we help you build products people love.',
    url: 'https://forgn.art/accelerator',
  },
}

export default function Accelerator() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.single('Accelerator', '/accelerator')} />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-center mb-8">
          Forgn Accelerator
        </h1>
        <div className="text-center">
          <p className="text-xl font-inter leading-relaxed mb-8 max-w-3xl mx-auto">
            The Forgn Accelerator is our flagship program designed to help artists and technologists 
            transform their innovative ideas into successful consumer products that people love and use daily.
          </p>
          
          {/* Product Showcase */}
          <div className="mb-8">
            <h2 className="text-2xl font-inter font-semibold mb-6">Featured Products</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/accelerator/thomas-macdonald-halo-speaker.jpg"
                  alt="Thomas MacDonald's Halo Speaker - innovative art-tech consumer product"
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
                    href="http://halospeakers.webflow.io/" 
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
                  src="/accelerator/kieren-skelly-gridlights.jpg"
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

                      <div className="bg-gray-100 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-inter font-semibold mb-4">Product Development Journey</h2>
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
              
              <div className="text-center">
                <a 
                  href="mailto:info@forgn.art?subject=Product%20Development%20Application" 
                  className="block bg-customButton text-white px-8 py-4 rounded-full hover:bg-red-700 transition duration-300 text-lg font-semibold w-full"
                >
                  Apply Now
                </a>
              </div>
            </div>
        </div>
      </div>
    </main>
  )
} 