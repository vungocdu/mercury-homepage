# Mercury Design System

Được thiết kế lại dựa trên logo Mercury (`Mercury Solution Blue.svg`). Tài liệu này mô tả trạng thái **hiện tại của code** (chủ đề sáng).

## 1. Phân tích logo

| Yếu tố | Giá trị | Ý nghĩa cho UI |
|---|---|---|
| Màu duy nhất | `#2047F4` | Màu thương hiệu duy nhất; mọi accent suy ra từ nó |
| Hình khối | Vòng tròn rỗng + vòng tròn đặc + hình thoi (kim cương) | Radius lớn, nhấn bằng hình tròn / thoi |
| Chữ | Sans hình học, đậm, ALL CAPS | Heading đậm, tracking rộng cho nhãn |
| Nền | Trắng, tối giản | Nhiều khoảng trắng, ít viền màu |

## 2. Audit hệ thống cũ và trạng thái hiện tại

| Vấn đề (bản cũ) | Trạng thái |
|---|---|
| Biến CSS trong `:root` / `.dark` thiếu `;` | Đã sửa |
| Xanh chủ đạo `#2E5BFF` lệch logo (41 chỗ hardcode) | Đã sửa: 0 chỗ trong `app/`, `components/`, `lib/` |
| `--border` là xanh sáng, áp lên mọi `*` | Đã sửa: `--border` = `#E1E4EF` |
| Chữ phụ xám `#6C757D` trên `#F8F9FA` (dưới AA) | Đã sửa: `--muted-foreground` = `#5A6280` |
| Vàng `#FFD60A` dùng rải rác (18+ chỗ) | Đã gỡ khỏi component; còn trong `tailwind.config.js` (`mercury-gold`) |
| Ghi chú "Pantone" sai lệch | Không còn trong code |

## 3. Tokens

### Màu thương hiệu (`mercury-blue`)
50 `#EEF2FF` · 100 `#E0E7FF` · 200 `#C3D0FD` · 300 `#96ABFB` · 400 `#5E7DF8` · **500 `#2047F4` (logo)** · 600 `#1736CC` · 700 `#122AA3` · 800 `#0E207B` · 900 `#0A1654` · 950 `#060E38`

### Trung tính "ink" (`mercury-50…950`)
`#F6F7FB` · `#EEF0F7` · `#E1E4EF` · `#CBD0E0` · `#A3AAC2` · `#7A829E` · `#5A6280` · `#434A66` · `#2C3250` · `#1B2038` · `#0B1030`

Ngoài ra: `ink` = `#070B1F` (Tailwind), footer dùng navy `#0B1030` (`footer.bg-ink` trong v5).

### Ngữ nghĩa (CSS variables trong `app/globals.css`, dạng HSL channels)
`background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `accent`, `border`, `input`, `ring`, `destructive`, `success`, cùng nhóm alias cũ (`--text-*`, `--link-*`, `--card-*`, `--mercury-*`).

| Token | Sáng (`:root`, mặc định) | Tối (`.dark`) |
|---|---|---|
| background | `#F6F7FB` (canvas thực tế là `#FFFFFF`, xem `.theme-black`) | `#0B1030` |
| primary | `#2047F4` | `#5E7DF8` |
| foreground | `#1B2038` | `#F6F7FB` |
| muted-foreground | `#5A6280` (5.9:1 trên trắng) | `hsl(226 20% 70%)` |
| border | `#E1E4EF` | `hsl(229 35% 24%)` |
| accent | `#E0E7FF` | `hsl(231 50% 22%)` |

Lưu ý: khối `.dark` vẫn có trong file nhưng không được bật ở đâu (`app/layout.tsx` không thêm class `dark`, không có `dark:` nào trong `.tsx`). Site hiện chỉ dùng chế độ sáng.

### Vàng (`mercury-gold`)
Accent phụ, chỉ dùng cho điểm nhấn nhỏ (badge, icon, gạch chân). Không dùng cho nền lớn hoặc chữ trên nền sáng.

### Typography

| Vai trò | Font | Biến CSS / class |
|---|---|---|
| Body, UI | IBM Plex Sans (400, 500, 600, 700; latin + vietnamese) | `--font-sans` |
| Mono | IBM Plex Mono (400, 500) | `--font-mono` |
| Tiếng Nhật | IBM Plex Sans JP (400, 500, 700) | `--font-jp` |
| Heading CAPS (kỹ thuật) | Space Grotesk (500, 600, 700) | `--font-display`, `.font-display` |

Quy tắc heading (`.theme-black`, khối v4 và v5):
- `h1`, `h2`, `h3`: Space Grotesk, **UPPERCASE**; `h1`/`h2` 700, tracking `0.01em`; `h3` 600, tracking `0.05em`, ~1.02rem.
- `h4`: sentence case, không uppercase.
- Màu heading `#0B1030`; body `p` `#4A5275`; lead `p.text-lg/xl` `#3A4263`.
- `.eyebrow`: nhãn nhỏ uppercase, chữ gradient xanh, có chấm xanh phía trước.
- Tiếng Nhật: `:lang(ja)` ngắt dòng theo cụm (`word-break: auto-phrase`).

