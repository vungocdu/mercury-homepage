import type { Metadata } from 'next'
import { Play, Camera, Edit3, Palette, Zap, Users, Award, Clock, Video, Mic, Lightbulb, Target } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'TVC Services - Professional Digital Art & Video Production',
  description: 'Mercury Solutions offers professional TVC (Television Commercial) services including digital art, video production, motion graphics, and creative content for brands and businesses.',
  keywords: [
    'TVC services',
    'digital art',
    'video production',
    'television commercial',
    'motion graphics',
    'creative services',
    'brand video',
    'advertising video',
    'Vietnam video production'
  ],
  openGraph: {
    title: 'TVC Services - Professional Digital Art & Video Production',
    description: 'Professional TVC services including digital art, video production, motion graphics, and creative content.',
    url: 'https://mercury-solutions.minova.vn/tvc',
  },
}

export default function TVCPage() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Collaborative Consultation',
      description: 'Successful TVCs begin with a deep understanding of your brand. We work closely with you, listening attentively to your needs and offering expert guidance to ensure your vision is realized on screen.',
      features: ['Brand Analysis', 'Strategic Planning', 'Expert Guidance', 'Vision Alignment']
    },
    {
      icon: Target,
      title: 'Strategic Concept Development',
      description: 'We develop compelling TVC concepts that go beyond mere scripts. We delve into your brand\'s DNA to craft narratives that align with your marketing objectives and drive action.',
      features: ['Brand DNA Analysis', 'Narrative Crafting', 'Marketing Alignment', 'Action-Driven Content']
    },
    {
      icon: Camera,
      title: 'Cinematic Production',
      description: 'We combine technical expertise with artistic vision, utilizing state-of-the-art equipment (4K, 6K, Full HD) and a network of experienced professionals to produce visually stunning and emotionally engaging TVCs.',
      features: ['4K/6K Quality', 'Professional Equipment', 'Expert Crew', 'Cinematic Vision']
    },
    {
      icon: Edit3,
      title: 'Masterful Post-Production',
      description: 'Our in-house team of editors, colorists, and sound designers meticulously refine every detail, utilizing industry-leading software like Davinci Resolve to deliver a world-class viewing experience.',
      features: ['Professional Editing', 'Color Grading', 'Sound Design', 'Davinci Resolve']
    },
    {
      icon: Video,
      title: 'Motion Graphics & VFX',
      description: 'Creative motion graphics and visual effects to enhance your video content and brand messaging with cutting-edge technology and artistic excellence.',
      features: ['2D/3D Animation', 'Visual Effects', 'Logo Animation', 'Infographics']
    },
    {
      icon: Mic,
      title: 'Strategic Media Planning & Distribution',
      description: 'We help you develop a strategic media plan to ensure your TVC reaches the right audience, maximizing your investment across national television channels and online platforms.',
      features: ['Media Planning', 'Audience Targeting', 'Multi-platform Distribution', 'ROI Optimization']
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Collaborative Consultation',
      description: 'We start with understanding your brand, target audience, and objectives. We work closely with you, listening attentively to your needs and offering expert guidance.'
    },
    {
      step: '02',
      title: 'Strategic Concept Development',
      description: 'We develop compelling TVC concepts that go beyond mere scripts. We delve into your brand\'s DNA to craft narratives that align with your marketing objectives.'
    },
    {
      step: '03',
      title: 'Cinematic Production',
      description: 'We combine technical expertise with artistic vision, utilizing state-of-the-art equipment (4K, 6K, Full HD) and experienced professionals.'
    },
    {
      step: '04',
      title: 'Masterful Post-Production',
      description: 'Our in-house team of editors, colorists, and sound designers meticulously refine every detail using industry-leading software like Davinci Resolve.'
    }
  ]

  const portfolio = [
    {
      title: 'Corporate Brand Film',
      category: 'TVC',
      description: 'Strategic corporate brand film showcasing company values and culture for talent attraction',
      duration: '60s',
      platform: 'Television & Digital'
    },
    {
      title: 'Product Launch Campaign',
      category: 'Commercial',
      description: 'Multi-platform product launch with motion graphics and 3D elements for maximum impact',
      duration: '30s',
      platform: 'National TV & Social Media'
    },
    {
      title: 'Internal Communications',
      category: 'Corporate',
      description: 'Employee training and internal communication videos for HR departments',
      duration: '3-5min',
      platform: 'Internal Platforms'
    },
    {
      title: 'Event Coverage & Highlights',
      category: 'Event',
      description: 'Professional event coverage and highlights for corporate events and conferences',
      duration: '2-3min',
      platform: 'Multi-platform Distribution'
    }
  ]

  const stats = [
    { icon: Award, number: '50+', label: 'TVC Projects Completed' },
    { icon: Users, number: '25+', label: 'Satisfied Clients' },
    { icon: Clock, number: '24/7', label: 'Creative Support' },
    { icon: Zap, number: '100%', label: 'Quality Guarantee' }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container-custom py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Powerful TVCs that{' '}
                  <span className="text-purple-600">Deliver Business Results</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We create strategic video content that enhances your brand image and attracts top talent. 
                  Our approach combines cutting-edge technology with creative excellence to deliver transformative visual experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                  Start Your Project
                  <Play size={20} className="ml-2" />
                </a>
                <a href="#portfolio" className="btn-secondary inline-flex items-center justify-center">
                  View Portfolio
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Video Production Studio</h3>
                      <p className="text-sm text-gray-600">Professional equipment & crew</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">4K</div>
                      <div className="text-xs text-gray-600">Quality</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Project Completion</span>
                      <span className="text-sm font-semibold text-green-600">On Time</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-blue-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating strategic TVC content that enhances your brand image and attracts top talent. 
              Our comprehensive approach combines cutting-edge technology with creative excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality TVC content that meets 
              your creative vision and business objectives, from concept to final delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-purple-200 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                )}
                
                <div className="relative z-10 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                      <div className="text-2xl font-bold text-purple-600">{step.step}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent TVC projects that showcase our creativity and technical expertise 
              in creating strategic video content for various industries and business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Project Video</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {project.description}
                  </p>
                  
                  <div className="text-xs text-gray-500">
                    Platform: {project.platform}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Strategic TVCs?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and bring your creative vision to life 
            with our professional TVC production services that deliver measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
              Get Started Today
              <Play size={20} className="ml-2" />
            </a>
            <a href="tel:+842412345678" className="border border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  )
} 