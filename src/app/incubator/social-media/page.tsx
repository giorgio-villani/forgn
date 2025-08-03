import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Social Media & Video Production | Forgn Incubator',
  description:
    'Discover our video production capabilities including interviews and day-in-the-life content creation for social media marketing.',
  openGraph: {
    title: 'Social Media & Video Production - Forgn Incubator',
    description: 'Professional video production services for interviews and day-in-the-life content to boost your social media presence.',
    url: 'https://forgn.art/incubator/social-media',
    type: 'website',
    images: [
      {
        url: 'https://forgn.art/incubator/video-production.jpg',
        width: 1200,
        height: 630,
        alt: 'Video Production Studio - Forgn Incubator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media & Video Production - Forgn Incubator',
    description: 'Professional video production services for interviews and day-in-the-life content to boost your social media presence.',
    images: ['https://forgn.art/incubator/video-production.jpg'],
  },
}

export default function SocialMedia() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.double('Incubator', '/incubator', 'Social Media', '/incubator/social-media')} />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-8">
            Social Media & Video Production
          </h1>
          <p className="text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Professional video production capabilities to help you create compelling content for social media, 
            including interviews and day-in-the-life content that connects with your audience.
          </p>
        </div>

        {/* Video Production Capabilities */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-inter font-bold mb-8 text-center text-gray-800 border-b-2 border-customButton pb-4">Video Production Capabilities</h2>
            
            {/* Example Video */}
            <div className="mb-8">
              <h3 className="text-2xl font-inter font-semibold mb-6 text-center text-customButton">Example of Our Media Production</h3>
              <div className="flex justify-center">
                <div className="relative w-full max-w-5xl" style={{ height: '400px' }}>
                                      <iframe
                      src="https://www.youtube.com/embed/yd7guWbqUCc"
                      title="Forgn Incubator Media Production Example"
                      className="w-full h-full rounded-lg shadow-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Watch an example of our professional video production capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-customButton">Professional Interview Production</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    High-quality video and audio recording equipment
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Professional lighting setup for optimal visual quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Multiple camera angles for dynamic content
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Professional editing and post-production services
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Captioning and subtitle generation for accessibility
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-customButton">Day-in-the-Life Content</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Behind-the-scenes studio and workshop footage
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Process documentation from concept to completion
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Artist and maker lifestyle content
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Community and collaboration highlights
                  </li>
                  <li className="flex items-start">
                    <span className="text-customButton mr-2">•</span>
                    Event and workshop coverage
                  </li>
                </ul>
              </div>
            </div>

            {/* Studio Setup */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-inter font-semibold mb-6 text-center text-customButton">Professional Studio Setup</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold mb-2">4K Video Recording</h4>
                    <p className="text-sm text-gray-600">High-resolution video capture for crisp, professional content</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold mb-2">Professional Audio</h4>
                    <p className="text-sm text-gray-600">Studio-quality microphones and audio processing</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold mb-2">LED Lighting</h4>
                    <p className="text-sm text-gray-600">Adjustable lighting for optimal visual presentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Types */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
            <h2 className="text-3xl font-inter font-bold mb-8 text-center text-gray-800 border-b-2 border-customButton pb-4">Content Types We Create</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-customButton">Interview Content</h3>
                <p className="text-gray-700 mb-4">
                  Professional interviews with artists, makers, entrepreneurs, and community leaders. 
                  We capture authentic conversations that showcase expertise, share stories, and build connections.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Artist and maker spotlights</li>
                  <li>• Entrepreneur success stories</li>
                  <li>• Community leader interviews</li>
                  <li>• Expert knowledge sharing</li>
                  <li>• Behind-the-scenes conversations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-customButton">Day-in-the-Life Content</h3>
                <p className="text-gray-700 mb-4">
                  Authentic, engaging content that shows the real work and lifestyle of creators, 
                  makers, and entrepreneurs in our community.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Studio and workshop tours</li>
                  <li>• Creative process documentation</li>
                  <li>• Daily routines and workflows</li>
                  <li>• Project development journeys</li>
                  <li>• Community collaboration moments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Strategy */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-inter font-bold mb-8 text-center text-gray-800 border-b-2 border-customButton pb-4">Social Media Strategy</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-customButton text-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Platform Optimization</h3>
                  <p className="text-sm">Content tailored for Instagram, TikTok, YouTube, and LinkedIn</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-customButton text-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Engagement Focus</h3>
                  <p className="text-sm">Content designed to spark conversations and build community</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-customButton text-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Brand Storytelling</h3>
                  <p className="text-sm">Authentic narratives that connect with your target audience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white border-2 border-customButton rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-inter font-bold mb-6 text-customButton">Ready to Create Amazing Content?</h2>
            <p className="text-gray-700 mb-6">
              Let's work together to create compelling video content that tells your story and connects with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/incubator/membership" 
                className="inline-block bg-customButton text-white px-8 py-4 rounded-full hover:bg-red-700 transition duration-300 text-lg font-semibold"
              >
                View Membership
              </a>
              <a 
                href="mailto:info@forgn.art" 
                className="inline-block border-2 border-customButton text-customButton px-8 py-4 rounded-full hover:bg-customButton hover:text-white transition duration-300 text-lg font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 