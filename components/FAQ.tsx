'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "What Types of TVC Projects Does Mercury Solutions Specialize In?",
    answer: "Mercury Solutions specializes in a wide range of TVC projects including corporate branding videos, internal communications, product launches, and event coverage. We work across various industries, creating compelling content that drives results for HR, Admin, and Purchasing departments."
  },
  {
    question: "How Does Mercury Solutions Approach TVC Production?",
    answer: "We take a strategic, collaborative approach to TVC production. Starting with in-depth consultation, we develop concepts that align with your objectives, execute with technical excellence, and ensure high-quality post-production. Every project benefits from our end-to-end expertise."
  },
  {
    question: "Can Mercury Solutions Handle Custom TVC Solutions?",
    answer: "We pride ourselves on creating customized TVC solutions that meet your specific needs. Whether you need a series of training videos, a corporate brand film, or a product showcase, we tailor our approach to deliver exactly what you need."
  },
  {
    question: "What Equipment and Technology Does Mercury Solutions Use?",
    answer: "We utilize state-of-the-art equipment including 4K and 6K cameras, advanced lighting systems, and industry-leading post-production software like Davinci Resolve. Our technical capabilities ensure the highest quality output for your TVC projects."
  },
  {
    question: "How Long Does a Typical TVC Project Take?",
    answer: "Project timelines vary depending on complexity and scope. A simple corporate video might take 2-3 weeks, while a complex TVC with multiple locations and post-production effects could take 6-8 weeks. We provide detailed timelines during the consultation phase."
  },
  {
    question: "What Makes Mercury Solutions Different from Other TVC Production Companies?",
    answer: "Our unique combination of technical expertise, creative excellence, and strategic business understanding sets us apart. We don't just create beautiful videos - we create strategic content that drives business results and enhances your brand positioning."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our TVC production services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help you understand our TVC production process and answer any questions you may have.
            </p>
            <a href="#contact" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
              Contact Our Team
              <Plus size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 