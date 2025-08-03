'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type TabType = 'overview' | 'membership' | 'social-media'

export default function IncubatorClient() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')

  const TabButton = ({ tab, label }: { tab: TabType, label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
        activeTab === tab
          ? 'bg-customButton text-white shadow-lg'
          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      {label}
    </button>
  )

  const renderOverviewContent = () => (
    <>
      {/* Why Houston Needs This Incubator */}
      <div className="mb-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-inter font-semibold mb-6 text-center">Why Houston Needs This Incubator</h2>
          
          {/* Ion Image */}
          <div className="mb-8 flex justify-center">
            <Image 
              src="/incubator/the-ion.jpg" 
              alt="Ion District - Houston Innovation Hub" 
              width={1000} 
              height={600} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-customButton">The Innovation Gap</h3>
              <p className="text-gray-700 mb-4">
                Houston&apos;s vibrant art scene and growing tech community are disconnected. Artists have incredible creative vision 
                but lack the resources to bring their ideas to market. Meanwhile, Houston&apos;s economy needs more diverse, 
                innovative consumer products that reflect our city&apos;s unique cultural identity.
              </p>
              <p className="text-gray-700">
                Our art incubator bridges this gap by providing the infrastructure, mentorship, and community that creative 
                entrepreneurs need to transform their artistic vision into viable consumer products.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-customButton">Art as the Key to Innovation</h3>
              <p className="text-gray-700 mb-4">
                At Forgn, we believe art is the fundamental driver of innovation. People need to be able to play, 
                experiment with ideas that aren&apos;t necessarily useful in the moment, and be surrounded by people who 
                motivate them to turn those ideas into something meaningful.
              </p>
              <p className="text-gray-700">
                Our creative incubator environment fosters this kind of exploration. When artists and technologists 
                collaborate in a maker space like East End Maker Hub, they create products that blend form and function 
                in ways that pure business thinking never could.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why East End Maker Hub */}
      <div className="mb-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-inter font-semibold mb-6 text-center">Why East End Maker Hub?</h2>
          <div className="mb-8 flex justify-center">
            <Image src="/incubator/eemh.png" alt="Why Houston Needs This Incubator" width={1000} height={1000} className="rounded-lg shadow-lg" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-customButton">The Heart of Houston&apos;s Creative District</h3>
              <p className="text-gray-700 mb-4">
                Houston&apos;s East End Cultural District is the city&apos;s fastest-growing creative district, home to artists, makers, and innovators 
                who are redefining what&apos;s possible. This vibrant community provides the perfect ecosystem for our art incubator 
                to thrive.
              </p>
              <p className="text-gray-700 mb-4">
                Located in the historic East End Cultural District, our incubator program taps into decades of creative energy and cultural 
                diversity that makes this neighborhood uniquely positioned to foster innovative consumer products.
              </p>
              <p className="text-gray-700">
                Learn more about the <a href="https://eastendmakerhub.org/" target="_blank" rel="noopener noreferrer" className="text-customButton hover:underline">East End Maker Hub</a> and its mission to create jobs and prepare a sustainable trained high-tech manufacturing workforce.
              </p>
              <p className="text-gray-700">
                Explore the <a href="https://eastendhouston.com/" target="_blank" rel="noopener noreferrer" className="text-customButton hover:underline">East End Cultural District</a>, Houston&apos;s most connected region and cultural district, home to vibrant murals, local markets, and a rich artistic heritage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-customButton">World-Class Maker Infrastructure</h3>
              <p className="text-gray-700 mb-4">
                East End Maker Hub is Houston&apos;s premier maker space, offering state-of-the-art fabrication tools, 
                collaborative workspaces, and a community of experienced makers. This infrastructure is essential for 
                turning creative ideas into tangible consumer products.
              </p>
              <p className="text-gray-700">
                Our incubator participants get direct access to this world-class facility, along with the mentorship 
                of the Maker Hub&apos;s community of craftspeople, engineers, and entrepreneurs who call this space home.
              </p>
              <p className="text-gray-700">
                Discover <a href="https://apps.txrxlabs.org/" target="_blank" rel="noopener noreferrer" className="text-customButton hover:underline">TXRX Labs</a>, Houston&apos;s non-profit makerspace with diverse classes, equipment access, and a network of creators, artists, and inventors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const renderMembershipContent = () => (
    <div className="text-center py-12">
      <h2 className="text-3xl font-inter font-semibold mb-6">Membership Information</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Learn about our membership options and how to join the Forgn Incubator program.
      </p>
      <Link 
        href="/incubator/membership" 
        className="inline-block bg-customButton text-white px-8 py-4 rounded-full hover:bg-red-700 transition duration-300 text-lg font-semibold"
      >
        View Full Membership Details
      </Link>
    </div>
  )

  const renderSocialMediaContent = () => (
    <>
      {/* Video Production Capabilities */}
      <div className="mb-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-inter font-semibold mb-6 text-center">Video Production Capabilities</h2>
          
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
            <h3 className="text-xl font-semibold mb-4 text-customButton">Professional Studio Setup</h3>
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
          <h2 className="text-2xl font-inter font-semibold mb-6 text-center">Content Types We Create</h2>
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
          <h2 className="text-2xl font-inter font-semibold mb-6 text-center">Social Media Strategy</h2>
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
    </>
  )

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-8">
          Forgn Incubator
        </h1>
        <p className="text-lg font-inter leading-relaxed max-w-3xl mx-auto">
          Understanding why Houston needs this incubator and why East End Maker Hub is the perfect 
          location for transforming art-tech ideas into successful consumer products.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-gray-100 p-2 rounded-xl">
          <TabButton tab="overview" label="Overview" />
          <TabButton tab="membership" label="Membership" />
                     <TabButton tab="social-media" label="Media" />
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === 'overview' && renderOverviewContent()}
        {activeTab === 'membership' && renderMembershipContent()}
        {activeTab === 'social-media' && renderSocialMediaContent()}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="bg-white border-2 border-customButton rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-inter font-semibold mb-4 text-customButton">Ready to Learn More?</h2>
          <p className="text-gray-700 mb-6">
            Discover what we offer and how our incubator program can help you bring your ideas to life.
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
  )
} 