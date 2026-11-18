import type { Lx } from './i18n'

const x = (vi: string, en: string, ja: string): Lx => ({ vi, en, ja })

/* ------------------------------------------------------------------ */
/* About page (extended): story, team, capabilities, culture          */
/* Image slots are filled via lib/media.ts                            */
/* ------------------------------------------------------------------ */
export const aboutPage = {
  story: {
    eyebrow: x('Câu chuyện Mercury', 'Our story', '私たちについて'),
    title: x('Xây dựng phần mềm bắt đầu từ việc hiểu vận hành', 'Software starts with understanding operations', 'ソフトウェアづくりは、業務を理解することから'),
    paras: [
      x(
        'Mercury Solutions là đơn vị phát triển phần mềm, giải pháp AI và chuyển đổi số, phục vụ khách hàng từ doanh nghiệp vừa và nhỏ đến tập đoàn tại Việt Nam, Nhật Bản, Singapore và Úc.',
        'Mercury Solutions is a software, AI and digital-transformation company serving clients from mid-sized businesses to enterprise groups in Vietnam, Japan, Singapore and Australia.',
        'Mercury Solutionsは、ベトナム・日本・シンガポール・オーストラリアの中堅企業から大企業グループまでを支援する、ソフトウェア・AI・DXの開発会社です。'
      ),
      x(
        'Chúng tôi làm việc theo từng bước rõ ràng: khảo sát quy trình, thiết kế kiến trúc, phát triển theo sprint và đồng hành vận hành — để mỗi hệ thống bàn giao đều đo lường được và mở rộng được.',
        'We work in clear steps: process discovery, architecture design, sprint-based development and run-support — so every system we hand over is measurable and scalable.',
        '業務調査、アーキテクチャ設計、スプリント開発、運用支援という明確なステップで進め、納品するシステムを測定可能で拡張しやすいものにします。'
      ),
      x(
        'Danh mục của chúng tôi trải rộng từ ERP, HR Tech, GovTech, Sport Tech đến AI Agent và thị giác máy — mỗi dự án là một bài toán thật từ khách hàng thật.',
        'Our portfolio spans ERP, HR Tech, GovTech and Sport Tech through to AI agents and computer vision — each project a real problem from a real client.',
        'ポートフォリオはERP、HRテック、ガブテック、スポーツテックからAIエージェント、画像認識まで。どのプロジェクトも実在のお客様の課題から生まれています。'
      ),
    ],
  },
  team: {
    eyebrow: x('Đội ngũ', 'Team', 'チーム'),
    title: x('Những người đứng sau mỗi hệ thống', 'The people behind every system', 'すべてのシステムを支える人々'),
    text: x(
      'Đội ngũ Mercury gồm kỹ sư phần mềm, chuyên gia AI & dữ liệu, thiết kế và quản lý triển khai, làm việc cùng khách hàng trong suốt vòng đời dự án.',
      'The Mercury team brings together software engineers, AI and data specialists, designers and delivery managers who work with clients across the whole project lifecycle.',
      'Mercuryのチームは、ソフトウェアエンジニア、AI・データ専門家、デザイナー、デリバリーマネージャーで構成され、プロジェクトの全期間でお客様と協働します。'
    ),
    leadersTitle: x('Đội ngũ lãnh đạo', 'Leadership', 'リーダーシップ'),
    leaders: [
      { name: x('[Họ và tên]', '[Full name]', '[氏名]'), role: x('Giám đốc công nghệ', 'Chief Technology Officer', '最高技術責任者') },
      { name: x('Mr. Vũ Ngọc Du', 'Mr. Vũ Ngọc Du', 'Mr. Vũ Ngọc Du'), role: x('Giám đốc điều hành', 'Chief Executive Officer', '最高経営責任者') },
      { name: x('Ms. Ngô Thu Hiền', 'Ms. Ngô Thu Hiền', 'Ms. Ngô Thu Hiền'), role: x('Giám đốc vận hành', 'Chief Operating Officer', '最高執行責任者') },
    ],
    groupsTitle: x('Các nhóm chuyên môn', 'Expert teams', '専門チーム'),
    groups: [
      { t: x('Kỹ thuật phần mềm', 'Software engineering', 'ソフトウェアエンジニアリング'), d: x('Web, mobile, ERP và tích hợp hệ thống: từ kiến trúc, lập trình đến kiểm thử và triển khai.', 'Web, mobile, ERP and system integration: from architecture and coding to testing and deployment.', 'Web・モバイル・ERP・システム連携。設計から実装、テスト、導入まで。') },
      { t: x('AI & Dữ liệu', 'AI & Data', 'AI・データ'), d: x('AI Agent, RAG, thị giác máy và phân tích dữ liệu cho bài toán vận hành thực tế.', 'AI agents, RAG, computer vision and data analytics for real operational problems.', 'AIエージェント、RAG、画像認識、データ分析で実際の業務課題を解決。') },
      { t: x('Thiết kế & Chất lượng', 'Design & QA', 'デザイン・品質'), d: x('Thiết kế trải nghiệm, giao diện và đảm bảo chất lượng xuyên suốt các sprint.', 'Experience and interface design, plus quality assurance through every sprint.', '体験・UIデザインと、各スプリントを通じた品質保証。') },
      { t: x('Triển khai & Hỗ trợ', 'Delivery & Support', 'デリバリー・サポート'), d: x('Quản lý dự án, đào tạo người dùng, vận hành và hỗ trợ sau triển khai.', 'Project management, user training, operations and post-launch support.', 'プロジェクト管理、ユーザー教育、運用、導入後サポート。') },
    ],
  },
  capabilities: {
    eyebrow: x('Năng lực', 'Capabilities', '提供能力'),
    title: x('Năng lực triển khai từ ý tưởng đến vận hành', 'Delivery capability from idea to operation', 'アイデアから運用までの提供能力'),
    items: [
      {
        t: x('Phần mềm doanh nghiệp', 'Enterprise software', '企業向けソフトウェア'),
        d: x('ERP, hệ thống nghiệp vụ, ứng dụng web và mobile theo yêu cầu.', 'ERP, business systems, custom web and mobile applications.', 'ERP、業務システム、受託のWeb・モバイルアプリ。'),
        chips: ['PHP', 'React', 'Next.js', 'Node.js', 'Flutter'],
      },
      {
        t: x('AI & Tự động hoá', 'AI & Automation', 'AI・自動化'),
        d: x('AI Agent, Chatbot, RAG, thị giác máy và tích hợp nền tảng Meta.', 'AI agents, chatbots, RAG, computer vision and Meta platform integration.', 'AIエージェント、チャットボット、RAG、画像認識、Meta連携。'),
        chips: ['LLM', 'RAG', 'Python', 'OpenCV', 'Meta API'],
      },
      {
        t: x('Chuyển đổi số & Vận hành', 'Digital transformation & Ops', 'DX・運用'),
        d: x('Số hoá quy trình, dashboard KPI, phân quyền, audit trail và hỗ trợ vận hành.', 'Process digitisation, KPI dashboards, role-based access, audit trails and run-support.', 'プロセスのデジタル化、KPIダッシュボード、権限管理、監査証跡、運用サポート。'),
        chips: ['OpenAPI', 'RBAC', 'Dashboard', 'SLA'],
      },
    ],
  },
  culture: {
    eyebrow: x('Văn hoá', 'Culture', '文化'),
    title: x('Môi trường làm việc & hoạt động', 'Workplace & activities', '職場環境と活動'),
    captions: [
      x('Không gian làm việc', 'Our workspace', 'オフィス'),
      x('Hoạt động nội bộ', 'Team activities', 'チーム活動'),
      x('Cùng khách hàng', 'With clients', 'お客様と共に'),
    ],
  },
  slotHint: x('Chèn hình ảnh', 'Add image', '画像を挿入'),
}

