# Mercury ERP: nghiên cứu SEO/AEO cho thị trường Nhật

Ngày: 2026-11-19. Tài liệu làm việc nội bộ, không phải mô tả tính năng đã phát hành.

## Cơ sở và giới hạn

- Nguồn sản phẩm: `DEC-001-Trial-Core-Scope.md` và `BRD-DES-001-Mercury-Mini-ERP-Trial-Core-Aichi-Pilot-Design.md` trong Mercury ERP BRD. DEC-001 thay phạm vi MVP cũ cho đợt đầu.
- Phân khúc discovery: doanh nghiệp sản xuất hoặc bán buôn nhỏ và vừa tại Aichi; nhu cầu và khả năng mua chưa được xác nhận với khách pilot.
- Trial 30 ngày, phạm vi nghiệp vụ và xuất dữ liệu là quyết định thiết kế; tình trạng sản phẩm, điều kiện áp dụng và ngày mở trial phải được xác nhận trước khi công bố.
- Kết quả Search Console trong khoảng 2026-08-20 đến 2026-11-17 không có dòng truy vấn. Không có dữ liệu lượng tìm kiếm hoặc độ khó; thứ tự dưới đây dựa trên mức liên quan và kết quả tìm kiếm được quan sát, không phải dự báo lưu lượng.

## Bản đồ từ khóa và nội dung

| Ưu tiên | Cụm tiếng Nhật | Ý định | Nội dung đề xuất |
|---|---|---|---|
| 1 | 受発注 在庫管理 一元化 / 受注 在庫 引当 | Đánh giá giải pháp | Trang sản phẩm: luồng từ đơn bán, phân bổ tồn, mua/nhận đến xuất hàng |
| 2 | 中小企業 受発注 在庫管理 Excel / 販売管理 Excel 移行 | Tìm cách giải quyết | Hướng dẫn kiểm kê quy trình và dữ liệu trước khi chuyển từ bảng tính |
| 3 | 弥生会計 仕訳 CSV インポート / 販売管理 会計 CSV | Tích hợp kế toán | Hướng dẫn đối chiếu cột CSV, tài khoản, thuế và kiểm thử nhập |
| 4 | 食品卸 ロット管理 賞味期限 / ロット 出荷先 追跡 | Đánh giá giải pháp | Hướng dẫn quản lý lô, hạn dùng và truy vết một cấp từ nhập đến khách nhận |
| 5 | 在庫管理 棚卸 バーコード / 在庫 引当 発注点 | Vận hành | Checklist kiểm kê, tồn khả dụng và điểm đặt lại |
| 6 | 得意先 商品コード 変換 / 得意先別 単価 管理 | Vấn đề cụ thể | Hướng dẫn thống nhất mã hàng và bảng giá theo khách |
| 7 | 愛知 中小企業 販売管理 在庫管理 | Tìm nhà cung cấp | Trang sản phẩm theo thị trường nếu có thông tin hỗ trợ địa phương được xác minh |

Các cụm là giả thuyết cần xác nhận với dữ liệu Search Console, Keyword Planner và phỏng vấn. Không diễn giải sự xuất hiện của kết quả đối thủ thành khối lượng tìm kiếm hay thứ hạng đo được.

## Ba bản thảo ưu tiên

1. **中小企業の受発注・在庫管理を一元化するには？** Trả lời trước: thống nhất mã hàng, nguồn dữ liệu tồn và trạng thái đơn; sau đó giải thích phân bổ, thiếu hàng, mua, nhận và giao. Liên kết trang sản phẩm khi có và dẫn chứng được phép công bố.
2. **弥生会計に仕訳CSVを取り込む前の確認項目** Giải thích ánh xạ tài khoản, thuế suất, định dạng và đối chiếu; không tuyên bố tích hợp đã được chứng nhận hoặc hoạt động cho tới khi kiểm thử nhập vào sản phẩm 弥生 thực tế hoàn tất.
3. **食品卸のロット・賞味期限管理：入荷から出荷先まで** Giải thích phạm vi truy vết một cấp, lựa chọn FEFO và tình huống đối chiếu; không tuyên bố truy vết qua công đoạn sản xuất hoặc đáp ứng đầy đủ quy định.

## Ranh giới thông điệp công khai

- Ghi rõ sản phẩm đang phát triển khi phù hợp; không quảng cáo trial đang mở, kết quả tiết kiệm, khách Aichi, chứng nhận bảo mật, APPI hay vị trí dữ liệu đã hoàn tất khi chưa có bằng chứng và phê duyệt.
- Không đưa OCR/FAX, AI đếm/kiểm lỗi, BOM, lệnh sản xuất, 内示/確定, API kế toán hoặc hóa đơn pháp lý vào danh sách tính năng Trial Core đã có. Đây là các hạng mục ngoài phạm vi DEC-001.
- Không suy ra PMF, willingness-to-pay hoặc quy mô thị trường từ số lượng listing HNavi. Không xuất bản dữ liệu khách hàng, thông tin đấu thầu hoặc chi tiết nội bộ từ BRD.
- Kiểm tra từng tuyên bố với đội sản phẩm, kiểm thử chấp nhận, BrSE/người Nhật và pháp lý trước khi xuất bản. Thêm `datePublished` và người biên tập chỉ khi có dữ liệu thật.

## Cơ sở đối chiếu công khai

- [楽商: 食品卸のロット・期限管理](https://www.rakusyo.jp/service/foods/) — cấu trúc nội dung về hạn dùng, tồn theo lô, xuất và truy vết.
- [楽楽販売: 会計ソフトとの連携](https://www.rakus.co.jp/rakurakucloud/hanbai/faq/function/accounting-integration.php) — cách đối thủ giải thích CSV và API riêng biệt.
- [Google: multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) — URL riêng cho các ngôn ngữ.
