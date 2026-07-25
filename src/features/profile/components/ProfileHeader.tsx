import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import type { Profile } from '@/data/profile'

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

interface ProfileHeaderProps {
  profile: Profile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Avatar className="size-20 ring-1 ring-white/10">
        <AvatarFallback className="bg-white/8 text-lg font-medium text-foreground">
          {getInitials(profile.name)}
        </AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-base font-semibold text-foreground">
          {profile.name}
        </h2>
        <p className="mt-1 text-xs text-muted-foreground">{profile.role}</p>
      </div>
    </div>
  )
}
