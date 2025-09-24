import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import { getAllBlogs, transformStrapiBlog } from '@/utils/strapi'
import { formatDate } from '@/utils/formatDate'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const metadata: Metadata = {
  title: 'Blog | Forgn Studio',
  description: 'Read the latest blog posts from Forgn Studio. Discover insights about art-tech collaboration, maker spaces, and our incubator program in Houston.',
  openGraph: {
    title: 'Blog | Forgn Studio',
    description: 'Read the latest blog posts from Forgn Studio. Discover insights about art-tech collaboration, maker spaces, and our incubator program in Houston.',
    url: 'https://forgn.art/blog',
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
    title: 'Blog | Forgn Studio',
    description: 'Read the latest blog posts from Forgn Studio. Discover insights about art-tech collaboration, maker spaces, and our incubator program in Houston.',
    images: ['https://forgn.art/forgn_v2.png'],
  },
}

function getShortSummary(fullText: string, maxLength: number = 200) {
  // Strip markdown formatting to get plain text
  const plainText = fullText
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/^>\s+/gm, '') // Remove blockquotes
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
  
  // Get the first sentence or truncate
  if (plainText.length > maxLength) {
    return plainText.substring(0, maxLength).trim() + '...'
  }
  
  return plainText
}

export default async function BlogList() {
  // Fetch blogs from Strapi API
  const strapiBlogs = await getAllBlogs()
  const blogs = strapiBlogs.map(transformStrapiBlog)
  
  // Sort blog posts by date (newest first)
  const sortedPosts = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.single('Blog', '/blog')} />
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center px-4">Blog</h1>
        
        {/* Blog Posts List */}
        {sortedPosts.length > 0 ? (
          <div className="px-4">
            <ul className="space-y-4 sm:space-y-8">
              {sortedPosts.map((post) => (
                <li key={post.slug} className="bg-white rounded-lg shadow p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                      <Link href={`/blog/${post.slug}`} className="text-customButton hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold self-start bg-purple-100 text-purple-800">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-2">
                    <span>{formatDate(post.date)}</span>
                    {post.author && <span>• {post.author}</span>}
                    {post.readTime && <span>• {post.readTime}</span>}
                  </div>
                  <div className="mb-2 text-gray-700 text-sm sm:text-base">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ children }) => <span>{children}</span>,
                        h1: ({ children }) => <span>{children}</span>,
                        h2: ({ children }) => <span>{children}</span>,
                        h3: ({ children }) => <span>{children}</span>,
                        h4: ({ children }) => <span>{children}</span>,
                        h5: ({ children }) => <span>{children}</span>,
                        h6: ({ children }) => <span>{children}</span>,
                        strong: ({ children }) => <span>{children}</span>,
                        em: ({ children }) => <span>{children}</span>,
                        ul: ({ children }) => <span>{children}</span>,
                        ol: ({ children }) => <span>{children}</span>,
                        li: ({ children }) => <span>{children}</span>,
                        blockquote: ({ children }) => <span>{children}</span>,
                        code: ({ children }) => <span>{children}</span>,
                        pre: ({ children }) => <span>{children}</span>,
                        a: ({ href, children }) => <span>{children}</span>,
                      }}
                    >
                      {getShortSummary(post.summary)}
                    </ReactMarkdown>
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link href={`/blog/${post.slug}`} className="text-customButton hover:underline text-sm sm:text-base">
                    Read more &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12 px-4">
            <p className="text-gray-600 text-base sm:text-lg">
              No blog posts available at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
