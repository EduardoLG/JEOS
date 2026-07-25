import { CalendarDays, Mail, MapPin } from 'lucide-react'
import type { Profile } from '@/data/profile'

interface ProfileInfoGridProps {
  profile: Profile
}

export function ProfileInfoGrid({ profile }: ProfileInfoGridProps) {
  const items = [
    { icon: MapPin, label: profile.location },
    { icon: CalendarDays, label: `${profile.age} años` },
    { icon: Mail, label: profile.email },
  ]

  return (
    <div className="grid grid-cols-1 gap-2">
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2.5 rounded-xl bg-white/5 px-3 py-2 text-xs text-foreground/80 ring-1 ring-white/10"
        >
          <Icon className="size-3.5 shrink-0 text-muted-foreground" />
          <span className="truncate">{label}</span>
        </div>
      ))}
    </div>
  )
}
