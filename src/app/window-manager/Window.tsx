import { motion } from 'framer-motion'
import { Maximize2, Minus, X } from 'lucide-react'
import { useState } from 'react'
import { Rnd } from 'react-rnd'
import { APPS } from '@/config/apps'
import { cn } from '@/lib/utils'
import { useWindowStore, type WindowState } from '@/store/useWindowStore'

interface WindowProps {
  windowState: WindowState
}

const MIN_WIDTH = 320
const MIN_HEIGHT = 220

const trafficLightButton =
  'group flex size-3 items-center justify-center rounded-full text-black/60 transition-colors'

export function Window({ windowState }: WindowProps) {
  const app = APPS.find((a) => a.id === windowState.id)
  const closeWindow = useWindowStore((s) => s.closeWindow)
  const minimizeWindow = useWindowStore((s) => s.minimizeWindow)
  const toggleMaximizeWindow = useWindowStore((s) => s.toggleMaximizeWindow)
  const focusWindow = useWindowStore((s) => s.focusWindow)
  const updateWindowLayout = useWindowStore((s) => s.updateWindowLayout)
  const isFocused = useWindowStore((s) => s.focusedWindowId === windowState.id)
  const [exitState, setExitState] = useState<'none' | 'closing' | 'minimizing'>(
    'none',
  )

  if (!app) return null

  const Content = app.component
  const { isMaximized } = windowState
  const isExiting = exitState !== 'none'

  return (
    <Rnd
      className="pointer-events-auto"
      size={isMaximized ? { width: '100%', height: '100%' } : windowState.size}
      position={isMaximized ? { x: 0, y: 0 } : windowState.position}
      minWidth={MIN_WIDTH}
      minHeight={MIN_HEIGHT}
      bounds="parent"
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      dragHandleClassName="jeos-window-titlebar"
      style={{ zIndex: windowState.zIndex }}
      onDragStart={() => focusWindow(app.id)}
      onDragStop={(_e, data) =>
        updateWindowLayout(app.id, { x: data.x, y: data.y }, windowState.size)
      }
      onResizeStart={() => focusWindow(app.id)}
      onResizeStop={(_e, _dir, ref, _delta, position) =>
        updateWindowLayout(
          app.id,
          position,
          { width: ref.offsetWidth, height: ref.offsetHeight },
        )
      }
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={
          exitState === 'closing'
            ? { opacity: 0, scale: 0.92, y: 0 }
            : exitState === 'minimizing'
              ? { opacity: 0, scale: 0.15, y: 400 }
              : { opacity: isFocused ? 1 : 0.94, scale: 1, y: 0 }
        }
        transition={
          exitState === 'minimizing'
            ? { duration: 0.32, ease: 'easeIn' }
            : { duration: exitState === 'closing' ? 0.15 : 0.2, ease: 'easeOut' }
        }
        onAnimationComplete={() => {
          if (exitState === 'closing') closeWindow(app.id)
          if (exitState === 'minimizing') minimizeWindow(app.id)
        }}
        onMouseDown={() => focusWindow(app.id)}
        className={cn(
          'glass-panel flex h-full w-full flex-col overflow-hidden rounded-2xl transition-[filter] duration-200',
          !isFocused && 'saturate-[0.85]',
          isExiting && 'pointer-events-none',
        )}
      >
        <div className="jeos-window-titlebar flex shrink-0 cursor-grab select-none items-center gap-4 px-4 py-2.5 active:cursor-grabbing">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setExitState('closing')}
              className={cn(
                trafficLightButton,
                isFocused ? 'bg-[#ff5f57]' : 'bg-white/15',
              )}
            >
              <X
                className="size-2 opacity-0 transition-opacity group-hover:opacity-100"
                strokeWidth={3}
              />
            </button>
            <button
              type="button"
              aria-label="Minimizar"
              onClick={() => setExitState('minimizing')}
              className={cn(
                trafficLightButton,
                isFocused ? 'bg-[#febc2e]' : 'bg-white/15',
              )}
            >
              <Minus
                className="size-2 opacity-0 transition-opacity group-hover:opacity-100"
                strokeWidth={3}
              />
            </button>
            <button
              type="button"
              aria-label={isMaximized ? 'Restaurar' : 'Maximizar'}
              onClick={() => toggleMaximizeWindow(app.id)}
              className={cn(
                trafficLightButton,
                isFocused ? 'bg-[#28c840]' : 'bg-white/15',
              )}
            >
              <Maximize2
                className="size-1.5 opacity-0 transition-opacity group-hover:opacity-100"
                strokeWidth={3}
              />
            </button>
          </div>
          <span className="flex-1 truncate text-center text-xs font-medium text-muted-foreground">
            {app.title}
          </span>
          <div className="w-[52px]" aria-hidden="true" />
        </div>
        <div className="flex-1 overflow-auto">
          <Content />
        </div>
      </motion.div>
    </Rnd>
  )
}
