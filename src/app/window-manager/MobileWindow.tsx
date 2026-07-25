import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'
import { APPS } from '@/config/apps'
import { cn } from '@/lib/utils'
import { useWindowStore, type WindowState } from '@/store/useWindowStore'

interface MobileWindowProps {
  windowState: WindowState
}

export function MobileWindow({ windowState }: MobileWindowProps) {
  const app = APPS.find((a) => a.id === windowState.id)
  const closeWindow = useWindowStore((s) => s.closeWindow)
  const [isClosing, setIsClosing] = useState(false)

  if (!app) return null

  const Content = app.component

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={
        isClosing ? { opacity: 0, y: 24, scale: 0.97 } : { opacity: 1, y: 0, scale: 1 }
      }
      transition={{ duration: isClosing ? 0.18 : 0.25, ease: 'easeOut' }}
      onAnimationComplete={() => {
        if (isClosing) closeWindow(app.id)
      }}
      className={cn(
        'glass-panel pointer-events-auto absolute inset-2 flex flex-col overflow-hidden rounded-3xl',
        isClosing && 'pointer-events-none',
      )}
    >
      <div className="flex shrink-0 items-center justify-between px-4 py-3">
        <span className="text-sm font-medium text-foreground">
          {app.title}
        </span>
        <button
          type="button"
          aria-label="Cerrar"
          onClick={() => setIsClosing(true)}
          className="flex size-10 items-center justify-center rounded-full bg-white/10 text-foreground active:bg-white/20"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="flex-1 overflow-auto">
        <Content />
      </div>
    </motion.div>
  )
}
