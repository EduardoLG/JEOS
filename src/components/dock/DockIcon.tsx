import { motion } from 'framer-motion'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useWindowStore } from '@/store/useWindowStore'
import type { AppConfig } from '@/types'

interface DockIconProps {
  app: AppConfig
  onOpen?: (id: AppConfig['id']) => void
  compact?: boolean
}

export function DockIcon({ app, onOpen, compact = false }: DockIconProps) {
  const Icon = app.icon
  const isOpen = useWindowStore((s) => s.windows.some((w) => w.id === app.id))

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
          type="button"
          aria-label={app.title}
          onClick={() => onOpen?.(app.id)}
          whileHover={{ y: -8, scale: 1.15 }}
          whileTap={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className={cn(
            'relative flex items-center justify-center rounded-2xl bg-white/8 text-foreground/90 ring-1 ring-white/10 transition-colors hover:bg-white/15',
            compact ? 'size-9' : 'size-11',
          )}
        >
          <Icon className={compact ? 'size-4' : 'size-5'} strokeWidth={1.75} />
          {isOpen && (
            <span className="absolute -bottom-1.5 size-1 rounded-full bg-foreground/80" />
          )}
        </motion.button>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={10}>
        {app.title}
      </TooltipContent>
    </Tooltip>
  )
}
