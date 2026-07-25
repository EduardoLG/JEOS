export interface EducationItem {
  year: string
  title: string
  institution?: string
  description?: string
}

export const educationTimeline: EducationItem[] = [
  {
    year: '2024',
    title: 'Inicio de Perito en Computación',
    institution: 'Kinal',
    description: 'Aprendí las bases de la programación con Java y bases de datos con SQL.',
  },
  {
    year: '2025',
    title: 'Quinto Perito en Computación',
    institution: 'Kinal',
    description:
      'Aprendí Spring Boot, HTML, CSS, Tailwind CSS y JavaScript, además de control de versiones con Git.',
  },
  {
    year: '2026',
    title: 'Último año de Perito en Computación',
    institution: 'Kinal',
    description: 'Aprendí Docker, React, React Native, C#, PostgreSQL y MongoDB.',
  },
  {
    year: '2026',
    title: 'Prácticas profesionales',
  },
  {
    year: '2026',
    title: 'Graduación',
  },
]
