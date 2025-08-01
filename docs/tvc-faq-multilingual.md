# TVC Service FAQ - Đa ngôn ngữ

## Tổng quan
Đã cập nhật hệ thống FAQ cho trang TVC Service để hỗ trợ đa ngôn ngữ hoàn chỉnh với 4 ngôn ngữ: Tiếng Anh, Tiếng Việt, Tiếng Nhật và Tiếng Hàn.

## Thay đổi đã thực hiện

### 1. Cập nhật Component FAQ
- **File**: `components/FAQ.tsx`
- **Thay đổi**: 
  - Loại bỏ hardcoded FAQ data
  - Sử dụng translation data từ `useLanguage()` hook
  - Thêm 10 câu hỏi FAQ chi tiết
  - Cải thiện error handling với optional chaining

### 2. Mở rộng Translation Files
- **Files**: `translations/en.ts`, `translations/vi.ts`, `translations/ja.ts`, `translations/ko.ts`
- **Thêm mới**: 4 câu hỏi FAQ bổ sung:
  - Budget (Ngân sách)
  - Revisions (Chỉnh sửa)
  - Delivery (Giao hàng)
  - Rights (Quyền sở hữu)

### 3. Nội dung FAQ chi tiết

#### Câu hỏi cơ bản (6 câu):
1. **TVC Types**: Loại dự án TVC chuyên môn
2. **Approach**: Phương pháp tiếp cận sản xuất TVC
3. **Custom Solutions**: Giải pháp TVC tùy chỉnh
4. **Equipment**: Thiết bị và công nghệ sử dụng
5. **Timeline**: Thời gian dự án điển hình
6. **Difference**: Điểm khác biệt với đối thủ

#### Câu hỏi bổ sung (4 câu):
7. **Budget**: Phạm vi ngân sách dự án
8. **Revisions**: Số lần chỉnh sửa bao gồm
9. **Delivery**: Định dạng giao hàng
10. **Rights**: Quyền sở hữu nội dung

## Cấu trúc Translation

```typescript
faq: {
  title: "Frequently Asked Questions",
  subtitle: "Get answers to common questions...",
  questions: {
    tvcTypes: { question: "...", answer: "..." },
    approach: { question: "...", answer: "..." },
    custom: { question: "...", answer: "..." },
    equipment: { question: "...", answer: "..." },
    timeline: { question: "...", answer: "..." },
    difference: { question: "...", answer: "..." },
    budget: { question: "...", answer: "..." },
    revisions: { question: "...", answer: "..." },
    delivery: { question: "...", answer: "..." },
    rights: { question: "...", answer: "..." }
  }
}
```

## Tính năng

### ✅ Đã hoàn thành:
- [x] Hỗ trợ 4 ngôn ngữ đầy đủ
- [x] 10 câu hỏi FAQ chi tiết
- [x] Animation mượt mà với Framer Motion
- [x] Responsive design
- [x] Error handling với fallback
- [x] CTA section với translation
- [x] Accessibility tốt

### 🎯 Kết quả:
- FAQ section hoàn toàn đa ngôn ngữ
- Nội dung chi tiết và chuyên nghiệp
- UX/UI hiện đại và hấp dẫn
- Dễ dàng mở rộng thêm câu hỏi mới

## Cách sử dụng

Component FAQ sẽ tự động:
1. Lấy ngôn ngữ hiện tại từ `LanguageContext`
2. Hiển thị nội dung FAQ tương ứng
3. Cập nhật real-time khi thay đổi ngôn ngữ
4. Fallback về tiếng Anh nếu translation thiếu

## Mở rộng tương lai

Để thêm câu hỏi FAQ mới:
1. Thêm vào tất cả 4 file translation
2. Cập nhật array `faqs` trong component
3. Đảm bảo consistency giữa các ngôn ngữ 