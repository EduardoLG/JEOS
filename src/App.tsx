import { AnimatePresence } from 'framer-motion'
import { BootScreen } from '@/app/boot/BootScreen'
import { Desktop } from '@/app/desktop/Desktop'
import { useSystemStore } from '@/store/useSystemStore'

function App() {
  const isBooted = useSystemStore((state) => state.isBooted)
  const finishBoot = useSystemStore((state) => state.finishBoot)

  return (
    <AnimatePresence mode="wait">
      {isBooted ? (
        <Desktop key="desktop" />
      ) : (
        <BootScreen key="boot" onComplete={finishBoot} />
      )}
    </AnimatePresence>
  )
}

export default App
