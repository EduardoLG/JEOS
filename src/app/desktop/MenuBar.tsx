import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { APPS } from '@/config/apps'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useWindowStore } from '@/store/useWindowStore'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
})

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
})

function useClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return now
}

export function MenuBar() {
  const now = useClock()
  const isMobile = useMediaQuery('(max-width: 767px)')
  const focusedWindowId = useWindowStore((s) => s.focusedWindowId)
  const activeApp = APPS.find((app) => app.id === focusedWindowId)

  return (
    <div className="glass-menubar fixed inset-x-0 top-0 z-40 flex h-8 items-center justify-between px-4 text-xs font-medium text-foreground">
      <div className="flex items-center gap-3">
        <span className="tracking-[0.15em]">JEOS</span>
        <AnimatePresence mode="wait">
          {activeApp && (
            <motion.span
              key={activeApp.id}
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.15 }}
              className="text-muted-foreground"
            >
              {activeApp.title}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="tabular-nums text-muted-foreground">
        {isMobile
          ? timeFormatter.format(now)
          : `${dateFormatter.format(now)} · ${timeFormatter.format(now)}`}
      </span>
    </div>
  )
}
