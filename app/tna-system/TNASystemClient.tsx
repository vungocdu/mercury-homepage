'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  BadgeCheck,
  Banknote,
  CalendarDays,
  CalendarClock,
  CheckCircle2,
  Circle,
  CircleDollarSign,
  Cpu,
  Filter,
  FileSpreadsheet,
  FileText,
  Fingerprint,
  GitBranch,
  Landmark,
  LayoutGrid,
  ListFilter,
  Search,
  Settings2,
  ShieldAlert,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Users,
  UserCog,
  Wallet,
  Workflow,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars'
import { useLanguage } from '@/contexts/LanguageContext'
import { TextHighlight } from '@/components/text-highlight'
import { TextWordCarousel } from '@/components/word-carousel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type ModuleKey =
  | 'employeeOrg'
  | 'aiAttendance'
  | 'shiftMgmt'
  | 'leaveOtLate'
  | 'payrollEngine'
  | 'salaryTemplate'
  | 'bonusDeduction'
  | 'misaIntegration'

const moduleDefs: Array<{ key: ModuleKey; icon: typeof Users }> = [
  { key: 'employeeOrg', icon: Users },
  { key: 'aiAttendance', icon: ScanFace },
  { key: 'shiftMgmt', icon: CalendarClock },
  { key: 'leaveOtLate', icon: Workflow },
  { key: 'payrollEngine', icon: CircleDollarSign },
  { key: 'salaryTemplate', icon: LayoutGrid },
  { key: 'bonusDeduction', icon: Banknote },
  { key: 'misaIntegration', icon: Landmark },
]

const fallbackModuleCopy: Record<
  ModuleKey,
  { title: string; description: string; bullets: [string, string, string] }
> = {
  employeeOrg: {
    title: 'Employee & Organization Management',
    description: 'Manage employee profiles, department structure, and role-based access for HR, payroll, managers, and employees.',
    bullets: ['Employee master data', 'Department hierarchy', 'Role and permission matrix'],
  },
  aiAttendance: {
    title: 'AI Time & Attendance',
    description: 'Capture attendance in real-time with AI camera/biometric-ready flow and synchronize timesheet data for payroll.',
    bullets: ['Face-recognition flow', 'Realtime check-in/out', 'Timesheet synchronization'],
  },
  shiftMgmt: {
    title: 'Shift, Group Shift & Shift Change',
    description: 'Configure standard/rotating shifts, assign employees by group, and control shift-change requests with approval.',
    bullets: ['Shift templates', 'Group assignment', 'Shift change workflow'],
  },
  leaveOtLate: {
    title: 'Leave, Overtime, Late/Early Rules',
    description: 'Handle leave requests, overtime categories, and late/early scenarios with policy-based calculations.',
    bullets: ['Leave type and request', 'Overtime policy matrix', 'Late/early handling'],
  },
  payrollEngine: {
    title: 'Payroll Engine',
    description: 'Automate gross-to-net payroll with tax and insurance calculations aligned to Vietnamese labor regulations.',
    bullets: ['Automated payroll run', 'Tax and insurance logic', 'Payslip output'],
  },
  salaryTemplate: {
    title: 'Salary Components & Templates',
    description: 'Build reusable payroll templates with configurable allowances, deductions, and formula-based components.',
    bullets: ['Component library', 'Template assignment', 'Default salary settings'],
  },
  bonusDeduction: {
    title: 'Bonus & Deduction Management',
    description: 'Maintain additional income and deduction lists, apply targeted or bulk rules, and audit payroll impact.',
    bullets: ['Bonus list management', 'Deduction list management', 'Net-salary impact checks'],
  },
  misaIntegration: {
    title: 'MISA Accounting Integration',
    description: 'Push payroll accounting vouchers and synchronize employee dictionaries for end-to-end accounting automation.',
    bullets: ['Voucher sync API', 'Employee dictionary sync', 'Callback and sync monitoring'],
  },
}

function MockWindow({
  title,
  rightLabel,
  children,
}: {
  title: string
  rightLabel?: string
  children: ReactNode
}) {
  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3">
      <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <span className="text-[11px] text-slate-500">{title}</span>
        <span className="text-[11px] text-slate-500">{rightLabel || 'Live'}</span>
      </div>
      {children}
    </div>
  )
}

