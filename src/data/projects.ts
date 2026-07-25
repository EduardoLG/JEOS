import novapayLogin from '@/assets/projects/novapay/login.png'

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  learnings: string[]
  githubUrl: string | null
  image?: string
}

export const projects: Project[] = [
  {
    id: 'novapay',
    name: 'NovaPay',
    description: 'Sistema financiero desarrollado durante formación académica.',
    technologies: ['React', 'Backend', 'Base de datos', 'Docker'],
    learnings: [],
    githubUrl: 'https://github.com/marcss-bnajera/NovaPay',
    image: novapayLogin,
  },
  {
    id: 'bite-go',
    name: 'Bite-Go',
    description: 'Sistema gestor para restaurantes.',
    technologies: [],
    learnings: [],
    githubUrl: 'https://github.com/marcss-bnajera/Bite-GO',
  },
  {
    id: 'gesap',
    name: 'GESAP',
    description: 'Sistema de gestión de salud.',
    technologies: [],
    learnings: [],
    githubUrl: 'https://github.com/marcss-bnajera/GESAP',
  },
]
