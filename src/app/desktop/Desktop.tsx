import { motion } from 'framer-motion'
import { WindowManager } from '@/app/window-manager/WindowManager'
import { DesktopIcons } from '@/components/desktop-icons/DesktopIcons'
import { Dock } from '@/components/dock/Dock'
import { useWindowStore } from '@/store/useWindowStore'
import { DesktopLogo } from './DesktopLogo'
import { MenuBar } from './MenuBar'
import { Wallpaper } from './Wallpaper'

export function Desktop() {
  const openWindow = useWindowStore((s) => s.openWindow)
  const hasMaximizedWindow = useWindowStore((s) =>
    s.windows.some((w) => w.isMaximized && !w.isMinimized),
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="dark relative h-full w-full overflow-hidden"
    >
      <Wallpaper />
      <DesktopLogo />
      <MenuBar />
      <DesktopIcons onOpenApp={openWindow} />
      <WindowManager />
      <Dock onOpenApp={openWindow} hidden={hasMaximizedWindow} />
    </motion.div>
  )
}
