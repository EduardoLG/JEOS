import type { LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { Rnd } from 'react-rnd'
import { cn } from '@/lib/utils'
import { DesktopIconGlyph } from './DesktopIconGlyph'

interface IconPosition {
  x: number
  y: number
}

interface DesktopIconProps {
  icon: LucideIcon
  title: string
  position: IconPosition
  selected: boolean
  onSelect: (event: React.MouseEvent) => void
  onOpen: () => void
  onMove: (position: IconPosition) => void
}

const ICON_SIZE = { width: 80, height: 88 }

export function DesktopIcon({
  icon,
  title,
  position,
  selected,
  onSelect,
  onOpen,
  onMove,
}: DesktopIconProps) {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <Rnd
      size={ICON_SIZE}
      position={position}
      enableResizing={false}
      bounds="parent"
      onDragStart={() => setIsDragging(true)}
      onDragStop={(_e, data) => {
        setIsDragging(false)
        onMove({ x: data.x, y: data.y })
      }}
    >
      <button
        type="button"
        onClick={onSelect}
        onDoubleClick={onOpen}
        className={cn(
          'flex w-20 cursor-grab flex-col items-center gap-1.5 rounded-lg px-2 py-2 text-center transition-colors active:cursor-grabbing',
          selected ? 'bg-white/15 ring-1 ring-white/25' : 'hover:bg-white/5',
          isDragging && 'bg-white/15',
        )}
      >
        <DesktopIconGlyph icon={icon} title={title} />
      </button>
    </Rnd>
  )
}
