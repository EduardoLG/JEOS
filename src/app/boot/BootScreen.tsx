import { AnimatePresence, motion } from 'framer-motion'
import { useBootSequence } from './useBootSequence'

interface BootScreenProps {
  onComplete: () => void
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const { message, progress, isWelcome } = useBootSequence({ onComplete })

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090c] text-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 42%, oklch(0.55 0.17 254.6 / 0.18), transparent 60%)',
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl font-semibold tracking-[0.35em]">
            JEOS
          </span>
          <span className="text-[11px] font-medium tracking-[0.25em] text-white/40">
            JOSÉ EDUARDO OPERATING SYSTEM
          </span>
        </div>

        <div className="flex w-64 flex-col items-center gap-3">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-white"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <AnimatePresence mode="wait">
              <motion.span
                key={message}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className={
                  isWelcome
                    ? 'text-sm font-medium text-white'
                    : 'text-xs text-white/50'
                }
              >
                {message}
              </motion.span>
            </AnimatePresence>
            <span className="font-mono text-[11px] tabular-nums text-white/30">
              {progress}%
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
