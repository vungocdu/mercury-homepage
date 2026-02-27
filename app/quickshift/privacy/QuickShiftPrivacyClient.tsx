'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  Baby,
  Bell,
  Clock,
  Database,
  Eye,
  FileText,
  Globe,
  HardDrive,
  Lock,
  Mail,
  MapPin,
  Phone,
  Scale,
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
    title: 'Account & Identity Data',
    appleLabel: 'Contact Info, Identifiers',
    items: [
      'Full name, email address, phone number',
      'Company or organization name',
      'Role (Worker, Customer, Admin, Manager)',
      'Profile photo (optional)',
      'User ID and authentication tokens',
      'National ID or work permit number (for employment verification)',
    ],
    color: '#FFA31A',
  },
  {
    icon: Smartphone,
    title: 'Device & Technical Data',
    appleLabel: 'Diagnostics, Identifiers',
    items: [
      'Device model, OS version, app version',
      'IP address and approximate location (city-level)',
      'Push notification tokens (FCM / APNs)',
      'App usage analytics and crash logs',
      'Device identifiers (IDFV — not IDFA)',
      'Network type and carrier information',
    ],
    color: '#3B82F6',
  },
  {
    icon: FileText,
    title: 'Work & Operations Data',
    appleLabel: 'User Content, Sensitive Info',
    items: [
      'Timecard records, clock-in/out timestamps, and work hours',
      'Shift schedules, attendance logs, and leave requests',
      'Work order assignments, job descriptions, and history',
      'Skill certifications, qualifications, and availability',
      'Timecard photos and images submitted for OCR processing',
      'GPS coordinates at clock-in/out (when location services enabled)',
    ],
    color: '#10B981',
  },
  {
    icon: Database,
    title: 'Financial & Payment Data',
    appleLabel: 'Financial Info',
    items: [
      'Invoice and billing records',
      'Payment transaction history and amounts',
      'Bank account details (for payroll, encrypted at rest)',
      'Tax identification numbers (TIN/SSN)',
      'Salary rates and compensation history',
      'Payment method preferences',
    ],
    color: '#8B5CF6',
  },
]

