import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  Box,
  Briefcase,
  Building2,
  CircleDollarSign,
  ClipboardCheck,
  Cog,
  GitMerge,
  Globe,
  Layers3,
  LayoutGrid,
  Link2,
  Package,
  ShoppingCart,
  Store,
  Users,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react'

export type ErpLocale = 'en' | 'vi'

export type ErpModule = {
  key: string
  icon: LucideIcon
  accent: string
  bgGradient: string
  title: string
  description: string
  bullets: string[]
}

export type ErpContent = {
  meta: {
    title: string
    description: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    stats: Array<{ value: string; label: string }>
    trusted: string
  }
  problem: {
    eyebrow: string
    title: string
    description: string
    pains: Array<{ title: string; body: string }>
  }
  modules: {
    eyebrow: string
    title: string
    description: string
    items: ErpModule[]
  }
  customization: {
    eyebrow: string
    title: string
    description: string
    capabilities: Array<{ icon: LucideIcon; title: string; body: string }>
  }
  process: {
    eyebrow: string
    title: string
    description: string
    steps: Array<{ number: string; title: string; body: string; duration: string }>
  }
  whyMercury: {
    eyebrow: string
    title: string
    description: string
    points: Array<{ icon: LucideIcon; title: string; body: string }>
  }
  cta: {
    title: string
    subtitle: string
    primaryBtn: string
    secondaryBtn: string
  }
}

