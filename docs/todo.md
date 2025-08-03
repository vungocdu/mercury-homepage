# Mercury Solutions - Todo List

## Current Sprint

### [done] TVC Landing Page Content Update
- [x] Cập nhật metadata SEO cho trang TVC theo tvc-landing-page-content.md
- [x] Tích hợp nội dung Hero Section mới với pain points và value proposition
- [x] Cập nhật Services Section với focus vào nhà máy và doanh nghiệp sản xuất
- [x] Thêm Portfolio Section với case studies Fujikin và Jworld Vina
- [x] Tích hợp Production Process Section 5 bước chi tiết
- [x] Cập nhật Why Us Section với bảng so sánh 3 cột
- [x] Thêm FAQ Section với 8 câu hỏi chuyên sâu
- [x] Tạo Contact Form Section với CTA mạnh mẽ
- [x] Cập nhật đa ngôn ngữ cho tất cả nội dung mới
- [x] Cập nhật FAQ với 8 câu hỏi chi tiết cho tất cả ngôn ngữ
- [x] Test responsive design và performance
- [x] Fix TypeScript errors và build issues
- [x] Fix translation keys mismatch in TVC page
- [x] Fix import path for AnalyticsDashboard component

### [WIP] TVC Services Integration
- [x] Tích hợp hiệu ứng thanh cuộn (ScrollIndicator) vào layout chính
- [x] Cập nhật nội dung dịch vụ TVC chi tiết theo mô tả từ thư mục /tvc
- [x] Tạo component FAQ cho trang TVC
- [x] Cập nhật navigation và footer links
- [x] Xóa thư mục /tvc sau khi tích hợp hoàn tất
- [x] Tạo file documentation theo cursor rules

### [WIP] Performance Optimization
- [x] Fix TypeScript errors và build issues
- [x] Resolve SSR compatibility issues
- [x] Fix useLanguage hook SSR issues
- [x] Update to Next.js 15.4.5 and React 19.1.1
- [ ] Optimize images với Next.js Image component
- [ ] Implement lazy loading cho components
- [ ] Add structured data markup cho SEO
- [ ] Optimize bundle size
- [ ] Add loading states cho components

### [ ] Content & Copy Updates
- [ ] Review và cập nhật copy cho tất cả sections
- [ ] Thêm testimonials từ clients thực tế
- [ ] Cập nhật contact information chính xác
- [ ] Thêm case studies chi tiết cho projects

### [ ] Technical Improvements
- [ ] Implement error boundaries
- [ ] Add loading states cho components
- [ ] Optimize bundle size
- [ ] Add unit tests cho critical components
- [ ] Implement proper TypeScript types

### [done] UI/UX Enhancements
- [x] Add dark mode toggle
- [x] Implement smooth scroll animations
- [x] Add micro-interactions
- [x] Improve mobile navigation
- [x] Add breadcrumb navigation

## Backlog

### [ ] Advanced Features
- [x] Multi-language support (Vietnamese/English) - Completed 2024-12-19
- [ ] Blog section cho industry insights
- [ ] Client portal/dashboard
- [ ] Project management integration
- [ ] Live chat support

### [ ] Analytics & Tracking
- [ ] Implement conversion tracking
- [ ] Add heatmap analytics
- [ ] Set up A/B testing framework
- [ ] Track user engagement metrics

### [ ] Security & Compliance
- [ ] Implement GDPR compliance
- [ ] Add security headers
- [ ] Implement rate limiting
- [ ] Add input validation

## Recently Completed

### [done] 2024-12-19: TVC Page Update and Build Fix
- [x] Fixed TVC page translation keys mismatch
- [x] Updated process section to use correct translation structure
- [x] Fixed AnalyticsDashboard import path error
- [x] Ensured all TVC page sections display correctly
- [x] Resolved build errors and compilation issues

### [done] 2024-12-19: Navigation Menu Fix and Smooth Scroll Implementation
- [x] Fixed navigation menu functionality - all menu items now properly scroll to sections
- [x] Implemented smooth scroll utility in lib/utils.ts
- [x] Added missing ID to TechnologyStack component (id="technology")
- [x] Updated Header component to use smooth scroll for all navigation links
- [x] Enhanced user experience with proper scroll behavior for both desktop and mobile

### [done] 2024-12-19: Initial Project Setup
- [x] Khởi tạo Next.js project structure
- [x] Setup Tailwind CSS configuration
- [x] Tạo các components cơ bản (Header, Hero, Services, etc.)
- [x] Implement SEO metadata và sitemap
- [x] Tạo trang TVC services với nội dung chi tiết
- [x] Tích hợp hiệu ứng thanh cuộn
- [x] Setup documentation structure

## Notes

### Priority Levels:
- **High**: SEO & Performance, Content Updates
- **Medium**: Technical Improvements, UI/UX Enhancements  
- **Low**: Advanced Features, Analytics

### Context:
- Project: Mercury Solutions landing page
- Framework: Next.js 14 with TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Target: Professional B2B audience in Vietnam

### Dependencies:
- Need actual project images
- Need real client testimonials
- Need accurate contact information
- Need Google Analytics setup 