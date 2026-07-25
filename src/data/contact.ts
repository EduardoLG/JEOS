export interface ContactLink {
  id: 'email' | 'github' | 'linkedin'
  label: string
  value: string
  href: string | null
}

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'joseeduardolg07@gmail.com',
    href: 'mailto:joseeduardolg07@gmail.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/EduardoLG',
    href: 'https://github.com/EduardoLG',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/josé-eduardo-lópez-garcía-184581397',
    href: `https://www.linkedin.com/in/${encodeURIComponent('josé-eduardo-lópez-garcía-184581397')}`,
  },
]
