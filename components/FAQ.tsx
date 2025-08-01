'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import TextReveal from './TextReveal'
import ClientOnly from './ClientOnly'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)
  const { translations } = useLanguage()

  const faqs = [
    {
      question: translations.faq.questions.tvcTypes.question,
      answer: translations.faq.questions.tvcTypes.answer
    },
    {
      question: translations.faq.questions.approach.question,
      answer: translations.faq.questions.approach.answer
    },
    {
      question: translations.faq.questions.custom.question,
      answer: translations.faq.questions.custom.answer
    },
    {
      question: translations.faq.questions.equipment.question,
      answer: translations.faq.questions.equipment.answer
    },
    {
      question: translations.faq.questions.timeline.question,
      answer: translations.faq.questions.timeline.answer
    },
    {
      question: translations.faq.questions.difference.question,
      answer: translations.faq.questions.difference.answer
    },
    {
      question: translations.faq.questions.budget.question,
      answer: translations.faq.questions.budget.answer
    },
    {
      question: translations.faq.questions.revisions.question,
      answer: translations.faq.questions.revisions.answer
    },
    {
      question: translations.faq.questions.delivery.question,
      answer: translations.faq.questions.delivery.answer
    },
    {
      question: translations.faq.questions.rights.question,
      answer: translations.faq.questions.rights.answer
    }
  ]

  return (
    <section className="section-light">
      <div className="container-custom">
        <ClientOnly>
          <TextReveal className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
              {translations.faq.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              {translations.faq.subtitle}
            </p>
          </TextReveal>
        </ClientOnly>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ClientOnly key={index}>
                <TextReveal delay={index * 0.1}>
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="faq-item"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-opacity-80 transition-colors duration-200"
                    style={{ backgroundColor: 'hsl(var(--bg-primary))' }}
                  >
                    <span className="text-lg font-semibold" style={{ color: 'hsl(var(--text-primary))' }}>{faq.question}</span>
                    {openIndex === index ? (
                      <X className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--text-secondary))' }} />
                    ) : (
                      <Plus className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--text-secondary))' }} />
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
                          <TextReveal delay={0.2}>
                            <p className="leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>{faq.answer}</p>
                          </TextReveal>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </TextReveal>
            </ClientOnly>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ClientOnly>
          <TextReveal className="text-center mt-16" delay={0.5}>
            <div className="professional-card rounded-2xl p-8" style={{ 
              backgroundColor: 'hsl(var(--link-primary))',
              border: '2px solid hsl(var(--card-border))',
              boxShadow: '0 4px 6px -1px rgb(30 58 138 / 0.1), 0 2px 4px -1px rgb(30 58 138 / 0.06)'
            }}>
              <ClientOnly>
                <TextReveal delay={0.6}>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {translations.faq.stillHaveQuestions || "Still Have Questions?"}
                  </h3>
                </TextReveal>
              </ClientOnly>
              <ClientOnly>
                <TextReveal delay={0.7}>
                  <p className="text-lg mb-6 opacity-90 text-white">
                    {translations.faq.contactTeam || "Our team is here to help you understand our process and answer any questions you may have."}
                  </p>
                </TextReveal>
              </ClientOnly>
              <ClientOnly>
                <TextReveal delay={0.8}>
                  <a href="#contact" className="bg-white hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
                     style={{ color: 'hsl(var(--link-primary))' }}>
                    {translations.common.contactUs}
                    <Plus size={20} className="ml-2" />
                  </a>
                </TextReveal>
              </ClientOnly>
            </div>
          </TextReveal>
        </ClientOnly>
      </div>
    </section>
  )
} 