# Landing page và LinkedIn: trial Mercury ERP

Áp dụng landing-page-optimization-guide và linkedin-lead-gen-optimizer. Không có tài khoản LinkedIn Ads/GA4 kết nối, nên chưa có số liệu CVR, CPL, SQL hoặc score message-match từ chiến dịch thật. Không dùng benchmark trong skill như dự báo cho Mercury.

## Đã thực hiện

- CTA và form cạnh hero trên desktop, CTA dẫn form trên mobile; mô tả rõ 30 ngày tính từ kích hoạt thủ công, không tự thu phí.
- Bốn trường bắt buộc: công ty, tên, email, nhu cầu; ngành là tùy chọn. Không hỏi ngân sách/số nhân sự khi chưa cần.
- FAQ trả lời thời điểm bắt đầu, cách cấp tài khoản, thu phí và dữ liệu cần nhập.
- Footer trial và website có Company Page công khai https://www.linkedin.com/company/74887622/ (owner cung cấp URL admin; đã bỏ /admin/dashboard/).
- Organization sameAs dùng Company Page được xác nhận. Không embed feed, không chèn tracking/pixel hay OAuth LinkedIn.
- URL chiến dịch mẫu: https://trial-erp.mercurysolutions.vn/?utm_source=linkedin&utm_medium=organic&utm_campaign=erp_trial_ja ; bản VI thêm /vi/.
- Chỉ các utm_source/medium/campaign dạng ASCII chữ/số/gạch dưới/gạch nối, tối đa 100 ký tự được lưu với đăng ký; không lưu URL gốc hoặc referrer tự do. Không dùng campaign để xác thực hay phân quyền.
- Phát CustomEvent `mercury:trial-request-received` với language sau lưu thành công. Đây là hook local; chưa có GA4 event hoặc LinkedIn conversion được xác nhận gửi đi.

## Kiểm chứng và thử nghiệm tiếp theo

1. Khi campaign có dữ liệu: đối chiếu đúng lời hứa trial, ngôn ngữ và CTA giữa LinkedIn post/ad và landing page.
2. Đánh giá bằng yêu cầu hợp lệ → contacted → activated, không chỉ số lượt gửi. Owner cập nhật status trong Console.
3. Thử hai headline theo giá trị đơn hàng/tồn và thử rút gọn mô tả; không chạy đồng thời nhiều biến khi chưa có baseline.
4. Lead Gen Forms là lựa chọn sau nếu cần tải tài liệu đầu phễu. Trial ưu tiên landing page để khách đọc phạm vi/điều khoản. Không tự tạo campaign hoặc thay ngân sách.
5. Nếu cần Insight Tag/Conversions API sau này, chốt partner ID, event, consent và chính sách trước khi tích hợp.

## Liên kết hai chiều được xác minh

LinkedIn admin Company Page 74887622 có public slug mercury-solutions-vietnam. Website URL cũ http://www.themansions.vn đã đổi thành https://www.mercurysolutions.vn/ và UI đọc lại xác nhận lưu thành công ngày 2026-11-19. Không thay đổi overview, pháp nhân, quy mô hay quảng cáo. Liên kết trên website vẫn đang trong thay đổi local, chưa public.


## Release update 2026-11-19

Owner requested opening the form and replaced the subdomain with the existing-site path `/erp-trial/` (JA), `/erp-trial/vi/` (VI); legal pages append terms/ and privacy/. These decisions supersede earlier draft DNS/gate notes above. CTA and canonical URLs were updated. Terms version 2026-11-19. Data export/ERP activation remains manually confirmed before account activation.

Production federation configured: pool mercury-vercel, provider mercury-homepage-prod, service account mercury-trial-web@mercury-homepage.iam.gserviceaccount.com. Provider limits team ID, project ID and production; service account binding limits exact subject. Custom role mercuryTrialWriter permits get/create/update and transactions on default DB only, with no list/delete permissions. Security Rules still deny client read/write. TTL configured on trial_rate_limits.expiresAt. Production env enabled and rate secret stored as sensitive.
