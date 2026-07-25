import { educationTimeline } from '@/data/education'
import { TimelineItem } from './components/TimelineItem'

export function EducationApp() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div>
        {educationTimeline.map((item, index) => (
          <TimelineItem
            key={`${item.year}-${item.title}`}
            item={item}
            isLast={index === educationTimeline.length - 1}
            delay={index * 0.12}
          />
        ))}
      </div>
    </div>
  )
}
