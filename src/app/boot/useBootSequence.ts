import { useEffect, useState } from 'react'

const BOOT_MESSAGES = [
  'Initializing developer environment...',
  'Loading profile...',
  'Loading projects...',
  'Loading skills...',
  'Loading experience...',
]

const STEP_DURATION_MS = 420
const WELCOME_DURATION_MS = 1000

interface UseBootSequenceOptions {
  onComplete: () => void
}

interface BootSequenceState {
  message: string
  progress: number
  isWelcome: boolean
}

export function useBootSequence({
  onComplete,
}: UseBootSequenceOptions): BootSequenceState {
  const [stepIndex, setStepIndex] = useState(0)
  const [isWelcome, setIsWelcome] = useState(false)

  useEffect(() => {
    if (stepIndex >= BOOT_MESSAGES.length) {
      setIsWelcome(true)
      const timeout = setTimeout(onComplete, WELCOME_DURATION_MS)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setStepIndex((current) => current + 1)
    }, STEP_DURATION_MS)
    return () => clearTimeout(timeout)
  }, [stepIndex, onComplete])

  const progress = isWelcome
    ? 100
    : Math.round((stepIndex / BOOT_MESSAGES.length) * 100)

  return {
    message: isWelcome ? 'Welcome Eduardo' : BOOT_MESSAGES[stepIndex],
    progress,
    isWelcome,
  }
}
