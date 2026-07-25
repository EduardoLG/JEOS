export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'React', level: 75 },
      { name: 'React Native', level: 60 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Spring Boot', level: 65 },
      { name: 'C#', level: 65 },
    ],
  },
  {
    title: 'Bases de datos',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'MongoDB', level: 60 },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'Docker', level: 65 },
    ],
  },
]
