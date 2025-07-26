import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-mercury-400 mb-4">
              Mercury Solutions
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Mercury Solutions, we focus on computer vision and data visualization 
              implementation to provide better management solutions for businesses 
              from SMEs to MNCs.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-mercury-400" />
                <span className="text-gray-300">
                  33 Ng. 41 P. Thai Ha, Trung Liet, Dong Da, Hanoi, Vietnam
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-mercury-400" />
                <span className="text-gray-300">+84 24 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-mercury-400" />
                <span className="text-gray-300">info@mercury-solutions.vn</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">Data Analysis</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">Web Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">Mobile Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">AI & Machine Learning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">DevOps & Cloud</a></li>
              <li><a href="/tvc" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">TVC & Digital Art</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">Home</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#technology" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">Technology</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">Process</a></li>
              <li><a href="/tvc" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">TVC Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-mercury-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mercury Solutions. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-mercury-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-mercury-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-mercury-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 