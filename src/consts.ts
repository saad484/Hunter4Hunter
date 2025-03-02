export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Hunter4Hunter',
  DESCRIPTION:
    'A blog for cybersecurity writeups, CTF challenges, and research.',
  EMAIL: 'hunter4hunter.dev',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://hunter4hunter.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/saad484', label: 'GitHub' },
  { href: 'https://x.com/aiddi_saad', label: 'Twitter' },
  { href: 'aiddisaad484@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
