import { profile } from '@/data/profile'
import { ProfileBio } from './components/ProfileBio'
import { ProfileHeader } from './components/ProfileHeader'
import { ProfileInfoGrid } from './components/ProfileInfoGrid'

export function ProfileApp() {
  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto p-6">
      <ProfileHeader profile={profile} />
      <ProfileBio profile={profile} />
      <ProfileInfoGrid profile={profile} />
    </div>
  )
}
