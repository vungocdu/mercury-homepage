import { SUPPORT_EMAIL } from '@/lib/brand'
export type TrialLang = 'ja' | 'vi'
export const company = { name: 'Mercury Solutions Vietnam', address: 'Tầng 5, Tòa nhà 33, Số 41 Thái Hà, Đống Đa, Hà Nội, Việt Nam', email: SUPPORT_EMAIL }
export const trialCopy = {
  ja: {
    title: '受発注・在庫管理を、ひとつの流れに。',
    description: 'Mercury ERPの30日間トライアルをお申し込みください。担当者が利用条件を確認し、アカウントをご用意します。',
    hero: '受注から在庫引当、購買・入荷、出荷、会計用CSVまで。現在の業務で確かめたい範囲を、担当者と相談しながら決められます。',
    request: '30日間トライアルを申し込む',
    steps: ['フォームから会社と業務の状況をお知らせください。', '担当者が対象業務、利用条件、準備するデータを確認します。', 'アカウントの有効化から30日間、試用できます。自動課金はありません。'],
    scope: ['受注入力・得意先別の価格・在庫引当', '購買、入荷、複数倉庫の在庫・棚卸', '出荷・納品書と会計用CSVの準備', '食品向けのロット・期限管理（対象構成を確認）'],
    scopeNote: 'ご利用可能な機能と構成は、受付後に確認してご案内します。法的な請求書発行、製造指図・BOM、AI/OCRは本トライアルの対象に含みません。',
    terms: '利用規約', privacy: '個人情報の取扱い', company: '会社名', name: 'ご担当者名', email: '業務用メールアドレス', industry: '業種', needs: '試したい業務・現在の課題', consent: '利用規約と個人情報の取扱いを確認し、同意します。',
    received: 'お申し込みを受け付けました。受付番号：', successNote: 'アカウントは担当者による確認後にご用意します。この画面で試用期間は開始しません。', error: '送信できませんでした。入力をご確認のうえ、時間をおいて再度お試しください。', draft: 'このページの利用条件は確認中です。現在、フォームからのお申し込みは受け付けていません。', sending: '送信中…',
  },
  vi: {
    title: 'Kết nối đơn hàng và tồn kho trong một luồng làm việc.',
    description: 'Đăng ký trial Mercury ERP 30 ngày. Mercury xác nhận nhu cầu và chuẩn bị tài khoản trước khi kích hoạt.',
    hero: 'Từ đơn bán, phân bổ tồn đến mua và nhận hàng, xuất hàng và CSV kế toán. Cùng Mercury xác định những quy trình bạn muốn kiểm chứng khi dùng thử.',
    request: 'Đăng ký trial 30 ngày',
    steps: ['Gửi thông tin công ty và nhu cầu qua form.', 'Mercury xác nhận nghiệp vụ, điều kiện sử dụng và dữ liệu cần chuẩn bị.', 'Dùng thử 30 ngày từ lúc tài khoản được kích hoạt. Không tự động thu phí.'],
    scope: ['Nhập đơn bán, bảng giá theo khách và phân bổ tồn', 'Mua, nhận hàng, tồn nhiều kho và kiểm kê', 'Xuất hàng, phiếu giao và chuẩn bị CSV kế toán', 'Lô và hạn dùng cho cấu hình thực phẩm phù hợp'],
    scopeNote: 'Mercury xác nhận các chức năng và cấu hình khả dụng trước khi cấp tài khoản. Trial không bao gồm hóa đơn pháp lý, BOM/lệnh sản xuất hoặc AI/OCR.',
    terms: 'Điều khoản sử dụng', privacy: 'Thông báo bảo mật', company: 'Tên công ty', name: 'Người liên hệ', email: 'Email công việc', industry: 'Ngành', needs: 'Quy trình muốn thử và nhu cầu hiện tại', consent: 'Tôi đã đọc và đồng ý với điều khoản sử dụng và thông báo bảo mật.',
    received: 'Đã lưu yêu cầu đăng ký. Mã tiếp nhận: ', successNote: 'Mercury sẽ xác nhận trước khi cấp tài khoản. Thời gian trial chưa bắt đầu tại bước này.', error: 'Chưa gửi được yêu cầu. Vui lòng kiểm tra thông tin và thử lại sau.', draft: 'Điều kiện sử dụng đang được rà soát. Form đăng ký hiện chưa mở tiếp nhận.', sending: 'Đang gửi…',
  },
}
export const legalContent = {
  ja: {
    terms: [
      ['提供者と適用範囲', '本規約はMercury Solutions Vietnamが提供するMercury ERPトライアルに適用します。お申し込みは利用開始を保証するものではなく、担当者が対象業務と提供可能な構成を確認し、利用開始日をご案内します。'],
      ['試用期間と料金', '試用期間はアカウント有効化日から30日間です。試用後の有料利用は、別途提示する見積りまたは契約への同意によって開始します。自動的な有料移行や課金は行いません。'],
      ['利用範囲と利用者の責任', '利用者は自社業務の評価に必要な範囲で利用し、アカウントを適切に管理してください。利用するデータについて必要な権限を確保し、取込結果、在庫、出荷、会計用データを確認してください。納品書は適格請求書として提供するものではありません。会計・法務上の判断は担当専門家に確認してください。'],
      ['データと終了後の取扱い', '利用者の業務データに関する権利は利用者に帰属します。試用中および終了後の保存期間中に、CSV・Excel等の提供可能な形式で自社データを出力できます。終了後は30日間保存し、有料契約に移行しない場合はその後削除する方針です。削除・バックアップを含む実施方法は利用開始前に確認してご案内します。'],
      ['禁止事項と停止', '不正アクセス、他の利用者のデータ取得、違法なデータの登録、サービス妨害は禁止します。違反や安全上の問題がある場合は、必要な範囲で利用を停止し、連絡可能な場合は理由をご案内します。'],
      ['提供条件・サポート', '対象機能、サポート時間、保守や停止の予定は利用開始時に確認します。試用は業務評価を目的とします。当事者は法令および合意した義務に従い、自己の責任に帰すべき違反により生じた損害について対応します。本規約は適用される強行法規上の権利を制限しません。本規約にはベトナム法を適用し、紛争はまず協議し、解決しない場合は法令上の管轄権を有する裁判所で解決します。'],
      ['お問い合わせ', '利用終了、データ出力や利用条件に関するご相談は下記メールへご連絡ください。'],
    ],
    privacy: [
      ['収集する情報と目的', '会社名、担当者名、業務用メールアドレス、業種、ご相談内容、言語、流入元・キャンペーン識別子、同意した規約の版と日時を、お申し込みへの対応とトライアル準備のために取得します。業務データや機微な個人情報はこのフォームに入力しないでください。'],
      ['保存先と管理', '登録情報はGoogle Cloud Firestoreのシンガポールリージョンに保存し、Mercuryの権限を持つ担当者が対応します。これは日本国内保存を約束するものではありません。技術的な不正送信対策では、IPアドレスとメールアドレスから生成した非公開鍵付きハッシュと回数を一時的に保存します。'],
      ['保存期間と権利', '登録情報は受付から90日以内に担当者が確認し、継続対応または契約に必要な情報を除いて削除します。閲覧、訂正、削除や同意に関するご相談は下記窓口へご連絡ください。業務データの保存条件はトライアル利用規約をご確認ください。'],
    ],
  },
  vi: {
    terms: [
      ['Đơn vị cung cấp và phạm vi', 'Điều khoản áp dụng cho trial Mercury ERP do Mercury Solutions Vietnam cung cấp. Gửi đăng ký chưa đồng nghĩa tài khoản đã được cấp. Mercury xác nhận nghiệp vụ, cấu hình khả dụng và ngày bắt đầu trước khi kích hoạt.'],
      ['Thời gian và phí', 'Trial kéo dài 30 ngày từ ngày kích hoạt. Việc chuyển sang trả phí chỉ diễn ra sau khi khách chấp thuận báo giá hoặc hợp đồng riêng; không tự động thu phí hoặc tự gia hạn trả phí.'],
      ['Trách nhiệm sử dụng', 'Khách sử dụng để đánh giá nghiệp vụ của mình, quản lý tài khoản và bảo đảm có quyền sử dụng dữ liệu đưa vào hệ thống. Khách kiểm tra kết quả nhập, tồn, xuất hàng và CSV kế toán. Phiếu giao hàng không được cung cấp như hóa đơn pháp lý; các quyết định kế toán và pháp lý cần được chuyên gia phụ trách xác nhận.'],
      ['Dữ liệu và kết thúc trial', 'Quyền đối với dữ liệu nghiệp vụ thuộc khách hàng. Khách được xuất dữ liệu của mình trong trial và thời gian lưu sau trial theo các định dạng CSV/Excel và tệp mà sản phẩm hỗ trợ. Chính sách dự kiến giữ thêm 30 ngày sau khi kết thúc và xóa nếu không gia hạn. Cách thực hiện xóa, kể cả bản sao lưu, được xác nhận trước khi bắt đầu sử dụng.'],
      ['Hành vi bị cấm và tạm dừng', 'Cấm truy cập trái phép, lấy dữ liệu khách khác, đưa dữ liệu bất hợp pháp hoặc gây gián đoạn dịch vụ. Khi có vi phạm hoặc rủi ro an toàn, Mercury có thể tạm dừng trong phạm vi cần thiết và thông báo lý do nếu có thể liên hệ.'],
      ['Hỗ trợ và trách nhiệm', 'Chức năng, thời gian hỗ trợ, lịch bảo trì và điều kiện vận hành được xác nhận khi kích hoạt. Mỗi bên chịu trách nhiệm theo pháp luật và nghĩa vụ đã thỏa thuận đối với thiệt hại do vi phạm thuộc trách nhiệm của mình. Điều khoản không hạn chế quyền được bảo vệ bởi quy định bắt buộc áp dụng. Áp dụng pháp luật Việt Nam; tranh chấp được ưu tiên thương lượng, nếu không giải quyết được thì đưa ra tòa án có thẩm quyền theo pháp luật.'],
      ['Liên hệ', 'Liên hệ email bên dưới để yêu cầu kết thúc trial, xuất dữ liệu hoặc trao đổi điều kiện sử dụng.'],
    ],
    privacy: [
      ['Thông tin và mục đích', 'Chúng tôi nhận tên công ty, người liên hệ, email công việc, ngành, nhu cầu, ngôn ngữ, nguồn/campaign giới thiệu, phiên bản điều khoản và thời điểm đồng ý để xử lý đăng ký và chuẩn bị trial. Không gửi dữ liệu nghiệp vụ thật hoặc thông tin cá nhân nhạy cảm trong form.'],
      ['Lưu trữ và quản lý', 'Yêu cầu được lưu tại Google Cloud Firestore ở Singapore và được nhân sự Mercury có quyền truy cập xử lý. Đây không phải cam kết lưu dữ liệu tại Nhật. Cơ chế chống gửi quá mức lưu tạm mã băm có khóa của IP/email cùng bộ đếm; không lưu IP thô trong bản đăng ký.'],
      ['Thời hạn và yêu cầu dữ liệu', 'Mercury rà soát và xóa thủ công thông tin đăng ký trong vòng 90 ngày kể từ khi tiếp nhận, trừ thông tin cần thiết cho việc tiếp tục xử lý hoặc thực hiện hợp đồng. Liên hệ để yêu cầu xem, sửa, xóa thông tin hoặc trao đổi về đồng ý. Thời gian lưu dữ liệu ERP được mô tả riêng trong điều khoản trial.'],
    ],
  },
}
