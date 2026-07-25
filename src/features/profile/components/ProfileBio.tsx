import type { Profile } from '@/data/profile'

interface ProfileBioProps {
  profile: Profile
}

export function ProfileBio({ profile }: ProfileBioProps) {
  return (
    <div className="space-y-3">
      <p className="text-center text-xs italic text-muted-foreground">
        “{profile.tagline}”
      </p>
      <p className="text-sm leading-relaxed text-foreground/80">
        {profile.bio}
      </p>
    </div>
  )
}
