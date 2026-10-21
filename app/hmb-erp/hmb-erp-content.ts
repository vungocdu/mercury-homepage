export type HmbLocale = 'vi' | 'en' | 'ja' | 'ko'

export type HmbCapability = {
  eyebrow: string
  title: string
  description: string
  details: string[]
}

export type HmbErpContent = {
  meta: { title: string; description: string }
  nav: { name: string; description: string }
  hero: { eyebrow: string; title: string; subtitle: string; primaryCta: string; secondaryCta: string; tags: string[] }
  catalog: { eyebrow: string; title: string; description: string; note: string }
  capabilities: HmbCapability[]
  architecture: {
    eyebrow: string
    title: string
    description: string
    controlLabel: string
    tenantLabel: string
    control: { title: string; description: string; records: string[] }
    tenant: { title: string; description: string; records: string[] }
    flowLabel: string
    flow: string[]
    guardrailTitle: string
    guardrails: string[]
    availabilityNote: string
  }
  contact: { eyebrow: string; title: string; description: string; button: string }
}

export const hmbErpContent: Record<HmbLocale, HmbErpContent> = {
  vi: {
    meta: {
      title: 'HMB ERP | Nền tảng vận hành doanh nghiệp đa pháp nhân',
      description: 'Khám phá HMB ERP: nền tảng modular monolith cho tổ chức, danh mục, bán hàng, CRM và vận hành theo phạm vi pháp nhân.',
    },
    nav: { name: 'HMB ERP', description: 'Nền tảng ERP modular cho vận hành đa pháp nhân' },
    hero: {
      eyebrow: 'Nền tảng vận hành doanh nghiệp · HMB ERP',
      title: 'Một nền tảng, nhiều pháp nhân, phạm vi dữ liệu rõ ràng.',
      subtitle: 'HMB ERP kết nối dữ liệu tổ chức với các luồng khách hàng, danh mục, giá và bán hàng. Hệ thống được xây dựng theo kiến trúc modular monolith với quyền và dữ liệu được giới hạn theo pháp nhân.',
      primaryCta: 'Trao đổi về HMB ERP', secondaryCta: 'Xem danh mục năng lực',
      tags: ['Laravel API', 'React PWA', 'MySQL', 'Multi-company'],
    },
    catalog: {
      eyebrow: 'Năng lực trong codebase', title: 'Các luồng có màn hình và API tương ứng',
      description: 'Danh mục dưới đây được tổng hợp từ route, menu và API trong codebase HMB ERP: từ dữ liệu nền đến các luồng bán hàng và quản trị.',
      note: 'Một số màn hình yêu cầu capability hoặc runtime configuration cụ thể. Mức độ sẵn sàng của từng luồng cần được xác nhận theo quyền, pháp nhân và môi trường triển khai.',
    },
    capabilities: [
      { eyebrow: '01 · Tổ chức', title: 'Mô hình tổ chức đa pháp nhân', description: 'Khai báo và điều hướng theo pháp nhân với các đơn vị vận hành liên quan.', details: ['Pháp nhân, chi nhánh, nhóm phòng ban và phòng ban', 'Nhân viên, sơ đồ tổ chức và cấu trúc bán hàng', 'Kho và phạm vi dữ liệu theo công ty'] },
      { eyebrow: '02 · Danh mục', title: 'Dữ liệu sản phẩm có cấu trúc', description: 'Quản lý hồ sơ sản phẩm cùng các danh mục và tài liệu tham chiếu.', details: ['Danh mục, thương hiệu, thuế và đơn vị tính', 'Tệp đính kèm, tài liệu và FAQ sản phẩm', 'Lịch sử, chia sẻ và truy vấn theo phạm vi công ty'] },
      { eyebrow: '03 · CRM', title: 'Khách hàng và cơ hội bán hàng', description: 'Theo dõi hồ sơ khách hàng và tiến trình cơ hội trong cùng phạm vi nghiệp vụ.', details: ['Khách hàng, nhóm, nhãn và hợp đồng', 'Pipeline, giai đoạn và lịch sử cơ hội', 'Tra cứu và liên kết dữ liệu đa công ty theo quyền'] },
      { eyebrow: '04 · Giá & khuyến mại', title: 'Quản trị giá và chương trình', description: 'Xây dựng bảng giá, xem trước tác động và quản lý phiên bản khuyến mại.', details: ['Nhập, xuất, mô phỏng và liên kết bảng giá', 'Đồng bộ giá theo kênh Haravan', 'Phiên bản, phê duyệt và đơn hàng áp dụng khuyến mại'] },
      { eyebrow: '05 · Bán hàng & công nợ', title: 'Từ báo giá đến đơn bán', description: 'Các màn hình cho chứng từ bán hàng và khoản phải thu vận hành.', details: ['Báo giá và luồng phê duyệt', 'Đơn bán offline, online và rà soát đơn đồng bộ', 'Chi tiết khoản phải thu liên kết với đơn bán'] },
      { eyebrow: '06 · Kênh & thực thi', title: 'Kết nối đối tác và luồng đơn', description: 'Quản lý cấu hình kết nối và xử lý dữ liệu đơn hàng đến từ các kênh.', details: ['Hồ sơ nhà cung cấp giải pháp và tài khoản tích hợp', 'Đồng bộ catalog, giá và đơn hàng Haravan', 'Màn hình gom đơn có kiểm soát runtime'] },
      { eyebrow: '07 · Quản trị hệ thống', title: 'Quyền, bảo mật và cấu hình', description: 'Phân quyền theo chức năng và phạm vi pháp nhân, kèm màn hình quản trị hệ thống.', details: ['Vai trò, thành viên, lời mời và quyền truy cập tài khoản', 'Phiên đăng nhập, bảo mật và nhật ký hoạt động', 'Thiết lập hệ thống và danh mục tài khoản kế toán'] },
    ],
    architecture: {
      eyebrow: 'Logic · Database · Low-level design', title: 'Tách phạm vi dữ liệu, giữ luồng nghiệp vụ nhất quán.',
      description: 'Control plane quản lý danh tính và cấu hình tổ chức; tenant data lưu nghiệp vụ theo pháp nhân. API xác định công ty đang hoạt động rồi áp dụng quyền và phạm vi dữ liệu trước khi đọc hoặc ghi.',
      controlLabel: 'Control plane', tenantLabel: 'Tenant data',
      control: { title: 'Cơ sở dữ liệu điều khiển', description: 'Nguồn chuẩn cho người dùng, công ty và quan hệ truy cập. Lớp này quyết định người dùng có thể chọn và thao tác trong phạm vi nào.', records: ['Tài khoản, membership và lời mời', 'Pháp nhân, role và quyền', 'Cấu hình cùng lựa chọn phạm vi công ty'] },
      tenant: { title: 'Cơ sở dữ liệu nghiệp vụ theo pháp nhân', description: 'Các bản ghi nghiệp vụ được xử lý trong tenant context của công ty đang chọn; không ghép trực tiếp dữ liệu control và tenant bằng truy vấn chéo.', records: ['Tổ chức, khách hàng và cơ hội', 'Sản phẩm, giá, khuyến mại và đơn bán', 'Khoản phải thu cùng dữ liệu vận hành liên quan'] },
      flowLabel: 'Luồng xử lý một yêu cầu', flow: ['Đăng nhập và chọn pháp nhân', 'API xác lập tenant context', 'Kiểm tra capability và company scope', 'Thực thi nghiệp vụ, audit và outbox'],
      guardrailTitle: 'Nguyên tắc ở tầng logic',
      guardrails: ['Không dùng company_id do client gửi làm bằng chứng phân quyền.', 'Các thao tác ghi dùng idempotency key hoặc version/ETag theo contract của luồng.', 'Audit và outbox hỗ trợ truy vết thay đổi và chuyển tiếp sự kiện.'],
      availabilityNote: 'Menu và API có thể được ẩn hoặc chặn theo capability, schema và runtime gate. Vì vậy danh mục codebase không đồng nghĩa mọi tài khoản đều có quyền sử dụng mọi luồng.',
    },
    contact: { eyebrow: 'Cùng thiết kế luồng ERP phù hợp', title: 'Bắt đầu từ mô hình tổ chức và quy trình thật.', description: 'Trao đổi với Mercury về phạm vi pháp nhân, dữ liệu, tích hợp và các bước triển khai HMB ERP.', button: 'Gửi yêu cầu tư vấn' },
  },
  en: {
    meta: {
      title: 'HMB ERP | Multi-company enterprise operations platform',
      description: 'Explore HMB ERP, a modular monolith platform for organization, product data, sales, CRM, and company-scoped operations.',
    },
    nav: { name: 'HMB ERP', description: 'A modular ERP platform for multi-company operations' },
    hero: {
      eyebrow: 'Enterprise operations platform · HMB ERP', title: 'One platform. Multiple legal entities. Clear data boundaries.',
      subtitle: 'HMB ERP connects organizational data with customer, catalog, pricing, and sales workflows. Its modular monolith architecture scopes permissions and business data to each legal entity.',
      primaryCta: 'Talk about HMB ERP', secondaryCta: 'Explore capabilities', tags: ['Laravel API', 'React PWA', 'MySQL', 'Multi-company'],
    },
    catalog: {
      eyebrow: 'Capabilities in the codebase', title: 'Workflows with corresponding screens and APIs',
      description: 'This catalog is derived from HMB ERP routes, navigation, and API modules, covering core data through sales and administration.',
      note: 'Some screens require specific capabilities or runtime configuration. Readiness for each workflow must be confirmed against user permissions, legal entity, and deployment environment.',
    },
    capabilities: [
      { eyebrow: '01 · Organization', title: 'Multi-company organization model', description: 'Configure legal entities and navigate the operating units connected to each one.', details: ['Companies, branches, department groups, and departments', 'Employees, organization chart, and sales structure', 'Warehouses and company-scoped data access'] },
      { eyebrow: '02 · Catalog', title: 'Structured product data', description: 'Manage product records with supporting reference data and documentation.', details: ['Categories, brands, tax classes, and units of measure', 'Product attachments, documents, and FAQs', 'History, sharing, and company-scoped reads'] },
      { eyebrow: '03 · CRM', title: 'Customers and sales opportunities', description: 'Track customer records and opportunity progress within business scope.', details: ['Customers, groups, tags, and agreements', 'Pipeline, stages, and opportunity history', 'Permission-scoped lookup and cross-company links'] },
      { eyebrow: '04 · Pricing & promotions', title: 'Pricing and program management', description: 'Build price lists, preview changes, and manage promotion versions.', details: ['Price list import, export, preview, and mappings', 'Haravan channel price synchronization', 'Promotion versions, approvals, and applied orders'] },
      { eyebrow: '05 · Sales & receivables', title: 'From quotation to sales order', description: 'Screens for sales documents and operational receivables.', details: ['Quotations and approval workflows', 'Offline and online orders with synced-order review', 'Receivable details linked to sales orders'] },
      { eyebrow: '06 · Channels & execution', title: 'Partner connectivity and order flows', description: 'Manage connection settings and process order data from connected channels.', details: ['Solution provider profiles and integration accounts', 'Haravan catalog, pricing, and order synchronization', 'Order consolidation screens behind runtime controls'] },
      { eyebrow: '07 · Administration', title: 'Access, security, and configuration', description: 'Manage feature and company-scoped access alongside system settings.', details: ['Roles, memberships, invitations, and account access', 'Sessions, security, and activity audit', 'System settings and chart-of-accounts setup'] },
    ],
    architecture: {
      eyebrow: 'Logic · Database · Low-level design', title: 'Separate data boundaries. Keep business workflows consistent.',
      description: 'The control plane manages identity and organization settings; tenant data stores business records by legal entity. The API resolves the active company and enforces permissions and data scope before reads or writes.',
      controlLabel: 'Control plane', tenantLabel: 'Tenant data',
      control: { title: 'Control database', description: 'The source of truth for users, companies, and access relationships. It determines where a user can switch context and operate.', records: ['Accounts, memberships, and invitations', 'Companies, roles, and permissions', 'Settings and company-scope preferences'] },
      tenant: { title: 'Business database per legal entity', description: 'Business records are handled inside the selected company tenant context; control and tenant data are not joined through cross-database queries.', records: ['Organization, customers, and opportunities', 'Products, pricing, promotions, and sales orders', 'Receivables and related operating data'] },
      flowLabel: 'A request lifecycle', flow: ['Authenticate and select a company', 'API establishes tenant context', 'Check capability and company scope', 'Run workflow, audit, and outbox'],
      guardrailTitle: 'Logic-layer guardrails',
      guardrails: ['A client-supplied company_id is never proof of authorization.', 'Write operations use idempotency keys or version/ETag contracts where defined.', 'Audit and outbox support change traceability and event handoff.'],
      availabilityNote: 'Navigation and APIs can be gated by capabilities, schema, and runtime configuration. The codebase catalog does not mean every account can use every workflow.',
    },
    contact: { eyebrow: 'Design an ERP workflow around your business', title: 'Start with your real organization and processes.', description: 'Talk with Mercury about company scope, data, integrations, and a rollout path for HMB ERP.', button: 'Request a consultation' },
  },
  ja: {
    meta: {
      title: 'HMB ERP | 複数法人向け業務プラットフォーム',
      description: '組織、商品データ、販売、CRM、法人単位の業務を支援するモジュラーモノリス型 HMB ERP をご紹介します。',
    },
    nav: { name: 'HMB ERP', description: '複数法人の業務を支えるモジュラー ERP' },
    hero: {
      eyebrow: '企業業務プラットフォーム · HMB ERP', title: 'ひとつの基盤。複数の法人。明確なデータ境界。',
      subtitle: 'HMB ERP は組織データと顧客、商品、価格、販売の業務フローをつなぎます。モジュラーモノリス構成により、権限と業務データを法人単位で管理します。',
      primaryCta: 'HMB ERP について相談する', secondaryCta: '機能を見る', tags: ['Laravel API', 'React PWA', 'MySQL', '複数法人'],
    },
    catalog: {
      eyebrow: 'コードベースにある機能', title: '画面と API が対応する業務フロー',
      description: 'HMB ERP のルート、ナビゲーション、API モジュールから、基礎データ、販売、管理までの機能をまとめています。',
      note: '一部の画面は権限や実行環境の設定を必要とします。各フローの利用可否は権限、法人、導入環境に応じて確認してください。',
    },
    capabilities: [
      { eyebrow: '01 · 組織', title: '複数法人の組織モデル', description: '法人と関連する運営組織を登録し、業務範囲ごとに切り替えます。', details: ['法人、拠点、部門グループ、部門', '従業員、組織図、販売組織', '倉庫と法人単位のデータ範囲'] },
      { eyebrow: '02 · 商品', title: '構造化された商品データ', description: '商品情報を分類データや関連ドキュメントとともに管理します。', details: ['カテゴリ、ブランド、税区分、単位', '添付ファイル、ドキュメント、商品 FAQ', '履歴、共有、法人スコープの参照'] },
      { eyebrow: '03 · CRM', title: '顧客と営業機会', description: '業務範囲に沿って顧客情報と営業機会の進捗を管理します。', details: ['顧客、グループ、タグ、契約', 'パイプライン、ステージ、履歴', '権限に応じた検索と法人間リンク'] },
      { eyebrow: '04 · 価格・販促', title: '価格とプログラム管理', description: '価格表の作成、変更プレビュー、販促バージョンを管理します。', details: ['価格表の取込、出力、プレビュー、マッピング', 'Haravan チャネルの価格同期', '販促バージョン、承認、適用注文'] },
      { eyebrow: '05 · 販売・債権', title: '見積から販売注文へ', description: '販売書類と業務債権を扱う画面を備えています。', details: ['見積と承認フロー', 'オフライン・オンライン注文と同期注文の確認', '販売注文に紐づく債権明細'] },
      { eyebrow: '06 · チャネル', title: 'パートナー連携と注文フロー', description: '接続設定を管理し、連携チャネルから届く注文データを処理します。', details: ['ソリューションプロバイダーと連携アカウント', 'Haravan の商品、価格、注文同期', '実行環境で制御された注文集約画面'] },
      { eyebrow: '07 · 管理', title: 'アクセス、セキュリティ、設定', description: '機能と法人の権限を管理し、システム設定を行います。', details: ['ロール、メンバー、招待、アカウント権限', 'セッション、セキュリティ、操作監査', 'システム設定と勘定科目表の設定'] },
    ],
    architecture: {
      eyebrow: 'ロジック · データベース · 詳細設計', title: 'データ境界を分け、業務フローを一貫させる。',
      description: 'Control plane は ID と組織設定を管理し、tenant data は法人ごとの業務情報を保持します。API は選択中の法人を解決し、読取・書込の前に権限とデータ範囲を確認します。',
      controlLabel: 'Control plane', tenantLabel: 'Tenant data',
      control: { title: 'Control データベース', description: 'ユーザー、法人、アクセス関係の基準データです。ユーザーが操作できるコンテキストを決定します。', records: ['アカウント、所属、招待', '法人、ロール、権限', '設定と法人スコープの選択'] },
      tenant: { title: '法人ごとの業務データベース', description: '選択法人の tenant context 内で業務データを扱います。Control と tenant のデータを DB 横断で直接結合しません。', records: ['組織、顧客、営業機会', '商品、価格、販促、販売注文', '債権と関連業務データ'] },
      flowLabel: 'リクエスト処理フロー', flow: ['認証して法人を選択', 'API が tenant context を確立', '権限と法人スコープを確認', '業務処理、監査、outbox'],
      guardrailTitle: 'ロジック層のガードレール',
      guardrails: ['クライアント送信の company_id だけで権限を判断しません。', '定義された更新処理では idempotency key または version/ETag contract を使用します。', '監査と outbox が変更追跡およびイベント連携を支えます。'],
      availabilityNote: 'ナビゲーションや API は権限、スキーマ、実行環境設定で制御されます。コードに機能があることは、すべてのアカウントが利用できることを意味しません。',
    },
    contact: { eyebrow: '業務に合った ERP フローを設計', title: '実際の組織と業務から始める。', description: '法人範囲、データ、連携、HMB ERP の導入ステップについて Mercury にご相談ください。', button: '相談を申し込む' },
  },
  ko: {
    meta: {
      title: 'HMB ERP | 다법인 기업 운영 플랫폼',
      description: '조직, 제품 데이터, 영업, CRM 및 법인별 운영을 위한 모듈형 모놀리스 HMB ERP를 소개합니다.',
    },
    nav: { name: 'HMB ERP', description: '다법인 운영을 위한 모듈형 ERP 플랫폼' },
    hero: {
      eyebrow: '기업 운영 플랫폼 · HMB ERP', title: '하나의 플랫폼. 여러 법인. 명확한 데이터 경계.',
      subtitle: 'HMB ERP는 조직 데이터와 고객, 카탈로그, 가격 및 영업 워크플로를 연결합니다. 모듈형 모놀리스 아키텍처로 권한과 업무 데이터를 법인별로 관리합니다.',
      primaryCta: 'HMB ERP 상담하기', secondaryCta: '기능 살펴보기', tags: ['Laravel API', 'React PWA', 'MySQL', '다법인'],
    },
    catalog: {
      eyebrow: '코드베이스의 기능', title: '화면과 API가 연결된 업무 흐름',
      description: '아래 기능은 HMB ERP의 라우트, 메뉴 및 API 모듈을 기준으로 조직 데이터부터 영업과 관리까지 정리했습니다.',
      note: '일부 화면은 특정 권한이나 런타임 설정이 필요합니다. 각 흐름의 사용 가능 여부는 권한, 법인 및 배포 환경을 기준으로 확인해야 합니다.',
    },
    capabilities: [
      { eyebrow: '01 · 조직', title: '다법인 조직 모델', description: '법인과 연결된 운영 조직을 설정하고 업무 범위별로 전환합니다.', details: ['법인, 지점, 부서 그룹 및 부서', '직원, 조직도 및 영업 구조', '창고 및 회사별 데이터 범위'] },
      { eyebrow: '02 · 카탈로그', title: '구조화된 제품 데이터', description: '제품 레코드를 기준 정보와 관련 문서와 함께 관리합니다.', details: ['카테고리, 브랜드, 세금 및 측정 단위', '제품 첨부 파일, 문서 및 FAQ', '이력, 공유 및 회사 범위별 조회'] },
      { eyebrow: '03 · CRM', title: '고객 및 영업 기회', description: '업무 범위 안에서 고객 정보와 영업 기회 진행을 추적합니다.', details: ['고객, 그룹, 태그 및 계약', '파이프라인, 단계 및 기회 이력', '권한에 따른 검색 및 법인 간 연결'] },
      { eyebrow: '04 · 가격 및 프로모션', title: '가격 및 프로그램 관리', description: '가격표를 구성하고 변경 사항을 미리 보며 프로모션 버전을 관리합니다.', details: ['가격표 가져오기, 내보내기, 미리보기 및 매핑', 'Haravan 채널 가격 동기화', '프로모션 버전, 승인 및 적용 주문'] },
      { eyebrow: '05 · 영업 및 채권', title: '견적에서 판매 주문까지', description: '영업 문서와 운영 채권을 위한 화면을 제공합니다.', details: ['견적 및 승인 워크플로', '오프라인·온라인 주문 및 동기화 주문 검토', '판매 주문과 연결된 채권 상세'] },
      { eyebrow: '06 · 채널 및 실행', title: '파트너 연결 및 주문 흐름', description: '연결 설정을 관리하고 연동 채널의 주문 데이터를 처리합니다.', details: ['솔루션 공급자 프로필 및 연동 계정', 'Haravan 카탈로그, 가격 및 주문 동기화', '런타임 설정으로 제어되는 주문 통합 화면'] },
      { eyebrow: '07 · 관리', title: '접근 권한, 보안 및 설정', description: '기능 및 법인 범위 권한을 관리하고 시스템을 설정합니다.', details: ['역할, 멤버십, 초대 및 계정 접근', '세션, 보안 및 활동 감사 로그', '시스템 설정 및 계정과목표 구성'] },
    ],
    architecture: {
      eyebrow: '로직 · 데이터베이스 · 상세 설계', title: '데이터 경계를 분리하고 업무 흐름을 일관되게 유지합니다.',
      description: 'Control plane은 ID와 조직 설정을 관리하고 tenant data는 법인별 업무 레코드를 저장합니다. API는 활성 법인을 확인한 뒤 읽기와 쓰기 전에 권한 및 데이터 범위를 적용합니다.',
      controlLabel: 'Control plane', tenantLabel: 'Tenant data',
      control: { title: 'Control 데이터베이스', description: '사용자, 회사 및 접근 관계의 기준 정보입니다. 사용자가 전환하고 작업할 수 있는 컨텍스트를 결정합니다.', records: ['계정, 멤버십 및 초대', '회사, 역할 및 권한', '설정 및 회사 범위 환경설정'] },
      tenant: { title: '법인별 업무 데이터베이스', description: '업무 레코드는 선택한 회사 tenant context 안에서 처리하며 control과 tenant 데이터를 교차 DB 조회로 결합하지 않습니다.', records: ['조직, 고객 및 영업 기회', '제품, 가격, 프로모션 및 판매 주문', '채권 및 관련 운영 데이터'] },
      flowLabel: '요청 처리 흐름', flow: ['인증 후 법인 선택', 'API가 tenant context 설정', '권한 및 회사 범위 확인', '업무 실행, 감사 및 outbox'],
      guardrailTitle: '로직 계층의 보호 원칙',
      guardrails: ['클라이언트가 보낸 company_id만으로 권한을 승인하지 않습니다.', '정의된 변경 작업은 idempotency key 또는 version/ETag 계약을 사용합니다.', '감사와 outbox가 변경 추적 및 이벤트 전달을 지원합니다.'],
      availabilityNote: '메뉴와 API는 권한, 스키마 및 런타임 구성으로 제어될 수 있습니다. 코드베이스에 기능이 있다는 것이 모든 계정에서 사용할 수 있음을 뜻하지 않습니다.',
    },
    contact: { eyebrow: '업무에 맞는 ERP 흐름 설계', title: '실제 조직과 프로세스에서 시작하세요.', description: '법인 범위, 데이터, 연동 및 HMB ERP 도입 단계를 Mercury와 논의해 보세요.', button: '상담 요청하기' },
  },
}
