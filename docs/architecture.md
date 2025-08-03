# Mercury Solutions - Architecture Documentation

## System Overview

Mercury Solutions là landing page chuyên nghiệp được xây dựng với Next.js 14, tập trung vào việc showcase các dịch vụ công nghệ và TVC production cho khách hàng B2B tại Việt Nam.

## Technology Stack

### Frontend Framework
- **Next.js 14**: React framework với App Router
- **React 18**: UI library với latest features
- **TypeScript**: Type safety và developer experience

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Project Structure

```
mercury-solution-homepage/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout với SEO metadata
│   ├── page.tsx                 # Homepage
│   ├── tvc/                     # TVC Services page
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── sitemap.ts               # Dynamic sitemap
│   └── robots.ts                # Robots.txt
├── components/                   # Reusable components
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Hero section
│   ├── Services.tsx             # Services showcase
│   ├── TechnologyStack.tsx      # Tech stack display
│   ├── Process.tsx              # Work process
│   ├── Projects.tsx             # Portfolio
│   ├── Contact.tsx              # Contact form
│   ├── Footer.tsx               # Footer
│   ├── FAQ.tsx                  # FAQ component
│   └── ScrollIndicator.tsx      # Scroll progress indicator
├── lib/                         # Utility functions
│   ├── utils.ts                 # Helper functions & smooth scroll
│   └── analytics.ts             # Analytics utilities
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   ├── favicon.ico              # Favicon
│   └── site.webmanifest         # PWA manifest
├── docs/                        # Documentation
│   ├── architecture.md          # This file
│   ├── decisions.md             # Decision records
│   └── todo.md                  # Task management
└── package.json                 # Dependencies
```

## Component Architecture

### Layout Components
- **RootLayout**: App-wide layout với metadata và ScrollIndicator
- **Header**: Fixed navigation với mobile menu và smooth scroll navigation
- **Footer**: Site footer với links và contact info

### Page Components
- **HomePage**: Landing page với tất cả sections
- **TVCPage**: Dedicated TVC services page với đầy đủ sections (Hero, Pain Points, Solution, Portfolio, Process, Why Us, CTA, FAQ)

### Feature Components
- **Hero**: Main value proposition và CTA
- **Services**: Service offerings với icons và descriptions
- **TechnologyStack**: Tech stack showcase với categories
- **Process**: Workflow visualization
- **Projects**: Portfolio với project details
- **Contact**: Contact form và information
- **FAQ**: Interactive FAQ section
- **ScrollIndicator**: Visual scroll progress indicator

## Navigation System

### Smooth Scroll Implementation
- **Utility Functions**: `smoothScrollTo()` và `handleNavigationClick()` trong `lib/utils.ts`
- **Section IDs**: Tất cả sections có ID tương ứng với navigation menu
- **Cross-platform**: Hoạt động trên cả desktop và mobile
- **External Routes**: TVC menu navigates đến `/tvc` page

### Navigation Structure
```typescript
const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Technology', href: '#technology' },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#projects' },
  { name: 'TVC Services', href: '/tvc' },
  { name: 'Contact', href: '#contact' }
]
```

## Data Flow

### Static Content
- Service definitions trong component files
- Project portfolio data
- Contact information
- FAQ content
- TVC services content với đầy đủ translation keys

### Dynamic Content (Future)
- CMS integration cho content management
- API endpoints cho form submissions
- Analytics data collection

## SEO Strategy

### Metadata Management
- Dynamic metadata trong layout.tsx
- Page-specific metadata cho từng route
- Open Graph và Twitter Card support
- Structured data markup

### Performance Optimization
- Next.js Image optimization
- Lazy loading cho components
- Bundle size optimization
- Core Web Vitals optimization

## Security Considerations

### Current Implementation
- Security headers trong next.config.js
- Input validation trong forms
- XSS prevention với React

### Planned Improvements
- CSRF protection
- Rate limiting
- Content Security Policy
- GDPR compliance

## Deployment Architecture

### Development
- Local development với Next.js dev server
- Hot reload và fast refresh
- TypeScript compilation

### Production
- Vercel deployment (recommended)
- Static site generation
- CDN distribution
- Environment variable management

## Monitoring & Analytics

### Current Setup
- Google Analytics integration (placeholder)
- Error tracking preparation
- Performance monitoring

### Planned Features
- Real-time analytics
- User behavior tracking
- Conversion funnel analysis
- A/B testing framework

## Scalability Considerations

### Current State
- Static content với Next.js SSG
- Component-based architecture
- Modular CSS với Tailwind

### Future Scalability
- CMS integration
- Multi-language support
- Micro-frontend architecture
- API-first approach

## Performance Metrics

### Target Metrics
- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Current Performance
- Optimized bundle size
- Efficient component rendering
- Image optimization
- Minimal JavaScript

## Maintenance & Updates

### Regular Tasks
- Dependency updates
- Security patches
- Content updates
- Performance monitoring

### Documentation
- Code documentation
- API documentation
- Deployment procedures
- Troubleshooting guides

## Future Roadmap

### Phase 1: Content & SEO
- Content optimization
- Advanced SEO features
- Performance improvements

### Phase 2: Functionality
- CMS integration
- Advanced forms
- Analytics implementation

### Phase 3: Advanced Features
- Multi-language support
- Personalization
- Advanced analytics

## Decision Records

See `docs/decisions.md` for detailed decision records and architectural choices. 