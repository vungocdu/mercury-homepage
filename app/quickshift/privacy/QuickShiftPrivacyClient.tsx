'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Database,
  Eye,
  FileText,
  Lock,
  Mail,
  Settings,
  Shield,
  Smartphone,
  Trash2,
  UserCheck,
  Users,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

/* ────────────────────────── Data ────────────────────────── */

const dataCollected = [
  {
    icon: Users,
    title: 'Account & Profile Data',
    items: [
      'Full name, email address, phone number',
      'Company or organization name',
      'Role (Worker, Customer, Admin, Manager)',
      'Profile photo (optional)',
    ],
    color: '#FFA31A',
  },
  {
    icon: Smartphone,
    title: 'Device & Technical Data',
    items: [
      'Device model, OS version, app version',
      'IP address and approximate location',
      'Push notification tokens (FCM/APNs)',
      'App usage analytics and crash logs',
    ],
    color: '#3B82F6',
  },
  {
    icon: FileText,
    title: 'Work & Operations Data',
    items: [
      'Timecard records and work hours',
      'Shift schedules and attendance logs',
      'Work order assignments and history',
      'Skill certifications and availability',
    ],
    color: '#10B981',
  },
  {
    icon: Database,
    title: 'Financial Data',
    items: [
      'Invoice and billing records',
      'Payment transaction history',
      'Bank account info (for payroll, encrypted)',
      'Tax identification numbers',
    ],
    color: '#8B5CF6',
  },
]

