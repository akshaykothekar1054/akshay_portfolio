# Akshay Kothekar — Portfolio Project Memory

## Stack

| Layer | Tech | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | v4 (CSS-first) |
| Animation | Framer Motion | 12.x |
| Scroll FX | GSAP + ScrollTrigger | 3.15.x |
| Icons | Lucide React + custom SVGs | latest |
| Fonts | Anton (display), Inter (body) | Google Fonts via next/font |

## Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `black` `#000000` | Page bg, dark sections |
| `surface` `#111111` | Card bg, About/Testimonials |
| `light` `#F5F5F5` | Skills, Contact sections |
| `accent-purple` `#8B5CF6` | Primary CTA, dots, headings |
| `accent-pink` `#EC4899` | Gradient end, rim lighting |

Gradient: `from-[#8B5CF6] to-[#EC4899]` (purple → pink)

### Fonts
- **Anton** — `font-display` — hero headlines, section titles (clamp-responsive sizing)
- **Inter** — `font-body` / default — body copy, UI elements

### Keyframes (globals.css + tailwind.config.ts)
- `float` — 4s bob ±12px for decorative elements
- `fadeUp` — 0.6s opacity + translateY reveal

### Section Backgrounds (alternating)
1. Hero — `bg-black`
2. About — `bg-black` (pure black — centered layout, SVG decorators)
3. Skills/Services — `bg-[#0D0D0D]` (dark — changed from light)
4. Projects — `bg-black`
5. Testimonials — `bg-[#111111]`
6. Contact — `bg-[#F5F5F5]`
7. Footer — `bg-black`

---

## File Structure

```
app/
  globals.css          # @import tailwindcss + @config + :root vars + @theme inline
  layout.tsx           # Anton + Inter fonts, full SEO metadata
  page.tsx             # Navbar + 6 sections + Footer
  favicon.ico

components/
  Navbar.tsx           # Fixed navbar: centered links only (no logo/CTA), backdrop-blur-sm bg-black/30 on scroll, purple sliding underline (layoutId), staggered slide-down mobile drawer
  Footer.tsx           # Two-line Anton brand, social icons, nav links, infinite marquee strip (animate-marquee, 35s), copyright
  icons/
    SocialIcons.tsx    # LinkedInIcon + GitHubIcon (inline SVG — lucide dropped them)
  hero/
    AvatarScene.tsx    # Self-contained R3F scene + Pixar-style model (mouse parallax, bob, sway)
  three/
    AvatarModel.tsx    # Legacy — superseded by components/hero/AvatarScene.tsx
    AvatarScene.tsx    # Legacy — superseded by components/hero/AvatarScene.tsx
  sections/
    Hero.tsx           # Signature hero: staggered per-char Anton headline, floating 3D avatar, gradient-border CTA, scroll chevron
    HeroSection.tsx    # Legacy hero (superseded by Hero.tsx)
    About.tsx          # Centered dark (#000) section: Anton "ABOUT ME", 3-para bio, SVG 3D heart (left) + SVG 3D star (right) float decorators, gradient-border "CONTACT ME" CTA (same style as Hero ContactBtn) — whileInView fade-up
    AboutSection.tsx   # Legacy 2-col layout (superseded by About.tsx — kept for reference)
    Skills.tsx         # Services-list layout: 6 numbered rows on #F5F5F5, Anton numbers ~4rem, hover→light purple bg + purple number, slide-in-from-left stagger 0.1s
    SkillsSection.tsx  # Legacy (superseded by Skills.tsx)
    Projects.tsx       # 2×2 card grid on #000: gradient accent strip, tags, title, desc, VIEW DETAILS + role badge, hover lift+glow; staggered whileInView
    ProjectsSection.tsx# Legacy (superseded by Projects.tsx)
    Testimonials.tsx   # 6 placeholder cards, 3-col grid on #111, golden accent strip + glow, initials avatars, disclaimer note
    TestimonialsSection.tsx  # Legacy (superseded by Testimonials.tsx)
    Contact.tsx        # White bg, GET IN TOUCH heading, left info panel, right mailto form, floating 🫵 emoji decoration
    ContactSection.tsx # Legacy (superseded by Contact.tsx)
    ExperienceSection.tsx    # Legacy placeholder (not used in page.tsx)

lib/
  constants.ts         # All data: PERSON, SKILL_CATEGORIES, EXPERIENCE, PROJECTS, EDUCATION, TESTIMONIALS, NAV_LINKS

tailwind.config.ts     # Tailwind v3-compat config: colors, fontFamily, keyframes
```