### Radius, đổ bóng, viền
- `--radius: 0.75rem` (token); card `.glass-card` bo `8px`, viền 1px `#E1E4EF`, bóng mềm xám-navy.
- Card hover: viền `#96ABFB`, bóng xanh nhạt, không đổi nền.
- `--shadow-sm / -md` xám-navy; `--shadow-lg` ngả xanh logo.
- Ô nhỏ (`.rounded-lg` → 6px, `.rounded-md` → 4px); nút giữ dạng pill.

## 4. Quy tắc sử dụng

| Nên | Không nên |
|---|---|
| Dùng `bg-primary`, `text-foreground`, `border-border` | Hardcode hex trong component (hiện còn ~154 chỗ trong `.tsx`, 66 chỗ là `#2047F4`) |
| Nút chính: nền `#2047F4`, hover `#1736CC` (`.pill-grad`) | Dùng xanh ngoài ramp |
| Chữ phụ `text-muted-foreground` | `text-gray-400` trên nền trắng (không đạt AA) |
| Gradient xanh `from-mercury-blue-500 to-mercury-blue-700` | Trộn tím / indigo của Tailwind |
| Section nền trong suốt, nền chung do `.theme-black` quản lý | Đặt nền tối cho section (chỉ CTA band và footer là navy) |

## 4b. Lịch sử các đợt tinh chỉnh (khối override trong `app/globals.css`)

Các khối sau nối tiếp nhau; khối sau ghi đè khối trước. Khối cũ chưa bị xóa (xem mục 8).

| Khối | Nội dung chính |
|---|---|
| "Black glass" (cũ) | Nền đen, type steel → silver, viền gradient, arc phát sáng |
| v2 refinement | Xanh logo `#2047F4` thay xanh thép; navy `#070B1F` thay đen; card viền mảnh; nút màu đặc; bỏ font Exo 2; `prefers-reduced-motion` / `-transparency` |
| v3 one canvas | Một nền liền cho cả trang (`.theme-black` gradient + `AmbientBackground`), section trong suốt; footer mềm cạnh |
| v4 technical display | Heading CAPS bằng Space Grotesk; card, nhãn và section ít khung hơn |
| **v5 LIGHT (hiện tại)** | Nền trắng, type navy, xanh thương hiệu là màu duy nhất; CTA band xanh đậm; footer navy |
| CTA 3D scene | Sàn lưới phối cảnh + các khối lập phương wireframe xoay (chỉ dùng trong CTA band) |

**Quy tắc thứ tự:** khối v5 và khối CTA 3D scene phải nằm **cuối** `app/globals.css`. Thêm override mới phải đặt sau chúng.

## 5. Cấu trúc CSS

Thứ tự trong `app/globals.css`:
1. `@tailwind` + `:root` (token sáng)
2. `.dark` (token tối, hiện không dùng)
3. Typography scale, container, animation, tối ưu mobile/tablet, marquee logo
4. Lớp "tech" cũ, khối "Black glass", v2, v3, v4
5. v5 LIGHT
6. CTA 3D scene (`.cta-floor`, `.cube`, `.cta-sway`)

Wrapper: `components/site/PageShell.tsx` render `<main id="main" class="theme-black">`. Tên `.theme-black` được giữ để tương thích, dù nội dung là chế độ sáng.

## 6. Thành phần và trang

| Thành phần | File | Dùng ở |
|---|---|---|
| PageShell (Header + `main.theme-black` + Footer) | `components/site/PageShell.tsx` | Tất cả trang: home, about, services, service detail, work, work detail, insights, careers, contact |
| CtaBand + CtaScene | `components/site/CtaBand.tsx`, `CtaScene.tsx` | Home, About, Services, Service detail, Work, Work detail, Insights (**không có** ở Contact và Careers) |
| ClientsMarquee | `components/ClientsMarquee.tsx` | Home, About |
| ImageSlot | `components/site/ImageSlot.tsx` | About, Work detail |
| PhoneShowcase | `components/site/PhoneShowcase.tsx` | Work detail (chỉ dự án có `workMobile`: actiwell, tna-fujikin, casa-lsm) |
| ProjectCard / ServiceCard | `components/site/Cards.tsx` | Danh sách work / services |
| Process | `components/Process.tsx` | Chỉ ở trang Services |
| Icons | `components/site/icons.tsx` | `serviceIcons`, `projectIcons`, `directionIcons` |

### Trang chủ (`app/page.tsx`)
Hero → HomeAbout → StatsRings → ClientsMarquee → CtaBand. Không có section Process.

### Trang About (`components/pages/AboutPage.tsx`)
- Hero (`about.hero`, tỉ lệ 16:7), khối "Câu chuyện" (`about.story`, `contain`).
- Ba trụ cột (Vision / Mission / Action) là các hàng xen kẽ trái–phải; ảnh `about.direction.1..3`, tỉ lệ 4:3.
- Chân dung lãnh đạo `about.leader.N` (4:5), ClientsMarquee, CtaBand.

## 7. Dự án (`lib/content.ts`, `lib/content-extra.ts`)

