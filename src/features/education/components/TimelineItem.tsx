import { motion } from 'framer-motion'
import type { EducationItem } from '@/data/education'

interface TimelineItemProps {
  item: EducationItem
  isLast: boolean
  delay: number
}

export function TimelineItem({ item, isLast, delay }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className="relative flex gap-4 pb-8 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <span className="flex size-2.5 shrink-0 rounded-full bg-primary ring-4 ring-primary/20" />
        {!isLast && <span className="mt-1 w-px flex-1 bg-white/10" />}
      </div>
      <div className="-mt-1 pb-1">
        <span className="text-xs font-medium tabular-nums text-primary">
          {item.year}
        </span>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">
          {item.title}
        </h3>
        {item.institution && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            {item.institution}
          </p>
        )}
      </div>
    </motion.div>
  )
}
