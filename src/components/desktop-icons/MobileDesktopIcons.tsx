import { APPS } from '@/config/apps'
import type { AppId } from '@/types'
import { DesktopIconGlyph } from './DesktopIconGlyph'

interface MobileDesktopIconsProps {
  onOpenApp: (id: AppId) => void
}

/** Mobile-only: static grid, no drag (touch needs to scroll, not reposition icons). */
export function MobileDesktopIcons({ onOpenApp }: MobileDesktopIconsProps) {
  return (
    <div className="absolute inset-x-0 top-8 bottom-20 grid grid-cols-[repeat(auto-fill,72px)] content-start gap-2 p-3">
      {APPS.map((app) => (
        <button
          key={app.id}
          type="button"
          onClick={() => onOpenApp(app.id)}
          className="flex flex-col items-center gap-1.5 rounded-lg py-1.5 text-center active:bg-white/10"
        >
          <DesktopIconGlyph icon={app.icon} title={app.title} />
        </button>
      ))}
    </div>
  )
}