/* ------------------------------------------------------------------ */
/* Client (partner) block shown inside each project                    */
/* ------------------------------------------------------------------ */
export type ProjectClient = { name: Lx; kind: Lx; about: Lx; logo?: string }
export const projectClients: Record<string, ProjectClient> = {
  'hmb-erp': {
    name: x('Tập đoàn HMB', 'HMB Group', 'HMBグループ'),
    kind: x('Doanh nghiệp dược phẩm', 'Pharmaceutical group', '製薬企業グループ'),
    about: x('Tập đoàn HMB vận hành nhiều mảng nghiệp vụ gồm quản trị tổ chức, bán hàng, kho vận, tài chính–kế toán và mua hàng — là đơn vị triển khai hệ thống ERP tập trung cùng Mercury.', 'HMB Group runs several business areas — organisation management, sales, warehouse and logistics, finance–accounting and purchasing — and is the client of the centralised ERP built with Mercury.', 'HMBグループは、組織管理、販売、倉庫・物流、財務会計、購買など複数の業務領域を持ち、Mercuryと共に統合ERPを導入したお客様です。'),
    logo: '/images/clients/hmb.png',
  },
  actiwell: {
    name: x('Actiwell', 'Actiwell', 'Actiwell'),
    kind: x('Fitness Tech', 'Fitness Tech', 'フィットネステック'),
    about: x('Actiwell hướng tới kết nối hoạt động quản lý phòng tập với trải nghiệm đặt lịch và tập luyện của hội viên, qua hệ sinh thái Actiwell Business, ứng dụng hội viên và CMS.', 'Actiwell connects gym management with the members booking and training experience through Actiwell Business, the member app and the CMS.', 'Actiwellは、Actiwell Business、会員アプリ、CMSを通じて、ジム運営と会員の予約・トレーニング体験をつなぎます。'),
  },
  'tna-fujikin': {
    name: x('Fujikin', 'Fujikin', 'フジキン'),
    kind: x('Doanh nghiệp sản xuất', 'Manufacturing company', '製造企業'),
    about: x('Fujikin Vietnam (KCN Thăng Long, Hà Nội) triển khai TNA của Mercury để chấm công bằng camera AI, quản lý ca làm, đơn từ và tính lương cho lực lượng công nhân quy mô lớn.', 'Fujikin Vietnam (Thang Long Industrial Park, Hanoi) uses Mercury TNA for AI-camera attendance, shift and request management and payroll for a large factory workforce.', 'Fujikin Vietnam（ハノイ・タンロン工業団地）は、MercuryのTNAをAIカメラ勤怠、シフト・申請管理、大規模な工場従業員向け給与計算に活用しています。'),
    logo: '/images/clients/fujikin.png',
  },
  icommune: {
    name: x('Ủy ban MTTQ phường Kiến Hưng', 'Kien Hung Ward Fatherland Front Committee', 'キエンフン区 祖国戦線委員会'),
    kind: x('Chính quyền cấp phường · Hà Đông, Hà Nội', 'Ward-level administration · Ha Dong, Hanoi', '区レベルの行政・ハノイ市ハードン'),
    about: x('Ủy ban MTTQ Việt Nam phường Kiến Hưng (Hà Đông, Hà Nội) triển khai iKienhung — trung tâm điều hành số cấp phường và ứng dụng cho người dân: tiếp nhận phản ánh kiến nghị, an sinh xã hội, giám sát phản biện, vận động phong trào, bản tin và văn bản MTTQ.', 'The Vietnam Fatherland Front Committee of Kien Hung Ward (Ha Dong, Hanoi) runs iKienhung — a ward-level digital operations centre and a citizen app for feedback and petitions, social welfare, oversight and review, campaigns, bulletins and official documents.', 'ハノイ市ハードン区キエンフン区の祖国戦線委員会は、区レベルのデジタル運営センターと住民向けアプリiKienhungを導入し、意見・陳情の受付、社会福祉、監視・批評、運動、広報、公文書を一元的に扱っています。'),
  },
  'activesg-cms': {
    name: x('ActiveSG', 'ActiveSG', 'ActiveSG'),
    kind: x('Hệ thống cơ sở thể thao · Singapore', 'Sports facilities network · Singapore', 'スポーツ施設ネットワーク・シンガポール'),
    about: x('ActiveSG vận hành nhiều cơ sở thể thao tại Singapore và cần theo dõi thiết bị, lịch bảo trì và kiểm tra đồng bộ trên nhiều địa điểm.', 'ActiveSG operates many sports facilities in Singapore and needs equipment, maintenance schedules and inspections tracked consistently across sites.', 'ActiveSGはシンガポールで多数のスポーツ施設を運営しており、複数拠点で設備・保守計画・点検を統一的に管理する必要があります。'),
    logo: '/images/clients/activesg.png',
  },
  'careearth-life': {
    name: x('CareEarth', 'CareEarth', 'CareEarth'),
    kind: x('Quản lý lao động · Nhật Bản', 'Workforce management · Japan', '人材管理・日本'),
    about: x('CareEarth quản lý hồ sơ và định danh người lao động phái cử tại Nhật Bản; nền tảng giúp người lao động tự tra cứu việc làm, thời gian làm việc và lương.', 'CareEarth manages records and identity of dispatched workers in Japan; the platform lets workers self-serve job, working-time and pay information.', 'CareEarthは日本で派遣労働者の情報と本人確認を管理しており、プラットフォームにより労働者が勤務・労働時間・給与情報を自分で確認できます。'),
    logo: '/images/clients/careearth.png',
  },
  'casa-lsm': {
    name: x('Little SOL Montessori', 'Little SOL Montessori', 'Little SOL Montessori'),
    kind: x('Trường mầm non Montessori', 'Montessori preschool', 'モンテッソーリ幼児教育施設'),
    about: x('Little SOL Montessori triển khai CASA LSM, nền tảng quản lý trường mầm non hiện đại ứng dụng AI (GOEN Platform), để tối ưu vận hành và tăng cường kết nối giữa nhà trường với phụ huynh.', 'Little SOL Montessori runs CASA LSM, an AI-powered modern preschool management platform (GOEN Platform), to streamline operations and strengthen the link between school and parents.', 'Little SOL Montessoriは、AIを活用した現代的な幼児教育施設管理プラットフォームCASA LSM（GOEN Platform）を導入し、運営の最適化と保護者との連携強化を図っています。'),
  },
  atms: {
    name: x('Trung tâm Huấn luyện Thể thao Quốc gia', 'National Sports Training Centres', 'ナショナルトレーニングセンター'),
    kind: x('Thể thao thành tích cao', 'High-performance sport', 'ハイパフォーマンススポーツ'),
    about: x('Các Trung tâm Huấn luyện Thể thao Quốc gia cần quản lý tập trung hồ sơ, kế hoạch huấn luyện và kết quả đánh giá vận động viên theo chuẩn NSCA và quốc tế.', 'National Sports Training Centres need centralised management of athlete records, training plans and assessment results against NSCA and international standards.', 'ナショナルトレーニングセンターでは、選手情報、トレーニング計画、NSCA・国際基準による評価結果の一元管理が必要です。'),
    logo: '/images/clients/hcm-sports.png',
  },
  'super-bloom': {
    name: x('Super Bloom', 'Super Bloom', 'Super Bloom'),
    kind: x('Không gian phòng tập · Osaka & Tokyo', 'Gym spaces · Osaka & Tokyo', 'ジムスペース・大阪／東京'),
    about: x('Super Bloom là doanh nghiệp tại Osaka vận hành các không gian phòng tập trong khách sạn cao cấp ở Osaka và Tokyo, cần dữ liệu khách hàng tập trung giữa các chi nhánh.', 'Super Bloom is an Osaka company running gym spaces inside premium hotels in Osaka and Tokyo and needs customer data centralised across branches.', 'Super Bloomは大阪の企業で、大阪・東京の高級ホテル内でジムスペースを運営しており、拠点をまたぐ顧客データの一元化が必要です。'),
  },
}