const MODULES_EN: ErpModule[] = [
  {
    key: 'accounting',
    icon: CircleDollarSign,
    accent: 'text-emerald-400',
    bgGradient: 'from-emerald-500/10 to-teal-500/5',
    title: 'Accounting & Finance',
    description: 'Double-entry bookkeeping, multi-currency, budgeting, and comprehensive financial reporting.',
    bullets: ['Chart of Accounts & Journal Entries', 'Multi-company & Multi-currency', 'Bank Reconciliation', 'GST / VAT Tax Compliance', 'Budget Control & Cost Centers'],
  },
  {
    key: 'buying',
    icon: ShoppingCart,
    accent: 'text-blue-400',
    bgGradient: 'from-blue-500/10 to-indigo-500/5',
    title: 'Procurement & Buying',
    description: 'End-to-end procurement from RFQ to supplier payment with full traceability.',
    bullets: ['RFQ & Supplier Evaluation', 'Purchase Order Management', 'Supplier Scorecards', 'Invoice Matching & Payment', 'Cost & Spend Analysis'],
  },
  {
    key: 'selling',
    icon: BarChart3,
    accent: 'text-orange-400',
    bgGradient: 'from-orange-500/10 to-amber-500/5',
    title: 'Sales & Selling',
    description: 'Streamline your entire sales cycle from quotation to cash collection.',
    bullets: ['Quotation & Sales Orders', 'Customer Credit Management', 'Pricing Rules & Discounts', 'Commission Tracking', 'Sales Analytics & Reports'],
  },
  {
    key: 'stock',
    icon: Package,
    accent: 'text-violet-400',
    bgGradient: 'from-violet-500/10 to-purple-500/5',
    title: 'Inventory & Warehouse',
    description: 'Real-time stock visibility across multiple warehouses with full movement traceability.',
    bullets: ['Multi-warehouse Management', 'Batch & Serial Number Tracking', 'Stock Reconciliation', 'Valuation Methods (FIFO, LIFO)', 'Reorder & Replenishment'],
  },
  {
    key: 'manufacturing',
    icon: Cog,
    accent: 'text-cyan-400',
    bgGradient: 'from-cyan-500/10 to-sky-500/5',
    title: 'Manufacturing',
    description: 'Bill of Materials, Work Orders, and production scheduling in one unified system.',
    bullets: ['Bill of Materials (BOM)', 'Work Order & Job Cards', 'Workstation Management', 'Production Scheduling', 'Scrap & By-product Handling'],
  },
  {
    key: 'pos',
    icon: Store,
    accent: 'text-rose-400',
    bgGradient: 'from-rose-500/10 to-pink-500/5',
    title: 'Point of Sale',
    description: 'Modern POS with real-time inventory sync and flexible payment options.',
    bullets: ['Offline-capable POS', 'Real-time Stock Updates', 'Multi-payment Methods', 'Loyalty Programs', 'Shift Closing & Reports'],
  },
  {
    key: 'quality',
    icon: BadgeCheck,
    accent: 'text-lime-400',
    bgGradient: 'from-lime-500/10 to-green-500/5',
    title: 'Quality Management',
    description: 'Inspection templates, non-conformance tracking, and supplier quality control.',
    bullets: ['Quality Inspection Templates', 'Non-Conformance Reports', 'Batch & Lot Traceability', 'Supplier Quality Audit', 'Quality Analytics Dashboard'],
  },
  {
    key: 'assets',
    icon: Building2,
    accent: 'text-yellow-400',
    bgGradient: 'from-yellow-500/10 to-amber-500/5',
    title: 'Asset Management',
    description: 'Track, depreciate, and manage the full lifecycle of fixed assets.',
    bullets: ['Asset Registry & Categories', 'Depreciation Schedules', 'Maintenance Tracking', 'Asset Disposal & Transfer', 'IFRS-compliant Reporting'],
  },
  {
    key: 'crm',
    icon: Users,
    accent: 'text-sky-400',
    bgGradient: 'from-sky-500/10 to-blue-500/5',
    title: 'CRM',
    description: 'Capture leads, track opportunities, and nurture customer relationships at scale.',
    bullets: ['Lead & Opportunity Pipeline', 'Customer 360° Profile', 'Activity & Task Scheduling', 'Sales Forecasting', 'Email Campaign Integration'],
  },
  {
    key: 'projects',
    icon: Briefcase,
    accent: 'text-fuchsia-400',
    bgGradient: 'from-fuchsia-500/10 to-purple-500/5',
    title: 'Project Management',
    description: 'Plan, track, and bill projects with full integration to accounting and HR.',
    bullets: ['Task & Milestone Tracking', 'Timesheet & Time Logs', 'Project Costing', 'Milestone-based Billing', 'Resource Allocation'],
  },
  {
    key: 'subcontracting',
    icon: GitMerge,
    accent: 'text-teal-400',
    bgGradient: 'from-teal-500/10 to-cyan-500/5',
    title: 'Subcontracting',
    description: 'Manage outsourced production workflows with raw material supply tracking.',
    bullets: ['Subcontract Purchase Orders', 'Raw Material Supply Tracking', 'Service Receipt Management', 'Cost Capture & Analysis', 'Inward Subcontracting Support'],
  },
  {
    key: 'integrations',
    icon: Link2,
    accent: 'text-indigo-400',
    bgGradient: 'from-indigo-500/10 to-blue-500/5',
    title: 'Integrations',
    description: 'Connect ERPNext to e-commerce, payment gateways, and cloud services via REST API.',
    bullets: ['Shopify, WooCommerce, Amazon', 'Stripe, Razorpay, GoCardless', 'Google Workspace, LDAP', 'Dropbox, Google Drive, S3', 'Custom REST API & Webhooks'],
  },
]

