'use client'

import HorizontalNav from '@/components/it-solution/HorizontalNav'
import type { HorizontalNavItem } from '@/components/it-solution/HorizontalNav'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  Clock,
  Users,
  Dumbbell,
  Activity,
  Building2,
  Zap,
  Plane,
  Smartphone,
  Box,
  Moon,
} from 'lucide-react'

export default function HomeProductNav() {
  const { t } = useLanguage()

  const navItems: HorizontalNavItem[] = [
    { title: 'TNA HRM', id: 'project-timekeeping', icon: <Clock className="w-4 h-4" /> },
    { title: 'QuickShift', id: 'project-quickshift', icon: <Users className="w-4 h-4" /> },
    { title: t('projects.items.actiwell.title').split(':')[0] || 'Actiwell', id: 'project-actiwell', icon: <Dumbbell className="w-4 h-4" /> },
    { title: 'ATMS', id: 'project-atms', icon: <Activity className="w-4 h-4" /> },
    { title: t('projects.items.property.title').split(':')[0] || 'Minova PMS', id: 'project-property', icon: <Building2 className="w-4 h-4" /> },
    { title: 'OTA Calculator', id: 'project-powerControl', icon: <Zap className="w-4 h-4" /> },
    { title: 'AirHub', id: 'project-airhub', icon: <Plane className="w-4 h-4" /> },
    { title: 'Night Life CRM', id: 'project-nightlife', icon: <Moon className="w-4 h-4" /> },
    { title: 'MyARM', id: 'project-myarm', icon: <Smartphone className="w-4 h-4" /> },
    { title: 'ContCal', id: 'project-contcal', icon: <Box className="w-4 h-4" /> },
  ]

  return <HorizontalNav items={navItems} scrollOffset={160} />
}
