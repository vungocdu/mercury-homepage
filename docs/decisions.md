# Mercury Solutions - Decision Records

## ADR-001: Next.js 14 với App Router

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần chọn framework cho landing page với SEO tối ưu và performance cao.

**Decision**: Sử dụng Next.js 14 với App Router thay vì Pages Router.

**Consequences**:
- ✅ Server-side rendering và static generation
- ✅ Built-in SEO optimization
- ✅ App Router với improved performance
- ✅ TypeScript support tốt hơn
- ⚠️ Learning curve cho team mới

**Alternatives Considered**:
- **Gatsby**: Quá phức tạp cho landing page đơn giản
- **Vue.js + Nuxt**: Team có kinh nghiệm React hơn
- **Vanilla React**: Thiếu SEO features built-in

---

## ADR-002: Tailwind CSS cho Styling

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần hệ thống styling hiệu quả và maintainable.

**Decision**: Sử dụng Tailwind CSS thay vì CSS-in-JS hoặc styled-components.

**Consequences**:
- ✅ Rapid development với utility classes
- ✅ Consistent design system
- ✅ Small bundle size với PurgeCSS
- ✅ Excellent responsive design support
- ⚠️ HTML có thể trở nên verbose

**Alternatives Considered**:
- **Styled-components**: Bundle size lớn hơn
- **CSS Modules**: Thiếu design system consistency
- **Bootstrap**: Quá heavy và generic

---

## ADR-003: Framer Motion cho Animations

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần animations mượt mà và professional cho user experience.

**Decision**: Sử dụng Framer Motion thay vì CSS animations hoặc GSAP.

**Consequences**:
- ✅ Declarative animations với React
- ✅ Excellent performance
- ✅ Built-in gesture support
- ✅ Easy to implement complex animations
- ⚠️ Additional bundle size

**Alternatives Considered**:
- **CSS Animations**: Khó implement complex animations
- **GSAP**: Quá powerful cho needs hiện tại
- **React Spring**: Less mature ecosystem

---

## ADR-004: ScrollIndicator Component

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần visual feedback cho user về scroll progress.

**Decision**: Implement custom ScrollIndicator component thay vì sử dụng library.

**Consequences**:
- ✅ Custom design phù hợp với brand
- ✅ Lightweight implementation
- ✅ Full control over behavior
- ✅ Consistent với design system
- ⚠️ Need to maintain custom code

**Alternatives Considered**:
- **react-scroll-indicator**: Không phù hợp với design
- **CSS-only solution**: Không đủ interactive
- **No indicator**: Poor user experience

---

## ADR-005: TVC Services Page Structure

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần trang riêng cho TVC services với nội dung chi tiết.

**Decision**: Tạo dedicated `/tvc` route với comprehensive content structure.

**Consequences**:
- ✅ SEO optimization cho TVC services
- ✅ Detailed content showcase
- ✅ Better user journey
- ✅ Separate analytics tracking
- ⚠️ Additional maintenance overhead

**Alternatives Considered**:
- **Single page**: Content quá dài và khó navigate
- **Modal/popup**: Poor SEO và accessibility
- **External page**: Loose brand consistency

---

## ADR-006: Component Architecture Pattern

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần architecture pattern cho component organization.

**Decision**: Sử dụng feature-based component organization với shared components.

**Consequences**:
- ✅ Clear separation of concerns
- ✅ Reusable components
- ✅ Easy to maintain và scale
- ✅ Consistent patterns across codebase
- ⚠️ Initial setup complexity

**Alternatives Considered**:
- **Page-based**: Khó reuse components
- **Atomic design**: Over-engineering cho project size
- **Monolithic components**: Hard to maintain

---

## ADR-007: SEO Strategy Implementation

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần SEO tối ưu cho B2B audience tại Việt Nam.

**Decision**: Implement comprehensive SEO strategy với metadata, sitemap, và structured data.

**Consequences**:
- ✅ Better search engine visibility
- ✅ Improved local SEO
- ✅ Rich snippets support
- ✅ Social media optimization
- ⚠️ Need to maintain SEO content

**Alternatives Considered**:
- **Basic SEO**: Insufficient cho competitive market
- **Third-party SEO tools**: Additional cost và complexity
- **No SEO focus**: Poor discoverability

---

## ADR-008: Contact Form Implementation

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần form liên hệ hiệu quả cho lead generation.

**Decision**: Implement client-side form với validation và future API integration.

**Consequences**:
- ✅ Immediate user feedback
- ✅ Form validation
- ✅ Easy to extend với backend
- ✅ Good user experience
- ⚠️ Need backend implementation later

**Alternatives Considered**:
- **Third-party forms**: Less control và branding
- **Email-only**: Poor user experience
- **No form**: Lost conversion opportunities

---

## ADR-009: Performance Optimization Strategy

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần website load nhanh và smooth user experience.

**Decision**: Implement performance optimization từ đầu với Next.js features.

**Consequences**:
- ✅ Fast loading times
- ✅ Good Core Web Vitals
- ✅ Better user experience
- ✅ SEO benefits
- ⚠️ Development complexity

**Alternatives Considered**:
- **Optimize later**: Poor initial user experience
- **Minimal optimization**: Performance issues
- **Over-optimization**: Development overhead

---

## ADR-010: Documentation Strategy

**Date**: 2024-12-19  
**Status**: Accepted  
**Context**: Cần documentation để maintain và scale project.

**Decision**: Implement comprehensive documentation với architecture, decisions, và todo tracking.

**Consequences**:
- ✅ Clear project understanding
- ✅ Easy onboarding cho new developers
- ✅ Decision tracking
- ✅ Maintenance guidance
- ⚠️ Documentation overhead

**Alternatives Considered**:
- **Minimal docs**: Hard to maintain
- **External docs**: Out of sync với code
- **No docs**: Poor project management

---

## Future Decisions to Consider

### ADR-011: CMS Integration
**Context**: Cần content management system cho non-technical users.
**Options**: Strapi, Contentful, Sanity, or custom solution.

### ADR-012: Analytics Implementation
**Context**: Cần track user behavior và conversion metrics.
**Options**: Google Analytics 4, Mixpanel, or custom analytics.

### ADR-013: Multi-language Support
**Context**: Cần support tiếng Việt và tiếng Anh.
**Options**: Next.js i18n, react-intl, or custom solution.

### ADR-014: Deployment Strategy
**Context**: Cần deployment strategy cho production.
**Options**: Vercel, Netlify, AWS, or custom hosting.

### ADR-015: Testing Strategy
**Context**: Cần testing strategy để ensure quality.
**Options**: Jest + React Testing Library, Cypress, or Playwright. 