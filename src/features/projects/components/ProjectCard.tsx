import { ImageOff, Link2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-foreground">
          {project.name}
        </h3>
        {project.githubUrl ? (
          <Button asChild variant="outline" size="sm">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Link2 className="size-3.5" />
              GitHub
            </a>
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            disabled
            title="Enlace de GitHub pendiente"
          >
            <Link2 className="size-3.5" />
            GitHub
          </Button>
        )}
      </div>

      <p className="mt-2 text-sm text-foreground/80">{project.description}</p>

      <div className="mt-4 flex h-24 items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 text-xs text-muted-foreground">
        <ImageOff className="size-3.5" />
        Capturas pendientes de agregar
      </div>

      {project.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      )}

      {project.learnings.length > 0 && (
        <ul className="mt-4 space-y-1 border-t border-white/10 pt-3 text-xs text-muted-foreground">
          {project.learnings.map((learning) => (
            <li key={learning} className="flex gap-2">
              <span className="text-primary">•</span>
              {learning}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
