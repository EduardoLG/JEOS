import { projects } from '@/data/projects'
import { ProjectCard } from './components/ProjectCard'

export function ProjectsApp() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
