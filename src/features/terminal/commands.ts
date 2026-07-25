import { contactLinks } from '@/data/contact'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skillCategories } from '@/data/skills'

export type CommandOutput = string[]

function aboutCommand(): CommandOutput {
  return [profile.name, profile.role, '', profile.bio]
}

function skillsCommand(): CommandOutput {
  return skillCategories.flatMap((category) => [
    `${category.title}:`,
    ...category.skills.map(
      (skill) => `  ${skill.name.padEnd(16, ' ')} ${skill.level}%`,
    ),
  ])
}

function projectsCommand(): CommandOutput {
  return projects.map((project) => `${project.name} — ${project.description}`)
}

function contactCommand(): CommandOutput {
  return contactLinks.map((link) => `${link.label}: ${link.value}`)
}

function helpCommand(): CommandOutput {
  return [
    'Comandos disponibles:',
    '  help      muestra esta ayuda',
    '  about     informacion de Eduardo',
    '  projects  proyectos destacados',
    '  skills    tecnologias y nivel',
    '  contact   formas de contacto',
    '  clear     limpia la terminal',
  ]
}

export const commands: Record<string, () => CommandOutput> = {
  help: helpCommand,
  about: aboutCommand,
  projects: projectsCommand,
  skills: skillsCommand,
  contact: contactCommand,
}