### 7.1 Danh sách 10 dự án

| Slug | Ngành (`industry`) | Icon |
|---|---|---|
| hmb-erp | erp | erp |
| actiwell | fitness | fitness |
| tna-fujikin | hrtech | clock |
| icommune | govtech | gov |
| activesg-cms | sporttech | wrench |
| myarms | bizapp | phone |
| careearth-life | hrtech | users |
| casa-lsm | edtech | school |
| atms | sporttech | athlete |
| super-bloom | fitness | flower |

Ngành: ERP / Dược phẩm, Fitness Tech, HR Tech, GovTech, Sport Tech, **Business App** (mới), **EdTech** (mới).
Icon mới: `phone`, `school` (`components/site/icons.tsx`).

### 7.2 Dữ liệu bổ sung (`lib/content-extra.ts`)
- `projectClients` (khối khách hàng): 9 dự án, không có myarms. Logo lấy từ `logo` hoặc ảnh `work.<slug>.logo`.
- `workGallery`, `projectModules`, `moduleGroups`: hiện chỉ có dữ liệu cho `tna-fujikin`.
- `workMobile`: `actiwell`, `tna-fujikin`, `casa-lsm` (PhoneShowcase).

### 7.3 Trang chi tiết (`components/pages/WorkDetail.tsx`)
- **Khối khách hàng**: logo (`projectClients[].logo` → ảnh `work.<slug>.logo` → placeholder), ảnh `work.<slug>.client`.
- **Thư viện ảnh** (`workGallery`, nếu có).
- **Ảnh hệ thống**: `shot1`–`shot3`, `shot4` tuỳ chọn (chỉ hiện khi đã đăng ký trong `media`). Với `actiwell`, `tna-fujikin` và `casa-lsm` (`webShots`), ảnh web xếp dọc full-width, tỉ lệ ~2.07:1 / 2.2:1.
- **Mobile showcase**: `PhoneShowcase` với 3 máy; bấm một máy để trượt về giữa. `initial` đặt máy giữa mặc định; actiwell dùng `0`.

## 8. Ảnh và slot (`lib/media.ts`)

- Mỗi slot có id dạng `about.*` hoặc `work.<slug>.<key>`, ánh xạ tới file trong `/public/images/...`.
- `mediaFocus` đặt `object-position` (ví dụ `about.hero`, `work.hmb-erp.client`).
- `ImageSlot`: có ảnh thì render `object-cover` (hoặc `object-contain p-6` khi `contain`); chưa có ảnh thì hiện khung nét đứt, kèm id và kích thước gợi ý.
- Cover card dự án: `coverFor()` trong `Cards.tsx` lấy slot đầu tiên có ảnh theo thứ tự `cover` > `client` > `shot1` > `app.1` > `site.1`.

Slot đã đăng ký trong `media`:
- **About**: `about.hero`, `about.story`, `about.direction.1..3`, `about.culture.1`, `about.leader.2`.
- **Cover cả 10 dự án**: `work.<slug>.cover`.
- **actiwell**: logo, client, shot1–4, app.1–3.
- **hmb-erp**: client.
- **tna-fujikin**: client, site.1–3, shot1–3, app.1–3.

Các slot khác hiện là placeholder.

## 9. Logo khách hàng

- Danh sách: `lib/clients.ts`, 15 khách hàng, file trong `public/images/clients/*.png`.
- Các file PNG đều 480×240 px, có kênh alpha (đã kiểm tra kích thước; độ đồng đều thị giác chưa kiểm tra).
- `ClientsMarquee`: nhân đôi danh sách để chạy vòng lặp; ô `w-60 h-32`, `object-contain`, nền trắng, viền `slate-200`; dừng khi hover; tắt chuyển động khi `prefers-reduced-motion`.

## 10. CTA band và 3D scene

- `CtaBand`: band xanh đậm full-bleed, cao (`py-28` → `py-48`), nền gradient `#08123F` → `#2D5BFF` (v5 `.cta-band`), tiêu đề 2 dòng (dòng 2 là chữ gradient `cta-accent`), nút trắng + nút viền.
- `CtaScene`: sàn lưới `.cta-floor` (phối cảnh, trượt lưới 5s), 5 cube wireframe `.cube` (mảng `CUBES`) xoay (`.cube-spin`), lớp `.cta-sway` lắc nhẹ. Tắt animation khi `prefers-reduced-motion`.

## 11. Việc còn lại (chưa làm)

- Xóa các khối cũ không còn dùng trong `globals.css` (tách "Black glass", v2–v4 đã bị ghi đè) và khối `.dark` nếu không dự định bật lại.
- Thay dần hex hardcode trong `.tsx` (~154 chỗ, trong đó `#2047F4` 66 chỗ) bằng token hoặc class `mercury-blue-*`.
- Thay dần `text-gray-*` / `bg-gray-*` (hiện 78 + 12 chỗ, trước đây ~150) bằng `mercury-*` hoặc `muted`.
- Thay các `blue-*` / `indigo` còn sót của Tailwind (khoảng 113 chỗ, cần rà soát lại).
- Tách component dùng chung (Button, Card, Badge) thay vì lặp class.
