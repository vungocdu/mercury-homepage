"use client"

import Link from 'next/link'
import { ExternalLink, Smartphone, Globe, Zap, Dumbbell, Clock, Building2, Plane, Code2, Activity, Users, Briefcase, Box, BarChart3 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import ClientOnly from '@/components/ClientOnly'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TextBlurIn } from '@/components/blur-in'
import { TextSlideUp } from '@/components/slide-up'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface CategoryDef {
  key: string
  icon: LucideIcon
  color: string
  iconColor: string
  bgColor: string
  projectKeys: string[]
}

const categories: CategoryDef[] = [
  {
    key: 'hrTech',
    icon: Briefcase,
    color: 'text-amber-600',
    iconColor: 'text-amber-700',
    bgColor: 'bg-amber-50',
    projectKeys: ['timekeeping', 'quickshift'],
  },
  {
    key: 'sportTech',
    icon: Dumbbell,
    color: 'text-blue-600',
    iconColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    projectKeys: ['actiwell', 'atms'],
  },
  {
    key: 'hotelTech',
    icon: Building2,
    color: 'text-emerald-600',
    iconColor: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    projectKeys: ['property', 'powerControl', 'airhub'],
  },
  {
    key: 'businessOpt',
    icon: BarChart3,
    color: 'text-violet-600',
    iconColor: 'text-violet-700',
    bgColor: 'bg-violet-50',
    projectKeys: ['myarm', 'contcal'],
  },
]

