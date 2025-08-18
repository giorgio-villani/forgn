import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://forgn.art'
  const currentDate = new Date().toISOString()

  const videoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${baseUrl}/digital</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/UAtzguIBgXQ/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>Digital Art Classes at Forgn Studio</video:title>
      <video:description>Join our comprehensive digital art classes at FORGN Studio, where innovative techniques meet cutting-edge technology. Led by experienced digital artists, our classes cater to both beginners and advanced practitioners eager to explore the digital art landscape.</video:description>
      <video:content_loc>https://www.youtube.com/watch?v=UAtzguIBgXQ</video:content_loc>
      <video:duration>300</video:duration>
      <video:publication_date>2024-01-01T00:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:category>Education</video:category>
      <video:tag>digital art</video:tag>
      <video:tag>art classes</video:tag>
      <video:tag>forgn studio</video:tag>
      <video:tag>art education</video:tag>
    </video:video>
  </url>
  <url>
    <loc>${baseUrl}/incubator/social-media</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/yd7guWbqUCc/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>Forgn Incubator Media Production Example</video:title>
      <video:description>Professional video production capabilities to help you create compelling content for social media, including interviews and day-in-the-life content that connects with your audience.</video:description>
      <video:content_loc>https://www.youtube.com/watch?v=yd7guWbqUCc</video:content_loc>
      <video:duration>240</video:duration>
      <video:publication_date>2024-01-01T00:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:category>Business</video:category>
      <video:tag>video production</video:tag>
      <video:tag>social media</video:tag>
      <video:tag>forgn incubator</video:tag>
      <video:tag>media production</video:tag>
    </video:video>
  </url>
</urlset>`

  return new NextResponse(videoSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}



