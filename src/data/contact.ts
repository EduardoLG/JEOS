export interface ContactLink {
  id: 'email' | 'github' | 'linkedin' | 'computrabajo'
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
    value: 'Enlace pendiente',
    href: null,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Enlace pendiente',
    href: null,
  },
  {
    id: 'computrabajo',
    label: 'CompuTrabajo',
    value: 'Enlace pendiente',
    href: null,
  },
]
