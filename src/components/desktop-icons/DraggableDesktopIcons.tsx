import { useState } from 'react'
import { APPS } from '@/config/apps'
import { DOCK_RESERVED_HEIGHT, MENU_BAR_HEIGHT } from '@/config/layout'
import type { AppId } from '@/types'
import { DesktopIcon } from './DesktopIcon'

interface DraggableDesktopIconsProps {
  onOpenApp: (id: AppId) => void
}

interface GridCell {
  col: number
  row: number
}

interface GridDimensions {
  columns: number
  rows: number
}

const GRID_PADDING = 16
const COLUMN_WIDTH = 92
const ROW_HEIGHT = 92

function getGridDimensions(): GridDimensions {
  const availableWidth = window.innerWidth
  const availableHeight =
    window.innerHeight - MENU_BAR_HEIGHT - DOCK_RESERVED_HEIGHT
  return {
    columns: Math.max(1, Math.floor(availableWidth / COLUMN_WIDTH)),
    rows: Math.max(1, Math.floor(availableHeight / ROW_HEIGHT)),
  }
}

function cellToPixels(cell: GridCell) {
  return {
    x: GRID_PADDING + cell.col * COLUMN_WIDTH,
    y: GRID_PADDING + cell.row * ROW_HEIGHT,
  }
}

function pixelsToCell(x: number, y: number, dims: GridDimensions): GridCell {
  const col = Math.round((x - GRID_PADDING) / COLUMN_WIDTH)
  const row = Math.round((y - GRID_PADDING) / ROW_HEIGHT)
  return {
    col: Math.min(Math.max(col, 0), dims.columns - 1),
    row: Math.min(Math.max(row, 0), dims.rows - 1),
  }
}

function cellKey(cell: GridCell) {
  return `${cell.col}:${cell.row}`
}

/** Grid cell nearest to `target` that isn't in `occupied` (ring search). */
function findNearestFreeCell(
  target: GridCell,
  occupied: Set<string>,
  dims: GridDimensions,
): GridCell {
  if (!occupied.has(cellKey(target))) return target

  const maxRadius = dims.columns + dims.rows
  for (let radius = 1; radius <= maxRadius; radius++) {
    for (let dCol = -radius; dCol <= radius; dCol++) {
      for (let dRow = -radius; dRow <= radius; dRow++) {
        if (Math.max(Math.abs(dCol), Math.abs(dRow)) !== radius) continue

        const candidate = { col: target.col + dCol, row: target.row + dRow }
        if (
          candidate.col < 0 ||
          candidate.row < 0 ||
          candidate.col >= dims.columns ||
          candidate.row >= dims.rows
        ) {
          continue
        }
        if (!occupied.has(cellKey(candidate))) return candidate
      }
    }
  }

  return target
}

function createDefaultCells(rows: number): Record<AppId, GridCell> {
  const cells = {} as Record<AppId, GridCell>
  APPS.forEach((app, index) => {
    cells[app.id] = { col: Math.floor(index / rows), row: index % rows }
  })
  return cells
}

/** Desktop-only: icons are freely draggable and snap to a collision-free grid. */
export function DraggableDesktopIcons({
  onOpenApp,
}: DraggableDesktopIconsProps) {
  const [dims] = useState(getGridDimensions)
  const [cells, setCells] = useState(() => createDefaultCells(dims.rows))
  const [selectedId, setSelectedId] = useState<AppId | null>(null)

  function handleDrop(id: AppId, pixelPosition: { x: number; y: number }) {
    setCells((prev) => {
      const target = pixelsToCell(pixelPosition.x, pixelPosition.y, dims)
      const occupied = new Set(
        Object.entries(prev)
          .filter(([otherId]) => otherId !== id)
          .map(([, cell]) => cellKey(cell)),
      )
      const finalCell = findNearestFreeCell(target, occupied, dims)
      return { ...prev, [id]: finalCell }
    })
  }

  return (
    <div
      className="absolute inset-x-0 top-8 bottom-20"
      onClick={() => setSelectedId(null)}
    >
      {APPS.map((app) => (
        <DesktopIcon
          key={app.id}
          icon={app.icon}
          title={app.title}
          position={cellToPixels(cells[app.id])}
          selected={selectedId === app.id}
          onSelect={(event) => {
            event.stopPropagation()
            setSelectedId(app.id)
          }}
          onOpen={() => onOpenApp(app.id)}
          onMove={(pixelPosition) => handleDrop(app.id, pixelPosition)}
        />
      ))}
    </div>
  )
}
