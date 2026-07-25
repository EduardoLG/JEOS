import { Globe, Link2, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ContactLink } from '@/data/contact'

const ICONS: Record<ContactLink['id'], LucideIcon> = {
  email: Mail,
  github: Link2,
  linkedin: Globe,
}

interface ContactRowProps {
  link: ContactLink
}

export function ContactRow({ link }: ContactRowProps) {
  const Icon = ICONS[link.id]
  const content = (
    <>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
        <Icon className="size-4 text-foreground/80" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-muted-foreground">
          {link.label}
        </span>
        <span className="block truncate text-sm text-foreground/90">
          {link.value}
        </span>
      </span>
    </>
  )

  if (link.href) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noreferrer"
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 opacity-50">
      {content}
    </div>
  )
}
