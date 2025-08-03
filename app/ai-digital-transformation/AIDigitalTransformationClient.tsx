'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star, Target, Zap, Shield, Users, TrendingUp, CheckCircle, Phone } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Projects from '../../components/Projects'
import TechnologyStack from '../../components/TechnologyStack'
import Process from '../../components/Process'
import Contact from '../../components/Contact'
import { useLanguage } from '../../contexts/LanguageContext'

export default function AIDigitalTransformationClient() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen professional-bg">
      <Header />
      
      {/* Excellence in Apps Section */}
      <section className="section-light pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-mercury-blue-50 text-mercury-blue-600 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Excellence
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              Chúng tôi xuất sắc trong việc xây dựng
              <span className="block text-mercury-blue-600">
                ứng dụng mobile và web có tải cao
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Với công nghệ AI tiên tiến và kinh nghiệm phát triển ứng dụng đẳng cấp thế giới, 
              chúng tôi tạo ra những giải pháp số mạnh mẽ, có khả năng mở rộng và tối ưu hiệu suất.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { number: "100+", label: "Dự án hoàn thành" },
                { number: "50M+", label: "Người dùng" },
                { number: "99.9%", label: "Uptime" },
                { number: "24/7", label: "Hỗ trợ" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-mercury-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ready to Start AI Project */}
      <section className="section-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-mercury-gold-50 text-mercury-gold-600 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              AI Project Launch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sẵn sàng bắt đầu dự án AI của bạn?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Từ ý tưởng đến triển khai, chúng tôi đồng hành cùng bạn trong hành trình 
              chuyển đổi số với công nghệ AI tiên tiến nhất.
            </p>

            {/* AI Capabilities */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Target,
                  title: "Machine Learning",
                  description: "Thuật toán AI thông minh học hỏi và tối ưu liên tục"
                },
                {
                  icon: Zap,
                  title: "Automation",
                  description: "Tự động hóa quy trình kinh doanh với AI"
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Analytics",
                  description: "Dự đoán xu hướng và hành vi khách hàng"
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="professional-card p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-mercury-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-6 h-6 text-mercury-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <TechnologyStack />

      {/* Additional Technologies & Innovation Tools */}
      <section className="section-light py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-mercury-gold-50 text-mercury-gold-600 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovation Tools
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Công nghệ bổ sung & Công cụ đổi mới
            </h2>
            <p className="text-xl text-gray-600">
              Chúng tôi sử dụng những công nghệ và công cụ tiên tiến nhất để đảm bảo 
              dự án của bạn luôn đi đầu về mặt kỹ thuật.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "AI & ML Frameworks",
                tools: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT"]
              },
              {
                category: "Cloud AI Services",
                tools: ["AWS SageMaker", "Google AI Platform", "Azure ML", "IBM Watson"]
              },
              {
                category: "Data Analytics",
                tools: ["Apache Spark", "Elasticsearch", "Tableau", "Power BI"]
              },
              {
                category: "DevOps & Monitoring",
                tools: ["Kubernetes", "Docker", "Prometheus", "Grafana"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="professional-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-mercury-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <Process />

      {/* Why Choose Our Process */}
      <section className="section-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-mercury-blue-50 text-mercury-blue-600 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Proven Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tại sao chọn quy trình của chúng tôi?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Chúng tôi tuân theo phương pháp đã được chứng minh để cung cấp giải pháp 
              chất lượng cao đáp ứng yêu cầu kinh doanh và vượt quá mong đợi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Agile & Collaborative",
                description: "Làm việc theo phương pháp Agile với sự tham gia tích cực của khách hàng trong mọi giai đoạn phát triển."
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Quy trình kiểm thử nghiêm ngặt và đảm bảo chất lượng ở mọi bước để đảm bảo sản phẩm hoàn hảo."
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Triển khai nhanh chóng với timeline rõ ràng và milestones được xác định từ đầu dự án."
              },
              {
                icon: TrendingUp,
                title: "Scalable Architecture",
                description: "Thiết kế kiến trúc có khả năng mở rộng để đáp ứng sự phát triển của doanh nghiệp."
              },
              {
                icon: Target,
                title: "Business-Focused",
                description: "Tập trung vào mục tiêu kinh doanh và ROI để đảm bảo giá trị đầu tư tối đa cho khách hàng."
              },
              {
                icon: CheckCircle,
                title: "Proven Results",
                description: "Track record thành công với hàng trăm dự án đã triển khai và khách hàng hài lòng."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="professional-card p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-mercury-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-mercury-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* CTA Section */}
      <section className="section-light py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="professional-card p-12 text-center bg-gradient-to-br from-mercury-blue-600 to-mercury-blue-800 text-white rounded-3xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Bắt đầu hành trình AI của bạn ngay hôm nay
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Đừng để đối thủ vượt lên trước. Liên hệ với chúng tôi để tìm hiểu cách 
              AI có thể thay đổi hoàn toàn cách thức hoạt động của doanh nghiệp bạn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-mercury-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Tư vấn miễn phí
              </motion.a>
              
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-mercury-blue-600 transition-all duration-300"
              >
                Xem case studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
      
      <Footer />
    </div>
  )
}