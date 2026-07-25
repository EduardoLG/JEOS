import type { LucideIcon } from 'lucide-react'

interface DesktopIconGlyphProps {
  icon: LucideIcon
  title: string
}

export function DesktopIconGlyph({ icon: Icon, title }: DesktopIconGlyphProps) {
  return (
    <>
      <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
        <Icon className="size-6 text-white" strokeWidth={1.5} />
      </span>
      <span className="text-xs font-medium text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
        {title}
      </span>
    </>
  )
}