export const workExtra = {
  clientTitle: x('Khách hàng triển khai', 'Client & partner', '導入クライアント'),
  clientPhoto: x('Hình ảnh khách hàng', 'Client photo', 'クライアントの写真'),
  logoSlot: x('Logo khách hàng', 'Client logo', 'クライアントロゴ'),
  systemTitle: x('Hình ảnh hệ thống', 'System screenshots', 'システム画面'),
  systemText: x('Giao diện và màn hình chính của hệ thống đã triển khai.', 'Key interfaces and screens of the delivered system.', '導入したシステムの主なインターフェースと画面。'),
  shots: [
    x('Màn hình tổng quan', 'Overview screen', '概要画面'),
    x('Màn hình quản lý', 'Management screen', '管理画面'),
    x('Màn hình báo cáo', 'Reporting screen', 'レポート画面'),
  ],
}

/* ------------------------------------------------------------------ */
/* Per-project feature modules and photo galleries                     */
/* ------------------------------------------------------------------ */
export const projectModules: Record<string, { t: Lx; d: Lx }[]> = {
  'tna-fujikin': [
    { t: x('Dashboard & báo cáo', 'Dashboards & reporting', 'ダッシュボード・レポート'), d: x('Theo dõi nhân sự, chấm công, tăng ca, chi phí lao động theo thời gian thực.', 'Real-time workforce, attendance, overtime and labour-cost metrics.', '人員、勤怠、残業、労務コストをリアルタイムで把握。') },
    { t: x('Chấm công & ca làm việc', 'Attendance & shifts', '勤怠・シフト'), d: x('Camera AI, máy chấm công; nhiều ca, xoay ca, ca đêm, tăng ca.', 'AI cameras and time clocks; multiple shifts, rotations, night shifts, overtime.', 'AIカメラ・タイムレコーダー、複数シフト、ローテーション、夜勤、残業。') },
    { t: x('Đơn từ & phê duyệt', 'Requests & approvals', '申請・承認'), d: x('Nghỉ phép, đổi ca, đi muộn/về sớm, tăng ca, điều chỉnh công — duyệt trực tuyến.', 'Leave, shift swaps, late/early, overtime and corrections — approved online.', '休暇、シフト交換、遅刻早退、残業、勤怠修正をオンライン承認。') },
    { t: x('Bảng lương tự động', 'Automated payroll', '給与の自動計算'), d: x('Tổng hợp công, tăng ca, nghỉ phép, thưởng/phạt; tính lại chỉ phần dữ liệu thay đổi.', 'Consolidates attendance, overtime, leave, bonuses and penalties; recalculates only changed data.', '勤怠・残業・休暇・賞罰を集計し、変更分のみ再計算。') },
    { t: x('Thưởng & khấu trừ', 'Bonuses & deductions', '賞与・控除'), d: x('Quản lý thưởng, phụ cấp, tạm ứng, bảo hiểm, thuế và các khoản khấu trừ.', 'Bonuses, allowances, advances, insurance, tax and other deductions.', '賞与、手当、前払い、保険、税、各種控除を管理。') },
    { t: x('Phiếu lương & thanh toán', 'Payslips & payments', '給与明細・支払い'), d: x('Phiếu lương điện tử, xuất file ngân hàng (MB Bank, Vietcombank, BIDV…).', 'E-payslips and bank-file export (MB Bank, Vietcombank, BIDV…).', '電子給与明細と銀行ファイル出力（MB Bank、Vietcombank、BIDV等）。') },
    { t: x('Hồ sơ nhân sự 360°', '360° employee records', '従業員360°レコード'), d: x('Hồ sơ cá nhân, hợp đồng, bảo hiểm, thuế, người phụ thuộc và lịch sử công tác.', 'Personal records, contracts, insurance, tax, dependants and employment history.', '個人情報、契約、保険、税、扶養家族、職歴を一元管理。') },
    { t: x('BHXH & thuế TNCN', 'Social insurance & income tax', '社会保険・所得税'), d: x('Tự động tính BHXH, BHYT, BHTN, công đoàn và thuế TNCN theo từng kỳ hiệu lực.', 'Automatic social/health/unemployment insurance, union fee and income tax per effective period.', '社会保険・健康保険・失業保険・組合費・所得税を有効期間ごとに自動計算。') },
    { t: x('Cơ cấu tổ chức đa nhà máy', 'Multi-site organisation', 'マルチサイト組織管理'), d: x('Phòng ban nhiều cấp, văn phòng, nhà máy, chức danh; hỗ trợ vi/en/ja và đa tiền tệ (VND, USD, KRW, JPY).', 'Multi-level departments, offices, plants and job titles; vi/en/ja and multiple currencies (VND, USD, KRW, JPY).', '多階層の部門、事業所、工場、職位。vi/en/ja対応、多通貨（VND・USD・KRW・JPY）。') },
    { t: x('Phân quyền & nhật ký thay đổi', 'Access control & audit log', '権限管理・監査ログ'), d: x('Phân quyền theo vai trò; lưu ai thay đổi gì, khi nào, so sánh giá trị cũ/mới.', 'Role-based access; who changed what and when, with before/after comparison.', 'ロール別権限。誰がいつ何を変更したかを記録し、変更前後を比較。') },
    { t: x('Ứng dụng nhân viên', 'Employee mobile app', '従業員向けモバイルアプリ'), d: x('Xem ca làm, chấm công, phiếu lương và gửi đơn ngay trên điện thoại.', 'View shifts, check in/out, payslips and submit requests from a phone.', 'シフト確認、打刻、給与明細、申請をスマートフォンで。') },
    { t: x('Triển khai linh hoạt', 'Flexible deployment', '柔軟な導入形態'), d: x('Cloud hoặc on-premises (máy chủ tại nhà máy), API mở, tích hợp MISA, FAST, BHXH điện tử.', 'Cloud or on-premises (plant servers), open APIs, MISA, FAST and e-social-insurance integration.', 'クラウド／オンプレミス（工場内サーバー）、オープンAPI、MISA・FAST・電子社会保険連携。') },
    { t: x('Chữ ký số & hợp đồng điện tử', 'E-signature & e-contracts', '電子署名・電子契約'), d: x('Tích hợp MegaDoc, EasyDoc và các nền tảng hợp đồng điện tử khác.', 'Integrates MegaDoc, EasyDoc and other e-contract platforms.', 'MegaDoc、EasyDocなどの電子契約プラットフォームと連携。') },
  ],
}

