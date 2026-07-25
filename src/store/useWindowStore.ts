import { create } from 'zustand'
import { APPS } from '@/config/apps'
import { DOCK_RESERVED_HEIGHT, MENU_BAR_HEIGHT } from '@/config/layout'
import type { AppId, WindowSize } from '@/types'

export interface WindowPosition {
  x: number
  y: number
}

export interface WindowState {
  id: AppId
  position: WindowPosition
  size: WindowSize
  zIndex: number
  isMinimized: boolean
  isMaximized: boolean
}

interface WindowStore {
  windows: WindowState[]
  topZIndex: number
  focusedWindowId: AppId | null
  openWindow: (id: AppId) => void
  closeWindow: (id: AppId) => void
  focusWindow: (id: AppId) => void
  minimizeWindow: (id: AppId) => void
  toggleMaximizeWindow: (id: AppId) => void
  updateWindowLayout: (
    id: AppId,
    position: WindowPosition,
    size: WindowSize,
  ) => void
}

function getTopWindowId(windows: WindowState[]): AppId | null {
  const visible = windows.filter((w) => !w.isMinimized)
  if (visible.length === 0) return null
  return visible.reduce((top, w) => (w.zIndex > top.zIndex ? w : top)).id
}

const BASE_Z_INDEX = 10
const CASCADE_OFFSET = 32
const CASCADE_LIMIT = 6
const EDGE_MARGIN = 24

function getAvailableArea() {
  return {
    width: window.innerWidth,
    height: window.innerHeight - MENU_BAR_HEIGHT - DOCK_RESERVED_HEIGHT,
  }
}

function getInitialLayout(
  preferredSize: WindowSize,
  cascadeIndex: number,
): { position: WindowPosition; size: WindowSize } {
  const area = getAvailableArea()
  const size: WindowSize = {
    width: Math.min(preferredSize.width, area.width - EDGE_MARGIN * 2),
    height: Math.min(preferredSize.height, area.height - EDGE_MARGIN),
  }
  const offset = (cascadeIndex % CASCADE_LIMIT) * CASCADE_OFFSET
  const position: WindowPosition = {
    x: Math.max(EDGE_MARGIN, (area.width - size.width) / 2) + offset,
    y: Math.max(EDGE_MARGIN, (area.height - size.height) / 2) + offset,
  }

  return { position, size }
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  topZIndex: BASE_Z_INDEX,
  focusedWindowId: null,

  openWindow: (id) => {
    const { windows, topZIndex } = get()
    const existing = windows.find((w) => w.id === id)

    if (existing) {
      const nextZIndex = topZIndex + 1
      set({
        topZIndex: nextZIndex,
        focusedWindowId: id,
        windows: windows.map((w) =>
          w.id === id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w,
        ),
      })
      return
    }

    const app = APPS.find((a) => a.id === id)
    if (!app) return

    const nextZIndex = topZIndex + 1
    const { position, size } = getInitialLayout(
      app.defaultSize,
      windows.length,
    )
    const newWindow: WindowState = {
      id,
      position,
      size,
      zIndex: nextZIndex,
      isMinimized: false,
      isMaximized: false,
    }

    set({
      topZIndex: nextZIndex,
      focusedWindowId: id,
      windows: [...windows, newWindow],
    })
  },

  closeWindow: (id) =>
    set((state) => {
      const windows = state.windows.filter((w) => w.id !== id)
      const focusedWindowId =
        state.focusedWindowId === id
          ? getTopWindowId(windows)
          : state.focusedWindowId
      return { windows, focusedWindowId }
    }),

  focusWindow: (id) => {
    const nextZIndex = get().topZIndex + 1
    set((state) => ({
      topZIndex: nextZIndex,
      focusedWindowId: id,
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex } : w,
      ),
    }))
  },

  minimizeWindow: (id) =>
    set((state) => {
      const windows = state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: true } : w,
      )
      const focusedWindowId =
        state.focusedWindowId === id
          ? getTopWindowId(windows)
          : state.focusedWindowId
      return { windows, focusedWindowId }
    }),

  toggleMaximizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w,
      ),
    })),

  updateWindowLayout: (id, position, size) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, position, size } : w,
      ),
    })),
}))