const policySections = [
  {
    icon: Eye,
    title: 'How We Use Your Data',
    gradient: 'from-[#FFA31A] to-amber-500',
    items: [
      { title: 'Service Delivery', detail: 'Process timecards, manage shifts, generate invoices, and operate the QuickShift platform.' },
      { title: 'AI Features', detail: 'Power Timecard OCR, Auto Shifter scheduling, and smart worker-to-job matching.' },
      { title: 'Communications', detail: 'Send shift notifications, timecard approvals, and operational alerts via push, LINE, Zalo, or WhatsApp.' },
      { title: 'Analytics & Improvement', detail: 'Analyze usage patterns to improve features, fix bugs, and optimize platform performance.' },
      { title: 'Legal Compliance', detail: 'Fulfill labor law requirements, tax reporting, and regulatory obligations.' },
    ],
  },
  {
    icon: Lock,
    title: 'How We Protect Your Data',
    gradient: 'from-blue-500 to-blue-600',
    items: [
      { title: 'Encryption', detail: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Sensitive fields like bank accounts use additional application-level encryption.' },
      { title: 'Access Control', detail: 'Role-based access control (RBAC) with 5 permission levels. Only authorized personnel can access specific data scopes.' },
      { title: 'Infrastructure', detail: 'Hosted on AWS with VPC isolation, automated backups, and 24/7 monitoring. Database hosted on Amazon RDS with Multi-AZ redundancy.' },
      { title: 'Audit Logging', detail: 'All data access and modifications are logged with timestamps, user IDs, and IP addresses for accountability.' },
    ],
  },
  {
    icon: Settings,
    title: 'Data Sharing & Third Parties',
    gradient: 'from-purple-500 to-purple-600',
    items: [
      { title: 'Staffing Operations', detail: 'Worker profiles and availability are shared with assigned customer organizations for shift fulfillment purposes only.' },
      { title: 'Payment Processors', detail: 'Payment data is shared with Stripe and bank partners solely for transaction processing. We never store full card numbers.' },
      { title: 'AI Services', detail: 'Timecard images are processed by Google Gemini AI for OCR. Images are not retained by Google after processing.' },
      { title: 'Legal Obligations', detail: 'We may disclose data when required by law, court order, or to protect the safety of users and the public.' },
    ],
  },
]

/* ────────────────────────── Component ────────────────────────── */

export default function QuickShiftPrivacyClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ───── Hero ───── */}
      <section
        className="relative overflow-hidden text-white pt-20 pb-16"
        style={{ background: 'linear-gradient(135deg, #1a0e00 0%, #2a1600 50%, #1a0e00 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #FFA31A 0%, transparent 50%)' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 rounded-full border-[#FFA31A]/30 bg-[#FFA31A]/20 text-amber-200 backdrop-blur-sm px-4 py-2">
              <Shield className="mr-2 h-4 w-4" />
              QuickShift Privacy
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Privacy Policy &{' '}
              <span className="bg-gradient-to-r from-[#FFA31A] to-amber-400 bg-clip-text text-transparent">
                User Privacy Choices
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              QuickShift is committed to protecting your personal data. This policy explains what we collect, how we use it, and how you can manage your privacy.
            </p>

            <div className="mt-8 text-sm text-white/40">
              Last updated: <span className="font-semibold text-white/60">February 27, 2026</span>
              {' · '}Effective for all QuickShift apps (Worker, Customer, Business/HR)
            </div>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFA31A]/30 to-transparent" />
      </section>

      {/* ───── Data We Collect ───── */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">Data Collection</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Data We <span className="text-[#FFA31A]">Collect</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We collect only the data necessary to operate the QuickShift staffing platform and provide our services.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {dataCollected.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Card className="h-full border-gray-200/60 bg-white shadow-sm hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl shadow-md"
                        style={{ backgroundColor: `${category.color}15` }}
                      >
                        <category.icon className="h-5 w-5" style={{ color: category.color }} />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: category.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Policy Sections ───── */}
      {policySections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`py-16 lg:py-24 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${section.gradient} shadow-lg`}>
                  <section.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>

              <div className="space-y-5">
                {section.items.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#FFA31A] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="mt-1 text-gray-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ───── User Privacy Choices (Key Section) ───── */}
      <section id="privacy-choices" className="py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
        />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FFA31A 0%, transparent 50%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <Badge className="mb-6 rounded-full border-[#FFA31A]/30 bg-[#FFA31A]/20 text-amber-200 backdrop-blur-sm px-4 py-2">
              <UserCheck className="mr-2 h-4 w-4" />
              Your Rights
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              User Privacy <span className="bg-gradient-to-r from-[#FFA31A] to-amber-400 bg-clip-text text-transparent">Choices</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              You have full control over your personal data. Here&apos;s how you can access, modify, or delete it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: Eye,
                title: 'Access Your Data',
                description: 'Request a complete copy of all personal data we hold about you, exported in a machine-readable format (JSON/CSV).',
                action: 'Request Data Export',
              },
              {
                icon: Settings,
                title: 'Modify Your Data',
                description: 'Update your profile information, contact details, skills, certifications, and preferences directly in the app or by contacting us.',
                action: 'Update Profile',
              },
              {
                icon: Trash2,
                title: 'Delete Your Data',
                description: 'Request complete deletion of your account and all associated personal data. We will process your request within 30 days.',
                action: 'Request Deletion',
              },
              {
                icon: Mail,
                title: 'Marketing Opt-Out',
                description: 'Unsubscribe from marketing emails and promotional notifications at any time via app settings or the unsubscribe link in emails.',
                action: 'Manage Preferences',
              },
              {
                icon: Lock,
                title: 'Restrict Processing',
                description: 'Request that we limit how your data is processed while you verify its accuracy or contest our legal basis for processing.',
                action: 'Submit Request',
              },
              {
                icon: FileText,
                title: 'Data Portability',
                description: 'Receive your data in a structured format and transfer it to another service provider if you choose to switch platforms.',
                action: 'Request Transfer',
              },
            ].map((choice, index) => (
              <motion.div
                key={choice.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-md border-white/10 hover:bg-white/15 transition-all">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFA31A]/20">
                      <choice.icon className="h-5 w-5 text-[#FFA31A]" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{choice.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400 mb-4">{choice.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* How to exercise your rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 max-w-3xl mx-auto"
          >
            <Card className="bg-[#FFA31A]/10 border-[#FFA31A]/20 backdrop-blur-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">How to Exercise Your Privacy Rights</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To access, modify, or delete your data, you can use any of the following methods.
                  We will verify your identity and process your request within <strong className="text-white">30 business days</strong>.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="rounded-xl bg-white/10 p-4">
                    <Mail className="h-5 w-5 text-[#FFA31A] mx-auto mb-2" />
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:privacy@mercurysolutions.vn" className="text-[#FFA31A] hover:underline text-xs">
                      privacy@mercurysolutions.vn
                    </a>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <Smartphone className="h-5 w-5 text-[#FFA31A] mx-auto mb-2" />
                    <p className="text-white font-medium">In-App</p>
                    <p className="text-gray-400 text-xs">Settings → Privacy → Manage Data</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <FileText className="h-5 w-5 text-[#FFA31A] mx-auto mb-2" />
                    <p className="text-white font-medium">Contact Form</p>
                    <Link href="/contact" className="text-[#FFA31A] hover:underline text-xs">
                      mercurysolutions.vn/contact
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ───── Data Retention & Children ───── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-200/60 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                      <Database className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Data Retention</h3>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p><strong className="text-gray-800">Active accounts:</strong> Data retained while your account is active and for operational purposes.</p>
                    <p><strong className="text-gray-800">Deleted accounts:</strong> Personal data is permanently deleted within 90 days of account deletion. Anonymized analytics may be retained.</p>
                    <p><strong className="text-gray-800">Financial records:</strong> Invoice and payment records are retained for 7 years to comply with tax and accounting regulations.</p>
                    <p><strong className="text-gray-800">Timecard images:</strong> OCR-processed images are retained for 12 months for dispute resolution, then permanently deleted.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-gray-200/60 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                      <Shield className="h-5 w-5 text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Additional Policies</h3>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p><strong className="text-gray-800">Children&apos;s privacy:</strong> QuickShift is not intended for users under 16. We do not knowingly collect data from minors. If you believe a minor has provided data, contact us immediately.</p>
                    <p><strong className="text-gray-800">International transfers:</strong> Data may be processed in Vietnam and AWS regions (Singapore, Tokyo). All transfers comply with applicable data protection laws.</p>
                    <p><strong className="text-gray-800">Cookies & tracking:</strong> The QuickShift web CMS uses essential cookies only. Mobile apps use anonymized analytics. No third-party advertising trackers are used.</p>
                    <p><strong className="text-gray-800">Policy changes:</strong> We will notify users of material changes via email and in-app notification at least 30 days before they take effect.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #FFA31A 0%, #E8930F 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Questions About Your Privacy?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out to our privacy team for any questions or data requests.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#B87A00] hover:bg-gray-100 border-0 font-semibold">
              <a href="mailto:privacy@mercurysolutions.vn">
                <Mail className="mr-2 h-5 w-5" />
                privacy@mercurysolutions.vn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/quickshift">
                <ArrowRight className="mr-2 h-5 w-5" />
                Back to QuickShift
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
