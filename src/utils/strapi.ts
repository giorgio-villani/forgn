import { STRAPI_CONFIG, StrapiResponse, StrapiWorkshop, StrapiBlogPost, StrapiArtist, StrapiTeam, StrapiLocation } from '@/types/strapi'

// Generic function to fetch data from Strapi
async function fetchFromStrapi<T>(endpoint: string): Promise<T> {
  const url = `${STRAPI_CONFIG.apiUrl}${endpoint}`
  
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 1 minute
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch from Strapi: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching from Strapi endpoint ${endpoint}:`, error)
    throw error
  }
}

// Workshop API functions
export async function getAllWorkshops(): Promise<StrapiWorkshop[]> {
  const response: StrapiResponse<StrapiWorkshop[]> = await fetchFromStrapi(STRAPI_CONFIG.workshopsEndpoint)
  return response.data
}

export async function getWorkshopBySlug(slug: string): Promise<StrapiWorkshop | null> {
  try {
    const response: StrapiResponse<StrapiWorkshop[]> = await fetchFromStrapi(
      `/workshops?filters[slug][$eq]=${slug}&populate=*`
    )
    return response.data[0] || null
  } catch (error) {
    console.error(`Error fetching workshop with slug ${slug}:`, error)
    return null
  }
}

export async function getWorkshopsByType(type: string): Promise<StrapiWorkshop[]> {
  try {
    const response: StrapiResponse<StrapiWorkshop[]> = await fetchFromStrapi(
      `/workshops?filters[type][$eq]=${type}&populate=*`
    )
    return response.data
  } catch (error) {
    console.error(`Error fetching workshops by type ${type}:`, error)
    return []
  }
}

// Blog Post API functions (for future use)
export async function getAllBlogPosts(): Promise<StrapiBlogPost[]> {
  const response: StrapiResponse<StrapiBlogPost[]> = await fetchFromStrapi('/blog-posts')
  return response.data
}

export async function getBlogPostBySlug(slug: string): Promise<StrapiBlogPost | null> {
  try {
    const response: StrapiResponse<StrapiBlogPost[]> = await fetchFromStrapi(
      `/blog-posts?filters[slug][$eq]=${slug}`
    )
    return response.data[0] || null
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return null
  }
}

// Artist API functions (for future use)
export async function getAllArtists(): Promise<StrapiArtist[]> {
  const response: StrapiResponse<StrapiArtist[]> = await fetchFromStrapi('/artists')
  return response.data
}

// Team API functions
export async function getAllTeams(): Promise<StrapiTeam[]> {
  const response: StrapiResponse<StrapiTeam[]> = await fetchFromStrapi(STRAPI_CONFIG.teamsEndpoint)
  return response.data
}

export async function getTeamBySlug(slug: string): Promise<StrapiTeam | null> {
  try {
    const response: StrapiResponse<StrapiTeam[]> = await fetchFromStrapi(
      `/teams?filters[slug][$eq]=${slug}&populate=*`
    )
    return response.data[0] || null
  } catch (error) {
    console.error(`Error fetching team member with slug ${slug}:`, error)
    return null
  }
}

export async function getArtistBySlug(slug: string): Promise<StrapiArtist | null> {
  try {
    const response: StrapiResponse<StrapiArtist[]> = await fetchFromStrapi(
      `/artists?filters[slug][$eq]=${slug}`
    )
    return response.data[0] || null
  } catch (error) {
    console.error(`Error fetching artist with slug ${slug}:`, error)
    return null
  }
}

// Helper function to get fallback images based on workshop type and slug
function getFallbackImages(workshop: StrapiWorkshop): string[] {
  // Map of workshop slugs to their original images from the static data
  const imageMap: Record<string, string[]> = {
    'sculpture-class-terracotta': [
      '/classes/sculpture-class.png',
      '/classes/sculpture-1.jpg',
      '/classes/sculpture-2.jpg',
      '/classes/sculpture-3.jpg',
      '/classes/sculpture-4.jpg'
    ],
    'oil-painting-zorn-palette': [
      '/classes/painting-1.png',
      '/classes/painting-2.png',
      '/classes/painting-3.png',
    ],
    'sculpture-class-polymer-clay': ['/classes/polymer-1.webp'],
    'digital-art-101': ['/classes/digital-art.webp'],
    'video-editing-davinci': ['/classes/davinci.webp'],
    'ai-art-stable-diffusion': ['/classes/ai.gif'],
    'website-design-figma': ['/classes/figma.webp'],
    'blender-3d-sculpting': ['/classes/blender_icon.webp'],
    'digital-art-workshop': [
      '/classes/digital-art-1.png',
      '/classes/digital-art-2.png',
      '/classes/digital-art-3.png',
    ],
    'led-grid-lights': ['/classes/gridlights.jpg'],
    'mig-welding-101': ['/classes/welding.jpg'], // Add MIG welding class image
  }

  // Return mapped images if available, otherwise return default based on type
  if (imageMap[workshop.slug]) {
    return imageMap[workshop.slug]
  }

  // Fallback images based on workshop type
  const typeFallbacks: Record<string, string[]> = {
    'sculpture': ['/classes/sculpture-class.png'],
    'painting': ['/classes/painting-1.png'],
    'digital art': ['/classes/digital-art.webp'],
    'film': ['/classes/davinci.webp'],
    'website design': ['/classes/figma.webp'],
    'electronics': ['/classes/gridlights.jpg'],
    'welding': ['/classes/welding.jpg'], // Add welding type fallback
  }

  return typeFallbacks[workshop.type] || ['/forgn_metadata.png']
}

// Helper function to extract image URLs from Strapi image objects with intelligent sorting
function extractImageUrls(strapiImages: any[], workshopSlug: string): string[] {
  if (!strapiImages || !Array.isArray(strapiImages)) {
    return []
  }
  
  // Define the preferred order for each workshop based on your original static data
         const preferredOrder: Record<string, string[]> = {
           'sculpture-class-terracotta': [
             'sculpture-0.png',  // Main class image first
             'sculpture-1.jpg',
             'sculpture-2.jpg',
             'sculpture-3.jpg',
             'sculpture-4.jpg'
           ],
    'oil-painting-zorn-palette': [
      'painting-1.png',  // Main class image first
      'painting-2.png',
      'painting-3.png'
    ],
    'sculpture-class-polymer-clay': ['polymer-1.webp'],
    'digital-art-101': ['digital-art.webp'],
    'video-editing-davinci': ['davinci.webp'],
    'ai-art-stable-diffusion': ['ai.gif'],
    'website-design-figma': ['figma.webp'],
    'blender-3d-sculpting': ['blender_icon.webp'],
    'digital-art-workshop': [
      'digital-art-1.png',
      'digital-art-2.png', 
      'digital-art-3.png'
    ],
    'led-grid-lights': ['gridlights.jpg']
  }
  
  const workshopOrder = preferredOrder[workshopSlug] || []
  
  return strapiImages
    .map((image) => {
      // Convert relative URLs to full URLs for local Strapi instances
      let fullUrl = image.url || ''
      if (fullUrl.startsWith('/uploads/')) {
        const baseUrl = STRAPI_CONFIG.baseUrl
        fullUrl = `${baseUrl}${fullUrl}`
      }
      
      return {
        url: fullUrl,
        name: image.name || '',
        createdAt: image.createdAt || ''
      }
    })
    .filter(item => item.url !== '')
    .sort((a, b) => {
      // First, try to sort by preferred order for this workshop
      const aIndex = workshopOrder.indexOf(a.name)
      const bIndex = workshopOrder.indexOf(b.name)
      
      // If both images are in the preferred order, sort by that order
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex
      }
      
      // If only one is in preferred order, prioritize it
      if (aIndex !== -1) return -1
      if (bIndex !== -1) return 1
      
      // If neither is in preferred order, sort alphabetically by name
      return a.name.localeCompare(b.name)
    })
    .map(item => item.url)
}

// Helper function to transform Strapi workshop to match your existing interface
export function transformStrapiWorkshop(strapiWorkshop: StrapiWorkshop) {
  // Extract image URLs from Strapi image objects with proper sorting
  const strapiImageUrls = strapiWorkshop.images ? extractImageUrls(strapiWorkshop.images, strapiWorkshop.slug) : []
  
  return {
    id: strapiWorkshop.id.toString(),
    slug: strapiWorkshop.slug,
    title: strapiWorkshop.title,
    type: strapiWorkshop.type,
    category: strapiWorkshop.category,
    instructor: strapiWorkshop.instructor,
    description: strapiWorkshop.description,
    keywords: strapiWorkshop.keywords,
    location: strapiWorkshop.Studio || 'Forgn Studio @ East End Maker Hub - Y114',
    sessions: strapiWorkshop.sessions,
    time: strapiWorkshop.time,
    price: `$${strapiWorkshop.price}`,
    discountedPrice: strapiWorkshop.discountedPrice ? `$${strapiWorkshop.discountedPrice}` : undefined,
    discountDaysBefore: strapiWorkshop.discountDaysBefore,
    images: strapiImageUrls.length > 0 ? strapiImageUrls : getFallbackImages(strapiWorkshop),
    booking: strapiWorkshop.booking,
    discount_booking: strapiWorkshop.discount_booking || strapiWorkshop.booking,
    model_fee: strapiWorkshop.model_fee,
    materials: strapiWorkshop.materials,
    materials_list: strapiWorkshop.materials_list,
  }
}

// Helper function to transform Strapi team to match your existing interface
export function transformStrapiTeam(strapiTeam: StrapiTeam) {
  // Convert relative URLs to full URLs for team headshots
  let pictureUrl = '/team/default-avatar.png'
  if (strapiTeam.headshot?.url) {
    pictureUrl = strapiTeam.headshot.url
    if (pictureUrl.startsWith('/uploads/')) {
      const baseUrl = STRAPI_CONFIG.baseUrl
      pictureUrl = `${baseUrl}${pictureUrl}`
    }
  }

  return {
    name: strapiTeam.name,
    slug: strapiTeam.slug,
    description: strapiTeam.bio, // Map bio to description for frontend compatibility
    website: strapiTeam.website,
    instagram: strapiTeam.instagram,
    active: strapiTeam.active,
    picture: pictureUrl, // Map headshot to picture with full URL
  }
}

// Location API functions
export async function getAllLocations(): Promise<StrapiLocation[]> {
  const response: StrapiResponse<StrapiLocation[]> = await fetchFromStrapi(STRAPI_CONFIG.locationsEndpoint)
  return response.data
}

export async function getLocationBySlug(slug: string): Promise<StrapiLocation | null> {
  try {
    const response: StrapiResponse<StrapiLocation[]> = await fetchFromStrapi(
      `/locations?filters[slug][$eq]=${slug}&populate=*`
    )
    return response.data[0] || null
  } catch (error) {
    console.error(`Error fetching location with slug ${slug}:`, error)
    return null
  }
}

export function transformStrapiLocation(strapiLocation: StrapiLocation) {
  // Extract image URLs from Strapi image objects with proper sorting
  const strapiImageUrls = strapiLocation.images ? extractImageUrls(strapiLocation.images, strapiLocation.slug) : []
  
  return {
    id: strapiLocation.id.toString(),
    slug: strapiLocation.slug,
    name: strapiLocation.studio,
    address: strapiLocation.location.address,
    city: strapiLocation.city,
    state: 'TX', // Default to Texas since all locations are in Houston
    zipCode: '', // Not provided in API
    country: 'USA', // Default to USA
    phone: undefined, // Not provided in API
    email: undefined, // Not provided in API
    website: undefined, // Not provided in API
    description: strapiLocation.description,
    images: strapiImageUrls.length > 0 ? strapiImageUrls : ['/locations/default-location.jpg'],
    latitude: strapiLocation.location.coordinates.lat,
    longitude: strapiLocation.location.coordinates.lng,
    active: strapiLocation.active ?? true, // Use API value or default to true
  }
}

// Blog Functions
export async function getAllBlogs(): Promise<StrapiBlogPost[]> {
  try {
    const response = await fetchFromStrapi<{data: StrapiBlogPost[]}>(STRAPI_CONFIG.blogsEndpoint)
    return response.data || []
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

export async function getBlogBySlug(slug: string): Promise<StrapiBlogPost | null> {
  try {
    const blogs = await getAllBlogs()
    return blogs.find(blog => blog.slug === slug) || null
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error)
    return null
  }
}

export function transformStrapiBlog(strapiBlog: StrapiBlogPost) {
  // Extract image URLs from Strapi image objects
  const strapiImageUrls = strapiBlog.images ? extractImageUrls(strapiBlog.images, strapiBlog.slug) : []
  
  return {
    id: strapiBlog.id.toString(),
    title: strapiBlog.title,
    slug: strapiBlog.slug,
    content: strapiBlog.article, // Use 'article' field from API
    author: strapiBlog.author,
    category: strapiBlog.category,
    summary: strapiBlog.article.substring(0, 200) + '...', // Generate summary from article
    tags: [], // Not provided in API, could be added later
    readTime: '5 min read', // Default read time, could be calculated
    featuredImage: strapiImageUrls.length > 0 ? strapiImageUrls[0] : undefined,
    date: strapiBlog.date || (strapiBlog.createdAt ? new Date(strapiBlog.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]),
    images: strapiImageUrls,
  }
}
