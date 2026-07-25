import { motion } from 'framer-motion'
import { TooltipProvider } from '@/components/ui/tooltip'
import { APPS } from '@/config/apps'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'
import type { AppId } from '@/types'
import { DockIcon } from './DockIcon'

interface DockProps {
  onOpenApp?: (id: AppId) => void
  hidden?: boolean
}

export function Dock({ onOpenApp, hidden = false }: DockProps) {
  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <motion.div
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? 24 : 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed inset-x-0 bottom-4 z-40 flex justify-center"
      style={{ pointerEvents: hidden ? 'none' : 'auto' }}
    >
      <TooltipProvider>
        <div
          className={cn(
            'glass-dock flex items-end rounded-3xl',
            isMobile ? 'gap-1 px-2 py-1.5' : 'gap-2 px-3 py-2',
          )}
        >
          {APPS.map((app) => (
            <DockIcon
              key={app.id}
              app={app}
              onOpen={onOpenApp}
              compact={isMobile}
            />
          ))}
        </div>
      </TooltipProvider>
    </motion.div>
  )
}
