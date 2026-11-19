# Mercury ERP Trial: vận hành đăng ký

## Luồng và điều kiện phát hành

Form JA/VI POST cùng origin đến `/api/trial-requests/`. Backend validate, khóa chống lặp và hạn mức IP/email trong Firestore transaction. Chỉ trả mã tiếp nhận khi document đã lưu. Không tạo tenant, gửi email hoặc bắt đầu thời hạn trial tại bước đăng ký.

Trang và điều khoản đang là dự thảo/noindex; form fail-closed. Pháp nhân người dùng cung cấp: Mercury Solutions Vietnam, Tầng 5, Tòa nhà 33, Số 41 Thái Hà, Đống Đa, Hà Nội, Việt Nam. Hỗ trợ info@mercurysolutions.vn.

Trước phát hành cần owner duyệt bản điều khoản, giới hạn trách nhiệm/luật áp dụng, 90 ngày lưu đăng ký, cách xóa backup và kiểm chứng quyền xuất/giữ dữ liệu ERP thêm 30 ngày. Ngày bắt đầu trial do Mercury xác nhận khi kích hoạt thủ công; không tự thu phí.

## Firebase

Project `mercury-homepage`; default database `asia-southeast1` (Singapore). Không ghi là dữ liệu đặt tại Nhật.

Collections:
- `trial_requests/<uuid>`: dữ liệu đăng ký, consent/version/time, status, fingerprint chống lặp. Xem bằng Firebase Console. Các status vận hành: new, contacted, activated, closed; không sửa fingerprint/createdAt.
- `trial_rate_limits/<HMAC>`: count, expiresAt; IP thô không lưu. TTL cần bật trước tiếp nhận để dọn dữ liệu limiter hết hạn. Mỗi giờ tối đa 5 request/IP, 3/email. Bucket theo giờ UTC. Backend thiếu IP dùng chung bucket unknown để fail-closed.

Rules đang triển khai ngày kiểm tra 2026-11-19 mặc định deny toàn bộ collection ngoài contact_submissions. Giữ deny cho public clients, kể cả đã đăng nhập, đối với trial_requests và trial_rate_limits; Admin SDK bỏ qua Security Rules, cần giới hạn quyền IAM danh tính runtime và người quản trị Console.

## Runtime credentials (không dùng khóa JSON lưu lâu dài)

Vercel OIDC → Google Workload Identity Federation → service account chuyên trial. Dùng issuer team Mercury Solutions, giới hạn subject/claims đúng project `mercury-solution-homepage` và environment production. Không cấu hình wildcard cho cả team. Service account cần Firestore get/create/update cho transaction; không cần quyền delete để nhận form. Khi cấu hình IAM, kiểm chứng phạm vi database và không cấp owner/editor.

Env phía server:
- GCP_PROJECT_ID=mercury-homepage
- GCP_WIF_AUDIENCE=//iam.googleapis.com/projects/<project-number>/locations/global/workloadIdentityPools/<pool>/providers/<provider>
- GCP_SERVICE_ACCOUNT_EMAIL=<trial-service-account>
- TRIAL_RATE_LIMIT_SECRET=<random secret generated securely, never NEXT_PUBLIC>
- TRIAL_LEGAL_APPROVED=2026-11-19-draft chỉ sau khi bản nội dung tương ứng được owner duyệt (đổi version trước bản điều khoản tiếp theo).
- TRIAL_REGISTRATION_ENABLED=true chỉ khi runtime credential, legal và DNS đã xác minh.

Không có env credentials frontend. Local dùng gcloud Application Default Credentials; không commit ADC. Khuyến nghị thử bằng Firestore Emulator trước. Không đưa token/secret vào log hoặc docs.

LEGAL_APPROVED và enabled trên UI được đọc lúc build static: sau khi thay env phải rebuild. API đọc env runtime và vẫn kiểm tra cả hai gate. Mất credentials/Firestore trả 503, không có success giả.

## DNS/hosting

Thêm domain trial-erp.mercurysolutions.vn vào đúng Vercel project và tạo DNS theo giá trị Vercel cung cấp. Proxy ánh xạ `/` → `/trial/ja/`, `/vi/` → `/trial/vi/`, terms/privacy tương ứng. Giữ nguyên /api và assets. Host marketing truy cập /trial/ja|vi được chuyển sang host trial. Preview trực tiếp dùng /trial/ja/ để review khi DNS chưa có.

## Tiếp nhận thủ công

Mở Firebase Console → Firestore → trial_requests, lọc status=new và kiểm tra createdAt. Xác nhận với khách, chuyển contacted. Sau khi cấp môi trường và thông báo ngày bắt đầu thì đặt activated; ghi ngày bắt đầu trong hệ thống ERP vận hành thực tế. Chưa tự động đồng bộ status về website.

Chỉ xóa dữ liệu thử nghiệm được tạo riêng trong kiểm thử. Không xóa đăng ký thật tự động khi chính sách chưa duyệt. Sau duyệt 90 ngày, giao người phụ trách xóa thủ công yêu cầu không tiến triển, kiểm tra mỗi tuần. Hết trial ERP là quy trình riêng; website không thực hiện xóa tenant.

## Bằng chứng kiểm tra local 2026-11-19

- Handler tests: consent/validation/body/origin, duplicate/conflict/limiter/backend failure, attribution đã qua.
- Firestore smoke: dữ liệu giả, ghi/đọc timestamp, gửi đồng thời duplicate, conflict và giới hạn đã qua; đã xóa đúng các UUID và buckets thử nghiệm.
- Truy cập REST không đăng nhập vào trial_requests trả 403 Missing or insufficient permissions.
- Rules đã đọc từ release cloud.firestore/rulesets/484cb98c-aec5-4850-9e0d-99737aa98229: ngoài contact_submissions, deny mọi read/write.
- Emulator chưa chạy: máy không có Java Runtime và Cloud Firestore Emulator. Smoke nêu trên dùng ADC local và database thật, không chứng minh WIF production.
- WIF, TTL policy, DNS trial và cấu hình env production chưa được áp dụng trong đợt local này.


## Release update 2026-11-19

Owner requested opening the form and replaced the subdomain with the existing-site path `/erp-trial/` (JA), `/erp-trial/vi/` (VI); legal pages append terms/ and privacy/. These decisions supersede earlier draft DNS/gate notes above. CTA and canonical URLs were updated. Terms version 2026-11-19. Data export/ERP activation remains manually confirmed before account activation.

Production federation configured: pool mercury-vercel, provider mercury-homepage-prod, service account mercury-trial-web@mercury-homepage.iam.gserviceaccount.com. Provider limits team ID, project ID and production; service account binding limits exact subject. Custom role mercuryTrialWriter permits get/create/update and transactions on default DB only, with no list/delete permissions. Security Rules still deny client read/write. TTL configured on trial_rate_limits.expiresAt. Production env enabled and rate secret stored as sensitive.
