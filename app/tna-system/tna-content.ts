import type { LucideIcon } from 'lucide-react'
import {
  Banknote,
  BarChart3,
  BadgeCheck,
  Building2,
  CalendarClock,
  CircleDollarSign,
  Factory,
  Fingerprint,
  GitBranch,
  Globe,
  Landmark,
  Layers3,
  LayoutGrid,
  LaptopMinimal,
  Languages,
  MapPinned,
  PanelTop,
  ReceiptText,
  ScanFace,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'

export type TnaLocale = 'en' | 'ja'

type ModuleKey =
  | 'employeeOrg'
  | 'aiAttendance'
  | 'shiftMgmt'
  | 'leaveOtLate'
  | 'payrollEngine'
  | 'salaryTemplate'
  | 'bonusDeduction'
  | 'misaIntegration'

export type TnaModule = {
  key: ModuleKey
  icon: LucideIcon
  accent: string
  title: string
  description: string
  bullets: string[]
}

type TnaScreen = {
  title: string
  description: string
  accent: string
}

type TnaFaqItem = {
  question: string
  answer: string
}

export type TnaContent = {
  meta: {
    title: string
    description: string
  }
  localeLabel: string
  localeSwitchLabel: string
  localeSwitchHref: string
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    proof: string[]
    stats: Array<{ value: string; label: string }>
  }
  problem: {
    eyebrow: string
    title: string
    description: string
    items: Array<{
      title: string
      description: string
      icon: LucideIcon
    }>
  }
  pillars: {
    eyebrow: string
    title: string
    description: string
    items: Array<{
      title: string
      description: string
      bullets: string[]
      icon: LucideIcon
    }>
  }
  modules: {
    eyebrow: string
    title: string
    description: string
    items: TnaModule[]
  }
  screens: {
    eyebrow: string
    title: string
    description: string
    items: TnaScreen[]
  }
  workflow: {
    eyebrow: string
    title: string
    description: string
    steps: Array<{
      title: string
      description: string
      icon: LucideIcon
    }>
  }
  compliance: {
    eyebrow: string
    title: string
    description: string
    bullets: string[]
    items: Array<{
      title: string
      description: string
      icon: LucideIcon
    }>
  }
  faq: {
    eyebrow: string
    title: string
    description: string
    items: TnaFaqItem[]
  }
  cta: {
    title: string
    description: string
    primary: string
    secondary: string
  }
}

const moduleIcons: Record<ModuleKey, LucideIcon> = {
  employeeOrg: Users,
  aiAttendance: ScanFace,
  shiftMgmt: CalendarClock,
  leaveOtLate: Workflow,
  payrollEngine: CircleDollarSign,
  salaryTemplate: LayoutGrid,
  bonusDeduction: Banknote,
  misaIntegration: Landmark,
}

const baseModuleAccents: Record<ModuleKey, string> = {
  employeeOrg: 'from-slate-950 via-slate-800 to-slate-700',
  aiAttendance: 'from-rose-950 via-rose-800 to-amber-700',
  shiftMgmt: 'from-blue-950 via-blue-800 to-cyan-700',
  leaveOtLate: 'from-amber-950 via-amber-800 to-orange-700',
  payrollEngine: 'from-emerald-950 via-emerald-800 to-teal-700',
  salaryTemplate: 'from-violet-950 via-violet-800 to-fuchsia-700',
  bonusDeduction: 'from-stone-950 via-stone-800 to-stone-600',
  misaIntegration: 'from-indigo-950 via-indigo-800 to-sky-700',
}

const buildModules = (items: Omit<TnaModule, 'icon' | 'accent'>[]): TnaModule[] =>
  items.map((item) => ({
    ...item,
    icon: moduleIcons[item.key],
    accent: baseModuleAccents[item.key],
  }))

