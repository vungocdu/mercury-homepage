import type { Lx } from './i18n'

const x = (vi: string, en: string, ja: string): Lx => ({ vi, en, ja })

/* ------------------------------------------------------------------ */
/* Navigation (sitemap: 7 main items, sub-pages are NOT first level)  */
/* ------------------------------------------------------------------ */
export const nav = [
  { href: '/', label: x('Trang chủ', 'Home', 'ホーム') },
  { href: '/about', label: x('Về chúng tôi', 'About Us', '会社概要') },
  { href: '/services', label: x('Dịch vụ', 'Services', 'サービス') },
  { href: '/work', label: x('Dự án', 'Projects', '実績') },
  { href: '/insights', label: x('Insights', 'Insights', 'インサイト') },
  { href: '/careers', label: x('Tuyển dụng', 'Careers', '採用情報') },
  { href: '/contact', label: x('Liên hệ', 'Contact Us', 'お問い合わせ') },
]

export const ui = {
  cta: x('Nhận tư vấn', 'Get a Consultation', '無料相談'),
  requestQuote: x('Yêu cầu báo giá', 'Request a Quote', '見積もり依頼'),
  learnMore: x('Xem chi tiết', 'Learn more', '詳細を見る'),
  viewAllServices: x('Tất cả dịch vụ', 'All services', 'すべてのサービス'),
  viewAllProjects: x('Tất cả dự án', 'All projects', 'すべての実績'),
  backToServices: x('Tất cả dịch vụ', 'All services', 'サービス一覧'),
  backToProjects: x('Tất cả dự án', 'All projects', '実績一覧'),
  similarCta: x('Nhận tư vấn giải pháp tương tự', 'Get a similar solution', '同様のソリューションを相談'),
  all: x('Tất cả', 'All', 'すべて'),
  overview: x('Tổng quan khách hàng', 'Client overview', 'クライアント概要'),
  challenge: x('Thách thức', 'Challenge', '課題'),
  solution: x('Giải pháp Mercury', 'Mercury solution', 'Mercuryのソリューション'),
  results: x('Kết quả / Điểm nổi bật', 'Outcomes', '成果'),
  industry: x('Ngành', 'Industry', '業界'),
  region: x('Thị trường', 'Market', '市場'),
  stack: x('Công nghệ', 'Technology', '技術'),
  capabilities: x('Năng lực triển khai', 'What we deliver', '提供内容'),
  useCases: x('Ứng dụng điển hình', 'Typical use cases', '主な活用例'),
  relatedProjects: x('Dự án liên quan', 'Related projects', '関連する実績'),
  otherServices: x('Dịch vụ khác', 'Other services', 'その他のサービス'),
  moreProjects: x('Dự án khác', 'More projects', 'その他の実績'),
  contactTitle: x('Cùng xây dựng giải pháp tiếp theo', "Let's build what's next", '次のソリューションを一緒に'),
  contactText: x(
    'Chia sẻ bài toán của bạn — đội ngũ Mercury sẽ phản hồi trong vòng 1 ngày làm việc.',
    'Tell us about your challenge — the Mercury team replies within one business day.',
    '課題をお聞かせください。Mercuryのチームが1営業日以内にご連絡します。'
  ),
}

/* ------------------------------------------------------------------ */
/* Services (sitemap 3.1–3.6)                                         */
/* ------------------------------------------------------------------ */
export type Service = {
  slug: string
  icon: 'code' | 'bot' | 'workflow' | 'vision' | 'share' | 'drone'
  tag: string
  title: Lx
  short: Lx
  intro: Lx
  items: Lx[]
  cases: Lx[]
  stack: string[]
  related: string[]
}

