export interface BreadcrumbItem {
  name: string
  href?: string
}

// Helper function to create common breadcrumb patterns
export const createBreadcrumbs = {
  // Single level: Home > Page
  single: (pageName: string, pagePath: string): BreadcrumbItem[] => [
    { name: 'Home', href: '/' },
    { name: pageName, href: pagePath },
  ],
  
  // Two levels: Home > Category > Page
  double: (categoryName: string, categoryPath: string, pageName: string, pagePath: string): BreadcrumbItem[] => [
    { name: 'Home', href: '/' },
    { name: categoryName, href: categoryPath },
    { name: pageName, href: pagePath },
  ],
  
  // Workshop specific: Home > Workshops > Workshop Title
  workshop: (workshopTitle: string, workshopPath: string): BreadcrumbItem[] => [
    { name: 'Home', href: '/' },
    { name: 'Workshops', href: '/workshops' },
    { name: workshopTitle, href: workshopPath },
  ],
  
  // Artist specific: Home > Team > Artist Name
  artist: (artistName: string, artistPath: string): BreadcrumbItem[] => [
    { name: 'Home', href: '/' },
    { name: 'Team', href: '/team' },
    { name: artistName, href: artistPath },
  ],
} 