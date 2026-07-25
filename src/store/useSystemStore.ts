import { create } from 'zustand'

interface SystemState {
  isBooted: boolean
  finishBoot: () => void
}

export const useSystemStore = create<SystemState>((set) => ({
  isBooted: false,
  finishBoot: () => set({ isBooted: true }),
}))