export const services: Service[] = [
  {
    slug: 'software-development',
    icon: 'code',
    tag: 'SOFTWARE',
    title: x('Phát triển phần mềm', 'Software Development', 'ソフトウェア開発'),
    short: x(
      'Web, mobile và phần mềm theo yêu cầu; giải pháp ERP và ứng dụng doanh nghiệp.',
      'Web, mobile and custom software; ERP and enterprise applications.',
      'Web・モバイル・受託ソフトウェア開発、ERPおよび業務アプリケーション。'
    ),
    intro: x(
      'Mercury phát triển phần mềm theo yêu cầu cho doanh nghiệp, từ hệ thống ERP tập trung đến ứng dụng web và mobile phục vụ khách hàng. Chúng tôi đồng hành từ thiết kế đến triển khai, với kiến trúc hỗ trợ mở rộng.',
      'Mercury builds custom software for businesses, from centralised ERP systems to web and mobile applications for customers. We support delivery from design through deployment with an architecture built to scale.',
      'Mercuryは、基幹ERPから顧客向けアプリまで、Web・モバイル・受託ソフトウェアを明確な開発プロセスと拡張しやすい設計で構築します。'
    ),
    items: [
      x('Ứng dụng web & cổng thông tin doanh nghiệp', 'Web applications and enterprise portals', 'Webアプリケーション・企業ポータル'),
      x('Ứng dụng mobile iOS / Android', 'iOS / Android mobile applications', 'iOS / Androidモバイルアプリ'),
      x('Hệ thống ERP và phần mềm nghiệp vụ theo yêu cầu', 'ERP systems and custom business software', 'ERP・業務ソフトウェアの受託開発'),
      x('Tích hợp hệ thống, API và dịch vụ bên thứ ba', 'System, API and third-party integration', 'システム・API・外部サービス連携'),
      x('Dashboard, báo cáo trực quan và CMS', 'Dashboards, visual reporting and CMS', 'ダッシュボード・レポート・CMS'),
    ],
    cases: [
      x('ERP cho doanh nghiệp dược phẩm', 'ERP for a pharmaceutical group', '製薬企業向けERP'),
      x('Hệ sinh thái ứng dụng phòng tập', 'Fitness app ecosystem', 'フィットネス向けアプリ基盤'),
      x('Nền tảng self-service cho người lao động', 'Self-service workforce platform', '労働者向けセルフサービス基盤'),
    ],
    stack: ['PHP', 'React', 'Next.js', 'Node.js', 'Flutter', 'REST / OpenAPI'],
    related: ['hmb-erp', 'actiwell', 'careearth-life'],
  },
  {
    slug: 'ai-automation',
    icon: 'bot',
    tag: 'AI · AGENTIC',
    title: x('AI & Agentic Automation', 'AI & Agentic Automation', 'AI・エージェント自動化'),
    short: x(
      'AI Agent, Chatbot, Assistant, RAG; tích hợp ERP / CRM / HRM.',
      'AI agents, chatbots, assistants and RAG; integrated with ERP / CRM / HRM.',
      'AIエージェント、チャットボット、アシスタント、RAG。ERP/CRM/HRMと連携。'
    ),
    intro: x(
      'Đưa AI vào quy trình làm việc thực tế: trợ lý thông minh, agent tự động hoá nhiều bước và kho tri thức nội bộ, kết nối trực tiếp với hệ thống doanh nghiệp đang vận hành.',
      'Put AI into real workflows: intelligent assistants, multi-step agents and internal knowledge bases, connected directly to the systems your business already runs.',
      '実際の業務フローにAIを組み込みます。アシスタント、複数ステップを自動化するエージェント、社内ナレッジベースを既存の業務システムと直接連携させます。'
    ),
    items: [
      x('AI Chatbot & Assistant cho khách hàng và nội bộ', 'AI chatbots and assistants for customers and staff', '顧客・社内向けAIチャットボット／アシスタント'),
      x('AI Agent và Agentic Workflow tự động hoá đa bước', 'AI agents and multi-step agentic workflows', 'AIエージェントと多段階の自動化ワークフロー'),
      x('RAG / Knowledge Base trên dữ liệu doanh nghiệp', 'RAG / knowledge bases on company data', '社内データを活用したRAG／ナレッジベース'),
      x('Tích hợp ERP, CRM, HRM', 'ERP, CRM and HRM integration', 'ERP・CRM・HRMとの統合'),
    ],
    cases: [
      x('Trợ lý tra cứu quy trình & tài liệu nội bộ', 'Assistant for internal procedures and documents', '社内手順・文書の検索アシスタント'),
      x('Tự động hoá tiếp nhận và phân loại yêu cầu', 'Automated request intake and triage', '問い合わせの受付・振り分け自動化'),
    ],
    stack: ['LLM', 'RAG', 'Vector DB', 'Python', 'Agent frameworks', 'REST / Webhook'],
    related: ['atms'],
  },
  {
    slug: 'digital-transformation',
    icon: 'workflow',
    tag: 'DX',
    title: x('Chuyển đổi số', 'Digital Transformation', 'デジタルトランスフォーメーション'),
    short: x(
      'Số hoá vận hành, dữ liệu và quy trình doanh nghiệp.',
      'Digitising operations, data and business processes.',
      '業務・データ・プロセスのデジタル化。'
    ),
    intro: x(
      'Tư vấn và triển khai số hoá vận hành: chuẩn hoá quy trình, tập trung dữ liệu và xây dựng hệ thống thống nhất để quản lý, theo dõi và ra quyết định dựa trên dữ liệu.',
      'Consulting and delivery for operational digitisation: standardise processes, centralise data and build a unified system for management, tracking and data-driven decisions.',
      '業務のデジタル化を支援します。プロセスの標準化、データの一元化、管理・追跡・データドリブンな意思決定のための統合システムを構築します。'
    ),
    items: [
      x('Khảo sát và chuẩn hoá quy trình nghiệp vụ', 'Process discovery and standardisation', '業務プロセスの調査・標準化'),
      x('Tập trung và đồng bộ dữ liệu giữa các bộ phận', 'Data centralisation and cross-department sync', '部門間のデータ一元化・同期'),
      x('Hệ thống điều hành, phê duyệt và báo cáo', 'Workflow, approval and reporting systems', 'ワークフロー・承認・レポートシステム'),
      x('Cổng thông tin và ứng dụng cho khách hàng / người dân', 'Portals and apps for customers and citizens', '顧客・住民向けポータル／アプリ'),
    ],
    cases: [
      x('Điều hành số cho chính quyền cấp xã, phường', 'Digital administration for local government', '地方行政のデジタル運営'),
      x('Bảo trì thiết bị đa địa điểm theo SLA', 'Multi-site maintenance under SLA', '複数拠点の設備保守（SLA管理）'),
    ],
    stack: ['ERP', 'Workflow engine', 'BI / Dashboard', 'OpenAPI', 'RBAC'],
    related: ['icommune', 'activesg-cms', 'tna-fujikin'],
  },
  {
    slug: 'computer-vision',
    icon: 'vision',
    tag: 'COMPUTER VISION',
    title: x('Computer Vision & AI', 'Computer Vision & AI', 'コンピュータビジョン・AI'),
    short: x(
      'Kiểm tra chất lượng sản phẩm bằng thị giác máy, phát hiện và phân loại lỗi.',
      'Machine-vision quality inspection: defect detection and classification.',
      '画像認識による品質検査。不良の検出・分類。'
    ),
    intro: x(
      'Tự động kiểm tra hình ảnh và phân loại lỗi sản phẩm trên dây chuyền sản xuất bằng AI thị giác máy, giúp giảm kiểm tra thủ công và chuẩn hoá chất lượng.',
      'Automated image inspection and defect classification on the production line with machine-vision AI — less manual checking, more consistent quality.',
      'AI画像認識により、生産ラインでの外観検査と不良分類を自動化。手作業の検査を減らし、品質を標準化します。'
    ),
    items: [
      x('Phát hiện và phân loại lỗi sản phẩm tự động', 'Automatic defect detection and classification', '不良の自動検出・分類'),
      x('Triển khai on-premise hoặc tại biên (edge)', 'On-premise or edge deployment', 'オンプレミス／エッジでの導入'),
      x('Đếm và nhận diện đối tượng từ camera', 'Object counting and recognition from camera feeds', 'カメラ映像による計数・物体認識'),
      x('Tích hợp kết quả vào hệ thống sản xuất', 'Results integrated into production systems', '結果を生産システムに連携'),
    ],
    cases: [
      x('Kiểm tra ngoại quan linh kiện', 'Component visual inspection', '部品の外観検査'),
      x('Đếm sản phẩm khi giao hàng', 'Counting products at delivery', '出荷時の製品カウント'),
    ],
    stack: ['PyTorch', 'OpenCV', 'ONNX', 'Edge GPU', 'Camera / IoT'],
    related: [],
  },
  {
    slug: 'meta-integration',
    icon: 'share',
    tag: 'META API',
    title: x('Tích hợp Meta Platform', 'Meta Platform Integration', 'Metaプラットフォーム連携'),
    short: x(
      'Tích hợp Facebook, Instagram, Messenger và WhatsApp; tự động hoá tương tác.',
      'Facebook, Instagram, Messenger and WhatsApp integration; interaction automation.',
      'Facebook・Instagram・Messenger・WhatsAppの連携とやり取りの自動化。'
    ),
    intro: x(
      'Kết nối hệ thống của bạn với hệ sinh thái Meta qua API chính thức: gom hội thoại về một nơi, tự động hoá phản hồi và đồng bộ dữ liệu khách hàng.',
      'Connect your systems to the Meta ecosystem through official APIs: unify conversations in one place, automate replies and sync customer data.',
      '公式APIでMetaのエコシステムと自社システムを接続。会話を一元化し、返信を自動化、顧客データを同期します。'
    ),
    items: [
      x('Tích hợp API Facebook, Instagram, Messenger, WhatsApp', 'Facebook, Instagram, Messenger and WhatsApp API integration', 'Facebook・Instagram・Messenger・WhatsApp API連携'),
      x('Tự động hoá tương tác và chăm sóc khách hàng', 'Automated engagement and customer care', 'エンゲージメント・顧客対応の自動化'),
      x('Đồng bộ hội thoại và khách hàng với CRM', 'Sync conversations and customers with CRM', '会話・顧客情報のCRM同期'),
    ],
    cases: [
      x('Hộp thư hợp nhất đa kênh', 'Unified multi-channel inbox', 'マルチチャネル統合インボックス'),
      x('Chatbot tư vấn và chốt lịch hẹn', 'Chatbot for enquiries and bookings', '相談・予約受付チャットボット'),
    ],
    stack: ['Meta Graph API', 'WhatsApp Business', 'Webhooks', 'CRM'],
    related: [],
  },
  {
    slug: 'drone-light-show',
    icon: 'drone',
    tag: 'DRONE SHOW',
    title: x('Drone Light Show', 'Drone Light Show', 'ドローンライトショー'),
    short: x(
      'Thiết kế kịch bản, bài bay 3D, cấp phép và vận hành trình diễn drone.',
      'Show concept, 3D flight design, permits and operation of drone performances.',
      'ショーの企画、3D飛行設計、許認可、運営までを一貫して提供。'
    ),
    intro: x(
      'Từ ý tưởng đến màn trình diễn: Mercury thiết kế kịch bản, dựng bài bay 3D, xử lý cấp phép và vận hành trình diễn drone cho sự kiện và thương hiệu.',
      'From idea to show: Mercury designs the concept, builds the 3D flight choreography, handles permits and operates drone performances for events and brands.',
      'アイデアからショー本番まで。イベントやブランドのために、演出設計、3D飛行振付、許認可対応、運営をMercuryが担当します。'
    ),
    items: [
      x('Thiết kế kịch bản và ý tưởng trình diễn', 'Show concept and storyline design', 'ショーのコンセプト・演出設計'),
      x('Dựng bài bay 3D và mô phỏng', '3D flight choreography and simulation', '3D飛行振付とシミュレーション'),
      x('Xin cấp phép và phối hợp an toàn', 'Permits and safety coordination', '許認可取得・安全管理'),
      x('Vận hành trình diễn tại hiện trường', 'On-site show operation', '現地でのショー運営'),
    ],
    cases: [
      x('Sự kiện ra mắt thương hiệu', 'Brand launch events', 'ブランド発表イベント'),
      x('Lễ hội và sự kiện cộng đồng', 'Festivals and public events', '祭典・地域イベント'),
    ],
    stack: ['3D choreography', 'RTK GPS', 'Show control', 'Safety planning'],
    related: [],
  },
]

