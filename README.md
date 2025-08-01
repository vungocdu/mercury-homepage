# Mercury Solutions Homepage

Landing page tối ưu SEO cho công ty Mercury Solutions - chuyên về Data Analysis và công nghệ sáng tạo.

## Giới thiệu

Mercury Solutions là công ty chuyên về:
- **Data Analysis**: Computer vision và data visualization
- **Web Development**: Ứng dụng công nghệ tiên tiến cho doanh nghiệp
- **Mobile Development**: Phát triển ứng dụng di động iOS/Android
- **AI & Machine Learning**: Giải pháp trí tuệ nhân tạo
- **DevOps & Cloud**: Hạ tầng và triển khai ứng dụng
- **Testing/QA**: Đảm bảo chất lượng phần mềm
- **TVC & Digital Art**: Dịch vụ sản xuất quảng cáo truyền hình và nghệ thuật số

## Công nghệ sử dụng

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Cấu trúc dự án

```
mercury-solution-homepage/
├── app/
│   ├── layout.tsx          # Layout chính với SEO metadata
│   ├── page.tsx            # Trang chủ
│   ├── tvc/
│   │   └── page.tsx        # Trang TVC Services
│   ├── sitemap.ts          # Sitemap tự động
│   ├── robots.ts           # Robots.txt
│   └── globals.css         # CSS toàn cục
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Dịch vụ chính
│   ├── TechnologyStack.tsx # Stack công nghệ
│   ├── Process.tsx         # Quy trình làm việc
│   ├── Projects.tsx        # Dự án tiêu biểu
│   ├── Contact.tsx         # Form liên hệ
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Tính năng SEO

- ✅ Metadata tối ưu cho search engines
- ✅ Open Graph tags cho social media
- ✅ Structured data markup
- ✅ Semantic HTML structure
- ✅ Fast loading với Next.js
- ✅ Mobile responsive
- ✅ Accessibility features
- ✅ Sitemap tự động với trang TVC

## Trang TVC Services

Trang `/tvc` cung cấp thông tin chi tiết về:
- **Video Production**: Sản xuất video chuyên nghiệp
- **Motion Graphics**: Hiệu ứng đồ họa chuyển động
- **Digital Art**: Nghệ thuật số và thiết kế đồ họa
- **Content Creation**: Tạo nội dung từ concept đến delivery

### Tính năng trang TVC:
- ✅ Hero section với thống kê ấn tượng
- ✅ Services showcase với icons và features
- ✅ Creative process workflow
- ✅ Portfolio showcase
- ✅ CTA sections
- ✅ SEO optimized với metadata riêng

## Cài đặt và chạy

1. **Cài đặt dependencies:**
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

2. **Chạy development server:**
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

3. **Build cho production:**
```bash
npm run build
npm start
```

## Cấu hình

### Environment Variables
Tạo file `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://www.mercurysolutions.vn
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

### SEO Configuration
Cập nhật metadata trong `app/layout.tsx`:
- Title và description
- Open Graph images
- Google verification code
- Social media links

## Deployment

### Vercel (Recommended)
1. Push code lên Git repository
2. Connect với Vercel
3. Deploy tự động

### Manual Deployment
```bash
npm run build
npm start
```

## Tùy chỉnh

### Colors
Cập nhật color scheme trong `tailwind.config.js`:
```javascript
colors: {
  mercury: {
    50: '#f0f9ff',
    // ... các shades khác
  }
}
```

### Content
- Cập nhật thông tin công ty trong các components
- Thêm/sửa projects trong `Projects.tsx`
- Cập nhật contact info trong `Contact.tsx`
- Tùy chỉnh nội dung TVC trong `app/tvc/page.tsx`

## Performance

- ✅ Lazy loading components
- ✅ Optimized images
- ✅ Minified CSS/JS
- ✅ CDN ready
- ✅ Caching strategies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## License

© 2024 Mercury Solutions. All rights reserved.

## Contact

- **Email**: info@mercury-solutions.vn
- **Phone**: +84 24 1234 5678
- **Address**: 33 Ng. 41 P. Thai Ha, Trung Liet, Dong Da, Hanoi, Vietnam
- **Working Hours**: Mon-Fri 8-4 (Closed Sat-Sun and Public Holidays)
