import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useWindowStore } from '@/store/useWindowStore'
import { MobileWindow } from './MobileWindow'
import { Window } from './Window'

export function WindowManager() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const windows = useWindowStore((s) => s.windows)
  const openWindows = windows.filter((w) => !w.isMinimized)

  if (openWindows.length === 0) return null

  // z-10 gives this container its own stacking context, so window z-indices
  // (which grow unbounded as windows are opened/focused) never leak out and
  // end up rendering above the Dock/MenuBar (z-40). pointer-events-none keeps
  // the empty desktop area (outside any actual window) clickable through to
  // the desktop icons/wallpaper beneath — only real windows re-enable it.
  if (isMobile) {
    const topWindow = openWindows.reduce((top, w) =>
      w.zIndex > top.zIndex ? w : top,
    )
    return (
      <div className="absolute inset-x-0 top-8 bottom-20 z-10 pointer-events-none">
        <MobileWindow key={topWindow.id} windowState={topWindow} />
      </div>
    )
  }

  return (
    // Extends all the way to the bottom edge (not just above the Dock) so
    // windows can be dragged partially behind it, like a real desktop
    // taskbar/dock — the Dock's own z-40 always keeps it rendered above
    // whatever window ends up underneath it.
    <div className="absolute inset-x-0 top-8 bottom-0 z-10 pointer-events-none">
      {openWindows.map((w) => (
        <Window key={w.id} windowState={w} />
      ))}
    </div>
  )
}