/* ------------------------------------------------------------------ */
/* Projects (sitemap 4.1–4.8). Hidden/NDA projects are NOT included.  */
/* ------------------------------------------------------------------ */
export type IndustryKey = 'erp' | 'fitness' | 'hrtech' | 'govtech' | 'sporttech' | 'bizapp' | 'edtech'

export const industries: { key: IndustryKey; label: Lx }[] = [
  { key: 'erp', label: x('ERP / Dược phẩm', 'ERP / Pharma', 'ERP／製薬') },
  { key: 'fitness', label: x('Fitness Tech', 'Fitness Tech', 'フィットネステック') },
  { key: 'hrtech', label: x('HR Tech', 'HR Tech', 'HRテック') },
  { key: 'govtech', label: x('GovTech', 'GovTech', 'ガブテック') },
  { key: 'sporttech', label: x('Sport Tech', 'Sport Tech', 'スポーツテック') },
  { key: 'bizapp', label: x('Business App', 'Business App', '業務アプリ') },
  { key: 'edtech', label: x('EdTech', 'EdTech', 'エドテック') },
]

export type Project = {
  slug: string
  name: Lx
  industry: IndustryKey
  cluster: Lx
  region: Lx
  icon: 'erp' | 'fitness' | 'clock' | 'gov' | 'wrench' | 'users' | 'athlete' | 'flower' | 'phone' | 'school'
  tagline: Lx
  overview: Lx
  challenge: Lx
  solution: Lx
  result: Lx
  highlights: Lx[]
  stack: string[]
  services: string[]
}

const VN = x('Việt Nam', 'Vietnam', 'ベトナム')
const JP = x('Nhật Bản', 'Japan', '日本')
const SG = x('Singapore', 'Singapore', 'シンガポール')
const AU = x('Úc', 'Australia', 'オーストラリア')

