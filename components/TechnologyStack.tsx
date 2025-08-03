"use client"

import { Cpu, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TechnologyStack() {
  const { t } = useLanguage()

  const techStacks = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', type: 'language' },
        { name: 'CSS', type: 'language' },
        { name: 'JavaScript', type: 'language' },
        { name: 'React', type: 'framework' },
        { name: 'Vue', type: 'framework' },
        { name: 'Webpack', type: 'tool' },
        { name: 'Sass', type: 'tool' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Python', type: 'language' },
        { name: 'Go', type: 'language' },
        { name: 'Node.js', type: 'language' },
        { name: 'Flask', type: 'framework' },
        { name: 'Django', type: 'framework' },
        { name: 'Laravel', type: 'framework' },
        { name: 'Express', type: 'framework' },
        { name: 'Meteor', type: 'framework' },
        { name: 'GraphQL', type: 'framework' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', type: 'database' },
        { name: 'MySQL', type: 'database' },
        { name: 'PostgreSQL', type: 'database' },
        { name: 'Redis', type: 'database' },
        { name: 'SQL Server', type: 'database' }
      ]
    },
    {
      category: 'DevOps',
      items: [
        { name: 'Ansible', type: 'tool' },
        { name: 'Terraform', type: 'tool' },
        { name: 'Docker', type: 'tool' },
        { name: 'Kubernetes', type: 'tool' },
        { name: 'AWS', type: 'cloud' },
        { name: 'Google Cloud', type: 'cloud' },
        { name: 'GitLab CI', type: 'tool' },
        { name: 'Jenkins', type: 'tool' }
      ]
    },
    {
      category: 'Mobile',
      items: [
        { name: 'Kotlin', type: 'language' },
        { name: 'Java', type: 'language' },
        { name: 'Swift', type: 'language' },
        { name: 'Objective-C', type: 'language' },
        { name: 'Flutter', type: 'framework' },
        { name: 'React Native', type: 'framework' }
      ]
    },
    {
      category: 'AI & ML',
      items: [
        { name: 'TensorFlow', type: 'framework' },
        { name: 'Keras', type: 'framework' },
        { name: 'PyTorch', type: 'framework' },
        { name: 'FastAI', type: 'framework' },
        { name: 'OpenCV', type: 'library' },
        { name: 'scikit-learn', type: 'library' },
        { name: 'Pandas', type: 'library' },
        { name: 'NumPy', type: 'library' }
      ]
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'language': 
        return 'bg-mercury-blue-50 text-mercury-blue-700 border border-mercury-blue-200 hover:bg-mercury-blue-100'
      case 'framework': 
        return 'bg-mercury-blue-100 text-mercury-blue-800 border border-mercury-blue-300 hover:bg-mercury-blue-200'
      case 'database': 
        return 'bg-mercury-blue-200 text-mercury-blue-900 border border-mercury-blue-400 hover:bg-mercury-blue-300'
      case 'tool': 
        return 'bg-mercury-gold-50 text-mercury-gold-700 border border-mercury-gold-200 hover:bg-mercury-gold-100'
      case 'cloud': 
        return 'bg-mercury-blue-150 text-mercury-blue-800 border border-mercury-blue-250 hover:bg-mercury-blue-250'
      case 'library': 
        return 'bg-mercury-gold-100 text-mercury-gold-800 border border-mercury-gold-300 hover:bg-mercury-gold-200'
      default: 
        return 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
    }
  }

  const getIconGradient = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'from-blue-500 to-blue-600'
      case 'Backend':
        return 'from-green-500 to-green-600'
      case 'Database':
        return 'from-purple-500 to-purple-600'
      case 'DevOps':
        return 'from-orange-500 to-orange-600'
      case 'Mobile':
        return 'from-pink-500 to-pink-600'
      case 'AI & ML':
        return 'from-red-500 to-red-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'text-mercury-blue-700'
      case 'Backend':
        return 'text-mercury-blue-800'
      case 'Database':
        return 'text-mercury-blue-900'
      case 'DevOps':
        return 'text-mercury-gold-700'
      case 'Mobile':
        return 'text-mercury-gold-800'
      case 'AI & ML':
        return 'text-mercury-gold-900'
      default:
        return 'text-gray-700'
    }
  }

  const getCategoryKey = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'frontend'
      case 'Backend':
        return 'backend'
      case 'Database':
        return 'database'
      case 'DevOps':
        return 'devops'
      case 'Mobile':
        return 'mobile'
      case 'AI & ML':
        return 'ai'
      default:
        return category.toLowerCase().replace(' & ', '').replace(' ', '')
    }
  }

  return (
    <section id="technology" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-mercury-blue-100 to-mercury-gold-100 text-mercury-blue-700 font-semibold text-sm mb-6">
            <Cpu className="w-4 h-4 mr-2" />
            {t('technology.badge')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent mb-6">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('technology.subtitle')}
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techStacks.map((stack) => (
            <div
              key={stack.category}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-mercury-blue-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getIconGradient(stack.category)} flex items-center justify-center shadow-lg mr-4`}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${getCategoryColor(stack.category)}`}>
                  {t(`technology.categories.${getCategoryKey(stack.category)}`)}
                </h3>
              </div>

              {/* Technology Items */}
              <div className="flex flex-wrap gap-3">
                {stack.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 ${getTypeColor(item.type)}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies Section */}
        <div className="bg-gradient-to-r from-mercury-blue-50 to-mercury-gold-50 rounded-3xl p-12 border border-mercury-blue-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('technology.additional.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('technology.additional.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Monitoring',
                key: 'monitoring',
                items: ['Prometheus', 'Grafana', 'New Relic', 'Datadog', 'Sentry']
              },
              {
                title: 'Log Management',
                key: 'logManagement',
                items: ['ELK Stack', 'Fluentd', 'Logstash', 'Splunk', 'Papertrail']
              },
              {
                title: 'Testing',
                key: 'testing',
                items: ['Jest', 'Cypress', 'Selenium', 'JUnit', 'Pytest']
              },
              {
                title: 'Integration',
                key: 'integration',
                items: ['Zapier', 'IFTTT', 'Webhooks', 'API Gateway', 'Kong']
              }
            ].map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {t(`technology.additional.sections.${section.key}`)}
                </h4>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-sm text-gray-600 hover:text-mercury-blue-600 transition-colors duration-200 cursor-pointer"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 