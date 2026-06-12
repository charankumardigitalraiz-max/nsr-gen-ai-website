/**
 * Path routes — SEO-friendly URLs like `yoursite.com/about` (no #).
 */

export const ROUTES = {
  home: '/',
  courses: '/courses',
  placements: '/placements',
  about: '/about',
  training: '/training',
  blogs: '/blogs',
  roadmap: '/roadmap',
  contact: '/contact',
  offlineCenter: '/offline-center',
}

export const courseDetailPath = (slug) => `/courses/${slug}`
export const blogDetailPath = (slug) => `/blogs/${slug}`

export const NAVBAR_LINKS = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Courses', href: ROUTES.courses },
  { label: 'Placements', href: ROUTES.placements },
  { label: 'About', href: ROUTES.about },
  // { label: 'Services', href: ROUTES.training },
  // { label: 'Offline Center', href: ROUTES.offlineCenter },
  { label: 'Contact', href: ROUTES.contact },
]

/** Footer explore links — includes pages not shown in the navbar */
export const FOOTER_LINKS = [
  { label: 'Courses', href: ROUTES.courses },
  { label: 'Placements', href: ROUTES.placements },
  { label: 'About', href: ROUTES.about },
  // { label: 'Services', href: ROUTES.training },
  { label: 'Blogs', href: ROUTES.blogs },
  // { label: 'Roadmap', href: ROUTES.roadmap },
  // { label: 'Offline Center', href: ROUTES.offlineCenter },
  { label: 'Contact Us', href: ROUTES.contact },
]

/** @deprecated Use NAVBAR_LINKS */
export const NAV_LINKS = NAVBAR_LINKS

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return ROUTES.home
  return pathname.replace(/\/$/, '') || ROUTES.home
}

export function parsePath(pathname) {
  const path = normalizePath(pathname)

  if (path.startsWith('/courses/')) {
    const slug = path.replace('/courses/', '').split('?')[0]
    if (slug) return { page: 'courseDetail', slug }
  }

  if (path.startsWith('/blogs/')) {
    const slug = path.replace('/blogs/', '').split('?')[0]
    if (slug) return { page: 'blogDetail', slug }
  }

  switch (path) {
    case ROUTES.courses:
      return { page: 'courses' }
    case ROUTES.placements:
      return { page: 'placements' }
    case ROUTES.about:
      return { page: 'about' }
    case ROUTES.training:
      return { page: 'training' }
    case ROUTES.blogs:
      return { page: 'blogs' }
    case ROUTES.roadmap:
      return { page: 'roadmap' }
    case ROUTES.contact:
      return { page: 'contact' }
    case ROUTES.offlineCenter:
      return { page: 'offlineCenter' }
    case ROUTES.home:
    default:
      return { page: 'home' }
  }
}

export function isNavLinkActive(currentPath, href) {
  const current = normalizePath(currentPath)

  if (href === ROUTES.home) {
    return current === ROUTES.home
  }
  if (href === ROUTES.courses) {
    return current === ROUTES.courses || current.startsWith('/courses/')
  }
  if (href === ROUTES.blogs) {
    return current === ROUTES.blogs || current.startsWith('/blogs/')
  }

  return current === href
}

const FULL_BLEED_PAGES = new Set(['courseDetail', 'blogDetail'])

export function isFullBleedHero(pathname) {
  return FULL_BLEED_PAGES.has(parsePath(pathname).page)
}

export function isHeroNavMode(pathname, scrolled) {
  const { page } = parsePath(pathname)
  return page === 'courseDetail' && !scrolled
}

/** Redirect old `/#/page` bookmarks to `/page` */
export function redirectLegacyHashRoute() {
  const { hash } = window.location
  if (hash.startsWith('#/')) {
    window.history.replaceState(null, '', hash.slice(1))
  }
}
