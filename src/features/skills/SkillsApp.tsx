import { skillCategories } from '@/data/skills'
import { SkillCategorySection } from './components/SkillCategorySection'

export function SkillsApp() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <SkillCategorySection
            key={category.title}
            category={category}
            startDelay={index * 0.15}
          />
        ))}
      </div>
    </div>
  )
}
