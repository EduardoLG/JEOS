import { motion } from 'framer-motion'

export function Wallpaper() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: 'oklch(0.2 0.035 262)' }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 15%, oklch(0.58 0.19 254 / 0.55), transparent 55%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'radial-gradient(circle at 85% 12%, oklch(0.55 0.19 322 / 0.4), transparent 50%)',
            'radial-gradient(circle at 12% 85%, oklch(0.58 0.14 190 / 0.35), transparent 50%)',
            'radial-gradient(circle at 82% 90%, oklch(0.62 0.15 40 / 0.3), transparent 55%)',
          ].join(', '),
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/30" />
    </div>
  )
}