const MODULES_VI: ErpModule[] = [
  {
    key: 'accounting',
    icon: CircleDollarSign,
    accent: 'text-emerald-400',
    bgGradient: 'from-emerald-500/10 to-teal-500/5',
    title: 'Kế Toán & Tài Chính',
    description: 'Kế toán kép, đa tiền tệ, lập ngân sách và báo cáo tài chính toàn diện.',
    bullets: ['Hệ thống tài khoản & bút toán', 'Đa công ty & đa tiền tệ', 'Đối soát ngân hàng', 'Kê khai thuế GTGT', 'Kiểm soát ngân sách & trung tâm chi phí'],
  },
  {
    key: 'buying',
    icon: ShoppingCart,
    accent: 'text-blue-400',
    bgGradient: 'from-blue-500/10 to-indigo-500/5',
    title: 'Mua Hàng & Nhà Cung Cấp',
    description: 'Quản lý toàn bộ quy trình mua hàng từ RFQ đến thanh toán nhà cung cấp.',
    bullets: ['Yêu cầu báo giá & đánh giá NCC', 'Đơn đặt hàng & theo dõi giao hàng', 'Chấm điểm nhà cung cấp', 'Khớp hóa đơn & thanh toán', 'Phân tích chi phí mua sắm'],
  },
  {
    key: 'selling',
    icon: BarChart3,
    accent: 'text-orange-400',
    bgGradient: 'from-orange-500/10 to-amber-500/5',
    title: 'Bán Hàng',
    description: 'Tối ưu hóa toàn bộ chu kỳ bán hàng từ báo giá đến thu tiền.',
    bullets: ['Báo giá & đơn hàng bán', 'Quản lý công nợ khách hàng', 'Quy tắc giá & chiết khấu', 'Theo dõi hoa hồng bán hàng', 'Phân tích & báo cáo doanh số'],
  },
  {
    key: 'stock',
    icon: Package,
    accent: 'text-violet-400',
    bgGradient: 'from-violet-500/10 to-purple-500/5',
    title: 'Kho Vận & Tồn Kho',
    description: 'Theo dõi tồn kho thời gian thực trên nhiều kho với đầy đủ lịch sử biến động.',
    bullets: ['Quản lý đa kho hàng', 'Theo dõi lô hàng & số serial', 'Kiểm kê kho định kỳ', 'Phương pháp tính giá (FIFO, bình quân)', 'Cảnh báo & tự động đặt hàng lại'],
  },
  {
    key: 'manufacturing',
    icon: Cog,
    accent: 'text-cyan-400',
    bgGradient: 'from-cyan-500/10 to-sky-500/5',
    title: 'Sản Xuất',
    description: 'Định mức vật liệu, lệnh sản xuất và lập kế hoạch sản xuất trên một nền tảng.',
    bullets: ['Định mức nguyên liệu (BOM)', 'Lệnh sản xuất & thẻ công việc', 'Quản lý công đoạn sản xuất', 'Lập kế hoạch sản xuất', 'Xử lý phế liệu & sản phẩm phụ'],
  },
  {
    key: 'pos',
    icon: Store,
    accent: 'text-rose-400',
    bgGradient: 'from-rose-500/10 to-pink-500/5',
    title: 'Bán Hàng Tại Quầy (POS)',
    description: 'POS hiện đại đồng bộ tồn kho thời gian thực và hỗ trợ đa phương thức thanh toán.',
    bullets: ['POS hoạt động offline', 'Cập nhật tồn kho tức thì', 'Đa phương thức thanh toán', 'Chương trình tích điểm & khách hàng thân thiết', 'Báo cáo ca làm việc & chốt ngày'],
  },
  {
    key: 'quality',
    icon: BadgeCheck,
    accent: 'text-lime-400',
    bgGradient: 'from-lime-500/10 to-green-500/5',
    title: 'Quản Lý Chất Lượng',
    description: 'Mẫu kiểm định, theo dõi sự không phù hợp và kiểm soát chất lượng nhà cung cấp.',
    bullets: ['Mẫu phiếu kiểm tra chất lượng', 'Báo cáo không phù hợp (NCR)', 'Truy xuất nguồn gốc lô/mẻ', 'Đánh giá chất lượng nhà cung cấp', 'Dashboard phân tích chất lượng'],
  },
  {
    key: 'assets',
    icon: Building2,
    accent: 'text-yellow-400',
    bgGradient: 'from-yellow-500/10 to-amber-500/5',
    title: 'Quản Lý Tài Sản Cố Định',
    description: 'Theo dõi, khấu hao và quản lý vòng đời toàn bộ tài sản cố định.',
    bullets: ['Danh mục & phân loại tài sản', 'Kế hoạch khấu hao tự động', 'Lịch bảo dưỡng & sửa chữa', 'Điều chuyển & thanh lý tài sản', 'Báo cáo theo chuẩn IFRS/VAS'],
  },
  {
    key: 'crm',
    icon: Users,
    accent: 'text-sky-400',
    bgGradient: 'from-sky-500/10 to-blue-500/5',
    title: 'CRM & Quan Hệ Khách Hàng',
    description: 'Quản lý lead, theo dõi cơ hội và nuôi dưỡng mối quan hệ khách hàng ở quy mô lớn.',
    bullets: ['Pipeline lead & cơ hội bán hàng', 'Hồ sơ khách hàng 360°', 'Lên lịch công việc & cuộc họp', 'Dự báo doanh số', 'Tích hợp email marketing'],
  },
  {
    key: 'projects',
    icon: Briefcase,
    accent: 'text-fuchsia-400',
    bgGradient: 'from-fuchsia-500/10 to-purple-500/5',
    title: 'Quản Lý Dự Án',
    description: 'Lập kế hoạch, theo dõi và lập hóa đơn dự án tích hợp kế toán và nhân sự.',
    bullets: ['Quản lý nhiệm vụ & mốc dự án', 'Bảng chấm công & nhật ký giờ làm', 'Kiểm soát chi phí dự án', 'Lập hóa đơn theo mốc hoàn thành', 'Phân bổ nguồn lực'],
  },
  {
    key: 'subcontracting',
    icon: GitMerge,
    accent: 'text-teal-400',
    bgGradient: 'from-teal-500/10 to-cyan-500/5',
    title: 'Gia Công & Thầu Phụ',
    description: 'Quản lý quy trình sản xuất thuê ngoài với theo dõi cung cấp nguyên vật liệu.',
    bullets: ['Đơn gia công & thầu phụ', 'Theo dõi NVL xuất cho NCC', 'Nghiệm thu dịch vụ gia công', 'Ghi nhận chi phí gia công', 'Hỗ trợ gia công chiều vào (CMT)'],
  },
  {
    key: 'integrations',
    icon: Link2,
    accent: 'text-indigo-400',
    bgGradient: 'from-indigo-500/10 to-blue-500/5',
    title: 'Tích Hợp Hệ Thống',
    description: 'Kết nối ERPNext với thương mại điện tử, cổng thanh toán và dịch vụ đám mây.',
    bullets: ['Shopify, WooCommerce, Amazon, Lazada', 'Stripe, VNPay, MoMo, ZaloPay', 'Google Workspace, LDAP/SSO', 'Dropbox, Google Drive, AWS S3', 'REST API & Webhook tùy chỉnh'],
  },
]

