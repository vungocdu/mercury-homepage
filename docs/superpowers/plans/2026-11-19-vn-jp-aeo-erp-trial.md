# Việt–Nhật AEO và ERP Trial Implementation Plan

Goal: 6 bài hữu ích cùng trang trial JA/VI và đăng ký lưu Firestore.
Architecture: article registry render server-side, canonical locale-specific; trial host rewrites to static pages; same-origin API writes Firestore transactionally.
Tech stack: Next.js 16, React, Firebase Admin, Firestore.

## Constraints
- Trial 30 ngày từ kích hoạt thủ công; không tự thu phí. Kế hoạch giữ dữ liệu ERP thêm 30 ngày cần xác minh trước công bố.
- Yêu cầu đăng ký qua Firestore, không gửi email. Lưu 90 ngày là dự thảo cần owner duyệt.
- Chỉ tính năng DEC-001; không bịa kết quả, compliance, khách Nhật hoặc số liệu từ khóa.
- Không phát hành điều khoản ràng buộc khi chưa xác nhận pháp nhân và thông tin vận hành.

## Tasks
- [ ] VI content agent: 3 bài; JA content agent: 3 bài; review bằng chứng.
- [ ] Article registry/types, rendering, metadata/schema, sitemap, redirect bài cũ; review locale navigation.
- [ ] Trial JA/VI, terms/privacy drafts, accessible form.
- [ ] POST /api/trial-requests: validation, idempotency, transactional rate limit, Firestore writes; browser rules deny.
- [ ] Tests for invalid consent/fields, duplicate request, quota and backend failure; build and HTTP checks.
- [ ] Verify Firebase credentials, DNS and legal readiness. Publish only approved content; inspect CDN/API and Search Console.

## Ledger
- Ruling: work in current checkout to preserve existing uncommitted article and docs; ownership assigned by file.
- Firestore project mercury-homepage exists, default database asia-southeast1. No region-Japan claim.
- Agent workers own only lib/articles-vi.ts and lib/articles-ja.ts; controller owns integration.

## Implementation evidence
- Content completed: 3 VI + 3 JA, per-file language folders. Independent content review removed inaccessible source and misleading trial-open claims.
- Registry, locale routes, Article/breadcrumb schema, indexable directories, sitemap and old-URL 308 implemented.
- Trial JA/VI, terms/privacy drafts and API implemented; legal gate defaults closed.
- Unit/contract tests: 7 pass. Firestore synthetic smoke: concurrency/idempotency/conflict/rate-limit/timestamps pass, records cleaned.
- Browser checks: trial at 390px has no horizontal overflow; campaign params retained across trial legal/language links; article lang/canonical/schema checked.
- Header overlap fixed: container padding shorthand no longer clears article top spacing; breadcrumb complete and visible below fixed header at desktop/mobile.
- All source folders comply with lowercase kebab-case; Next dynamic params now [slug]/[locale]. npm run check:folders enforces convention.
- Build passes after final integration. WIF production, TTL, DNS and owner approval of legal/data lifecycle remain deployment gates. No production publication of these changes yet.
- LinkedIn Company Page website updated live from themansions.vn to www.mercurysolutions.vn with UI readback. Website links/Organization sameAs are local until release.

- Release steering: owner requested commit/push/deploy and opening form; changed trial host to existing-site /erp-trial/. Production WIF/env and limiter TTL provisioned; verify real request after deployment.
