import type { SkillCategory } from '@/data/skills'
import { SkillBar } from './SkillBar'

interface SkillCategorySectionProps {
  category: SkillCategory
  startDelay: number
}

export function SkillCategorySection({
  category,
  startDelay,
}: SkillCategorySectionProps) {
  return (
    <section className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {category.title}
      </h3>
      <div className="space-y-3">
        {category.skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={startDelay + index * 0.08}
          />
        ))}
      </div>
    </section>
  )
}
