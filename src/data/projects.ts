export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  learnings: string[]
  githubUrl: string | null
}

export const projects: Project[] = [
  {
    id: 'novapay',
    name: 'NovaPay',
    description: 'Sistema financiero desarrollado durante formación académica.',
    technologies: ['React', 'Backend', 'Base de datos', 'Docker'],
    learnings: [],
    githubUrl: null,
  },
  {
    id: 'bite-go',
    name: 'Bite-Go',
    description: 'Sistema gestor para restaurantes.',
    technologies: [],
    learnings: [],
    githubUrl: null,
  },
  {
    id: 'gesap',
    name: 'GESAP',
    description: 'Sistema de gestión de salud.',
    technologies: [],
    learnings: [],
    githubUrl: null,
  },
]