export const projects: Project[] = [
  {
    slug: 'hmb-erp',
    name: x('HMB ERP', 'HMB ERP', 'HMB ERP'),
    industry: 'erp',
    cluster: x('ERP / Dược phẩm', 'ERP / Pharmaceuticals', 'ERP／製薬'),
    region: VN,
    icon: 'erp',
    tagline: x('Nền tảng ERP tập trung cho doanh nghiệp dược phẩm', 'A centralised ERP platform for a pharmaceutical group', '製薬企業向けの統合ERPプラットフォーム'),
    overview: x(
      'Hệ thống ERP cho Tập đoàn HMB, kết nối các hoạt động quản trị tổ chức, bán hàng, kho vận, tài chính–kế toán và mua hàng.',
      'An ERP system for HMB Group connecting organisation management, sales, warehouse and logistics, finance–accounting and purchasing.',
      'HMBグループ向けERP。組織管理、販売、倉庫・物流、財務会計、購買の各業務を連携します。'
    ),
    challenge: x(
      'Các nghiệp vụ và dữ liệu trải rộng trên nhiều bộ phận, cần được chuẩn hoá và kết nối.',
      'Operations and data were spread across many departments and needed to be standardised and connected.',
      '業務とデータが複数部門に分散しており、標準化と連携が必要でした。'
    ),
    solution: x(
      'Xây dựng hệ thống trên nền PHP; đồng bộ đơn hàng Haravan, kết nối Viettel Post, camera AI và các hệ thống nghiệp vụ hiện có.',
      'Built on PHP; syncs Haravan orders and connects Viettel Post, AI cameras and existing business systems.',
      'PHPで構築。Haravan注文の同期、Viettel Post、AIカメラ、既存の業務システムとの連携を実現。'
    ),
    result: x(
      'Hướng tới đồng bộ dữ liệu, chuẩn hoá quy trình và nâng cao khả năng kiểm soát vận hành.',
      'Aims at synchronised data, standardised processes and stronger operational control.',
      'データ同期、プロセス標準化、運用統制の強化を目指します。'
    ),
    highlights: [
      x('Quản trị tổ chức, bán hàng, kho vận', 'Organisation, sales and warehouse management', '組織・販売・倉庫管理'),
      x('Tài chính – kế toán, mua hàng', 'Finance–accounting and purchasing', '財務会計・購買'),
      x('Kết nối Haravan & Viettel Post', 'Haravan and Viettel Post connected', 'HaravanとViettel Postの連携'),
    ],
    stack: ['PHP', 'Haravan', 'Viettel Post', 'AI Camera'],
    services: ['software-development'],
  },
  {
    slug: 'actiwell',
    name: x('Actiwell Ecosystem', 'Actiwell Ecosystem', 'Actiwell エコシステム'),
    industry: 'fitness',
    cluster: x('Fitness Tech', 'Fitness Tech', 'フィットネステック'),
    region: VN,
    icon: 'fitness',
    tagline: x('Hệ sinh thái số cho quản lý và trải nghiệm phòng tập', 'A digital ecosystem for gym management and member experience', 'ジム運営と会員体験のためのデジタルエコシステム'),
    overview: x(
      'Hệ sinh thái ứng dụng và nền tảng web gồm Actiwell Business, Actiwell cho hội viên và Actiwell CMS.',
      'An ecosystem of apps and web platforms: Actiwell Business, Actiwell for members and Actiwell CMS.',
      'Actiwell Business、会員向けActiwell、Actiwell CMSで構成されるアプリ／Webプラットフォーム。'
    ),
    challenge: x(
      'Cần kết nối hoạt động quản lý phòng tập với trải nghiệm đặt lịch và tập luyện của hội viên.',
      'Needed to connect gym operations with the members’ booking and training experience.',
      'ジム運営と、会員の予約・トレーニング体験をつなぐ必要がありました。'
    ),
    solution: x(
      'Hỗ trợ quản lý vận hành, đặt lịch, thanh toán, theo dõi tập luyện và báo cáo trực quan; đồng bộ web và mobile.',
      'Supports operations, booking, payments, workout tracking and visual reports; web and mobile stay in sync.',
      '運営管理、予約、決済、トレーニング記録、ビジュアルレポートを支援。Webとモバイルを同期。'
    ),
    result: x(
      'Hướng tới giảm thao tác thủ công và tạo trải nghiệm xuyên suốt cho nhà quản lý và hội viên.',
      'Aims to reduce manual work and create a seamless experience for managers and members.',
      '手作業の削減と、運営者・会員双方にとって一貫した体験の提供を目指します。'
    ),
    highlights: [
      x('Đặt lịch & thanh toán', 'Booking and payments', '予約・決済'),
      x('Theo dõi tập luyện', 'Workout tracking', 'トレーニング記録'),
      x('Báo cáo trực quan & CMS', 'Visual reports and CMS', 'レポート・CMS'),
    ],
    stack: ['Mobile app', 'Web CMS', 'Payments', 'Dashboard'],
    services: ['software-development'],
  },
  {
    slug: 'tna-fujikin',
    name: x('Hệ thống TNA', 'TNA', 'TNA'),
    industry: 'hrtech',
    cluster: x('HR Tech / Sản xuất', 'HR Tech / Manufacturing', 'HRテック／製造'),
    region: VN,
    icon: 'clock',
    tagline: x('Nền tảng quản lý nhân sự: chấm công, ca làm việc và tiền lương', 'HR management platform: attendance, shifts and payroll', '人事管理プラットフォーム：勤怠・シフト・給与'),
    overview: x(
      'TNA là phần mềm quản lý nhân sự toàn diện của Mercury, triển khai tại Fujikin Vietnam (KCN Thăng Long, Hà Nội): chấm công bằng camera AI Hanet, xếp ca, tăng ca, đơn từ nhân viên và tích hợp tính lương cho quy mô trên 2.000 công nhân.',
      'TNA is Mercury’s comprehensive HR management software, deployed at Fujikin Vietnam (Thang Long Industrial Park, Hanoi): Hanet AI-camera attendance, shift scheduling, overtime, employee requests and integrated payroll for over 2,000 workers.',
      'TNAはMercuryの総合人事管理ソフトウェアで、Fujikin Vietnam（ハノイ・タンロン工業団地）に導入。Hanet AIカメラによる勤怠、シフト管理、残業、各種申請、給与連携を2,000名超の従業員規模で運用しています。'
    ),
    challenge: x(
      'Nhà máy sản xuất nhiều ca, nhiều dây chuyền cần ghi nhận thời gian công chính xác, xử lý tăng ca, đơn từ và tính lương theo quy tắc linh hoạt cho lực lượng lao động lớn.',
      'A multi-shift, multi-line factory needs accurate time capture, overtime and request handling, and payroll under flexible rules for a large workforce.',
      '多シフト・多ラインの工場では、大人数の従業員について、正確な勤怠記録、残業・各種申請の処理、柔軟なルールでの給与計算が必要でした。'
    ),
    solution: x(
      'Chấm công tự động bằng camera AI tại cổng vào và khu vực nhà ăn; cấu hình nhiều ca, xoay ca, tăng ca; duyệt đơn trực tuyến (nghỉ phép, đổi ca, đi muộn/về sớm); tự động tổng hợp dữ liệu để tính lương, thưởng, khấu trừ, bảo hiểm và thuế; phát hành phiếu lương điện tử; phân quyền theo vai trò và lưu nhật ký thay đổi.',
      'Automatic AI-camera check-in at entrances and the canteen area; multiple shifts, rotations and overtime; online approval of leave, shift swaps and late/early requests; automatic consolidation into payroll, bonuses, deductions, insurance and tax; e-payslips; role-based access and a change log.',
      '入口と食堂エリアのAIカメラによる自動打刻、複数シフト・ローテーション・残業の設定、休暇・シフト交換・遅刻早退のオンライン承認、給与・賞与・控除・保険・税の自動集計、電子給与明細、ロール別権限と変更履歴。'
    ),
    result: x(
      'Hướng tới ghi nhận thời gian chính xác, giảm giấy tờ, rút ngắn thời gian xử lý bảng lương và minh bạch dữ liệu giữa nhân sự, sản xuất và kế toán.',
      'Aims at accurate time capture, less paperwork, faster payroll processing and transparent data across HR, production and accounting.',
      '正確な時間記録、書類の削減、給与処理の迅速化、人事・製造・経理間のデータの透明化を目指します。'
    ),
    highlights: [
      x('Camera AI Hanet chấm công tự động', 'Hanet AI-camera auto check-in', 'Hanet AIカメラの自動打刻'),
      x('Nhiều ca, tăng ca theo đặc thù sản xuất', 'Multiple shifts and manufacturing overtime', '製造業向けの多シフト・残業管理'),
      x('Duyệt đơn trực tuyến', 'Online request approvals', 'オンライン承認ワークフロー'),
      x('Bảng lương tự động & phiếu lương điện tử', 'Automated payroll and e-payslips', '給与の自動計算と電子給与明細'),
      x('BHXH & thuế TNCN tự động', 'Automatic social insurance and income tax', '社会保険・所得税の自動計算'),
      x('Phân quyền & nhật ký thay đổi', 'Permissions and change history', '権限管理と変更履歴'),
    ],
    stack: ['Hanet AI Camera', 'Time & Attendance', 'Payroll engine', 'RBAC', 'Cloud / On-premises', 'Open API'],
    services: ['digital-transformation'],
  },
  {
    slug: 'icommune',
    name: x('iCommune', 'iCommune', 'iCommune'),
    industry: 'govtech',
    cluster: x('GovTech', 'GovTech', 'ガブテック'),
    region: VN,
    icon: 'gov',
    tagline: x('Nền tảng điều hành số cho chính quyền cấp xã, phường', 'A digital administration platform for local government', '地方行政のためのデジタル運営プラットフォーム'),
    overview: x(
      'Nền tảng quản lý và điều hành, kết nối công việc nội bộ với dịch vụ dành cho người dân.',
      'A management and operations platform linking internal work with citizen-facing services.',
      '内部業務と住民向けサービスをつなぐ管理・運営プラットフォーム。'
    ),
    challenge: x(
      'Cần tập trung hồ sơ hành chính, điều hành công việc và tương tác với người dân.',
      'Needed to centralise administrative records, work coordination and citizen interaction.',
      '行政文書、業務運営、住民との対話を一元化する必要がありました。'
    ),
    solution: x(
      'Tiếp nhận và theo dõi hồ sơ một cửa; số hoá biểu mẫu; giao việc, lịch họp, báo cáo; cổng thông tin và ứng dụng di động cho người dân.',
      'One-stop case intake and tracking; digital forms; task assignment, meeting calendar and reports; information portal and mobile app for citizens.',
      'ワンストップの申請受付・追跡、帳票のデジタル化、タスク割当・会議・報告、住民向けポータルとモバイルアプリ。'
    ),
    result: x(
      'Tạo một hệ thống thống nhất để theo dõi hồ sơ, công việc và phản ánh của người dân.',
      'Creates one unified system to track cases, tasks and citizen feedback.',
      '申請、業務、住民からの意見を追跡できる統合システムを実現します。'
    ),
    highlights: [
      x('Hồ sơ một cửa', 'One-stop case handling', 'ワンストップ申請'),
      x('Điều hành công việc', 'Work coordination', '業務運営'),
      x('Cổng & app cho người dân', 'Citizen portal and app', '住民ポータル／アプリ'),
    ],
    stack: ['Web portal', 'Mobile app', 'E-forms', 'Workflow'],
    services: ['digital-transformation'],
  },
  {
    slug: 'activesg-cms',
    name: x('ActiveSG', 'ActiveSG', 'ActiveSG'),
    industry: 'sporttech',
    cluster: x('Sport Tech / Bảo trì', 'Sport Tech / Maintenance', 'スポーツテック／保守'),
    region: SG,
    icon: 'wrench',
    tagline: x('Quản lý bảo trì thiết bị thể thao đa địa điểm', 'Multi-site sports equipment maintenance management', '複数拠点のスポーツ設備保守管理'),
    overview: x(
      'Nền tảng quản lý thiết bị, lịch bảo trì và kiểm tra cho ActiveSG tại Singapore.',
      'A platform for equipment, maintenance scheduling and inspection for ActiveSG in Singapore.',
      'シンガポールのActiveSG向け、設備・保守スケジュール・点検管理プラットフォーム。'
    ),
    challenge: x(
      'Theo dõi thiết bị và xử lý bảo trì đồng bộ trên nhiều cơ sở.',
      'Tracking equipment and handling maintenance consistently across many sites.',
      '多数の施設で設備を追跡し、保守対応を統一する必要がありました。'
    ),
    solution: x(
      'Tự động tạo ticket và leo thang theo SLA; dashboard KPI thời gian thực; OpenAPI, phân quyền theo vai trò và audit trail.',
      'Automatic tickets and SLA-based escalation; real-time KPI dashboards; OpenAPI, role-based access and audit trail.',
      'チケット自動生成とSLAに基づくエスカレーション、リアルタイムKPIダッシュボード、OpenAPI、ロール別権限、監査証跡。'
    ),
    result: x(
      'Hỗ trợ tập trung hoá công tác bảo trì và truy xuất lịch sử xử lý.',
      'Helps centralise maintenance work and trace handling history.',
      '保守業務の集中管理と対応履歴の追跡を支援します。'
    ),
    highlights: [
      x('Ticket & SLA', 'Tickets and SLA', 'チケット・SLA'),
      x('Dashboard KPI thời gian thực', 'Real-time KPI dashboard', 'リアルタイムKPI'),
      x('Audit trail & OpenAPI', 'Audit trail and OpenAPI', '監査証跡・OpenAPI'),
    ],
    stack: ['CMS', 'OpenAPI', 'SLA engine', 'RBAC'],
    services: ['digital-transformation', 'software-development'],
  },
  {
    slug: 'myarms',
    name: x('MyArms', 'MyArms', 'MyArms'),
    industry: 'bizapp',
    cluster: x('Business App / Mobile', 'Business App / Mobile', '業務アプリ／モバイル'),
    region: VN,
    icon: 'phone',
    tagline: x('Ứng dụng di động quản lý công việc và dữ liệu nội bộ', 'A mobile app for internal work and data management', '社内業務とデータを管理するモバイルアプリ'),
    overview: x(
      'Ứng dụng di động quản lý công việc và dữ liệu nội bộ, giúp người dùng chủ động nắm bắt thông tin và xử lý công việc nhanh chóng, mọi lúc, mọi nơi.',
      'A mobile app for managing internal work and data, helping users stay on top of information and handle tasks quickly, anytime, anywhere.',
      '社内の業務とデータを管理するモバイルアプリ。必要な情報を主体的に把握し、いつでもどこでも素早く業務を処理できます。'
    ),
    challenge: x(
      'Công việc, hồ sơ và trao đổi nội bộ cần được theo dõi và xử lý kịp thời, kể cả khi người dùng không ở văn phòng.',
      'Work items, records and internal communication need to be tracked and handled in time, even when people are away from the office.',
      '業務、書類、社内コミュニケーションを、オフィス外でもタイムリーに把握・処理できる必要がありました。'
    ),
    solution: x(
      'Email, meeting và nhắn tin nội bộ; theo dõi khối lượng công việc và tiến độ dự án theo thời gian thực; phân loại, xử lý hồ sơ và yêu cầu thanh toán; chuẩn hoá quy trình số với phân quyền chặt chẽ.',
      'Email, meetings and internal messaging; real-time workload and project-progress tracking; classification and processing of records and payment requests; standardised digital workflows with strict access control.',
      'メール、ミーティング、社内メッセージ。業務量とプロジェクト進捗のリアルタイム把握、書類・支払申請の分類と処理、厳格な権限管理によるデジタルプロセスの標準化。'
    ),
    result: x(
      'Hướng tới xử lý công việc nhanh hơn, chuẩn hoá quy trình số và kiểm soát truy cập chặt chẽ.',
      'Aims at faster task handling, standardised digital workflows and tight access control.',
      '業務処理の迅速化、デジタルプロセスの標準化、厳格なアクセス管理を目指します。'
    ),
    highlights: [
      x('Email, meeting & nhắn tin nội bộ', 'Email, meetings and internal chat', 'メール・会議・社内チャット'),
      x('Tiến độ dự án thời gian thực', 'Real-time project progress', 'リアルタイムの進捗管理'),
      x('Xử lý hồ sơ & yêu cầu thanh toán', 'Records and payment requests', '書類・支払申請の処理'),
    ],
    stack: ['Mobile app', 'Messaging', 'Workflow', 'RBAC'],
    services: ['software-development', 'digital-transformation'],
  },
  {
    slug: 'careearth-life',
    name: x('CareEarth Life', 'CareEarth Life', 'CareEarth Life'),
    industry: 'hrtech',
    cluster: x('HR Tech / Business App', 'HR Tech / Business App', 'HRテック／業務アプリ'),
    region: JP,
    icon: 'users',
    tagline: x('Self-service cho quản lý lao động tại Nhật Bản', 'Self-service for workforce management in Japan', '日本における労働者向けセルフサービス'),
    overview: x(
      'Nền tảng dành cho CareEarth, hỗ trợ quản lý hồ sơ và định danh người lao động phái cử.',
      'A platform for CareEarth supporting records and identity management of dispatched workers.',
      'CareEarth向け、派遣労働者の情報管理と本人確認を支援するプラットフォーム。'
    ),
    challenge: x(
      'Người lao động cần truy cập tập trung thông tin việc làm, thời gian làm việc và lương.',
      'Workers need one place to access job information, working time and pay.',
      '労働者が勤務情報、労働時間、給与を一か所で確認できる必要がありました。'
    ),
    solution: x(
      'Quản lý hồ sơ, xác minh Residence Card, đăng ký công việc, chấm công, theo dõi lương và phụ cấp, ký xác nhận tài liệu và nhận thông báo.',
      'Profile management, Residence Card verification, job registration, time tracking, pay and allowance tracking, document e-signing and notifications.',
      'プロフィール管理、在留カード確認、業務登録、勤怠、給与・手当の確認、書類の電子署名、通知。'
    ),
    result: x(
      'Tạo kênh tự phục vụ cho người lao động và minh bạch hoá thông tin nghiệp vụ.',
      'Gives workers a self-service channel and makes operational information transparent.',
      '労働者のセルフサービスチャネルを提供し、業務情報を透明化します。'
    ),
    highlights: [
      x('Xác minh Residence Card', 'Residence Card verification', '在留カード確認'),
      x('Chấm công & bảng lương', 'Time tracking and payroll', '勤怠・給与'),
      x('Ký xác nhận trực tuyến', 'Online document e-signing', 'オンライン署名'),
    ],
    stack: ['Mobile app', 'ID verification', 'E-sign', 'Notifications'],
    services: ['software-development'],
  },
  {
    slug: 'casa-lsm',
    name: x('CASA LSM', 'CASA LSM', 'CASA LSM'),
    industry: 'edtech',
    cluster: x('EdTech / AI', 'EdTech / AI', 'エドテック／AI'),
    region: VN,
    icon: 'school',
    tagline: x('Nền tảng quản lý trường mầm non hiện đại ứng dụng AI', 'A modern AI-powered preschool management platform', 'AIを活用した現代的な幼児教育施設管理プラットフォーム'),
    overview: x(
      'Nền tảng quản lý trường mầm non hiện đại ứng dụng AI (GOEN Platform), tối ưu quy trình vận hành và tăng cường kết nối giữa nhà trường với phụ huynh.',
      'A modern preschool management platform powered by AI (GOEN Platform) that streamlines operations and strengthens the link between school and parents.',
      'AIを活用した現代的な幼児教育施設管理プラットフォーム（GOEN Platform）。運営プロセスを最適化し、学校と保護者のつながりを強化します。'
    ),
    challenge: x(
      'Nhà trường cần tối ưu vận hành, kết nối thường xuyên với phụ huynh và đáp ứng tiêu chí sổ liên lạc điện tử mầm non của Bộ GD&ĐT.',
      'Schools need efficient operations, regular contact with parents and compliance with the Ministry of Education e-contact-book criteria for preschools.',
      '園の運営効率化、保護者との継続的な連絡、教育訓練省が定める幼児教育向け電子連絡帳の基準への対応が求められていました。'
    ),
    solution: x(
      'AI quét nhật ký trẻ và đọc chữ viết tay, tự động soạn tin nhắn cá nhân hoá; cổng thông tin phụ huynh, tuyển sinh và hồ sơ SIS; sổ liên lạc điện tử theo tiêu chí mầm non của Bộ GD&ĐT.',
      'AI scans daily logs and reads handwriting, automatically drafting personalised messages; parent portal, admissions and SIS records; an e-contact book aligned with the Ministry of Education preschool criteria.',
      'AIが園児の日誌をスキャンして手書き文字を読み取り、個別メッセージを自動作成。保護者ポータル、入園管理、SIS記録、教育訓練省の幼児教育基準に沿った電子連絡帳。'
    ),
    result: x(
      'Hướng tới tiết kiệm thời gian ghi chép cho giáo viên, thông tin đến phụ huynh nhanh và nhất quán hơn.',
      'Aims to save teachers note-taking time and get information to parents faster and more consistently.',
      '教員の記録作業の時間短縮と、保護者への迅速で一貫した情報提供を目指します。'
    ),
    highlights: [
      x('AI đọc chữ viết tay', 'AI handwriting recognition', 'AIによる手書き認識'),
      x('Tin nhắn cá nhân hoá tự động', 'Auto-drafted personalised messages', '個別メッセージの自動作成'),
      x('Sổ liên lạc điện tử chuẩn Bộ GD&ĐT', 'E-contact book to Ministry standards', '教育訓練省基準の電子連絡帳'),
    ],
    stack: ['GOEN Platform', 'AI OCR', 'SIS', 'Parent portal'],
    services: ['ai-automation', 'software-development'],
  },
  {
    slug: 'atms',
    name: x('Hệ thống ATMS', 'ATMS', 'ATMS'),
    industry: 'sporttech',
    cluster: x('Sport Tech', 'Sport Tech', 'スポーツテック'),
    region: VN,
    icon: 'athlete',
    tagline: x('Quản lý huấn luyện và thành tích vận động viên', 'Athlete training and performance management', 'アスリートのトレーニング・成績管理'),
    overview: x(
      'Nền tảng dành cho hoạt động huấn luyện, đánh giá và quản lý vận động viên tại các Trung tâm Huấn luyện Thể thao Quốc gia.',
      'A platform for training, assessment and athlete management at National Sports Training Centres.',
      'ナショナルトレーニングセンターにおける、トレーニング・評価・アスリート管理のためのプラットフォーム。'
    ),
    challenge: x(
      'Cần quản lý tập trung hồ sơ, kế hoạch và kết quả đánh giá vận động viên.',
      'Needed centralised management of athlete records, plans and assessment results.',
      'アスリートの記録、計画、評価結果を一元管理する必要がありました。'
    ),
    solution: x(
      'Quản lý hồ sơ, phân công nhiệm vụ, theo dõi hiệu suất, kiểm tra theo chuẩn NSCA và quốc tế; AI phân tích xu hướng và cảnh báo rủi ro.',
      'Athlete records, task assignment, performance tracking, NSCA and international-standard testing; AI trend analysis and risk alerts.',
      '選手情報、タスク割当、パフォーマンス管理、NSCA・国際基準のテスト、AIによる傾向分析とリスクアラート。'
    ),
    result: x(
      'Hỗ trợ theo dõi quá trình huấn luyện và ra quyết định dựa trên dữ liệu.',
      'Supports monitoring of the training process and data-driven decisions.',
      'トレーニング過程の把握とデータに基づく意思決定を支援します。'
    ),
    highlights: [
      x('Kiểm tra chuẩn NSCA', 'NSCA-standard testing', 'NSCA基準のテスト'),
      x('AI phân tích xu hướng', 'AI trend analysis', 'AIによる傾向分析'),
      x('Cảnh báo rủi ro', 'Risk alerts', 'リスクアラート'),
    ],
    stack: ['Web platform', 'AI analytics', 'Assessment'],
    services: ['ai-automation', 'software-development'],
  },
  {
    slug: 'super-bloom',
    name: x('Super Bloom', 'Super Bloom', 'Super Bloom'),
    industry: 'fitness',
    cluster: x('Business App / Fitness', 'Business App / Fitness', '業務アプリ／フィットネス'),
    region: JP,
    icon: 'flower',
    tagline: x('Quản lý khách hàng tập trung cho chuỗi không gian phòng tập', 'Centralised customer management for a chain of gym spaces', 'ジムスペース運営のための顧客一元管理'),
    overview: x(
      'Hệ thống cho Super Bloom, doanh nghiệp tại Osaka có các không gian phòng tập trong khách sạn cao cấp ở Osaka và Tokyo.',
      'A system for Super Bloom, an Osaka company operating gym spaces inside premium hotels in Osaka and Tokyo.',
      '大阪と東京の高級ホテル内でジムスペースを運営する、大阪拠点の企業Super Bloom向けシステム。'
    ),
    challenge: x(
      'Dữ liệu khách hàng nằm tại nhiều chi nhánh, cần lưu trữ và tra cứu nhất quán.',
      'Customer data sat across several branches and needed consistent storage and lookup.',
      '顧客データが複数の拠点に分散しており、一貫した保存と検索が必要でした。'
    ),
    solution: x(
      'Quản lý khách hàng và dữ liệu của các chi nhánh trên một nền tảng trung tâm, hỗ trợ lưu trữ và tra cứu.',
      'Manages customers and branch data on one central platform with storage and lookup.',
      '各拠点の顧客とデータを一つの基盤で管理し、保存と検索を支援。'
    ),
    result: x(
      'Hướng tới đơn giản hoá vận hành, minh bạch dữ liệu và tiết kiệm nguồn lực.',
      'Aims to simplify operations, make data transparent and save resources.',
      '運用の簡素化、データの透明化、リソースの節約を目指します。'
    ),
    highlights: [
      x('Dữ liệu khách hàng tập trung', 'Centralised customer data', '顧客データの一元化'),
      x('Đa chi nhánh Osaka & Tokyo', 'Multi-branch: Osaka and Tokyo', '大阪・東京の複数拠点'),
      x('Tra cứu nhất quán', 'Consistent lookup', '一貫した検索'),
    ],
    stack: ['Business app', 'Customer DB', 'Multi-branch'],
    services: ['software-development'],
  },
]

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */
export const home = {
  badge: x('Mercury Solutions · Software · AI · Digital Transformation', 'Mercury Solutions · Software · AI · Digital Transformation', 'Mercury Solutions · ソフトウェア · AI · DX'),
  title1: x('Công nghệ để doanh nghiệp', 'Engineering software that', '企業の成長を支える、'),
  title2: x('vận hành thông minh hơn', 'makes business run smarter', 'ソフトウェアとAI'),
  subtitle: x(
    'Mercury Solutions phát triển phần mềm, giải pháp AI và chuyển đổi số cho doanh nghiệp tại Việt Nam, Nhật Bản và Singapore.',
    'Mercury Solutions builds software, AI and digital-transformation solutions for businesses in Vietnam, Japan and Singapore.',
    'Mercury Solutionsは、ベトナム・日本・シンガポールの企業向けに、ソフトウェア、AI、DXソリューションを提供します。'
  ),
  stats: [
    { value: 6, suffix: '', label: x('Dịch vụ cốt lõi', 'Core services', 'コアサービス') },
    { value: 10, suffix: '', label: x('Dự án tiêu biểu', 'Featured projects', '主要プロジェクト') },
    { value: 4, suffix: '', label: x('Thị trường', 'Markets', '展開市場') },
    { value: 15, suffix: '+', label: x('Khách hàng & đối tác', 'Clients and partners', 'クライアント・パートナー') },
  ],
  about: {
    eyebrow: x('Về Mercury', 'About Mercury', 'Mercuryについて'),
    title: x('Đối tác công nghệ cho chuyển đổi số', 'A technology partner for digital transformation', 'デジタル変革のテクノロジーパートナー'),
    text: x(
      'Chúng tôi kết hợp kỹ thuật phần mềm, dữ liệu và AI để biến quy trình phức tạp thành hệ thống rõ ràng, đo lường được và dễ mở rộng.',
      'We combine software engineering, data and AI to turn complex processes into systems that are clear, measurable and easy to scale.',
      'ソフトウェアエンジニアリング、データ、AIを組み合わせ、複雑なプロセスを明確で測定可能、かつ拡張しやすいシステムに変えます。'
    ),
  },
  servicesTitle: x('Dịch vụ', 'What we do', '提供サービス'),
  servicesText: x(
    'Sáu năng lực cốt lõi, mỗi năng lực có trang chi tiết riêng.',
    'Six core capabilities, each with its own detail page.',
    '6つのコア領域。それぞれに詳細ページがあります。'
  ),
  projectsTitle: x('Dự án tiêu biểu', 'Featured projects', '主要プロジェクト'),
  projectsText: x(
    'Một số hệ thống Mercury đã xây dựng cho khách hàng tại Việt Nam, Nhật Bản và Singapore.',
    'A selection of systems Mercury has built for clients in Vietnam, Japan and Singapore.',
    'ベトナム・日本・シンガポールのお客様向けにMercuryが構築したシステムの一部です。'
  ),
  clientsTitle: x('Khách hàng và đối tác', 'Trusted by clients and partners', 'お客様・パートナー'),
  clientsText: x(
    'Doanh nghiệp, tổ chức thể thao và đơn vị công nghệ đồng hành cùng Mercury.',
    'Businesses, sports organisations and technology companies working with Mercury.',
    'Mercuryと協働する企業、スポーツ団体、テクノロジー企業。'
  ),
  process: {
    title: x('Cách chúng tôi làm việc', 'How we work', '進め方'),
    steps: [
      { t: x('Khám phá', 'Discover', '探索'), d: x('Hiểu bài toán, người dùng và dữ liệu hiện có.', 'Understand the problem, users and existing data.', '課題、ユーザー、既存データを理解します。') },
      { t: x('Thiết kế', 'Design', '設計'), d: x('Kiến trúc, luồng nghiệp vụ và giao diện.', 'Architecture, workflows and interface.', 'アーキテクチャ、業務フロー、UIを設計。') },
      { t: x('Xây dựng', 'Build', '開発'), d: x('Phát triển theo sprint, demo thường xuyên.', 'Sprint-based delivery with frequent demos.', 'スプリント開発と定期的なデモ。') },
      { t: x('Vận hành', 'Run', '運用'), d: x('Triển khai, giám sát và cải tiến liên tục.', 'Deploy, monitor and keep improving.', '導入、監視、継続的な改善。') },
    ],
  },
  insightsTitle: x('Insights', 'Insights', 'インサイト'),
  insightsText: x(
    'Góc nhìn về ERP, AI, HR Tech và chuyển đổi số.',
    'Perspectives on ERP, AI, HR Tech and digital transformation.',
    'ERP、AI、HRテック、DXに関する視点。'
  ),
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */
export const about = {
  heroTitle: x('Chúng tôi xây dựng công nghệ có thể vận hành thật', 'We build technology that runs in the real world', '現場で動くテクノロジーをつくる'),
  heroText: x(
    'Mercury Solutions là đơn vị phát triển phần mềm, AI và chuyển đổi số, phục vụ khách hàng từ SME đến tập đoàn.',
    'Mercury Solutions is a software, AI and digital-transformation company serving clients from SMEs to enterprise groups.',
    'Mercury Solutionsは、中小企業から大企業グループまで支援する、ソフトウェア・AI・DXの開発会社です。'
  ),
  intro: x(
    'Chúng tôi bắt đầu từ bài toán của khách hàng, không bắt đầu từ công nghệ. Mỗi hệ thống được thiết kế để đo lường được, mở rộng được và vận hành bền vững.',
    'We start from the customer’s problem, not from the technology. Every system is designed to be measurable, scalable and sustainable in operation.',
    'お客様の課題から出発し、技術から出発することはありません。すべてのシステムは、測定可能で拡張でき、持続的に運用できるよう設計します。'
  ),
  direction: [
    {
      icon: 'eye',
      title: x('Tầm nhìn', 'Vision', 'ビジョン'),
      text: x(
        'Trở thành đối tác công nghệ uy tín, tiên phong cung cấp giải pháp số toàn diện cho doanh nghiệp trong và ngoài nước.',
        'To be a trusted technology partner, pioneering comprehensive digital solutions for businesses at home and abroad.',
        '国内外の企業に総合的なデジタルソリューションを提供する、信頼されるテクノロジーパートナーになる。'
      ),
    },
    {
      icon: 'target',
      title: x('Sứ mệnh', 'Mission', 'ミッション'),
      text: x(
        'Đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số, mang đến giải pháp sáng tạo, hiệu quả và bền vững.',
        'To accompany businesses on their digital transformation journey with creative, effective and sustainable solutions.',
        '創造的で効果的、持続可能なソリューションで、企業のデジタル変革に寄り添う。'
      ),
    },
    {
      icon: 'rocket',
      title: x('Định hướng hành động', 'Action', 'アクション'),
      text: x(
        'Lấy khách hàng làm trung tâm, lấy chất lượng làm cam kết và đổi mới sáng tạo làm động lực.',
        'Customer-centric, committed to quality, and driven by innovation.',
        '顧客第一、品質へのコミットメント、革新を原動力に。'
      ),
    },
  ],
  marketsTitle: x('Khách hàng và thị trường', 'Clients and markets', 'クライアントと市場'),
  markets: [
    { name: VN, text: x('Thị trường chính — ERP, HR Tech, GovTech, Sport Tech.', 'Home market — ERP, HR Tech, GovTech, Sport Tech.', '主力市場 — ERP、HRテック、ガブテック、スポーツテック。') },
    { name: JP, text: x('Ứng dụng nghiệp vụ và nền tảng tự phục vụ cho doanh nghiệp Nhật.', 'Business apps and self-service platforms for Japanese companies.', '日本企業向けの業務アプリとセルフサービス基盤。') },
    { name: SG, text: x('Nền tảng quản lý bảo trì và vận hành đa địa điểm.', 'Multi-site maintenance and operations platforms.', '複数拠点の保守・運用管理プラットフォーム。') },
    { name: AU, text: x('Khách hàng và đối tác tại Úc.', 'Clients and partners in Australia.', 'オーストラリアのお客様・パートナー。') },
  ],
  values: [
    { t: x('Rõ ràng', 'Clarity', '明確さ'), d: x('Phạm vi, tiến độ và chi phí minh bạch ngay từ đầu.', 'Scope, schedule and cost made transparent from day one.', '範囲・スケジュール・コストを最初から透明に。') },
    { t: x('Chất lượng', 'Quality', '品質'), d: x('Kiểm thử, review và giám sát là một phần của quy trình.', 'Testing, review and monitoring are part of the process.', 'テスト、レビュー、監視をプロセスの一部に。') },
    { t: x('Đồng hành', 'Partnership', '伴走'), d: x('Không chỉ bàn giao — chúng tôi vận hành và cải tiến cùng bạn.', 'We don’t just hand over — we run and improve with you.', '納品して終わりではなく、運用と改善を共に。') },
  ],
}

/* ------------------------------------------------------------------ */
/* Work, Insights, Careers, Contact                                    */
/* ------------------------------------------------------------------ */
export const work = {
  title: x('Dự án tiêu biểu', 'Featured projects', '主要プロジェクト'),
  text: x(
    'Các hệ thống tiêu biểu Mercury đã xây dựng cho khách hàng. Lọc theo ngành để xem các dự án liên quan.',
    'Representative systems Mercury has built for clients. Filter by industry to see related projects.',
    'Mercuryがお客様向けに構築した代表的なシステム。業界で絞り込めます。'
  ),
}

export const insights = {
  title: x('Insights', 'Insights', 'インサイト'),
  text: x(
    'Tin tức, bài viết chuyên môn và xu hướng về ERP, AI, HR Tech và chuyển đổi số.',
    'News, expert articles and trends in ERP, AI, HR Tech and digital transformation.',
    'ERP、AI、HRテック、DXに関するニュース、専門記事、トレンド。'
  ),
  soon: x('Sắp ra mắt', 'Coming soon', '近日公開'),
  topics: [
    { tag: 'ERP', t: x('ERP cho doanh nghiệp vừa và nhỏ: bắt đầu từ đâu?', 'ERP for mid-sized companies: where to start?', '中堅企業のERP導入：どこから始めるか') },
    { tag: 'AI', t: x('Từ chatbot đến AI Agent: khác biệt trong vận hành doanh nghiệp', 'From chatbots to AI agents: what changes in operations', 'チャットボットからAIエージェントへ：業務運用の違い') },
    { tag: 'HR TECH', t: x('Chấm công và tính lương linh hoạt cho sản xuất', 'Flexible time-and-attendance and payroll for manufacturing', '製造業の柔軟な勤怠・給与管理') },
    { tag: 'DX', t: x('Lộ trình chuyển đổi số cho cơ quan hành chính địa phương', 'A digital-transformation roadmap for local government', '地方行政のDXロードマップ') },
    { tag: 'VISION', t: x('Thị giác máy trong kiểm tra chất lượng: nên triển khai thế nào', 'Machine vision for quality inspection: how to roll it out', '外観検査における画像認識：導入の進め方') },
    { tag: 'INTEGRATION', t: x('Tích hợp Meta API: những điều cần chuẩn bị', 'Integrating the Meta APIs: what to prepare', 'Meta API連携：事前に準備すること') },
  ],
  note: x(
    'Nội dung bài viết đang được biên tập. Đây là các chủ đề dự kiến.',
    'Articles are being written. These are the planned topics.',
    '記事は準備中です。以下は公開予定のテーマです。'
  ),
}

export const careers = {
  title: x('Cùng xây dựng sản phẩm với Mercury', 'Build products with Mercury', 'Mercuryと共にプロダクトをつくる'),
  text: x(
    'Chúng tôi tìm những người thích giải quyết bài toán thật, làm việc cẩn thận và muốn học nhanh.',
    'We look for people who enjoy solving real problems, work carefully and want to learn fast.',
    '現実の課題解決を楽しみ、丁寧に仕事をし、素早く学びたい人を求めています。'
  ),
  perks: [
    { t: x('Bài toán thật', 'Real problems', '実際の課題'), d: x('Làm việc với khách hàng tại Việt Nam, Nhật Bản, Singapore.', 'Work with clients in Vietnam, Japan and Singapore.', 'ベトナム・日本・シンガポールのお客様と仕事ができます。') },
    { t: x('Công nghệ hiện đại', 'Modern stack', 'モダンな技術'), d: x('Web, mobile, AI Agent, thị giác máy và tích hợp hệ thống.', 'Web, mobile, AI agents, computer vision and system integration.', 'Web、モバイル、AIエージェント、画像認識、システム連携。') },
    { t: x('Học và phát triển', 'Grow', '成長'), d: x('Review code, chia sẻ kỹ thuật và lộ trình phát triển rõ ràng.', 'Code review, tech sharing and a clear growth path.', 'コードレビュー、技術共有、明確な成長パス。') },
    { t: x('Môi trường quốc tế', 'International team', '国際的な環境'), d: x('Cơ hội làm việc với đối tác Nhật Bản.', 'Opportunities to work with Japanese partners.', '日本のパートナーと働く機会。') },
  ],
  openTitle: x('Vị trí đang tuyển', 'Open positions', '募集中のポジション'),
  openText: x(
    'Hiện chưa có tin đăng công khai. Hãy gửi CV — chúng tôi sẽ liên hệ khi có vị trí phù hợp.',
    'No public listings right now. Send your CV and we will reach out when a suitable role opens.',
    '現在、公開中の求人はありません。履歴書をお送りください。適した職種が出た際にご連絡します。'
  ),
  send: x('Gửi CV', 'Send your CV', '履歴書を送る'),
}

export const contact = {
  title: x('Liên hệ Mercury', 'Contact Mercury', 'Mercuryへのお問い合わせ'),
  text: x(
    'Mô tả ngắn gọn nhu cầu của bạn — chúng tôi sẽ phản hồi trong vòng 1 ngày làm việc.',
    'Briefly describe what you need — we reply within one business day.',
    'ご要望を簡単にお知らせください。1営業日以内にご返信します。'
  ),
  address: x(
    '33 Ngõ 41 Thái Hà, Trung Liệt, Đống Đa, Hà Nội, Việt Nam',
    '33 Lane 41 Thai Ha, Trung Liet, Dong Da, Hanoi, Vietnam',
    'ベトナム・ハノイ市ドンダー区チュンリエット、タイハー通り41小路33番'
  ),
  hours: x('Thứ 2 - Thứ 6: 8:00 - 18:00 · Thứ 7: 9:00 - 13:00', 'Mon - Fri: 8:00 AM - 6:00 PM · Sat: 9:00 AM - 1:00 PM', '月-金: 8:00-18:00 · 土: 9:00-13:00'),
  phone: '+84 24 1234 5678',
  email: 'info@mercury-solutions.vn',
  form: {
    name: x('Họ và tên', 'Full name', 'お名前'),
    company: x('Công ty', 'Company', '会社名'),
    email: x('Email', 'Email', 'メールアドレス'),
    phone: x('Điện thoại', 'Phone', '電話番号'),
    topic: x('Bạn quan tâm đến', 'Interested in', 'ご関心のある分野'),
    message: x('Nội dung', 'Message', 'お問い合わせ内容'),
    send: x('Gửi yêu cầu', 'Send request', '送信する'),
    sending: x('Đang gửi…', 'Sending…', '送信中…'),
    thanks: x('Cảm ơn bạn! Mercury sẽ liên hệ sớm.', 'Thank you! Mercury will be in touch soon.', 'ありがとうございます。Mercuryより近日中にご連絡します。'),
    general: x('Tư vấn chung', 'General enquiry', '一般的なご相談'),
  },
}

export const footer = {
  blurb: x(
    'Phát triển phần mềm, AI và chuyển đổi số cho doanh nghiệp.',
    'Software, AI and digital transformation for business.',
    '企業のためのソフトウェア、AI、DX。'
  ),
  company: x('Công ty', 'Company', '会社'),
  services: x('Dịch vụ', 'Services', 'サービス'),
  projects: x('Dự án', 'Projects', '実績'),
  rights: x('Bảo lưu mọi quyền.', 'All rights reserved.', 'All rights reserved.'),
}

/** Small section labels shown above headings (translated) */
export const eyebrows: Record<string, Lx> = {
  services: x('Dịch vụ', 'Services', 'サービス'),
  work: x('Dự án', 'Projects', '実績'),
  clients: x('Khách hàng', 'Clients', 'クライアント'),
  process: x('Quy trình', 'Process', 'プロセス'),
  insights: x('Góc nhìn', 'Insights', 'インサイト'),
  markets: x('Thị trường', 'Markets', '市場'),
  values: x('Giá trị', 'Values', '価値観'),
  'about us': x('Về chúng tôi', 'About us', '会社概要'),
  careers: x('Tuyển dụng', 'Careers', '採用情報'),
  'open roles': x('Vị trí tuyển dụng', 'Open roles', '募集職種'),
  contact: x('Liên hệ', 'Contact', 'お問い合わせ'),
  numbers: x('Con số', 'At a glance', '数字で見る'),
}
