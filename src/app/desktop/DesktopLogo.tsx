import jeosLogo from '@/assets/jeos-logo.webp'

export function DesktopLogo() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <img
        src={jeosLogo}
        alt=""
        draggable={false}
        className="w-[min(55vw,420px)] mix-blend-lighten select-none"
      />
    </div>
  )
}