export const erpContent: Record<ErpLocale, ErpContent> = {
  en: {
    meta: {
      title: 'ERPNext Customization Services | Mercury Solution',
      description:
        'Mercury Solution delivers expert ERPNext implementation and customization — Accounting, Manufacturing, CRM, Inventory, POS, and more — tailored for Vietnamese businesses.',
    },
    hero: {
      badge: 'ERPNext Partner · Vietnam',
      titleLine1: 'ERPNext Built',
      titleLine2: 'for Your Business',
      subtitle:
        'We customize open-source ERPNext to fit how your company actually works — from accounting and manufacturing to CRM and POS — deployed and supported in Vietnam.',
      primaryCta: 'Request a Demo',
      secondaryCta: 'View Modules',
      stats: [
        { value: '12+', label: 'ERPNext Modules' },
        { value: '100%', label: 'Open Source' },
        { value: '< 90d', label: 'Avg Go-live' },
        { value: 'VN', label: 'Local Support' },
      ],
      trusted: 'Trusted by manufacturing, retail, and service businesses across Vietnam',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Generic ERP Doesn\'t Fit Vietnamese Business Reality',
      description:
        'Off-the-shelf ERP systems are built for foreign markets. Vietnamese businesses struggle with localization, compliance, and workflows that don\'t match local regulations.',
      pains: [
        { title: 'VAS & Tax Compliance', body: 'Standard ERP modules ignore Vietnamese Accounting Standards (VAS) and local tax filing formats.' },
        { title: 'Costly Licensing', body: 'Proprietary ERP licenses drain budget before you even start customizing. Maintenance fees grow every year.' },
        { title: 'Rigid Workflows', body: 'Your industry has unique processes. Cookie-cutter ERP forces you to change how you work, not the other way around.' },
        { title: 'Poor Local Support', body: 'Foreign vendors offer support in different time zones with consultants who don\'t know Vietnamese business culture.' },
      ],
    },
    modules: {
      eyebrow: 'Full Module Coverage',
      title: 'Every Business Function, One Platform',
      description:
        'ERPNext covers the complete enterprise stack. Mercury customizes each module to match your exact workflows, naming conventions, and reporting needs.',
      items: MODULES_EN,
    },
    customization: {
      eyebrow: 'Our Expertise',
      title: 'Customization That Goes Deep',
      description: 'Beyond configuration — we write Frappe Framework code, build custom DocTypes, and wire up integrations that make ERPNext truly yours.',
      capabilities: [
        { icon: Wrench, title: 'Custom Fields & DocTypes', body: 'Add any field, create new document types, and extend standard forms without touching core code — upgrades stay safe.' },
        { icon: Workflow, title: 'Workflow Automation', body: 'Design approval chains, auto-notifications, and document routing that match your organizational hierarchy.' },
        { icon: LayoutGrid, title: 'Custom Reports & Dashboards', body: 'Build pixel-perfect reports in Vietnamese, with column formats required by Vietnamese tax authorities and auditors.' },
        { icon: Globe, title: 'Vietnamese Localization', body: 'Full VAS accounting chart, VNPay/MoMo payment integration, Vietnamese e-invoice (HĐDT) compliance.' },
        { icon: Zap, title: 'Server-side Scripts', body: 'Automate complex business logic: auto-posting, price formula engines, stock reservation rules, and more.' },
        { icon: Layers3, title: 'Third-party Integration', body: 'Connect ERPNext to your existing MISA, Fast Accounting, Lazada, Shopee, or any system via REST API.' },
      ],
    },
    process: {
      eyebrow: 'Implementation Process',
      title: 'From Discovery to Go-live in 90 Days',
      description: 'Our proven 4-phase methodology minimizes disruption and delivers a system your team will actually use.',
      steps: [
        { number: '01', title: 'Discovery & Blueprinting', body: 'We map your existing workflows, chart of accounts, and reporting needs. Output: a detailed configuration blueprint.', duration: 'Weeks 1–2' },
        { number: '02', title: 'Configuration & Customization', body: 'We configure master data, custom fields, workflows, and localization. Parallel development of custom features.', duration: 'Weeks 3–8' },
        { number: '03', title: 'Data Migration & UAT', body: 'We migrate your historical data and run user acceptance testing with key stakeholders from each department.', duration: 'Weeks 9–11' },
        { number: '04', title: 'Go-live & Hypercare', body: 'Production cutover with Mercury engineers on-site. 30-day hypercare support to stabilize the new system.', duration: 'Week 12+' },
      ],
    },
    whyMercury: {
      eyebrow: 'Why Mercury Solution',
      title: 'Local Experts, Enterprise-grade Delivery',
      description: 'We are a Vietnamese technology company with deep Frappe/ERPNext expertise and a track record of complex implementations.',
      points: [
        { icon: BookOpen, title: 'Frappe Framework Certified', body: 'Our engineers are trained directly on the Frappe codebase — not just ERPNext configuration.' },
        { icon: Building2, title: 'VAS-ready Out of the Box', body: 'We pre-build the Vietnamese chart of accounts, tax templates, and HĐDT integration for every project.' },
        { icon: Users, title: 'Dedicated Account Team', body: 'A project manager, developer, and QA engineer are assigned to your project from day one.' },
        { icon: Box, title: 'No Vendor Lock-in', body: 'ERPNext is 100% open source. Your data, your server, your code — no per-user license fees, ever.' },
        { icon: ClipboardCheck, title: 'Fixed-scope Delivery', body: 'We commit to a signed scope of work. No scope creep surprises — just clear milestones and sign-offs.' },
        { icon: Cog, title: 'Post-launch Support', body: 'SLA-backed support plans with guaranteed response times and monthly system health reviews.' },
      ],
    },
    cta: {
      title: 'Ready to Transform Your Operations?',
      subtitle: 'Book a free 60-minute discovery call. We\'ll assess your current processes and show you exactly how ERPNext can be customized for your business.',
      primaryBtn: 'Book Discovery Call',
      secondaryBtn: 'Download Brochure',
    },
  },

  vi: {
    meta: {
      title: 'Dịch Vụ Tùy Chỉnh ERPNext | Mercury Solution',
      description:
        'Mercury Solution triển khai và tùy chỉnh ERPNext chuyên sâu — Kế toán, Sản xuất, CRM, Kho vận, POS và nhiều hơn nữa — phù hợp với doanh nghiệp Việt Nam.',
    },
    hero: {
      badge: 'Đối Tác ERPNext · Việt Nam',
      titleLine1: 'ERPNext Được Tùy Chỉnh',
      titleLine2: 'Cho Doanh Nghiệp Của Bạn',
      subtitle:
        'Chúng tôi tùy chỉnh ERPNext mã nguồn mở để phù hợp với cách doanh nghiệp bạn thực sự vận hành — từ kế toán và sản xuất đến CRM và POS — triển khai và hỗ trợ tại Việt Nam.',
      primaryCta: 'Yêu Cầu Demo',
      secondaryCta: 'Xem Các Module',
      stats: [
        { value: '12+', label: 'Module ERPNext' },
        { value: '100%', label: 'Mã Nguồn Mở' },
        { value: '< 90 ngày', label: 'Thời Gian Triển Khai' },
        { value: 'VN', label: 'Hỗ Trợ Tại Chỗ' },
      ],
      trusted: 'Được tin dùng bởi các doanh nghiệp sản xuất, bán lẻ và dịch vụ trên toàn Việt Nam',
    },
    problem: {
      eyebrow: 'Thách Thức',
      title: 'ERP Thông Thường Không Phù Hợp Với Thực Tế Doanh Nghiệp Việt',
      description:
        'Các phần mềm ERP đóng gói sẵn được xây dựng cho thị trường nước ngoài. Doanh nghiệp Việt Nam gặp khó khăn với địa phương hóa, tuân thủ pháp luật và quy trình không khớp với quy định trong nước.',
      pains: [
        { title: 'Tuân Thủ VAS & Thuế', body: 'Các module ERP tiêu chuẩn bỏ qua Chuẩn mực Kế toán Việt Nam (VAS) và định dạng khai thuế theo quy định của Bộ Tài chính.' },
        { title: 'Chi Phí Bản Quyền Cao', body: 'Phí bản quyền ERP độc quyền tiêu tốn ngân sách trước khi bạn bắt đầu tùy chỉnh. Phí bảo trì tăng mỗi năm.' },
        { title: 'Quy Trình Cứng Nhắc', body: 'Ngành của bạn có quy trình riêng biệt. ERP đóng hộp buộc bạn thay đổi cách làm việc, thay vì ngược lại.' },
        { title: 'Hỗ Trợ Nước Ngoài', body: 'Nhà cung cấp nước ngoài hỗ trợ ở múi giờ khác nhau với tư vấn viên không hiểu văn hóa kinh doanh Việt Nam.' },
      ],
    },
    modules: {
      eyebrow: 'Phủ Sóng Đầy Đủ Module',
      title: 'Mọi Chức Năng Doanh Nghiệp, Một Nền Tảng',
      description:
        'ERPNext bao phủ toàn bộ hệ thống doanh nghiệp. Mercury tùy chỉnh từng module để khớp chính xác quy trình, danh pháp và nhu cầu báo cáo của bạn.',
      items: MODULES_VI,
    },
    customization: {
      eyebrow: 'Năng Lực Chuyên Môn',
      title: 'Tùy Chỉnh Chuyên Sâu Tận Gốc',
      description: 'Không chỉ cấu hình — chúng tôi viết code Frappe Framework, xây dựng DocType tùy chỉnh và kết nối tích hợp để ERPNext thực sự là của bạn.',
      capabilities: [
        { icon: Wrench, title: 'Trường & DocType Tùy Chỉnh', body: 'Thêm bất kỳ trường nào, tạo loại tài liệu mới và mở rộng biểu mẫu tiêu chuẩn mà không chạm vào code lõi — an toàn khi nâng cấp.' },
        { icon: Workflow, title: 'Tự Động Hóa Quy Trình', body: 'Thiết kế chuỗi phê duyệt, tự động thông báo và định tuyến tài liệu phù hợp với cấu trúc tổ chức của bạn.' },
        { icon: LayoutGrid, title: 'Báo Cáo & Dashboard Tùy Chỉnh', body: 'Xây dựng báo cáo hoàn chỉnh bằng tiếng Việt, với định dạng cột theo yêu cầu của cơ quan thuế và kiểm toán viên.' },
        { icon: Globe, title: 'Địa Phương Hóa Việt Nam', body: 'Hệ thống tài khoản VAS đầy đủ, tích hợp thanh toán VNPay/MoMo, tuân thủ hóa đơn điện tử (HĐDT).' },
        { icon: Zap, title: 'Script Phía Máy Chủ', body: 'Tự động hóa nghiệp vụ phức tạp: tự động hạch toán, công thức tính giá, quy tắc đặt trữ hàng và nhiều hơn nữa.' },
        { icon: Layers3, title: 'Tích Hợp Bên Thứ Ba', body: 'Kết nối ERPNext với MISA, Fast Accounting, Lazada, Shopee hoặc bất kỳ hệ thống nào qua REST API.' },
      ],
    },
    process: {
      eyebrow: 'Quy Trình Triển Khai',
      title: 'Từ Khảo Sát Đến Go-live Trong 90 Ngày',
      description: 'Phương pháp 4 giai đoạn đã được kiểm chứng của chúng tôi giảm thiểu gián đoạn và cung cấp hệ thống mà đội ngũ của bạn thực sự sử dụng.',
      steps: [
        { number: '01', title: 'Khảo Sát & Lập Bản Thiết Kế', body: 'Chúng tôi lập bản đồ quy trình hiện tại, hệ thống tài khoản và nhu cầu báo cáo. Kết quả: bản thiết kế cấu hình chi tiết.', duration: 'Tuần 1–2' },
        { number: '02', title: 'Cấu Hình & Tùy Chỉnh', body: 'Cấu hình dữ liệu chủ, trường tùy chỉnh, quy trình và địa phương hóa. Phát triển song song các tính năng tùy chỉnh.', duration: 'Tuần 3–8' },
        { number: '03', title: 'Di Chuyển Dữ Liệu & Kiểm Thử', body: 'Chúng tôi chuyển dữ liệu lịch sử và chạy kiểm thử nghiệm thu (UAT) với các bên liên quan từ mỗi phòng ban.', duration: 'Tuần 9–11' },
        { number: '04', title: 'Go-live & Hỗ Trợ Chuyên Sâu', body: 'Chuyển đổi production với kỹ sư Mercury có mặt tại chỗ. 30 ngày hỗ trợ hypercare để ổn định hệ thống mới.', duration: 'Tuần 12+' },
      ],
    },
    whyMercury: {
      eyebrow: 'Tại Sao Chọn Mercury Solution',
      title: 'Chuyên Gia Địa Phương, Triển Khai Cấp Doanh Nghiệp',
      description: 'Chúng tôi là công ty công nghệ Việt Nam với chuyên môn sâu về Frappe/ERPNext và lịch sử triển khai các dự án phức tạp.',
      points: [
        { icon: BookOpen, title: 'Chứng Nhận Frappe Framework', body: 'Kỹ sư của chúng tôi được đào tạo trực tiếp trên codebase Frappe — không chỉ là cấu hình ERPNext.' },
        { icon: Building2, title: 'Sẵn Sàng VAS Ngay Từ Đầu', body: 'Chúng tôi pre-build hệ thống tài khoản Việt Nam, mẫu thuế và tích hợp HĐDT cho mỗi dự án.' },
        { icon: Users, title: 'Đội Ngũ Chuyên Trách', body: 'Một quản lý dự án, developer và kỹ sư QA được phân công cho dự án của bạn từ ngày đầu tiên.' },
        { icon: Box, title: 'Không Phụ Thuộc Nhà Cung Cấp', body: 'ERPNext 100% mã nguồn mở. Dữ liệu, máy chủ, code của bạn — không có phí bản quyền theo đầu người.' },
        { icon: ClipboardCheck, title: 'Cam Kết Phạm Vi Cố Định', body: 'Chúng tôi cam kết theo phạm vi công việc đã ký. Không có bất ngờ về phạm vi — chỉ có các mốc và nghiệm thu rõ ràng.' },
        { icon: Cog, title: 'Hỗ Trợ Sau Triển Khai', body: 'Gói hỗ trợ theo SLA với thời gian phản hồi được đảm bảo và đánh giá sức khỏe hệ thống hàng tháng.' },
      ],
    },
    cta: {
      title: 'Sẵn Sàng Chuyển Đổi Hoạt Động Kinh Doanh?',
      subtitle: 'Đặt lịch cuộc gọi khám phá miễn phí 60 phút. Chúng tôi sẽ đánh giá quy trình hiện tại và cho bạn thấy chính xác ERPNext có thể được tùy chỉnh cho doanh nghiệp của bạn như thế nào.',
      primaryBtn: 'Đặt Lịch Tư Vấn',
      secondaryBtn: 'Tải Brochure',
    },
  },
}
