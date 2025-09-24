import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import { getBlogBySlug, getAllBlogs, transformStrapiBlog } from '@/utils/strapi'
import { formatDate } from '@/utils/formatDate'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import ImageTile from '@/components/ImageTile'

export async function generateStaticParams() {
  const strapiBlogs = await getAllBlogs()
  const blogs = strapiBlogs.map(transformStrapiBlog)
  
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const strapiBlog = await getBlogBySlug(params.slug)
  if (!strapiBlog) return notFound()
  
  const post = transformStrapiBlog(strapiBlog)

  return {
    title: `${post.title} | Forgn Studio Blog`,
    description: post.summary.replace(/\n+/g, ' ').substring(0, 160) + '...',
    openGraph: {
      title: `${post.title} | Forgn Studio Blog`,
      description: post.summary.replace(/\n+/g, ' ').substring(0, 160) + '...',
      url: `https://forgn.art/blog/${post.slug}`,
      type: 'article',
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
      title: `${post.title} | Forgn Studio Blog`,
      description: post.summary.replace(/\n+/g, ' ').substring(0, 160) + '...',
      images: ['https://forgn.art/forgn_v2.png'],
    },
  }
}

export default async function BlogPostDetail({ params }: { params: { slug: string } }) {
  const strapiBlog = await getBlogBySlug(params.slug)
  if (!strapiBlog) return notFound()
  
  const post = transformStrapiBlog(strapiBlog)

  // Format date as 'Month Day, Year'
  const formattedDate = formatDate(post.date)
  
  // Process content to handle tile tags
  const tileRegex = /<tiles:([0-9,]+)>/g
  const parts = post.content.split(tileRegex)
  const processedContent: (string | JSX.Element)[] = []
  
  
  let partIndex = 0
  let matchIndex = 0
  
  while (partIndex < parts.length) {
    const part = parts[partIndex]
    
    if (partIndex % 2 === 0) {
      // This is a text part
      if (part.trim()) {
        processedContent.push(part)
      }
    } else {
      // This is a tile indices part
      const indices = part.split(',').map(i => parseInt(i.trim())).filter(i => !isNaN(i))
      const tileImages = indices.map(i => (post.images || [])[i]).filter(Boolean)
      
      if (tileImages.length > 0) {
        processedContent.push(
          <ImageTile 
            key={`tile-${matchIndex}`}
            images={tileImages}
            alt={`Blog post images ${matchIndex + 1}`}
            className="my-8"
          />
        )
      }
      matchIndex++
    }
    
    partIndex++
  }

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.single('Blog', '/blog').concat({ name: post.title, href: `/blog/${post.slug}` })} />
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
        <article className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-[1200px] mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm sm:text-base">
              <span>{formattedDate}</span>
              {post.author && <span>• {post.author}</span>}
              {post.readTime && <span>• {post.readTime}</span>}
              {post.category && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                  {post.category}
                </span>
              )}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-customButton prose-blockquote:pl-4 prose-blockquote:italic prose-a:text-customButton prose-a:no-underline hover:prose-a:underline prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700">
            {processedContent.map((part, index) => {
              if (typeof part === 'string') {
                return (
                  <ReactMarkdown 
                    key={index}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      a: ({ href, children }) => {
                        // Check if it's an external link
                        const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'))
                        return (
                          <a 
                            href={href} 
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            className="text-customButton hover:underline"
                          >
                            {children}
                          </a>
                        )
                      }
                    }}
                  >
                    {part}
                  </ReactMarkdown>
                )
              }
                  // Check if this is an image tile component by checking if it's a JSX element
                  if (typeof part === 'object' && part !== null && 'type' in part) {
                    return (
                      <div key={index} className="my-8">
                        {part}
                      </div>
                    )
                  }
              return part
            })}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="/blog" className="text-customButton hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
} 