export const tnaContent: Record<TnaLocale, TnaContent> = {
  en: {
    meta: {
      title: 'TNA HRM System | Factory Attendance, Payroll and MISA Sync',
      description:
        'A bilingual manufacturing landing page for Mercury Solutions TNA HRM System. One factory workflow for attendance capture, payroll calculation, compliance rules, and MISA accounting handoff.',
    },
    localeLabel: 'English',
    localeSwitchLabel: '日本語',
    localeSwitchHref: '/ja/tna-system',
    hero: {
      badge: 'Mercury TNA System',
      titleLine1: 'One factory system',
      titleLine2: 'for attendance, payroll, and MISA sync.',
      subtitle:
        'Built for manufacturing teams that need one clear operating model from gate check-in to payroll approval and accounting handoff. Less rekeying. Fewer exceptions. Faster close.',
      primaryCta: 'Explore Modules',
      secondaryCta: 'View Screen Proof',
      proof: ['English + Japanese routes', 'Factory-ready workflows', 'Role-based approvals'],
      stats: [
        { value: '8', label: 'modules' },
        { value: '6', label: 'workflow steps' },
        { value: '2', label: 'language routes' },
        { value: '5', label: 'operational roles' },
      ],
    },
    problem: {
      eyebrow: 'Why TNA now',
      title: 'Most factory operations fail at the handoff points.',
      description:
        'Attendance lives in one tool, payroll in another, and accounting still depends on exports and manual checks. The TNA system was designed to remove that friction.',
      items: [
        {
          title: 'Attendance is captured, but not trusted',
          description: 'When clock-in data is delayed or inconsistent, HR spends time reconciling exceptions instead of managing policy.',
          icon: ScanFace,
        },
        {
          title: 'Payroll is calculated, then rechecked by hand',
          description: 'Salary rules, bonuses, deductions, and overtime are often maintained across disconnected spreadsheets.',
          icon: CircleDollarSign,
        },
        {
          title: 'Accounting handoff breaks the flow',
          description: 'MISA sync should be a controlled publish step, not a retyping exercise after payroll approval.',
          icon: Landmark,
        },
      ],
    },
    pillars: {
      eyebrow: 'Solution pillars',
      title: 'Capture, calculate, and connect in one flow.',
      description:
        'The page is structured around the actual operating sequence so buyers can understand how the system behaves in production.',
      items: [
        {
          title: 'Capture',
          description: 'Record attendance, leave, and shift changes in a controlled daily workflow.',
          bullets: ['AI camera and workforce data', 'Shift exceptions and leave requests', 'Operational visibility for HR'],
          icon: ScanFace,
        },
        {
          title: 'Calculate',
          description: 'Translate attendance and policy rules into payroll output with transparent formulas.',
          bullets: ['Gross-to-net payroll logic', 'Allowance and deduction templates', 'Audit-friendly calculation steps'],
          icon: BarChart3,
        },
        {
          title: 'Connect',
          description: 'Push approved payroll records into accounting with status tracking and callback control.',
          bullets: ['MISA voucher sync', 'Dictionary updates', 'Role-based approval flow'],
          icon: GitBranch,
        },
      ],
    },
    modules: {
      eyebrow: 'Core modules',
      title: 'A system buyers can understand at a glance.',
      description:
        'Each module below mirrors a real operational block in the product: what it controls, why it exists, and how it reduces manual work.',
      items: buildModules([
        {
          key: 'employeeOrg',
          title: 'Employee & Organization Management',
          description: 'Keep employee master data, departments, and permissions aligned with the actual factory structure.',
          bullets: ['Employee records', 'Department hierarchy', 'Role matrix'],
        },
        {
          key: 'aiAttendance',
          title: 'AI Time & Attendance',
          description: 'Use camera-ready attendance capture to feed the same source of truth into payroll and reporting.',
          bullets: ['Face match flow', 'Realtime check-in', 'Timesheet sync'],
        },
        {
          key: 'shiftMgmt',
          title: 'Shift, Group Shift & Change',
          description: 'Model fixed and rotating shifts and manage swap requests without losing operational control.',
          bullets: ['Shift templates', 'Group assignments', 'Change approvals'],
        },
        {
          key: 'leaveOtLate',
          title: 'Leave, Overtime & Exceptions',
          description: 'Handle leave, overtime, late arrival, and early leave with policy-driven outcomes.',
          bullets: ['Leave types', 'Overtime rules', 'Late/Early cases'],
        },
        {
          key: 'payrollEngine',
          title: 'Payroll Engine',
          description: 'Calculate gross-to-net payroll with tax and insurance logic that can be reviewed before posting.',
          bullets: ['Automated run', 'Tax and insurance', 'Payslip output'],
        },
        {
          key: 'salaryTemplate',
          title: 'Salary Components & Templates',
          description: 'Build reusable salary formulas for workers, departments, and contract types.',
          bullets: ['Component library', 'Template mapping', 'Default formulas'],
        },
        {
          key: 'bonusDeduction',
          title: 'Bonus & Deduction Rules',
          description: 'Define recurring or targeted bonus/deduction rules and see their impact before approval.',
          bullets: ['Attendance bonus', 'Targeted deductions', 'Impact preview'],
        },
        {
          key: 'misaIntegration',
          title: 'MISA Accounting Integration',
          description: 'Synchronize dictionaries and voucher batches through a controlled API and callback process.',
          bullets: ['Voucher queue', 'Dictionary sync', 'Callback status'],
        },
      ]),
    },
    screens: {
      eyebrow: 'Screen proof',
      title: 'Show the software, not just the promise.',
      description:
        'These screen blocks keep the site credible. They show the actual operational surfaces the buyer would expect to see after the demo.',
      items: [
        {
          title: 'Dashboard overview',
          description: 'Daily attendance, pending approvals, and late/leave trends in one operational summary.',
          accent: 'from-slate-900 to-slate-700',
        },
        {
          title: 'Payroll run list',
          description: 'Monthly payroll batches with status, department, and staff counts before approval.',
          accent: 'from-emerald-900 to-teal-700',
        },
        {
          title: 'AI camera settings',
          description: 'Factory gates, locations, and sync status for real-world attendance capture.',
          accent: 'from-rose-900 to-orange-700',
        },
      ],
    },
    workflow: {
      eyebrow: 'Operational workflow',
      title: 'A clear sequence from setup to accounting handoff.',
      description:
        'The flow below mirrors how a factory team would actually onboard and run the system after launch.',
      steps: [
        {
          title: 'Set policy and calendar rules',
          description: 'Configure company calendars, shift defaults, approval roles, and policy exceptions.',
          icon: SlidersHorizontal,
        },
        {
          title: 'Define salary structure',
          description: 'Map formulas, allowances, deductions, and payroll templates to job groups.',
          icon: LayoutGrid,
        },
        {
          title: 'Register employees and attendance sources',
          description: 'Create employee profiles and connect cameras or other attendance sources to the factory.',
          icon: Users,
        },
        {
          title: 'Collect daily attendance data',
          description: 'Track check-in, leave, shift changes, and exception handling in one place.',
          icon: Fingerprint,
        },
        {
          title: 'Approve payroll output',
          description: 'Review calculated payroll batches, validate differences, and approve final numbers.',
          icon: BadgeCheck,
        },
        {
          title: 'Sync accounting and close the month',
          description: 'Publish the approved batch to MISA and move into payment and reporting close.',
          icon: Landmark,
        },
      ],
    },
    compliance: {
      eyebrow: 'Compliance & integration',
      title: 'Built for rules, audit trails, and controlled handoff.',
      description:
        'Manufacturing payroll is only credible when the rules are visible. The system exposes the calculation logic and the integration checkpoints that matter to operations and finance.',
      bullets: ['Tax and insurance logic is explicit, not hidden.', 'Callback-based sync lets teams see each accounting state.', 'Role-specific permissions keep approvals controlled.'],
      items: [
        {
          title: 'Policy engine',
          description: 'Capture overtime rates, allowances, deductions, and exception rules with traceable outcomes.',
          icon: ShieldCheck,
        },
        {
          title: 'Accounting sync',
          description: 'Push payroll vouchers and dictionary updates into MISA with queue and callback visibility.',
          icon: GitBranch,
        },
        {
          title: 'Access control',
          description: 'Support Admin, HR, Payroll Specialist, Department Manager, and Employee roles.',
          icon: Users,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'A few practical questions buyers usually ask.',
      description: 'Short answers help the page work like a sales asset instead of a documentation dump.',
      items: [
        {
          question: 'Can English and Japanese content live on separate routes?',
          answer: 'Yes. The English route stays canonical at /tna-system/, and the Japanese mirror is available at /ja/tna-system/.',
        },
        {
          question: 'Is this only a content refresh?',
          answer: 'No. The route layout, visual hierarchy, metadata, and content ordering are all updated to support the bilingual relaunch.',
        },
        {
          question: 'Does the page still show product proof?',
          answer: 'Yes. Screen blocks, workflow steps, and the integration section keep the page grounded in real product behavior.',
        },
        {
          question: 'Can buyers still contact the team from the page?',
          answer: 'Yes. The existing contact section remains at the bottom so the page still converts into a lead.',
        },
      ],
    },
    cta: {
      title: 'Ready to see TNA as a real factory operating system?',
      description:
        'Explore the modules, review the workflow, and use the route switch to compare English and Japanese versions side by side.',
      primary: 'Book a Demo',
      secondary: 'Switch to Japanese',
    },
  },
  ja: {
    meta: {
      title: 'TNA HRM システム | 勤怠・給与・MISA連携',
      description:
        'Mercury Solutions の TNA HRM システムを紹介する日英バイリンガルの製造業向けランディングページ。勤怠取得、給与計算、コンプライアンス、MISA会計連携までを一つの工場業務フローでまとめます。',
    },
    localeLabel: '日本語',
    localeSwitchLabel: 'English',
    localeSwitchHref: '/tna-system',
    hero: {
      badge: 'Mercury TNA システム',
      titleLine1: '勤怠、給与、MISA連携を',
      titleLine2: 'ひとつの工場向けシステムで。',
      subtitle:
        '打刻から給与承認、会計連携までを一本化し、工場の人事・給与業務を迷いなく回せる運用設計にします。転記を減らし、例外処理を減らし、締め処理を速くします。',
      primaryCta: 'モジュールを見る',
      secondaryCta: '画面証跡を見る',
      proof: ['日英2ルート対応', '製造現場向けワークフロー', '承認ロールを明確化'],
      stats: [
        { value: '8', label: 'モジュール' },
        { value: '6', label: '業務フロー' },
        { value: '2', label: '言語ルート' },
        { value: '5', label: '運用ロール' },
      ],
    },
    problem: {
      eyebrow: 'なぜ今TNAか',
      title: '工場業務は「つなぎ目」で止まりやすい。',
      description:
        '勤怠は別ツール、給与は別管理、会計はエクスポート頼み。TNA はその断絶をなくすために設計されています。',
      items: [
        {
          title: '打刻データはあるが、信頼に時間がかかる',
          description: '打刻の遅れや例外が多いと、人事は運用ではなく突合に時間を使うことになります。',
          icon: ScanFace,
        },
        {
          title: '給与計算は自動でも、最後は手作業で確認',
          description: '手当、控除、残業、例外処理が分散すると、締め前に再確認の負荷が集中します。',
          icon: CircleDollarSign,
        },
        {
          title: '会計連携で転記が発生する',
          description: 'MISA への連携は、承認後の確定処理として扱うべきで、再入力作業であってはなりません。',
          icon: Landmark,
        },
      ],
    },
    pillars: {
      eyebrow: '解決の柱',
      title: '「取得・計算・連携」を一つの流れにまとめる。',
      description:
        'このページは、実際の運用順に沿って構成し、導入後に何がどう動くのかを買い手がすぐ理解できるようにしています。',
      items: [
        {
          title: '取得',
          description: '勤怠、休暇、シフト変更を日次運用の中で一貫して記録します。',
          bullets: ['AIカメラと人員データ', '例外申請と休暇運用', '人事が追える可視性'],
          icon: ScanFace,
        },
        {
          title: '計算',
          description: '勤怠とルールを給与出力に変換し、式の見える化を保ちます。',
          bullets: ['総支給から手取りまで', '手当・控除テンプレート', '監査しやすい計算手順'],
          icon: BarChart3,
        },
        {
          title: '連携',
          description: '承認済み給与を会計へ送り、状態を追跡できるようにします。',
          bullets: ['MISA仕訳同期', '辞書更新', '承認フローの制御'],
          icon: GitBranch,
        },
      ],
    },
    modules: {
      eyebrow: '主要モジュール',
      title: '一目で理解できる工場向けシステム。',
      description:
        '以下のモジュールは、実際の業務ブロックに対応しています。何を制御し、なぜ必要で、どこで手作業を減らすかを明確にします。',
      items: buildModules([
        {
          key: 'employeeOrg',
          title: '従業員・組織管理',
          description: '従業員マスタ、部門、権限を工場の実態に合わせて整えます。',
          bullets: ['従業員記録', '部門階層', '権限マトリクス'],
        },
        {
          key: 'aiAttendance',
          title: 'AI勤怠',
          description: 'カメラ対応の打刻で、給与とレポートの元データを一本化します。',
          bullets: ['顔認証フロー', 'リアルタイム打刻', 'タイムシート同期'],
        },
        {
          key: 'shiftMgmt',
          title: 'シフト・グループシフト・変更',
          description: '固定シフトと交代制をモデル化し、交換申請も運用の中で管理します。',
          bullets: ['シフトテンプレート', 'グループ割当', '変更承認'],
        },
        {
          key: 'leaveOtLate',
          title: '休暇・残業・例外処理',
          description: '休暇、残業、遅刻、早退をポリシーに基づいて処理します。',
          bullets: ['休暇種別', '残業ルール', '遅刻/早退'],
        },
        {
          key: 'payrollEngine',
          title: '給与計算エンジン',
          description: '税・保険を含む総支給から手取りまでの計算を自動化します。',
          bullets: ['自動計算', '税・保険', '給与明細出力'],
        },
        {
          key: 'salaryTemplate',
          title: '給与構成・テンプレート',
          description: '職種や雇用形態ごとに使える給与テンプレートを組み立てます。',
          bullets: ['構成要素ライブラリ', 'テンプレート割当', '既定式'],
        },
        {
          key: 'bonusDeduction',
          title: '賞与・控除ルール',
          description: '定常・対象限定の賞与控除ルールを定義し、承認前に影響を確認します。',
          bullets: ['皆勤手当', '対象控除', '影響プレビュー'],
        },
        {
          key: 'misaIntegration',
          title: 'MISA会計連携',
          description: '辞書同期と仕訳バッチをAPIとコールバックで管理します。',
          bullets: ['仕訳キュー', '辞書同期', '状態トラッキング'],
        },
      ]),
    },
    screens: {
      eyebrow: '画面証跡',
      title: '約束ではなく、実際の画面を見せる。',
      description:
        '営業資料のような見せ方ではなく、現場でそのまま使う画面として見せます。',
      items: [
        {
          title: 'ダッシュボード概要',
          description: '日々の勤怠、未承認、遅刻・休暇の流れを一画面で把握できます。',
          accent: 'from-slate-900 to-slate-700',
        },
        {
          title: '給与実行一覧',
          description: '承認前の給与バッチを、部門別・人数別で確認できます。',
          accent: 'from-emerald-900 to-teal-700',
        },
        {
          title: 'AIカメラ設定',
          description: '工場ゲート、設置場所、同期状態を運用目線で整理できます。',
          accent: 'from-rose-900 to-orange-700',
        },
      ],
    },
    workflow: {
      eyebrow: '運用フロー',
      title: '設定から会計連携までの流れを明確に。',
      description:
        '導入後に工場チームが実際に運用する順序に合わせて整理しています。',
      steps: [
        {
          title: 'ポリシーとカレンダーを設定',
          description: '会社ルール、休日カレンダー、承認ロール、例外条件を登録します。',
          icon: SlidersHorizontal,
        },
        {
          title: '給与構成を定義',
          description: '手当、控除、給与式、テンプレートを職種別に設定します。',
          icon: LayoutGrid,
        },
        {
          title: '従業員と勤怠ソースを登録',
          description: '従業員情報を作成し、カメラなどの打刻元を工場に接続します。',
          icon: Users,
        },
        {
          title: '日次の勤怠データを収集',
          description: '打刻、休暇、シフト変更、例外処理を一つの画面で扱います。',
          icon: Fingerprint,
        },
        {
          title: '給与結果を承認',
          description: '計算結果を確認し、差分を検証して最終数値を承認します。',
          icon: BadgeCheck,
        },
        {
          title: '会計へ同期して月次締め',
          description: '承認済みデータを MISA に反映し、支払いと締め処理へ進めます。',
          icon: Landmark,
        },
      ],
    },
    compliance: {
      eyebrow: 'コンプライアンス・連携',
      title: 'ルール、監査、制御された受け渡しのために設計。',
      description:
        '製造業の給与は、ルールが見えることが重要です。計算ロジックと連携の確認ポイントを明示します。',
      bullets: ['税・保険のロジックが見える。', 'コールバックで会計状態を追える。', 'ロール別権限で承認を制御する。'],
      items: [
        {
          title: 'ポリシーエンジン',
          description: '残業率、手当、控除、例外条件を追跡可能な形で管理します。',
          icon: ShieldCheck,
        },
        {
          title: '会計同期',
          description: '給与仕訳と辞書更新を MISA に送信し、キューと状態を可視化します。',
          icon: GitBranch,
        },
        {
          title: 'アクセス制御',
          description: '管理者、人事、給与担当、部門管理者、従業員の権限を扱えます。',
          icon: Users,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: '導入前によくある確認事項。',
      description: '短く答えを返すことで、ページがドキュメントではなく営業資料として機能します。',
      items: [
        {
          question: '英語版と日本語版は別ルートで置けますか？',
          answer: 'はい。英語版は /tna-system/ を正規ルートにし、日本語版は /ja/tna-system/ に分けています。',
        },
        {
          question: '今回は見た目だけの変更ですか？',
          answer: 'いいえ。レイアウト、視線誘導、メタ情報、セクション順まで含めてバイリンガル向けに再設計しています。',
        },
        {
          question: '製品の証拠は残っていますか？',
          answer: 'はい。画面証跡、運用フロー、連携セクションで、実際のプロダクトの動きを見せています。',
        },
        {
          question: 'ページからそのまま問い合わせできますか？',
          answer: 'できます。既存の問い合わせセクションは残してあるので、ページはそのまま商談導線になります。',
        },
      ],
    },
    cta: {
      title: 'TNA を、工場の実運用システムとして見せませんか。',
      description:
        'モジュール、運用フロー、画面証跡を確認し、上部の切り替えで英語版と比較できます。',
      primary: 'デモを依頼する',
      secondary: '英語版へ切り替え',
    },
  },
}

export const tnaHeroIcons = {
  Globe,
  Languages,
  Factory,
  PanelTop,
  LaptopMinimal,
  Layers3,
  MapPinned,
  ReceiptText,
  Sparkles,
}