const policySections = [
  {
    icon: Eye,
    title: 'How We Use Your Data',
    subtitle: 'Purpose & Legal Basis',
    gradient: 'from-[#FFA31A] to-amber-500',
    items: [
      { title: 'Service Delivery (Contractual Necessity)', detail: 'Process timecards, manage shifts, generate invoices, facilitate payroll, and operate the QuickShift platform. This is essential for providing the services you signed up for.' },
      { title: 'AI-Powered Features (Legitimate Interest)', detail: 'Power Timecard OCR (via Google Gemini AI), Auto Shifter scheduling, smart worker-to-job matching, and demand forecasting. AI processing is performed on anonymized or pseudonymized data where possible.' },
      { title: 'Communications (Contractual Necessity)', detail: 'Send shift notifications, timecard approval alerts, payroll summaries, and operational alerts via push notifications, LINE, Zalo, WhatsApp, or SMS.' },
      { title: 'Safety & Fraud Prevention (Legitimate Interest)', detail: 'Monitor for suspicious login activity, prevent unauthorized access, detect timecard fraud, and ensure platform security through automated systems.' },
      { title: 'Analytics & Improvement (Legitimate Interest)', detail: 'Analyze aggregated and anonymized usage patterns to improve features, fix bugs, optimize performance, and develop new capabilities.' },
      { title: 'Legal Compliance (Legal Obligation)', detail: 'Fulfill labor law requirements, tax reporting, social insurance obligations, workplace safety regulations, and respond to lawful government requests.' },
    ],
  },
  {
    icon: Lock,
    title: 'How We Protect Your Data',
    subtitle: 'Security Measures',
    gradient: 'from-blue-500 to-blue-600',
    items: [
      { title: 'Encryption in Transit & at Rest', detail: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Sensitive fields (bank accounts, national IDs, tax numbers) use additional application-level encryption with rotating keys.' },
      { title: 'Access Control & Authentication', detail: 'Role-based access control (RBAC) with 5 permission levels. Multi-factor authentication (MFA) available for admin accounts. All API access requires JWT tokens with short expiration.' },
      { title: 'Infrastructure Security', detail: 'Hosted on AWS with VPC isolation, WAF (Web Application Firewall), and DDoS protection. Database on Amazon RDS with Multi-AZ redundancy and automated encrypted backups.' },
      { title: 'Audit Logging & Monitoring', detail: 'All data access and modifications are logged with timestamps, user IDs, and IP addresses. Real-time alerting for suspicious activities. Security logs retained for 2 years.' },
      { title: 'Vulnerability Management', detail: 'Regular penetration testing, automated dependency scanning, and a responsible disclosure program. Security patches applied within 48 hours of critical vulnerabilities.' },
      { title: 'Incident Response', detail: 'Documented incident response plan with 24-hour breach notification to affected users and relevant authorities (as required by GDPR/PDPA). Recovery Time Objective (RTO) ≤ 1 hour.' },
    ],
  },
  {
    icon: Settings,
    title: 'Data Sharing & Third Parties',
    subtitle: 'Who We Share With & Why',
    gradient: 'from-purple-500 to-purple-600',
    items: [
      { title: 'Staffing Operations (Business Partners)', detail: 'Worker profiles (name, skills, certifications, availability) are shared with assigned customer organizations strictly for shift fulfillment purposes. Customers cannot access financial data or personal IDs.' },
      { title: 'Payment Processors', detail: 'Payment data is shared with Stripe and local bank partners solely for transaction processing. We never store full card numbers. Payment partners are PCI-DSS Level 1 certified.' },
      { title: 'AI Services (Google Gemini)', detail: 'Timecard images are sent to Google Gemini AI for OCR text extraction. Images are processed in real-time and are NOT retained by Google after processing. No personal data is used for model training.' },
      { title: 'Cloud Infrastructure (AWS)', detail: 'Data is stored on Amazon Web Services in the Asia Pacific (Singapore) region. AWS acts as a data processor under our Data Processing Agreement (DPA) and complies with SOC 2 Type II.' },
      { title: 'Analytics (Firebase / Google Analytics)', detail: 'Anonymized and aggregated usage data is sent to Firebase Analytics for app performance monitoring. No personally identifiable information (PII) is shared with analytics services.' },
      { title: 'Legal & Regulatory Authorities', detail: 'We may disclose data when required by law, court order, or to protect the safety of users and the public. We will notify you unless legally prohibited.' },
    ],
  },
]

const applePrivacyLabels = [
  { type: 'Data Used to Track You', value: 'None', description: 'QuickShift does not track you across other companies\' apps or websites. We do not use IDFA or participate in ad networks.' },
  { type: 'Data Linked to You', value: 'Contact Info, Identifiers, Financial Info, Location, User Content', description: 'Data that is associated with your identity for service delivery and account management.' },
  { type: 'Data Not Linked to You', value: 'Diagnostics, Usage Data', description: 'Anonymized crash reports and aggregated usage analytics that cannot be traced back to your identity.' },
]

const thirdPartySDKs = [
  { name: 'Firebase (Google)', purpose: 'Push notifications (FCM), crash reporting (Crashlytics), analytics', dataAccessed: 'Device tokens, crash logs, anonymized usage events' },
  { name: 'Google Gemini AI', purpose: 'Timecard OCR text extraction', dataAccessed: 'Timecard images (not retained after processing)' },
  { name: 'Stripe', purpose: 'Payment processing', dataAccessed: 'Payment method details, transaction amounts' },
  { name: 'LINE / Zalo / WhatsApp SDK', purpose: 'Messaging notifications', dataAccessed: 'Phone number, message content (shift alerts only)' },
  { name: 'Sentry', purpose: 'Error monitoring and performance tracking', dataAccessed: 'Stack traces, device info, anonymized user context' },
  { name: 'AWS SDK', purpose: 'Cloud storage, file uploads', dataAccessed: 'Uploaded files (timecard images, profile photos)' },
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
              QuickShift Privacy Policy
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Privacy Policy &{' '}
              <span className="bg-gradient-to-r from-[#FFA31A] to-amber-400 bg-clip-text text-transparent">
                User Privacy Choices
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              QuickShift is committed to protecting your personal data. This comprehensive privacy policy explains what data we collect,
              how we use and protect it, your rights and choices, and how to manage or delete your data.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/40">
              <span>Last updated: <span className="font-semibold text-white/60">February 27, 2026</span></span>
              <span className="hidden sm:inline">·</span>
              <span>Effective date: <span className="font-semibold text-white/60">February 27, 2026</span></span>
              <span className="hidden sm:inline">·</span>
              <span>Version: <span className="font-semibold text-white/60">2.0</span></span>
            </div>

            <p className="mt-4 text-sm text-white/40">
              Applies to: QuickShift Worker App, QuickShift Customer App, QuickShift Business/HR App (iOS & Android)
            </p>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFA31A]/30 to-transparent" />
      </section>

      {/* ───── Table of Contents ───── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <nav className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                { href: '#data-collection', label: '1. Data We Collect' },
                { href: '#data-usage', label: '2. How We Use Your Data' },
                { href: '#data-protection', label: '3. How We Protect Your Data' },
                { href: '#data-sharing', label: '4. Data Sharing & Third Parties' },
                { href: '#third-party-sdks', label: '5. Third-Party SDKs & Services' },
                { href: '#apple-privacy-labels', label: '6. App Privacy Details (App Store)' },
                { href: '#privacy-choices', label: '7. User Privacy Choices' },
                { href: '#account-deletion', label: '8. Account Deletion' },
                { href: '#data-retention', label: '9. Data Retention' },
                { href: '#children-privacy', label: '10. Children\'s Privacy' },
                { href: '#international-transfers', label: '11. International Data Transfers' },
                { href: '#legal-basis', label: '12. Legal Basis for Processing' },
                { href: '#policy-changes', label: '13. Changes to This Policy' },
                { href: '#contact-dpo', label: '14. Contact & Data Protection Officer' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-[#FFA31A] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ───── 1. Data We Collect ───── */}
      <section id="data-collection" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">Section 1</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Data We <span className="text-[#FFA31A]">Collect</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We collect only the data necessary to operate the QuickShift staffing platform and provide our services. Below are the categories of data we collect, mapped to Apple&apos;s App Store privacy labels.
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
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">{category.title}</h3>
                        <p className="text-xs text-gray-400">App Store Label: {category.appleLabel}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: category.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <Card className="border-amber-200/60 bg-amber-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold text-gray-900 mb-1">Location Data Disclosure</p>
                    <p>QuickShift collects <strong>precise location data</strong> (GPS coordinates) only at the moment of clock-in and clock-out,
                    and only when the user has granted location permission. Location data is used exclusively to verify that workers are at the correct job site.
                    QuickShift does <strong>not</strong> continuously track location in the background. You can revoke location permission at any time in your device settings.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ───── 2-4. Policy Sections (Usage, Protection, Sharing) ───── */}
      {policySections.map((section, sectionIndex) => (
        <section
          key={section.title}
          id={sectionIndex === 0 ? 'data-usage' : sectionIndex === 1 ? 'data-protection' : 'data-sharing'}
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
              <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">Section {sectionIndex + 2}</p>
              <div className="flex items-center gap-4 mb-2">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${section.gradient} shadow-lg`}>
                  <section.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{section.title}</h2>
                  {section.subtitle && <p className="text-sm text-gray-500">{section.subtitle}</p>}
                </div>
              </div>

              <div className="mt-8 space-y-5">
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

      {/* ───── 5. Third-Party SDKs ───── */}
      <section id="third-party-sdks" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">Section 5</p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg">
                <HardDrive className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Third-Party SDKs & Services</h2>
                <p className="text-sm text-gray-500">Libraries and services integrated into QuickShift apps</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Service / SDK</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Data Accessed</th>
                  </tr>
                </thead>
                <tbody>
                  {thirdPartySDKs.map((sdk) => (
                    <tr key={sdk.name} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-800">{sdk.name}</td>
                      <td className="py-3 px-4 text-gray-600">{sdk.purpose}</td>
                      <td className="py-3 px-4 text-gray-600">{sdk.dataAccessed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-blue-50 text-sm text-gray-700">
              <p><strong>App Tracking Transparency:</strong> QuickShift does <strong>not</strong> use the IDFA (Identifier for Advertisers)
              and does not track users across other apps or websites. Therefore, QuickShift will <strong>not</strong> trigger the iOS App
              Tracking Transparency (ATT) prompt. We do not participate in any advertising networks or data broker services.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 6. Apple App Store Privacy Labels ───── */}
      <section id="apple-privacy-labels" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">Section 6</p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg">
                <Smartphone className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">App Privacy Details</h2>
                <p className="text-sm text-gray-500">Apple App Store Privacy Nutrition Labels</p>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The following information reflects the privacy practices of the QuickShift apps as disclosed on the Apple App Store
              and Google Play Store, in accordance with Apple&apos;s App Store Review Guidelines (Section 5.1.1 and 5.1.2).
            </p>

            <div className="space-y-4">
              {applePrivacyLabels.map((label) => (
                <Card key={label.type} className="border-gray-200/60 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{label.type}</h3>
                        <p className="text-sm font-medium text-[#FFA31A] mb-2">{label.value}</p>
                        <p className="text-sm text-gray-600">{label.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 7. User Privacy Choices ───── */}
      <section id="privacy-choices" className="py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
        />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FFA31A 0%, transparent 50%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">Section 7</p>
            <Badge className="mb-6 rounded-full border-[#FFA31A]/30 bg-[#FFA31A]/20 text-amber-200 backdrop-blur-sm px-4 py-2">
              <UserCheck className="mr-2 h-4 w-4" />
              Your Rights
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              User Privacy <span className="bg-gradient-to-r from-[#FFA31A] to-amber-400 bg-clip-text text-transparent">Choices</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              You have full control over your personal data. Under GDPR (EU), PDPA (Thailand/Singapore),
              and Vietnamese data protection laws, you have the following rights:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: Eye,
                title: 'Right to Access',
                description: 'Request a complete copy of all personal data we hold about you, exported in a machine-readable format (JSON/CSV). We will provide your data within 30 days.',
              },
              {
                icon: Settings,
                title: 'Right to Rectification',
                description: 'Update or correct your profile information, contact details, skills, certifications, and preferences directly in the app or by contacting our privacy team.',
              },
              {
                icon: Trash2,
                title: 'Right to Erasure',
                description: 'Request complete deletion of your account and all associated personal data. We will process your request within 30 days, subject to legal retention requirements.',
              },
              {
                icon: Mail,
                title: 'Right to Opt-Out',
                description: 'Unsubscribe from marketing emails and promotional notifications at any time via app settings or the unsubscribe link in emails. Essential service notifications cannot be disabled.',
              },
              {
                icon: Lock,
                title: 'Right to Restrict Processing',
                description: 'Request that we limit how your data is processed while you verify its accuracy or contest our legal basis for processing it.',
              },
              {
                icon: FileText,
                title: 'Right to Data Portability',
                description: 'Receive your data in a structured, commonly used format (JSON/CSV) and transfer it to another service provider if you choose to switch platforms.',
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
                    <p className="text-sm leading-relaxed text-gray-400">{choice.description}</p>
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

      {/* ───── 8. Account Deletion (Apple Required) ───── */}
      <section id="account-deletion" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">Section 8</p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                <Trash2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Account Deletion</h2>
                <p className="text-sm text-gray-500">How to permanently delete your account and data</p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-red-200/60 bg-red-50/30">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">How to Delete Your Account</h3>
                  <p className="text-gray-600 mb-4">You can permanently delete your QuickShift account and all associated data using any of the following methods:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-[#FFA31A] text-sm mt-0.5">1.</span>
                      <p className="text-sm text-gray-700"><strong>In-App:</strong> Go to <strong>Settings → Account → Delete Account</strong>. Follow the confirmation prompts. Your account will be scheduled for permanent deletion.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-[#FFA31A] text-sm mt-0.5">2.</span>
                      <p className="text-sm text-gray-700"><strong>Email Request:</strong> Send an email to <a href="mailto:privacy@mercurysolutions.vn" className="text-[#FFA31A] hover:underline">privacy@mercurysolutions.vn</a> with subject line &ldquo;Account Deletion Request&rdquo; from the email associated with your account.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-[#FFA31A] text-sm mt-0.5">3.</span>
                      <p className="text-sm text-gray-700"><strong>Contact Form:</strong> Submit a deletion request via <Link href="/contact" className="text-[#FFA31A] hover:underline">mercurysolutions.vn/contact</Link> with your registered email address.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200/60">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What Happens When You Delete Your Account</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p><strong>Grace period:</strong> 14-day cooling-off period during which you can reactivate your account by logging in.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Trash2 className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p><strong>Data deleted:</strong> Profile information, login credentials, work preferences, shift history, timecard images, and device tokens are permanently deleted within 30 days after the grace period.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Database className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p><strong>Data retained:</strong> Financial records (invoices, payment history, tax documents) are retained for 7 years as required by tax and accounting regulations. These records are anonymized where possible.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p><strong>Audit logs:</strong> Security audit logs containing your actions are retained for 2 years for fraud prevention and legal compliance, then permanently deleted.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 9-13. Additional Policies ───── */}
      <section id="data-retention" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">Sections 9–13</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10">Additional Policies & Disclosures</h2>

            <div className="space-y-6">
              {/* Data Retention */}
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="border-gray-200/60 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                        <Clock className="h-5 w-5 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">9. Data Retention Periods</h3>
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p><strong className="text-gray-800">Active accounts:</strong> Data is retained while your account is active and for the duration of our service relationship.</p>
                      <p><strong className="text-gray-800">Deleted accounts:</strong> Personal data is permanently deleted within 30 days after the 14-day grace period (44 days total from deletion request). Anonymized analytics may be retained indefinitely.</p>
                      <p><strong className="text-gray-800">Financial records:</strong> Invoice, payment, and tax records are retained for 7 years to comply with Vietnamese tax law (Luật Thuế) and international accounting standards.</p>
                      <p><strong className="text-gray-800">Timecard images:</strong> OCR-processed images are retained for 12 months for dispute resolution, then permanently deleted from all storage systems including backups.</p>
                      <p><strong className="text-gray-800">Security logs:</strong> Access and audit logs are retained for 2 years, then permanently deleted.</p>
                      <p><strong className="text-gray-800">Backup data:</strong> Encrypted backups are rotated on a 90-day cycle. Deleted data is purged from all backups within 90 days of deletion.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Children's Privacy */}
              <motion.div id="children-privacy" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
                <Card className="border-gray-200/60 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/10">
                        <Baby className="h-5 w-5 text-pink-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">10. Children&apos;s Privacy</h3>
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>QuickShift is a <strong className="text-gray-800">workforce management platform</strong> designed exclusively for adults.
                      Our services are <strong className="text-gray-800">not intended for children under the age of 16</strong> (or the applicable minimum age in your jurisdiction).</p>
                      <p>We do not knowingly collect, use, or disclose personal information from children under 16.
                      If we learn that we have inadvertently collected data from a child under 16, we will take immediate steps to delete such data from our servers.</p>
                      <p>If you are a parent or guardian and believe that your child has provided personal data to QuickShift,
                      please contact us at <a href="mailto:privacy@mercurysolutions.vn" className="text-[#FFA31A] hover:underline">privacy@mercurysolutions.vn</a> and we will promptly delete the information.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* International Transfers */}
              <motion.div id="international-transfers" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Card className="border-gray-200/60 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10">
                        <Globe className="h-5 w-5 text-indigo-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">11. International Data Transfers</h3>
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>Your data may be processed in the following locations:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li><strong className="text-gray-800">Vietnam</strong> — Primary business operations and application servers</li>
                        <li><strong className="text-gray-800">Singapore (AWS ap-southeast-1)</strong> — Primary cloud infrastructure and database hosting</li>
                        <li><strong className="text-gray-800">United States</strong> — Firebase services (Google LLC), Stripe payment processing, Sentry error monitoring</li>
                      </ul>
                      <p>All international data transfers are conducted in compliance with applicable data protection laws. We use Standard Contractual Clauses (SCCs)
                      and Data Processing Agreements (DPAs) with all third-party processors to ensure adequate protection of your data.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Legal Basis */}
              <motion.div id="legal-basis" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                <Card className="border-gray-200/60 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                        <Scale className="h-5 w-5 text-emerald-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">12. Legal Basis for Processing</h3>
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>We process your personal data under the following legal bases (per GDPR Article 6 and equivalent local laws):</p>
                      <div className="space-y-2">
                        <p><strong className="text-gray-800">Contractual Necessity (Art. 6(1)(b)):</strong> Processing necessary to provide our staffing management services — account management, shift scheduling, timecard processing, payroll, and invoicing.</p>
                        <p><strong className="text-gray-800">Legitimate Interest (Art. 6(1)(f)):</strong> AI-powered features (OCR, auto-scheduling), platform security, fraud prevention, and service improvement. We conduct balancing tests to ensure our interests do not override your rights.</p>
                        <p><strong className="text-gray-800">Legal Obligation (Art. 6(1)(c)):</strong> Tax reporting, labor law compliance, social insurance records, and responses to lawful government requests.</p>
                        <p><strong className="text-gray-800">Consent (Art. 6(1)(a)):</strong> Location data collection, marketing communications, and optional data sharing. You can withdraw consent at any time without affecting the lawfulness of prior processing.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Policy Changes */}
              <motion.div id="policy-changes" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Card className="border-gray-200/60 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10">
                        <Bell className="h-5 w-5 text-amber-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">13. Changes to This Policy</h3>
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>
                      <p><strong className="text-gray-800">Material changes:</strong> We will notify users of significant changes via email and in-app push notification at least <strong>30 days before</strong> they take effect.
                      You will be asked to review and acknowledge the updated policy.</p>
                      <p><strong className="text-gray-800">Minor changes:</strong> Non-material updates (formatting, clarifications) may be made without advance notice.
                      The &ldquo;Last updated&rdquo; date at the top of this page will always reflect the most recent revision.</p>
                      <p><strong className="text-gray-800">Continued use:</strong> By continuing to use QuickShift after changes take effect, you agree to the updated Privacy Policy.
                      If you disagree with the changes, you may delete your account at any time.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 14. Contact & DPO ───── */}
      <section id="contact-dpo" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-[#FFA31A] mb-3 text-sm font-semibold tracking-wider uppercase">Section 14</p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFA31A] to-amber-500 shadow-lg">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Contact & Data Protection Officer</h2>
                <p className="text-sm text-gray-500">How to reach us about privacy matters</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-gray-200/60 shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Data Controller</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p className="font-semibold text-gray-800">Mercury Solutions Vietnam Company Limited</p>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p>5th Floor, 33/41 Thai Ha Street, Dong Da District, Hanoi, Vietnam</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <a href="tel:+842466636480" className="hover:text-[#FFA31A]">024 6663 6480</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <a href="mailto:info@mercurysolutions.vn" className="hover:text-[#FFA31A]">info@mercurysolutions.vn</a>
                    </div>
                    <p className="text-xs text-gray-400">Tax Code: 0110235195</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200/60 shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Privacy & Data Protection</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>For all privacy-related inquiries, data access requests, deletion requests, or complaints:</p>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#FFA31A] flex-shrink-0" />
                      <a href="mailto:privacy@mercurysolutions.vn" className="text-[#FFA31A] font-semibold hover:underline">privacy@mercurysolutions.vn</a>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      We aim to respond to all privacy requests within <strong>30 business days</strong>.
                      If you are not satisfied with our response, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <Card className="border-amber-200/60 bg-amber-50/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold text-gray-900 mb-1">Governing Law</p>
                      <p>This Privacy Policy is governed by the laws of the Socialist Republic of Vietnam.
                      For users in the European Economic Area (EEA), the provisions of GDPR apply to the extent they provide greater protection.
                      For users in Thailand or Singapore, the respective PDPA provisions apply. Any disputes shall be resolved
                      by the competent courts of Hanoi, Vietnam, unless local law requires otherwise.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #FFA31A 0%, #E8930F 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Questions About Your Privacy?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out to our privacy team for any questions, data access requests, or account deletion.
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
