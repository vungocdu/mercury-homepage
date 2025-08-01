# Analytics Setup cho Email Marketing Tracking

## 🚀 Quick Start

### 1. Environment Variables
Tạo file `.env.local` trong root directory:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. Google Analytics Setup
1. Tạo GA4 property tại [Google Analytics](https://analytics.google.com/)
2. Copy Measurement ID (format: G-XXXXXXXXXX)
3. Paste vào `NEXT_PUBLIC_GA_ID`

### 3. Mailchimp Integration
Sử dụng UTM parameters trong email campaigns:

```
https://www.mercurysolutions.vn/tvc?utm_source=mailchimp&utm_medium=email&utm_campaign=YOUR_CAMPAIGN&utm_content=YOUR_CONTENT&utm_term=YOUR_TERM
```

## 📊 Tracking Features

### Automatic Tracking
- ✅ Page views với UTM parameters
- ✅ TVC page specific events
- ✅ Session storage cho cross-page tracking

### Interactive Tracking
- ✅ CTA button clicks
- ✅ Contact form submissions
- ✅ Portfolio views
- ✅ Conversion tracking với values

### Dashboard
- ✅ Admin dashboard tại `/admin/analytics`
- ✅ Key metrics và campaign performance
- ✅ Recent activity tracking

## 🎯 Campaign Naming Convention

### Campaign Names
- `tvc_services_2024_q1`
- `video_production_promo`
- `digital_art_showcase`

### Content Types
- `hero_cta` - Main call-to-action
- `portfolio_link` - Portfolio section
- `contact_form` - Contact buttons

### Keywords
- `video_production`
- `tvc_services`
- `digital_art`

## 📈 Analytics Dashboard

Truy cập dashboard tại: `https://your-domain.com/admin/analytics`

### Metrics Tracked
- Total page views
- Unique visitors
- Email traffic
- Conversions
- Campaign performance
- Recent activity

## 🔧 Testing

### Test UTM Parameters
```
https://www.mercurysolutions.vn/tvc?utm_source=mailchimp&utm_medium=email&utm_campaign=test_campaign&utm_content=test_content&utm_term=test_term
```

### Debug Commands
```javascript
// Check UTM parameters
console.log('UTM Params:', new URLSearchParams(window.location.search));

// Check stored UTM parameters
console.log('Stored UTM:', sessionStorage.getItem('utm_params'));
```

## 📚 Documentation

Chi tiết setup guide: `docs/analytics-setup.md`

## 🆘 Support

Nếu có vấn đề, kiểm tra:
1. Environment variables đã setup chưa
2. GA4 property đã configure chưa
3. UTM parameters đúng format chưa
4. Browser console có errors không 