import {
  Code2, Bot, Workflow, ScanEye, Share2, Plane, Server, Dumbbell, Clock, Landmark, Wrench,
  Users, Trophy, Flower2, Smartphone, School, Eye, Target, Rocket,
} from 'lucide-react'
import type { Service, Project } from '@/lib/content'

export const serviceIcons: Record<Service['icon'], typeof Code2> = {
  code: Code2,
  bot: Bot,
  workflow: Workflow,
  vision: ScanEye,
  share: Share2,
  drone: Plane,
}

export const projectIcons: Record<Project['icon'], typeof Code2> = {
  erp: Server,
  fitness: Dumbbell,
  clock: Clock,
  gov: Landmark,
  wrench: Wrench,
  users: Users,
  athlete: Trophy,
  flower: Flower2,
  phone: Smartphone,
  school: School,
}

export const directionIcons = { eye: Eye, target: Target, rocket: Rocket }
