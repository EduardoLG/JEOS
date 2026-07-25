import {
  Bot,
  FolderKanban,
  GraduationCap,
  Mail,
  Sparkles,
  SquareTerminal,
  User,
} from 'lucide-react'
import { AssistantApp } from '@/features/assistant/AssistantApp'
import { ContactApp } from '@/features/contact/ContactApp'
import { EducationApp } from '@/features/education/EducationApp'
import { ProfileApp } from '@/features/profile/ProfileApp'
import { ProjectsApp } from '@/features/projects/ProjectsApp'
import { SkillsApp } from '@/features/skills/SkillsApp'
import { TerminalApp } from '@/features/terminal/TerminalApp'
import type { AppConfig } from '@/types'

export const APPS: AppConfig[] = [
  {
    id: 'profile',
    title: 'Profile',
    icon: User,
    component: ProfileApp,
    defaultSize: { width: 480, height: 480 },
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: FolderKanban,
    component: ProjectsApp,
    defaultSize: { width: 640, height: 560 },
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: Sparkles,
    component: SkillsApp,
    defaultSize: { width: 560, height: 520 },
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    component: EducationApp,
    defaultSize: { width: 480, height: 380 },
  },
  {
    id: 'terminal',
    title: 'Terminal',
    icon: SquareTerminal,
    component: TerminalApp,
    defaultSize: { width: 640, height: 420 },
  },
  {
    id: 'assistant',
    title: 'Assistant',
    icon: Bot,
    component: AssistantApp,
    defaultSize: { width: 420, height: 560 },
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    component: ContactApp,
    defaultSize: { width: 420, height: 360 },
  },
]