export default function TNASystemClient() {
  const { translations } = useLanguage()

  const getPathValue = (path: string): unknown => {
    const parts = path.split('.')
    let value: unknown = translations

    for (const part of parts) {
      if (value && typeof value === 'object' && part in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[part]
      } else {
        return undefined
      }
    }

    return value
  }

  const tr = (path: string, fallback: string): string => {
    const value = getPathValue(path)
    return typeof value === 'string' ? value : fallback
  }

  const coreModules = moduleDefs.map((module) => {
    const fallback = fallbackModuleCopy[module.key]
    return {
      ...module,
      title: tr(`it.tnaSystem.core.modules.${module.key}.title`, fallback.title),
      description: tr(`it.tnaSystem.core.modules.${module.key}.description`, fallback.description),
      bullets: [
        tr(`it.tnaSystem.core.modules.${module.key}.bullets.0`, fallback.bullets[0]),
        tr(`it.tnaSystem.core.modules.${module.key}.bullets.1`, fallback.bullets[1]),
        tr(`it.tnaSystem.core.modules.${module.key}.bullets.2`, fallback.bullets[2]),
      ],
    }
  })

  const implementationFlow = [
    tr('it.tnaSystem.workflow.steps.0', 'System and policy setup (company rules, calendar, shift defaults)'),
    tr('it.tnaSystem.workflow.steps.1', 'Salary structure and template configuration'),
    tr('it.tnaSystem.workflow.steps.2', 'Employee onboarding with profile and attendance source registration'),
    tr('it.tnaSystem.workflow.steps.3', 'Daily attendance and operational data collection'),
    tr('it.tnaSystem.workflow.steps.4', 'Payroll calculation, review, and approval'),
    tr('it.tnaSystem.workflow.steps.5', 'Accounting sync and payment execution'),
  ]

  const dashboardScreenStats = [
    { label: tr('it.tnaSystem.screenDesign.dashboard.kpi.totalStaff', 'Total Staff'), value: '1,842', color: 'text-slate-900', bar: 'bg-slate-400' },
    { label: tr('it.tnaSystem.screenDesign.dashboard.kpi.present', 'Present'), value: '1,716', color: 'text-emerald-700', bar: 'bg-emerald-500' },
    { label: tr('it.tnaSystem.screenDesign.dashboard.kpi.late', 'Late'), value: '64', color: 'text-amber-700', bar: 'bg-amber-500' },
    { label: tr('it.tnaSystem.screenDesign.dashboard.kpi.onLeave', 'On Leave'), value: '41', color: 'text-violet-700', bar: 'bg-violet-500' },
  ]

  const payrollRows = [
    {
      period: tr('it.tnaSystem.screenDesign.payroll.sample.period', 'Mar 2026'),
      status: tr('it.tnaSystem.screenDesign.payroll.sample.calculated', 'Calculated'),
      department: tr('it.tnaSystem.screenDesign.payroll.sample.assembly', 'Assembly'),
      employees: 642,
      tone: 'bg-blue-100 text-blue-700',
    },
    {
      period: tr('it.tnaSystem.screenDesign.payroll.sample.period', 'Mar 2026'),
      status: tr('it.tnaSystem.screenDesign.payroll.sample.approved', 'Approved'),
      department: tr('it.tnaSystem.screenDesign.payroll.sample.qa', 'QA'),
      employees: 221,
      tone: 'bg-emerald-100 text-emerald-700',
    },
    {
      period: tr('it.tnaSystem.screenDesign.payroll.sample.period', 'Mar 2026'),
      status: tr('it.tnaSystem.screenDesign.payroll.sample.draft', 'Draft'),
      department: tr('it.tnaSystem.screenDesign.payroll.sample.warehouse', 'Warehouse'),
      employees: 153,
      tone: 'bg-slate-100 text-slate-700',
    },
  ]

  const cameraRows = [
    {
      office: tr('it.tnaSystem.screenDesign.aiCamera.sample.officeA1', 'Factory A - Gate 1'),
      provider: 'Hanet',
      placeId: 'HN-A-001',
      active: true,
    },
    {
      office: tr('it.tnaSystem.screenDesign.aiCamera.sample.officeA2', 'Factory A - Gate 2'),
      provider: 'Hanet',
      placeId: 'HN-A-002',
      active: true,
    },
    {
      office: tr('it.tnaSystem.screenDesign.aiCamera.sample.officeB4', 'Factory B - Loading Dock'),
      provider: 'Hanet',
      placeId: 'HN-B-004',
      active: false,
    },
  ]

  const renderModuleMock = (moduleKey: ModuleKey) => {
    switch (moduleKey) {
      case 'employeeOrg':
        return (
          <MockWindow title={tr('it.tnaSystem.mock.employeeOrg.windowTitle', 'Staff / Department / User')} rightLabel={tr('it.tnaSystem.mock.common.live', 'Live')}>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-500">
                <Search className="mr-1 h-3 w-3" />
                {tr('it.tnaSystem.mock.employeeOrg.searchEmployee', 'Search employee')}
              </span>
              <span className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-500">
                <ListFilter className="mr-1 h-3 w-3" />
                {tr('it.tnaSystem.mock.employeeOrg.departmentFilter', 'Department')}
              </span>
            </div>
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="grid grid-cols-12 gap-2 bg-slate-100 px-2 py-1.5 text-[11px] font-medium text-slate-600">
                <span className="col-span-4">{tr('it.tnaSystem.mock.employeeOrg.columns.employee', 'Employee')}</span>
                <span className="col-span-4">{tr('it.tnaSystem.mock.employeeOrg.columns.department', 'Department')}</span>
                <span className="col-span-4">{tr('it.tnaSystem.mock.employeeOrg.columns.role', 'Role')}</span>
              </div>
              <div className="grid grid-cols-12 gap-2 border-t border-slate-100 px-2 py-2 text-[11px]">
                <span className="col-span-4 text-slate-700">EMP-00241</span>
                <span className="col-span-4 text-slate-700">{tr('it.tnaSystem.mock.employeeOrg.sample.department', 'Assembly A')}</span>
                <span className="col-span-4">
                  <span className="inline-flex rounded-full bg-blue-100 px-1.5 py-0.5 text-blue-700">{tr('it.tnaSystem.mock.employeeOrg.sample.role', 'HR Manager')}</span>
                </span>
              </div>
            </div>
          </MockWindow>
        )
      case 'aiAttendance':
        return (
          <MockWindow title={tr('it.tnaSystem.mock.aiAttendance.windowTitle', 'Timekeeping / AI Camera')} rightLabel={tr('it.tnaSystem.mock.aiAttendance.realtime', 'Realtime')}>
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div className="rounded-lg border border-slate-200 bg-white p-2">
                <p className="text-[10px] text-slate-500">{tr('it.tnaSystem.mock.aiAttendance.cards.present', 'Present')}</p>
                <p className="text-sm font-semibold text-emerald-700">1,716</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-2">
                <p className="text-[10px] text-slate-500">{tr('it.tnaSystem.mock.aiAttendance.cards.late', 'Late')}</p>
                <p className="text-sm font-semibold text-amber-700">64</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-2">
                <p className="text-[10px] text-slate-500">{tr('it.tnaSystem.mock.aiAttendance.cards.noCheckIn', 'No check-in')}</p>
                <p className="text-sm font-semibold text-red-700">21</p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-[11px]">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-slate-600">{tr('it.tnaSystem.mock.aiAttendance.events', 'Camera Events')}</span>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-1.5 py-0.5 text-emerald-700">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  {tr('it.tnaSystem.mock.aiAttendance.syncing', 'Syncing')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">{tr('it.tnaSystem.mock.aiAttendance.sampleEvent', 'Gate A · Face Match')}</span>
                <span className="text-slate-700">07:13:22</span>
              </div>
            </div>
          </MockWindow>
        )
      case 'shiftMgmt':
        return (
          <MockWindow title={tr('it.tnaSystem.mock.shiftMgmt.windowTitle', 'Shift / Group Shift / Change')} rightLabel={tr('it.tnaSystem.mock.common.live', 'Live')}>
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="grid grid-cols-12 gap-2 bg-slate-100 px-2 py-1.5 text-[11px] font-medium text-slate-600">
                <span className="col-span-4">{tr('it.tnaSystem.mock.shiftMgmt.columns.group', 'Group')}</span>
                <span className="col-span-3">{tr('it.tnaSystem.mock.shiftMgmt.columns.shift', 'Shift')}</span>
                <span className="col-span-3">{tr('it.tnaSystem.mock.shiftMgmt.columns.time', 'Time')}</span>
                <span className="col-span-2">{tr('it.tnaSystem.mock.shiftMgmt.columns.status', 'Status')}</span>
              </div>
              <div className="grid grid-cols-12 gap-2 border-t border-slate-100 px-2 py-2 text-[11px]">
                <span className="col-span-4 text-slate-700">{tr('it.tnaSystem.mock.shiftMgmt.lineA.group', 'Line A - Weekday')}</span>
                <span className="col-span-3 text-slate-700">{tr('it.tnaSystem.mock.shiftMgmt.lineA.shift', 'Morning')}</span>
                <span className="col-span-3 text-slate-700">07:00-15:00</span>
                <span className="col-span-2"><span className="inline-flex rounded-full bg-blue-100 px-1.5 py-0.5 text-blue-700">{tr('it.tnaSystem.mock.shiftMgmt.lineA.status', 'Running')}</span></span>
              </div>
              <div className="grid grid-cols-12 gap-2 border-t border-slate-100 px-2 py-2 text-[11px]">
                <span className="col-span-4 text-slate-700">{tr('it.tnaSystem.mock.shiftMgmt.lineB.group', 'Line B - Rotation')}</span>
                <span className="col-span-3 text-slate-700">{tr('it.tnaSystem.mock.shiftMgmt.lineB.shift', 'Night')}</span>
                <span className="col-span-3 text-slate-700">22:00-06:00</span>
                <span className="col-span-2"><span className="inline-flex rounded-full bg-amber-100 px-1.5 py-0.5 text-amber-700">{tr('it.tnaSystem.mock.shiftMgmt.lineB.status', 'Pending')}</span></span>
              </div>
            </div>
          </MockWindow>
        )
      case 'leaveOtLate':
        return (
          <MockWindow title={tr('it.tnaSystem.mock.leaveOtLate.windowTitle', 'Leave / Overtime / Late-Early')} rightLabel={tr('it.tnaSystem.mock.common.live', 'Live')}>
            <div className="mb-2 flex gap-2 text-[11px]">
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">{tr('it.tnaSystem.mock.leaveOtLate.tabs.leaveRequest', 'Leave Request')}</span>
              <span className="rounded-full bg-white border border-slate-200 px-2 py-0.5 text-slate-600">{tr('it.tnaSystem.mock.leaveOtLate.tabs.overtime', 'Overtime')}</span>
              <span className="rounded-full bg-white border border-slate-200 px-2 py-0.5 text-slate-600">{tr('it.tnaSystem.mock.leaveOtLate.tabs.lateEarly', 'Late/Early')}</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-2 py-2">
                <span className="text-slate-700">{tr('it.tnaSystem.mock.leaveOtLate.rows.leave', 'Leave · EMP-01021 · 1 day')}</span>
                <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-amber-700">{tr('it.tnaSystem.mock.leaveOtLate.status.awaiting', 'Awaiting')}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-2 py-2">
                <span className="text-slate-700">{tr('it.tnaSystem.mock.leaveOtLate.rows.overtime', 'OT · EMP-00403 · 3.5h')}</span>
                <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-emerald-700">{tr('it.tnaSystem.mock.leaveOtLate.status.approved', 'Approved')}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-2 py-2">
                <span className="text-slate-700">{tr('it.tnaSystem.mock.leaveOtLate.rows.late', 'Late · EMP-00210 · 18m')}</span>
                <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-slate-700">{tr('it.tnaSystem.mock.leaveOtLate.status.processed', 'Processed')}</span>
              </div>
            </div>
          </MockWindow>
        )
      case 'payrollEngine':
        return (
          <MockWindow title={tr('it.tnaSystem.mock.payroll.windowTitle', 'Payroll Calculation')} rightLabel={tr('it.tnaSystem.mock.payroll.rightLabel', 'Monthly Run')}>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-500"><CalendarDays className="mr-1 h-3 w-3" />{tr('it.tnaSystem.mock.payroll.period', 'Mar 2026')}</span>
              <span className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-500"><Filter className="mr-1 h-3 w-3" />{tr('it.tnaSystem.mock.payroll.departmentFilter', 'Department')}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-slate-200 bg-white p-2">
                <p className="text-[10px] text-slate-500">{tr('it.tnaSystem.mock.payroll.gross', 'Gross Payroll')}</p>
                <p className="text-sm font-semibold text-slate-900">$1,248,330</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-2">
                <p className="text-[10px] text-slate-500">{tr('it.tnaSystem.mock.payroll.net', 'Net Payroll')}</p>
                <p className="text-sm font-semibold text-emerald-700">$1,104,582</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-2 py-2 text-[11px]">
              <span className="flex items-center text-slate-600"><BarChart3 className="mr-1 h-3.5 w-3.5" />{tr('it.tnaSystem.mock.payroll.statusLabel', 'Calculation status')}</span>
              <span className="rounded-full bg-blue-100 px-1.5 py-0.5 text-blue-700">{tr('it.tnaSystem.mock.payroll.calculated', 'Calculated')}</span>
            </div>
          </MockWindow>
        )
      case 'salaryTemplate':
        return (
          <MockWindow title={tr('it.tnaSystem.mock.salaryTemplate.windowTitle', 'Salary Components / Templates')} rightLabel={tr('it.tnaSystem.mock.common.live', 'Live')}>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="rounded-lg border border-slate-200 bg-white p-2">
                <p className="mb-1 text-slate-500">{tr('it.tnaSystem.mock.salaryTemplate.libraryTitle', 'Component Library')}</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between"><span className="text-slate-700">{tr('it.tnaSystem.mock.salaryTemplate.baseSalary', 'Base Salary')}</span><Wallet className="h-3.5 w-3.5 text-slate-500" /></div>
                  <div className="flex items-center justify-between"><span className="text-slate-700">{tr('it.tnaSystem.mock.salaryTemplate.mealAllowance', 'Meal Allowance')}</span><Circle className="h-2.5 w-2.5 fill-emerald-500 text-emerald-500" /></div>
                  <div className="flex items-center justify-between"><span className="text-slate-700">{tr('it.tnaSystem.mock.salaryTemplate.insurance', 'Insurance')}</span><ShieldAlert className="h-3.5 w-3.5 text-violet-500" /></div>
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-2">
                <p className="mb-1 text-slate-500">{tr('it.tnaSystem.mock.salaryTemplate.templateTitle', 'Template Mapping')}</p>
                <div className="space-y-1 text-slate-700">
                  <p>{tr('it.tnaSystem.mock.salaryTemplate.templateName', 'Factory Worker V2')}</p>
                  <p className="text-slate-500">{tr('it.tnaSystem.mock.salaryTemplate.formulaGross', 'Gross = Base + OT + Bonus')}</p>
                  <p className="text-slate-500">{tr('it.tnaSystem.mock.salaryTemplate.formulaNet', 'Net = Gross - Tax - BHXH')}</p>
                  <span className="inline-flex rounded-full bg-emerald-100 px-1.5 py-0.5 text-emerald-700">{tr('it.tnaSystem.mock.salaryTemplate.active', 'Active')}</span>
                </div>
              </div>
            </div>
          </MockWindow>
        )
      case 'bonusDeduction':
        return (
          <MockWindow title={tr('it.tnaSystem.mock.bonusDeduction.windowTitle', 'Bonus / Deduction Lists')} rightLabel={tr('it.tnaSystem.mock.common.live', 'Live')}>
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="grid grid-cols-12 gap-2 bg-slate-100 px-2 py-1.5 text-[11px] font-medium text-slate-600">
                <span className="col-span-4">{tr('it.tnaSystem.mock.bonusDeduction.columns.item', 'Item')}</span>
                <span className="col-span-3">{tr('it.tnaSystem.mock.bonusDeduction.columns.type', 'Type')}</span>
                <span className="col-span-3">{tr('it.tnaSystem.mock.bonusDeduction.columns.rule', 'Rule')}</span>
                <span className="col-span-2 text-right">{tr('it.tnaSystem.mock.bonusDeduction.columns.amount', 'Amount')}</span>
              </div>
              <div className="grid grid-cols-12 gap-2 border-t border-slate-100 px-2 py-2 text-[11px]">
                <span className="col-span-4 text-slate-700">{tr('it.tnaSystem.mock.bonusDeduction.rows.bonusName', 'Attendance Bonus')}</span>
                <span className="col-span-3 text-emerald-700">{tr('it.tnaSystem.mock.bonusDeduction.rows.bonusType', 'Bonus')}</span>
                <span className="col-span-3 text-slate-700">{tr('it.tnaSystem.mock.bonusDeduction.rows.bonusRule', 'Monthly fixed')}</span>
                <span className="col-span-2 text-right text-emerald-700">+40</span>
              </div>
              <div className="grid grid-cols-12 gap-2 border-t border-slate-100 px-2 py-2 text-[11px]">
                <span className="col-span-4 text-slate-700">{tr('it.tnaSystem.mock.bonusDeduction.rows.deductionName', 'Advance Salary')}</span>
                <span className="col-span-3 text-rose-700">{tr('it.tnaSystem.mock.bonusDeduction.rows.deductionType', 'Deduction')}</span>
                <span className="col-span-3 text-slate-700">{tr('it.tnaSystem.mock.bonusDeduction.rows.deductionRule', 'Targeted')}</span>
                <span className="col-span-2 text-right text-rose-700">-120</span>
              </div>
            </div>
          </MockWindow>
        )
      case 'misaIntegration':
        return (
          <MockWindow title={tr('it.tnaSystem.mock.misa.windowTitle', 'MISA Sync Queue')} rightLabel={tr('it.tnaSystem.mock.misa.rightLabel', 'API Callback')}>
            <div className="rounded-lg border border-slate-200 bg-white p-2 text-[11px] mb-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center text-slate-700"><GitBranch className="mr-1 h-3.5 w-3.5 text-blue-600" />{tr('it.tnaSystem.mock.misa.queueTitle', 'Payroll Voucher Push')}</span>
                <span className="rounded-full bg-blue-100 px-1.5 py-0.5 text-blue-700">{tr('it.tnaSystem.mock.misa.inQueue', 'In Queue')}</span>
              </div>
              <div className="mt-1 text-slate-500">{tr('it.tnaSystem.mock.misa.batchInfo', 'Batch: 100 vouchers · Tenant: FUJIKIN-VN')}</div>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-2 py-1.5">
                <span className="flex items-center text-slate-600"><UserCog className="mr-1 h-3.5 w-3.5" />{tr('it.tnaSystem.mock.misa.dictionarySync', 'Dictionary Sync')}</span>
                <span className="text-emerald-700">{tr('it.tnaSystem.mock.misa.done', 'Done')}</span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-2 py-1.5">
                <span className="flex items-center text-slate-600"><FileSpreadsheet className="mr-1 h-3.5 w-3.5" />{tr('it.tnaSystem.mock.misa.voucherCreate', 'Voucher Create')}</span>
                <span className="text-blue-700">{tr('it.tnaSystem.mock.misa.processing', 'Processing')}</span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-2 py-1.5">
                <span className="flex items-center text-slate-600"><FileText className="mr-1 h-3.5 w-3.5" />{tr('it.tnaSystem.mock.misa.callbackStatus', 'Callback Status')}</span>
                <span className="text-slate-700">{tr('it.tnaSystem.mock.misa.awaiting', 'Awaiting')}</span>
              </div>
            </div>
          </MockWindow>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section — TNA Brand Pink #9D174D */}
      <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0a0a14 0%, #1a0e18 35%, #150a12 65%, #0a0a14 100%)' }}>
        {/* Gravity Stars Background */}
        <GravityStarsBackground
          className="absolute inset-0 text-pink-400"
          starsCount={120}
          starsSize={2.5}
          starsOpacity={0.6}
          glowIntensity={20}
          glowAnimation="spring"
          movementSpeed={0.2}
          mouseInfluence={150}
          mouseGravity="attract"
          gravityStrength={80}
        />

        {/* Subtle radial glow behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #9D174D 0%, transparent 70%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* Badge */}
            <Badge className="mb-8 rounded-full border-pink-400/20 bg-pink-500/10 text-pink-200 backdrop-blur-sm px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4 text-pink-300" />
              {tr('it.tnaSystem.hero.badge', 'Mercury TNA System')}
            </Badge>

            {/* Title with gradient accent — matching TNA gradient-text technique */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] max-w-5xl">
              <span className="text-white">
                {tr('it.tnaSystem.hero.title1', 'Digital HR & Payroll Platform')}
              </span>
              <br />
              <TextHighlight color="rgba(244, 114, 182, 0.3)" delay={0.8} duration={0.8}>
                <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400 bg-clip-text text-transparent">
                  {tr('it.tnaSystem.hero.title2', 'for Manufacturing Operations')}
                </span>
              </TextHighlight>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
              {tr('it.tnaSystem.hero.subtitle', 'End-to-end workforce management with AI attendance capture, shift & leave operations, payroll automation, and MISA accounting integration — built for Vietnamese manufacturing.')}{' '}
              <TextWordCarousel
                words={['AI Attendance', 'Shift Management', 'Payroll Automation', 'MISA Integration']}
                interval={2.5}
                className="text-pink-300 font-semibold"
              />
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#9D174D] hover:bg-[#831843] text-white border-0">
                <a href="#modules">
                  <Sparkles className="mr-2 h-5 w-5" />
                  {tr('it.tnaSystem.hero.cta.explore', 'Explore Modules')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-pink-400/25 text-pink-200 hover:text-white bg-pink-500/5 hover:bg-pink-500/10">
                <a href="#screens">
                  {tr('it.tnaSystem.hero.cta.viewScreens', 'View Screen Design')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Stats Cards — matching TNA landing stat-card pattern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
            >
              {[
                { number: '17+', label: tr('it.tnaSystem.hero.stats.pages', 'Functional Pages'), Icon: BadgeCheck },
                { number: '7', label: tr('it.tnaSystem.hero.stats.flows', 'Process Flows'), Icon: Cpu },
                { number: '5', label: tr('it.tnaSystem.hero.stats.userRoles', 'User Roles'), Icon: ShieldCheck },
                { number: '3', label: tr('it.tnaSystem.hero.stats.langs', 'Languages'), Icon: Fingerprint },
              ].map((stat) => (
                <div key={stat.label} className="group rounded-xl border border-pink-500/15 bg-white/[0.03] backdrop-blur-sm px-4 py-5 text-center transition-colors hover:bg-white/[0.06] hover:border-pink-500/25">
                  <stat.Icon className="mx-auto mb-2 h-5 w-5 text-pink-400/70" />
                  <div className="text-3xl font-bold bg-gradient-to-b from-pink-200 to-pink-400 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="mt-1 text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Gradient border bottom — TNA signature gradient-border technique */}
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
      </section>

      <section id="modules" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{tr('it.tnaSystem.core.title', 'Core Functional Modules')}</h2>
            <p className="mt-3 text-slate-600 text-lg">{tr('it.tnaSystem.core.description', 'TNA covers the full HRM and payroll lifecycle for manufacturing teams, from attendance input to accounting output.')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreModules.map((module, index) => (
              <motion.div
                key={module.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-[#9D174D]">
                      <module.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed mb-4">{module.description}</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {module.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start">
                          <span className="mt-1.5 mr-2 h-2 w-2 rounded-full bg-[#9D174D]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {renderModuleMock(module.key)}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="screens" className="bg-white py-16 lg:py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{tr('it.tnaSystem.screenDesign.title', 'TNA CMS Screen Design')}</h2>
            <p className="mt-3 text-slate-600 text-lg max-w-4xl">
              {tr('it.tnaSystem.screenDesign.description', 'Visualized from the TNA CMS frontend modules (`dashboard`, `payroll-calculation`, `settings/ai-camera`) to show how daily operation screens are organized.')}
            </p>
          </div>

          <div className="grid xl:grid-cols-3 gap-6 mb-10">
            <Card className="border-slate-200 shadow-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">{tr('it.tnaSystem.screenDesign.cards.dashboard', 'Dashboard Overview')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <span className="text-xs text-slate-500">{tr('it.tnaSystem.screenDesign.dashboard.realtime', 'Dashboard / Real-time')}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {dashboardScreenStats.map((item) => (
                      <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-2.5">
                        <p className="text-[11px] text-slate-500">{item.label}</p>
                        <p className={`text-base font-semibold ${item.color}`}>{item.value}</p>
                        <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div className={`h-full w-2/3 ${item.bar}`} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                      <p className="text-[11px] text-slate-500 mb-2">{tr('it.tnaSystem.screenDesign.dashboard.attendanceTrend', 'Attendance Trend')}</p>
                      <div className="h-14 flex items-end gap-1.5">
                        <span className="w-2.5 rounded-sm bg-blue-200 h-5" />
                        <span className="w-2.5 rounded-sm bg-blue-300 h-7" />
                        <span className="w-2.5 rounded-sm bg-blue-400 h-9" />
                        <span className="w-2.5 rounded-sm bg-blue-500 h-8" />
                        <span className="w-2.5 rounded-sm bg-blue-600 h-12" />
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                      <p className="text-[11px] text-slate-500 mb-2">{tr('it.tnaSystem.screenDesign.dashboard.pendingRequests', 'Pending Requests')}</p>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between"><span className="text-slate-600">{tr('it.tnaSystem.screenDesign.dashboard.pending.leave', 'Leave')}</span><span className="font-medium text-amber-700">14</span></div>
                        <div className="flex items-center justify-between"><span className="text-slate-600">{tr('it.tnaSystem.screenDesign.dashboard.pending.shiftChange', 'Shift change')}</span><span className="font-medium text-blue-700">9</span></div>
                        <div className="flex items-center justify-between"><span className="text-slate-600">{tr('it.tnaSystem.screenDesign.dashboard.pending.lateEarly', 'Late/Early')}</span><span className="font-medium text-violet-700">5</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">{tr('it.tnaSystem.screenDesign.cards.payroll', 'Payroll Calculation List')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500"><Search className="h-3.5 w-3.5" />{tr('it.tnaSystem.screenDesign.payroll.filterPeriodName', 'Period name')}</div>
                    <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500"><Filter className="h-3.5 w-3.5" />{tr('it.tnaSystem.screenDesign.payroll.filterDateRange', 'Date range')}</div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
                    <div className="grid grid-cols-12 gap-2 bg-slate-100 px-2 py-1.5 text-[11px] font-medium text-slate-600">
                      <span className="col-span-3">{tr('it.tnaSystem.screenDesign.payroll.columns.period', 'Period')}</span>
                      <span className="col-span-3">{tr('it.tnaSystem.screenDesign.payroll.columns.status', 'Status')}</span>
                      <span className="col-span-4">{tr('it.tnaSystem.screenDesign.payroll.columns.department', 'Department')}</span>
                      <span className="col-span-2 text-right">{tr('it.tnaSystem.screenDesign.payroll.columns.staff', 'Staff')}</span>
                    </div>
                    {payrollRows.map((row) => (
                      <div key={`${row.period}-${row.department}`} className="grid grid-cols-12 gap-2 px-2 py-2 border-t border-slate-100 text-[11px]">
                        <span className="col-span-3 text-slate-700">{row.period}</span>
                        <span className="col-span-3"><span className={`inline-flex rounded-full px-1.5 py-0.5 font-medium ${row.tone}`}>{row.status}</span></span>
                        <span className="col-span-4 text-slate-700">{row.department}</span>
                        <span className="col-span-2 text-right text-slate-700">{row.employees}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">{tr('it.tnaSystem.screenDesign.cards.aiCamera', 'AI Camera Settings')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-2.5 mb-2.5">
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="rounded border border-slate-200 px-2 py-1.5 text-slate-500">{tr('it.tnaSystem.screenDesign.aiCamera.officeLocation', 'Office / Location')}</div>
                      <div className="rounded border border-slate-200 px-2 py-1.5 text-slate-500">{tr('it.tnaSystem.screenDesign.aiCamera.provider', 'Provider')}: Hanet</div>
                      <div className="rounded border border-slate-200 px-2 py-1.5 text-slate-500 col-span-2">{tr('it.tnaSystem.screenDesign.aiCamera.placeIdToken', 'Place ID / Token')}</div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">{tr('it.tnaSystem.screenDesign.aiCamera.activeConfig', 'Active Configuration')}</span>
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700"><CheckCircle2 className="h-3 w-3 mr-1" />{tr('it.tnaSystem.screenDesign.aiCamera.connected', 'Connected')}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {cameraRows.map((row) => (
                      <div key={row.office} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-medium text-slate-700">{row.office}</p>
                          <p className="text-[10px] text-slate-500">{row.provider} · {row.placeId}</p>
                        </div>
                        {row.active ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <AlertCircle className="h-4 w-4 text-amber-600" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-2.5 flex items-center justify-end text-[11px] text-slate-500"><Settings2 className="h-3.5 w-3.5 mr-1.5" />{tr('it.tnaSystem.screenDesign.aiCamera.workflow', 'Save / Edit / Delete workflow')}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">{tr('it.tnaSystem.workflow.title', 'Operational Workflow')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {implementationFlow.map((step, index) => (
                    <li key={step} className="flex items-start">
                      <span className="mt-0.5 mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#9D174D] text-xs font-semibold text-white">{index + 1}</span>
                      <span className="text-slate-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">{tr('it.tnaSystem.compliance.title', 'Compliance & Integration')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 leading-relaxed">
                <p>{tr('it.tnaSystem.compliance.p1', 'Payroll logic includes tax and insurance handling (BHXH, BHYT, BHTN), configurable overtime rates, and policy-based rules for allowances and deductions.')}</p>
                <p>{tr('it.tnaSystem.compliance.p2', 'MISA integration automates accounting handoff by syncing employee dictionaries and pushing payroll vouchers through API and callback-based status tracking.')}</p>
                <p>{tr('it.tnaSystem.compliance.p3', 'Access control supports role-specific operation for Admin, HR Manager, Payroll Specialist, Department Manager, and Employee.')}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/">
                {tr('it.tnaSystem.backToItSolution', 'Back to IT Solutions')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