export const workGallery: Record<string, { id: string; label: Lx }[]> = {
  'tna-fujikin': [
    { id: 'site.1', label: x('Cổng vào với 6 camera AI chấm công tự động', 'Entrance with 6 AI cameras for auto check-in', 'AIカメラ6台による入口の自動打刻') },
    { id: 'site.2', label: x('Chấm công giờ nghỉ trưa', 'Lunchtime check-out', '昼休みの退勤打刻') },
    { id: 'site.3', label: x('Camera AI gắn tường', 'Wall-mounted AI camera', '壁掛けAIカメラ') },
  ],
}

export const workGalleryExtra = {
  title: x('Hình ảnh triển khai', 'On-site implementation', '導入現場の写真'),
  text: x('Hình ảnh thực tế tại nhà máy của khách hàng.', 'Photos from the client’s site.', 'お客様の現場での実際の様子。'),
  modulesTitle: x('Chức năng chính', 'Key modules', '主な機能'),
}

export const workMobile: Record<string, { title: Lx; text: Lx; screens: { t: Lx; d: Lx }[] }> = {
  icommune: {
    title: x('Ứng dụng iKienhung cho người dân', 'iKienhung citizen app', '住民向けiKienhungアプリ'),
    text: x('Người dân gửi phản ánh kiến nghị kèm ảnh, vị trí GPS, theo dõi tin tức của phường và gọi nhanh các đường dây nóng ngay trên điện thoại.', 'Citizens submit petitions with photos and GPS, follow ward news and call hotlines straight from their phone.', '住民は写真とGPS付きで意見を送信し、区のお知らせを確認し、ホットラインへ電話できます。'),
    screens: [
      { t: x('Trang chủ', 'Home', 'ホーム'), d: x('Dịch vụ & tiện ích công dân: phản ánh kiến nghị, an sinh xã hội, giám sát phản biện, vận động phong trào, bản tin, văn bản.', 'Citizen services: petitions, social welfare, oversight, campaigns, bulletins and documents.', '住民サービス：陳情、社会福祉、監視・批評、運動、広報、公文書。') },
      { t: x('Gửi phản ánh', 'Submit a petition', '陳情の送信'), d: x('Chọn lĩnh vực, nhập nội dung, đính kèm ảnh/video hiện trường và lấy vị trí GPS.', 'Pick a category, describe the issue, attach photos or video and capture GPS location.', '分野を選び、内容を入力し、現場の写真・動画を添付してGPS位置を取得。') },
      { t: x('Liên hệ & đường dây nóng', 'Contacts & hotlines', '連絡先・ホットライン'), d: x('Thông tin Ủy ban, giờ tiếp công dân và các số trực ban khẩn cấp, bấm là gọi.', 'Committee details, public hours and emergency duty numbers, one tap to call.', '委員会の情報、受付時間、緊急当番の番号。ワンタップで発信。') },
    ],
  },
  'casa-lsm': {
    title: x('Ứng dụng SOL School Assistant cho phụ huynh', 'SOL School Assistant for parents', '保護者向けSOL School Assistant'),
    text: x('Phụ huynh hỏi đáp với trợ lý AI để xem nhật ký, báo cáo học tập và hoạt động của con ngay trên điện thoại.', 'Parents chat with an AI assistant to see their child’s journal, learning reports and activities on their phone.', '保護者はAIアシスタントに質問するだけで、お子様の日誌、学習レポート、活動をスマートフォンで確認できます。'),
    screens: [
      { t: x('Trợ lý AI', 'AI assistant', 'AIアシスタント'), d: x('Lời chào cá nhân hoá và lối tắt: nhật ký ngày, báo cáo học tập, cảm xúc, xếp hạng.', 'Personal greeting and shortcuts: daily journal, learning report, emotions and rank.', 'パーソナライズされた挨拶と、日誌・学習レポート・感情・ランキングへのショートカット。') },
      { t: x('Nhật ký hằng ngày', 'Daily journal', '毎日の日誌'), d: x('Hỏi “nhật ký của bé” và nhận ảnh kèm mô tả hoạt động trong ngày.', 'Ask for the child’s journal and get photos with a description of the day.', '「お子様の日誌」を尋ねると、写真と一日の活動の説明が届きます。') },
      { t: x('Hoạt động nhóm', 'Group activities', 'グループ活動'), d: x('Biểu đồ tham gia, hình ảnh hoạt động và mục đích giáo dục của từng hoạt động.', 'Participation chart, activity photos and the educational purpose of each activity.', '参加率のグラフ、活動写真、各活動の教育目的。') },
    ],
  },
  actiwell: {
    title: x('Ứng dụng hội viên', 'Member app', '会員アプリ'),
    text: x('Hội viên tìm phòng tập gần nhất, đặt lớp nhóm hoặc 1:1 và theo dõi lịch tập ngay trên điện thoại.', 'Members find the nearest studio, book group or 1:1 classes and follow their schedule on their phone.', '会員は近くのスタジオを探し、グループ・個別レッスンを予約し、スマートフォンでスケジュールを確認できます。'),
    screens: [
      { t: x('Trang chủ', 'Home', 'ホーム'), d: x('Danh sách phòng tập của tôi, khoảng cách, đánh giá và lối tắt vào lịch tập.', 'My studios with distance, rating and a shortcut to the class schedule.', 'マイスタジオ一覧、距離、評価、スケジュールへのショートカット。') },
      { t: x('Đặt lớp', 'Book a class', 'クラス予約'), d: x('Lịch theo tháng, chọn lớp nhóm hoặc 1:1, xem huấn luyện viên và số chỗ còn trống.', 'Monthly calendar, group or private classes, with instructor and availability.', '月間カレンダー、グループ／個別クラス、講師と空き状況。') },
      { t: x('Lịch của tôi', 'My schedule', 'マイスケジュール'), d: x('Các buổi đã xác nhận theo ngày giờ, có thể huỷ trực tiếp trên ứng dụng.', 'Confirmed sessions by date and time, with in-app cancellation.', '確定済みのレッスンを日時別に表示し、アプリ内でキャンセルできます。') },
    ],
  },
  'tna-fujikin': {
    title: x('Ứng dụng di động cho nhân viên', 'Employee mobile app', '従業員向けモバイルアプリ'),
    text: x('Nhân viên xem thông tin cá nhân, chấm công và phiếu lương ngay trên điện thoại, mọi lúc mọi nơi.', 'Employees view personal information, attendance and payslips on their phone, anytime, anywhere.', '従業員は個人情報、勤怠、給与明細をいつでもどこでもスマートフォンで確認できます。'),
    screens: [
      { t: x('Trang chủ', 'Home', 'ホーム'), d: x('Ca làm hôm nay, check-in/check-out và truy cập nhanh chấm công, bảng lương, tạo đề xuất.', 'Today’s shift, check-in/out and quick access to attendance, payslips and requests.', '本日のシフト、出退勤打刻、勤怠・給与・申請へのクイックアクセス。') },
      { t: x('Hồ sơ', 'Profile', 'プロフィール'), d: x('Mã nhân viên, phòng ban, quản lý trực tiếp và thông tin liên hệ.', 'Employee ID, department, direct manager and contact details.', '社員ID、部署、直属の上長、連絡先。') },
      { t: x('Lương', 'Pay', '給与'), d: x('Phiếu lương theo kỳ: công, tăng ca, phụ cấp, thưởng, bảo hiểm, thuế và thực lĩnh.', 'Payslip per period: days worked, overtime, allowances, bonuses, insurance, tax and net pay.', '期間別の給与明細：勤務日数、残業、手当、賞与、保険、税、手取り。') },
    ],
  },
}

/** Groups the module list into readable columns; items are indexes into projectModules[slug] */
export const moduleGroups: Record<string, { title: Lx; items: number[] }[]> = {
  'tna-fujikin': [
    { title: x('Vận hành & chấm công', 'Operations & attendance', '運用・勤怠'), items: [0, 1, 2] },
    { title: x('Lương & phúc lợi', 'Payroll & benefits', '給与・福利厚生'), items: [3, 4, 5, 7] },
    { title: x('Nhân sự & tổ chức', 'People & organisation', '人事・組織'), items: [6, 8, 10] },
    { title: x('Quản trị & triển khai', 'Governance & deployment', 'ガバナンス・導入'), items: [9, 11, 12] },
  ],
}
