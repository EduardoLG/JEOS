import type { ComponentType } from 'react'
import type { LucideIcon } from 'lucide-react'

export type AppId =
  | 'profile'
  | 'projects'
  | 'skills'
  | 'education'
  | 'terminal'
  | 'assistant'
  | 'contact'

export interface WindowSize {
  width: number
  height: number
}

export interface AppConfig {
  id: AppId
  title: string
  icon: LucideIcon
  component: ComponentType
  defaultSize: WindowSize
}
