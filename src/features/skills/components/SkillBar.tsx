import { motion } from 'framer-motion'
import type { Skill } from '@/data/skills'

interface SkillBarProps {
  skill: Skill
  delay: number
}

export function SkillBar({ skill, delay }: SkillBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-foreground/90">{skill.name}</span>
        <span className="tabular-nums text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