export default function Projects() {
  const { t } = useLanguage()

  const allProjectKeys = ['actiwell', 'timekeeping', 'quickshift', 'atms', 'myarm', 'property', 'powerControl', 'airhub', 'contcal']

  const projectsMap = Object.fromEntries(
    allProjectKeys.map(key => {
      const websiteKey = `projects.items.${key}.website`
      const websiteValue = t(websiteKey)

      return [key, {
        title: t(`projects.items.${key}.title`),
        description: t(`projects.items.${key}.description`),
        features: [
          t(`projects.items.${key}.features.items.0`),
          t(`projects.items.${key}.features.items.1`),
          t(`projects.items.${key}.features.items.2`),
          t(`projects.items.${key}.features.items.3`)
        ],
        platforms: [
          t(`projects.items.${key}.platforms.items.0`),
          ...(t(`projects.items.${key}.platforms.items.1`) !== `projects.items.${key}.platforms.items.1` ? [t(`projects.items.${key}.platforms.items.1`)] : [])
        ].filter(Boolean),
        technologies: [
          t(`projects.items.${key}.technologies.items.0`),
          t(`projects.items.${key}.technologies.items.1`),
          t(`projects.items.${key}.technologies.items.2`)
        ].filter(Boolean),
        image: `/images/${key}.jpg`,
        website: websiteValue !== websiteKey ? websiteValue : null
      }]
    })
  )

  const projectConfig: Record<string, { icon: LucideIcon; bg: string; iconBg: string; iconColor: string }> = {
    actiwell: {
      icon: Dumbbell,
      bg: 'bg-blue-600',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-700',
    },
    timekeeping: {
      icon: Clock,
      bg: 'bg-amber-600',
      iconBg: 'bg-yellow-50',
      iconColor: 'text-amber-700',
    },
    quickshift: {
      icon: Users,
      bg: 'bg-orange-500',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    atms: {
      icon: Activity,
      bg: 'bg-emerald-700',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-700',
    },
    myarm: {
      icon: Smartphone,
      bg: 'bg-slate-700',
      iconBg: 'bg-gray-50',
      iconColor: 'text-slate-800',
    },
    property: {
      icon: Building2,
      bg: 'bg-emerald-600',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-700',
    },
    powerControl: {
      icon: Zap,
      bg: 'bg-amber-600',
      iconBg: 'bg-yellow-50',
      iconColor: 'text-amber-700',
    },
    airhub: {
      icon: Plane,
      bg: 'bg-rose-600',
      iconBg: 'bg-pink-50',
      iconColor: 'text-rose-700',
    },
    contcal: {
      icon: Box,
      bg: 'bg-violet-600',
      iconBg: 'bg-violet-50',
      iconColor: 'text-violet-700',
    }
  }

  const ProjectsContent = () => (
    <section id="projects" className="section-white relative overflow-hidden" style={{ paddingTop: '6rem' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="px-6 py-3 mb-8">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">{t('projects.header.badge')}</span>
          </Badge>

          <TextBlurIn className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
            {`${t('projects.header.title')} ${t('projects.header.subtitle')}`}
          </TextBlurIn>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
            {t('projects.header.description')}
          </p>
        </div>

        {/* Category-grouped projects */}
        <div className="space-y-16">
          {categories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <div key={category.key} id={`category-${category.key.replace(/([A-Z])/g, (m) => m.toLowerCase())}`}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-sm", category.bgColor)}>
                    <CategoryIcon className={cn("w-6 h-6", category.iconColor)} />
                  </div>
                  <div>
                    <TextBlurIn className="text-2xl lg:text-3xl font-bold" style={{ color: 'hsl(var(--text-primary))' }}>
                      {t(`projects.categories.${category.key}.title`)}
                    </TextBlurIn>
                    <p className="text-sm mt-1" style={{ color: 'hsl(var(--text-secondary))' }}>
                      {t(`projects.categories.${category.key}.description`)}
                    </p>
                  </div>
                </div>

                <Separator className="mb-8" />

                {/* Project Cards */}
                <div className="space-y-8">
                  {category.projectKeys.map((projectKey) => {
                    const project = projectsMap[projectKey]
                    const config = projectConfig[projectKey] || projectConfig.actiwell
                    const ProjectIcon = config.icon

                    return (
                      <Card
                        id={`project-${projectKey}`}
                        key={projectKey}
                        className="group relative overflow-hidden rounded-3xl border-0 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_25px_-5px_rgb(30_58_138_/_0.1)] hover:shadow-xl"
                        style={{ backgroundColor: 'hsl(var(--card-bg))' }}
                      >
                        <div className="relative z-10">
                          {/* Project Content Section */}
                          <CardContent className="p-8 lg:p-12">
                            <div className="mb-6">
                              <TextSlideUp className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: 'hsl(var(--text-primary))' }}>
                                {project.title}
                              </TextSlideUp>
                              <p className="leading-relaxed text-lg" style={{ color: 'hsl(var(--text-secondary))' }}>
                                {project.description}
                              </p>
                            </div>

                            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                              {/* Features */}
                              <div>
                                <h4 className="font-bold mb-4 flex items-center" style={{ color: 'hsl(var(--text-primary))' }}>
                                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-sm", config.iconBg)}>
                                    <Code2 className={cn("w-4 h-4", config.iconColor)} />
                                  </div>
                                  {t('projects.labels.features')}
                                </h4>
                                <ul className="space-y-3 pl-2">
                                  {project.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start" style={{ color: 'hsl(var(--text-secondary))' }}>
                                      <div className={cn("w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0", config.bg)} />
                                      <span className="leading-relaxed">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Platforms & Technologies */}
                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-bold mb-4 flex items-center" style={{ color: 'hsl(var(--text-primary))' }}>
                                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-sm", config.iconBg)}>
                                      <Smartphone className={cn("w-4 h-4", config.iconColor)} />
                                    </div>
                                    {t('projects.labels.platforms')}
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.platforms.map((platform, platformIndex) => (
                                      <Badge
                                        key={platformIndex}
                                        variant="outline"
                                      >
                                        {platform}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-bold mb-4 flex items-center" style={{ color: 'hsl(var(--text-primary))' }}>
                                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-sm", config.iconBg)}>
                                      <Zap className={cn("w-4 h-4", config.iconColor)} />
                                    </div>
                                    {t('projects.labels.technologies')}
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                      <Badge key={techIndex}>
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Website Link */}
                            {project.website && (
                              <CardFooter className="flex justify-end p-0">
                                {/^https?:\/\//i.test(project.website) ? (
                                  <Button
                                    asChild
                                    size="lg"
                                  >
                                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                                      <Globe className="w-5 h-5 mr-2" />
                                      {t('projects.labels.visitWebsite')}
                                      <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                  </Button>
                                ) : (
                                  <Button
                                    asChild
                                    size="lg"
                                  >
                                    <Link href={project.website}>
                                      <Globe className="w-5 h-5 mr-2" />
                                      {t('projects.labels.visitWebsite')}
                                    </Link>
                                  </Button>
                                )}
                              </CardFooter>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="rounded-3xl border-0 shadow-[0_20px_40px_-10px_rgb(30_58_138_/_0.15)]"
                style={{ backgroundColor: 'hsl(var(--card-bg))' }}>
            <CardContent className="p-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
                {t('projects.cta.title')}
              </h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                {t('projects.cta.description')}
              </p>
              <Button
                asChild
                size="lg"
              >
                <a href="#contact">
                  {t('projects.cta.button')}
                  <ExternalLink size={20} className="ml-3" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )

  return (
    <ClientOnly fallback={
      <section id="projects" className="section-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="outline" className="px-4 py-2 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">High-Performance Applications</span>
            </Badge>

            <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
              We excel in building{' '}
              <span style={{ color: 'hsl(var(--link-primary))' }}>
                high-load mobile and web applications
              </span>
            </h2>

            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
              Explore our portfolio of successful projects that demonstrate our expertise in delivering innovative solutions across various industries with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>
    }>
      <ProjectsContent />
    </ClientOnly>
  )
}
