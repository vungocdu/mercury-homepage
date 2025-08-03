'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Camera, Edit3, Video, Mic, Award, Users, Clock } from 'lucide-react'
import ClientOnly from './ClientOnly'
import { useLanguage } from '../contexts/LanguageContext'

interface TickerItem {
  id: string
  title: string
  category: string
  duration: string
  platform: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  color: string
}

export default function TickerScroll() {
  const { translations } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth])

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth - containerRef.current.clientWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const tvProducts: TickerItem[] = [
    {
      id: '1',
      title: 'Corporate Brand Video',
      category: 'TVC',
      duration: '60s',
      platform: 'Television & Digital',
      icon: Play,
      color: 'hsl(var(--link-primary))'
    },
    {
      id: '2',
      title: 'Product Commercial',
      category: 'Commercial',
      duration: '30s',
      platform: 'National TV & Social Media',
      icon: Camera,
      color: 'hsl(var(--success-color))'
    },
    {
      id: '3',
      title: 'Internal Communication',
      category: 'Corporate',
      duration: '3-5min',
      platform: 'Internal Platforms',
      icon: Edit3,
      color: 'hsl(var(--warning-color))'
    },
    {
      id: '4',
      title: 'Event Promotional',
      category: 'Event',
      duration: '2-3min',
      platform: 'Multi-platform Distribution',
      icon: Video,
      color: 'hsl(var(--link-primary))'
    },
    {
      id: '5',
      title: 'Training Video',
      category: 'Educational',
      duration: '5-10min',
      platform: 'Learning Management',
      icon: Mic,
      color: 'hsl(var(--success-color))'
    },
    {
      id: '6',
      title: 'Award Ceremony',
      category: 'Event',
      duration: '1-2min',
      platform: 'Social Media & TV',
      icon: Award,
      color: 'hsl(var(--warning-color))'
    },
    {
      id: '7',
      title: 'Team Introduction',
      category: 'Corporate',
      duration: '2-3min',
      platform: 'Company Website',
      icon: Users,
      color: 'hsl(var(--link-primary))'
    },
    {
      id: '8',
      title: 'Process Documentation',
      category: 'Training',
      duration: '5-15min',
      platform: 'Internal Training',
      icon: Clock,
      color: 'hsl(var(--success-color))'
    }
  ]

  const TickerContent = () => (
    <section className="py-16 overflow-hidden">
      <div className="container-custom mb-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
            {translations.tvc.portfolio.ourTvcPortfolio}
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
            {translations.tvc.portfolio.scrollToExplore}
          </p>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, hsl(var(--bg-primary)) 10%, hsl(var(--bg-primary)) 90%, transparent 100%)'
        }}
      >
        <motion.div 
          className="flex gap-8 px-8 py-12"
          style={{ x }}
        >
          {tvProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-80 professional-card p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Product Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                       style={{ backgroundColor: product.color }}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="px-3 py-1 text-xs rounded-full" 
                          style={{ 
                            backgroundColor: `${product.color}20`, 
                            color: product.color 
                          }}>
                      {product.category}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {product.duration}
                </span>
              </div>

              {/* Product Title */}
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'hsl(var(--text-primary))' }}>
                {product.title}
              </h3>

              {/* Product Platform */}
              <p className="text-sm mb-4" style={{ color: 'hsl(var(--text-secondary))' }}>
                Platform: {product.platform}
              </p>

              {/* Product Features */}
              <div className="space-y-2">
                <div className="flex items-center text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                  <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: product.color }}></div>
                  Professional Production
                </div>
                <div className="flex items-center text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                  <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: product.color }}></div>
                  High Quality Output
                </div>
                <div className="flex items-center text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                  <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: product.color }}></div>
                  Multi-format Delivery
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-6 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                      style={{ 
                        backgroundColor: product.color,
                        color: 'white'
                      }}>
                View Project
              </button>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--link-primary))' }}></div>
            <span className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>Scroll to explore</span>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--link-primary))' }}></div>
          </div>
        </div>
      </div>
    </section>
  )

  if (!isClient) {
    return (
      <section className="py-16 overflow-hidden">
        <div className="container-custom mb-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
              Our TVC Portfolio
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              Scroll to explore our diverse range of television commercial productions and video content
            </p>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative"
          style={{ 
            background: 'linear-gradient(90deg, transparent 0%, hsl(var(--bg-primary)) 10%, hsl(var(--bg-primary)) 90%, transparent 100%)'
          }}
        >
          <div className="flex gap-8 px-8 py-12">
            {tvProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 professional-card p-6 hover:scale-105 transition-transform duration-300"
              >
                {/* Product Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                         style={{ backgroundColor: product.color }}>
                      <product.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 text-xs rounded-full" 
                            style={{ 
                              backgroundColor: `${product.color}20`, 
                              color: product.color 
                            }}>
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {product.duration}
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'hsl(var(--text-primary))' }}>
                  {product.title}
                </h3>

                {/* Product Platform */}
                <p className="text-sm mb-4" style={{ color: 'hsl(var(--text-secondary))' }}>
                  Platform: {product.platform}
                </p>

                {/* Product Features */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: product.color }}></div>
                    Professional Production
                  </div>
                  <div className="flex items-center text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: product.color }}></div>
                    High Quality Output
                  </div>
                  <div className="flex items-center text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: product.color }}></div>
                    Multi-format Delivery
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                        style={{ 
                          backgroundColor: product.color,
                          color: 'white'
                        }}>
                  View Project
                </button>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--link-primary))' }}></div>
              <span className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>Scroll to explore</span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--link-primary))' }}></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <ClientOnly fallback={
      <section className="py-16 overflow-hidden">
        <div className="container-custom mb-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
              Our TVC Portfolio
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              Scroll to explore our diverse range of television commercial productions and video content
            </p>
          </div>
        </div>
      </section>
    }>
      <TickerContent />
    </ClientOnly>
  )
} 