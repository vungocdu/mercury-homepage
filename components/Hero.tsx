import { ArrowRight, Brain, Bot, Zap, Globe, ChevronRight, Cpu, Network, Eye, Target } from 'lucide-react'
import InteractiveBackground from './InteractiveBackground'
import ParticleEffect from './ParticleEffect'
import TextReveal from './TextReveal'
import MercuryInteractiveLogo from './MercuryInteractiveLogo'

export default function Hero() {
  const aiCapabilities = [
    {
      icon: Brain,
      title: 'AI Intelligence',
      description: 'Advanced machine learning and neural networks',
      color: 'hsl(var(--link-primary))'
    },
    {
      icon: Bot,
      title: 'Automation',
      description: 'Intelligent process automation solutions',
      color: 'hsl(var(--success-color))'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Real-time image and video analysis',
      color: 'hsl(var(--warning-color))'
    },
    {
      icon: Network,
      title: 'Digital Integration',
      description: 'Seamless technology ecosystem connection',
      color: 'hsl(var(--link-primary))'
    }
  ]

  return (
    <section id="home" className="hero-bg-white pt-16 min-h-screen relative overflow-hidden">
      {/* Mercury Interactive Logo Background */}
      <div className="absolute inset-0 z-0">
        <MercuryInteractiveLogo />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="container-custom relative z-20">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up max-w-4xl">
            <div className="space-y-6">
              <TextReveal delay={0.1}>
                <div className="inline-flex items-center space-x-2 professional-card px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4" style={{ color: 'hsl(var(--link-primary))' }} />
                  <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                    TVC Professional AI Agent
                  </span>
                </div>
              </TextReveal>
              
              <TextReveal delay={0.2}>
                <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                  <span style={{ color: 'hsl(var(--text-primary))' }}>Next-Gen</span>{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                    AI Technology
                  </span>{' '}
                  <span style={{ color: 'hsl(var(--text-primary))' }}>Solutions</span>
                </h1>
              </TextReveal>
              
              <TextReveal delay={0.3}>
                <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
                  Mercury Solutions delivers cutting-edge AI and digital transformation services. 
                  From computer vision to intelligent automation, we empower businesses with 
                  advanced technology solutions that drive innovation and efficiency.
                </p>
              </TextReveal>
            </div>

                         {/* CTA Button */}
             <TextReveal delay={0.4}>
               <div className="flex justify-center">
                 <a href="#projects" className="btn-secondary group inline-flex items-center justify-center hover:scale-105">
                   Explore Solutions
                   <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
             </TextReveal>

            
          </div>
        </div>

                 {/* Scroll Indicator */}
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
           <div className="w-6 h-10 border-2 rounded-full flex justify-center border-mercury-blue-500 shadow-lg">
             <div className="w-1 h-3 rounded-full mt-2 animate-pulse bg-mercury-blue-500"></div>
           </div>
         </div>
      </div>
    </section>
  )
} 