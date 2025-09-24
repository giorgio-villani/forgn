// Strapi API Response Types
export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiItem {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

// Strapi Media Types
export interface StrapiImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    large?: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string | null
      size: number
      width: number
      height: number
      sizeInBytes: number
    }
    small?: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string | null
      size: number
      width: number
      height: number
      sizeInBytes: number
    }
    medium?: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string | null
      size: number
      width: number
      height: number
      sizeInBytes: number
    }
    thumbnail?: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string | null
      size: number
      width: number
      height: number
      sizeInBytes: number
    }
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

// Workshop Types
export interface StrapiWorkshop extends StrapiItem {
  slug: string
  title: string
  type: string
  category: string
  instructor: string
  description: string
  keywords: string
  Studio: string | null
  sessions: string[]
  time: string
  price: number
  booking: string
  model_fee: string
  materials: string
  materials_list: string | null
  images?: StrapiImage[]
  // Additional fields that might be in your current data
  discountedPrice?: number
  discountDaysBefore?: number
  discount_booking?: string
}

// Blog Post Types
export interface StrapiBlogPost extends StrapiItem {
  title: string
  slug: string
  article: string  // This is the content field in the API
  author: string
  category: string
  date: string
  images?: StrapiImage[]
  active?: boolean
}

// Artist Types (for future use)
export interface StrapiArtist extends StrapiItem {
  name: string
  slug: string
  description: string
  website?: string
  instagram?: string
  active: boolean
  picture?: string
}

// Team Types
export interface StrapiTeam extends StrapiItem {
  name: string
  slug: string
  bio: string
  website?: string
  instagram?: string
  active: boolean
  headshot?: StrapiImage
}

// Location Types
export interface StrapiLocation extends StrapiItem {
  studio: string
  slug: string
  location: {
    address: string
    coordinates: {
      lat: number
      lng: number
    }
    geohash: string
  }
  description?: string
  city: string
  images?: StrapiImage[]
  active?: boolean
}

// API Configuration
export const STRAPI_CONFIG = {
  baseUrl: process.env.STRAPI_BASE_URL?.replace('/api', '') || 'https://ambitious-cactus-1589a7699f.strapiapp.com',
  apiUrl: process.env.STRAPI_BASE_URL || 'https://ambitious-cactus-1589a7699f.strapiapp.com/api',
  workshopsEndpoint: process.env.URL_WORKSHOPS || '/workshops?populate=*',
  teamsEndpoint: process.env.URL_TEAMS || '/teams?populate=*',
  locationsEndpoint: process.env.URL_LOCATIONS || '/locations?populate=*',
  blogsEndpoint: process.env.URL_BLOGS || '/blogs?populate=*',
} as const

// Debug: Log the current Strapi configuration
console.log('🔍 Strapi Configuration Debug:')
console.log('STRAPI_BASE_URL env var:', process.env.STRAPI_BASE_URL)
console.log('Using baseUrl:', STRAPI_CONFIG.baseUrl)
console.log('Using apiUrl:', STRAPI_CONFIG.apiUrl)
