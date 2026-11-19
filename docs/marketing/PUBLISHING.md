# Quy trình xuất bản nội dung Mercury

## Cấu trúc

- `content/articles/vi/<slug>.ts`, `content/articles/ja/<slug>.ts`: mỗi bài một tệp dữ liệu có kiểu `Article`; không viết JSX trong nội dung.
- `content/articles/<language>/index.ts`: danh sách bài được xuất bản ở ngôn ngữ đó.
- `lib/articles/types.ts`: hợp đồng dữ liệu; `lib/articles/index.ts`: registry và hàm tạo URL/tìm bài, chỉ dùng phía server.
- `components/articles/ArticlePage.tsx`: bố cục bài, metadata trong route, schema và nguồn tham khảo; không đưa nội dung bài vào client bundle.
- `app/[lang]/insights/[slug]/page.tsx`: route dùng chung; registry điều khiển static params. Không tạo page.tsx riêng cho từng bài.
- `components/pages/InsightsPage.tsx`: danh mục render server. Trang EN giới thiệu bài theo ngôn ngữ gốc, VI/JA lọc ngôn ngữ tương ứng.
- `lib/trial/`, `components/trial/`, `app/(trial)/`: nghiệp vụ, UI và route trial riêng khỏi bài viết.
- `docs/marketing/`: nghiên cứu, briefs và hướng dẫn nội bộ; không đưa vào public/.

## Thêm bài

1. Copy cấu trúc bài cùng ngôn ngữ; chọn slug ASCII chữ thường có gạch nối, không trùng trong cùng ngôn ngữ.
2. Điền title, description, câu trả lời mở đầu, sections, links và sources nếu có. Tách đoạn ngắn, trả lời câu hỏi cụ thể.
3. Export bài trong index ngôn ngữ. URL, danh mục và sitemap được sinh từ registry.
4. Rà soát bằng chứng: phân biệt khuyến nghị chung với năng lực đã triển khai; không đưa thông tin nội bộ hoặc dữ liệu cá nhân. Bài JA về kế toán phải chỉ rõ sản phẩm/phiên bản và dẫn nguồn chính thức.
5. Chạy `npm run build` và kiểm tra HTML URL thật: lang, title, canonical, Article/breadcrumb JSON-LD, liên kết và 404 cho slug không có.
6. Review nội dung/tiếng Nhật rồi commit và phát hành theo chỉ dẫn. Theo dõi Search Console sau crawler xử lý; không coi gửi sitemap là đã index.

Các bài khác chủ đề giữa VI/JA không phải bản dịch; không gắn hreflang giả. Chỉ thêm mapping bản dịch khi đã có nội dung tương đương được review.
