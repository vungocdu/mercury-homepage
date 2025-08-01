"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import { 
  Code2, 
  Lightbulb, 
  Shield, 
  Clock, 
  TrendingUp, 
  Lock 
} from "lucide-react"

const WhyChoose = () => {
  const { t } = useLanguage()

  const advantages = [
    {
      icon: Code2,
      key: "expertise",
      color: "from-mercury-blue-500 to-mercury-blue-600"
    },
    {
      icon: Lightbulb,
      key: "innovation",
      color: "from-mercury-gold-500 to-mercury-gold-600"
    },
    {
      icon: Shield,
      key: "quality",
      color: "from-mercury-blue-600 to-mercury-blue-700"
    },
    {
      icon: Clock,
      key: "support",
      color: "from-mercury-gold-600 to-mercury-gold-700"
    },
    {
      icon: TrendingUp,
      key: "scalability",
      color: "from-mercury-blue-700 to-mercury-blue-800"
    },
    {
      icon: Lock,
      key: "security",
      color: "from-mercury-gold-700 to-mercury-gold-800"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent mb-6">
            {t.whyChoose.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.whyChoose.subtitle}
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.key}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-mercury-blue-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${advantage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-mercury-blue-600 transition-colors duration-300">
                    {t.whyChoose.advantages[advantage.key as keyof typeof t.whyChoose.advantages].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.whyChoose.advantages[advantage.key as keyof typeof t.whyChoose.advantages].description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-mercury-blue-500/5 to-mercury-gold-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-mercury-blue-50 to-mercury-gold-50 rounded-2xl p-8 border border-mercury-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to experience the Mercury difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions and proven expertise.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose 