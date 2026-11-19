# Quy ước thư mục và trách nhiệm

Áp dụng cho source, content, tests, scripts, docs và public của homepage.

- Thư mục dùng chữ thường ASCII và kebab-case: `trial-requests`, `food-wholesale-lot-expiry-traceability`.
- Locale code dùng `vi`, `ja`, `en` khi có nội dung tương ứng.
- Next.js giữ cú pháp route group `(site)`, `(trial)`, tham số `[lang]`, `[locale]`, `[slug]`, catch-all `[[...slug]]` và `[[...page]]`; tên tham số chỉ dùng chữ thường. Nhóm route không thay đổi URL công khai.
- Nội dung theo chủ đề/ngôn ngữ: `content/articles/<lang>/<slug>.ts`. Không đặt tài liệu nội bộ trong `public/`.
- UI theo tính năng: `components/articles/`, `components/trial/`; logic và contract tương ứng trong `lib/articles/`, `lib/trial/`.
- Route trong `app/` chỉ phối hợp params, metadata và UI. Không tạo route riêng từng bài mới.
- `scripts/`: kiểm tra và tác vụ nhà phát triển; `tests/`: kiểm tra có ý nghĩa của contract/backend; `docs/marketing/`: briefs và publishing; `docs/architecture/`: cấu trúc và quy ước.
- Giữ tên file React PascalCase, module dữ liệu kebab-case; yêu cầu đợt này chuẩn hóa thư mục, không đổi đồng loạt tên file.
- Thư mục framework/dependency/cache do công cụ quản lý (`.git`, `.next`, `.vercel`, `node_modules`, `.claude`) không nằm trong kiểm tra source.

Chạy `npm run check:folders` trước build hoặc thêm thư mục. Quy tắc không đổi slug/asset URL đang công khai khi chưa có chuyển hướng hoặc cập nhật tham chiếu.
