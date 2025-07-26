import { ClipboardList, Palette, Code, Rocket } from 'lucide-react'

export default function Process() {
  const processes = [
    {
      icon: ClipboardList,
      title: 'Plan',
      description: 'Receive requirements and information from clients, include IT Consultancy to make suggestions and develop project estimations as per their expectations.',
      step: '01'
    },
    {
      icon: Palette,
      title: 'Design & Define',
      description: 'Based on the requirement specifications prepare project documents, which help in further stages. Define overall system architecture and technology stack.',
      step: '02'
    },
    {
      icon: Code,
      title: 'Build & Test',
      description: 'Our team of experts uses the chosen programming language, techniques, and methodologies to build the software. Evaluate the quality of software development.',
      step: '03'
    },
    {
      icon: Rocket,
      title: 'Deploy & Maintenance',
      description: 'The final software outcome is released and checked for deployment issues if any. According to the service level agreement, we ensure continuous maintenance.',
      step: '04'
    }
  ]

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to deliver high-quality solutions 
            that meet your business requirements and exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-mercury-200 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
              )}
              
              <div className="relative z-10 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-mercury-100 rounded-lg flex items-center justify-center group-hover:bg-mercury-200 transition-colors duration-200">
                    <process.icon className="w-6 h-6 text-mercury-600" />
                  </div>
                  <div className="text-2xl font-bold text-mercury-600">{process.step}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-20 bg-gradient-to-r from-mercury-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Process?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures transparency, quality, and timely delivery 
              of your projects while maintaining clear communication throughout.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-mercury-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-mercury-600">✓</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Transparent Communication</h4>
              <p className="text-gray-600">Regular updates and clear communication at every stage of development.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mercury-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-mercury-600">⚡</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Agile Methodology</h4>
              <p className="text-gray-600">Flexible development approach with iterative improvements and quick feedback.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mercury-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-mercury-600">🛡️</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">Comprehensive testing and quality checks to ensure robust and reliable solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 