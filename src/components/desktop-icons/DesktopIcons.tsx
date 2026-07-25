import { useMediaQuery } from '@/hooks/useMediaQuery'
import type { AppId } from '@/types'
import { DraggableDesktopIcons } from './DraggableDesktopIcons'
import { MobileDesktopIcons } from './MobileDesktopIcons'

interface DesktopIconsProps {
  onOpenApp: (id: AppId) => void
}

export function DesktopIcons({ onOpenApp }: DesktopIconsProps) {
  const isMobile = useMediaQuery('(max-width: 767px)')

  return isMobile ? (
    <MobileDesktopIcons onOpenApp={onOpenApp} />
  ) : (
    <DraggableDesktopIcons onOpenApp={onOpenApp} />
  )
}