---

## Contact Data (updated)
- **Email**: akshaykothekar3726@gmail.com
- **Phone**: +91 9370410946
- **LinkedIn**: https://linkedin.com/in/akshay-kothekar-838a29232
- **GitHub**: https://github.com/akshaykothekar
- **Location**: Amravati, Maharashtra, India

---

## 3D Avatar Details
- **Primary file**: `components/hero/AvatarScene.tsx` (self-contained scene + model)
- **Legacy files**: `components/three/AvatarScene.tsx` + `AvatarModel.tsx` (superseded, keep for reference)
- Built entirely from Three.js primitives (SphereGeometry, CapsuleGeometry, BoxGeometry, CylinderGeometry, TorusGeometry)
- Skin tone: `#C68642` (warm Indian brown), dark: `#A0663A`
- Hair: `#1a1a1a` (near-black, flat-top style)
- Suit: `#1B2A4A` (deep navy), white shirt strip + collar flaps
- Material: `MeshToonMaterial` for Pixar/cartoon flat shading
- **Animation**: `useFrame` — bob amp 0.05 / 1.5 s cycle + Y-sway ±5° + mouse parallax on head group (max ±10°, LERP k=0.06)
- **Parallax**: `window.mousemove` → normalized coords → smoothly drives `headRef.rotation.x/y`
- **Camera**: `position [0, 0, 4]`, `fov 45` — frames head+neck+collar, suit body cropped at bottom
- Canvas: `alpha: true`, `dpr [1, 2]`, transparent background, OrbitControls disabled
- Lighting: ambient 0.6 + key-white top-left (1.4) + fill-purple right (0.4) + rim-pink behind (0.7)
- Imported in HeroSection via `next/dynamic` with `ssr: false`

---

## Key Implementation Notes

- **Tailwind v4 + @config**: `globals.css` uses `@config "../tailwind.config.ts"` to reference the v3-style config, plus `@theme inline` for CSS variable bridging.
- **Framer Motion v12 Variants**: `ease` inside a `Variants` object must be `"easeOut" as const` (string), not a cubic bezier array — v12 has stricter types.
- **Lucide React**: Does not export `Linkedin` or `Github` icons — replaced with `LinkedInIcon`/`GitHubIcon` in `components/icons/SocialIcons.tsx`.
- **scroll-padding-top: 64px** in globals.css accounts for the 64px fixed navbar.
- **Navbar active state**: `IntersectionObserver` with `rootMargin: "-35% 0px -60% 0px"` tracks which `section[id]` is in view and sets the active href. Active link gets a `layoutId="nav-underline"` `motion.span` (1.5px, #8B5CF6) that slides between links via spring animation.
- **Navbar design**: No logo, no CTA button — links only, centered, `font-size: 11px`, `letter-spacing: 0.2em`, uppercase. `backdrop-blur-sm bg-black/30` kicks in after 40px scroll. Mobile drawer animates `height: 0 → "auto"` with staggered link fade-in (55ms delay per item). Hamburger icon swaps Menu↔X with a 90° rotate transition.
- **NAV_LINKS order**: About → Projects → Skills → Contact (updated from the prior About → Skills → Projects → Contact).

---

## Next Steps
- [ ] Add real photo / 3D photo-based avatar (replace emoji placeholder in About card)
- [ ] Wire contact form to a backend (EmailJS / Resend / server action)
- [ ] Add `/resume.pdf` to `/public/` for the download button
- [ ] Add GSAP ScrollTrigger animations to the Skills or Projects section
- [ ] Add cursor follower (custom animated cursor)
- [ ] Performance: add `loading="lazy"` + Suspense boundaries for 3D scene
- [ ] Deploy to Vercel + add custom domain
