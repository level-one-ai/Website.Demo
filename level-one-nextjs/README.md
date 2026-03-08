# Level One — Next.js Website

Edinburgh-based AI systems company website, rebuilt with Next.js 14, Framer Motion, and TypeScript for deployment on Vercel.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Styling**: CSS (design tokens via CSS variables)
- **Deployment**: Vercel

## Project Structure

```
level-one-nextjs/
├── public/
│   └── images/              # Local image assets (optional)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main page orchestrating all sections
│   ├── components/
│   │   ├── AnimateIn.tsx    # Reusable scroll-triggered animation wrapper
│   │   ├── SplashScreen.tsx # Loading splash with fade transition
│   │   ├── ScrollCanvas.tsx # Scroll-driven background canvas animation
│   │   ├── Navigation.tsx   # Fixed nav with hexagon burger menu
│   │   ├── HeroSection.tsx  # Hero with video background
│   │   ├── FeaturesSection.tsx  # Hex showcase with cursor-glow hover
│   │   ├── ProcessSection.tsx   # Process cards with 3D tilt hover
│   │   ├── AboutSection.tsx     # About with slide-in animation
│   │   ├── ServicesSection.tsx  # Service cards with shimmer hover
│   │   ├── PricingSection.tsx   # Pricing cards with radial glow hover
│   │   ├── FAQSection.tsx       # Accordion FAQ with animated expand
│   │   ├── ReviewsSection.tsx   # Review carousel with slide transitions
│   │   ├── CTASection.tsx       # Final call-to-action
│   │   └── Footer.tsx           # Site footer
│   ├── data/
│   │   └── siteData.ts     # All content, URLs, and data constants
│   └── styles/
│       └── globals.css      # All styles (design tokens, components, responsive)
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

## Deploy to Vercel

### Option 1: Via GitHub (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Your site will be live at `your-project.vercel.app`

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel will build and deploy automatically.

## Design Decisions

### Performance Optimizations
- **Scroll canvas**: Uses `requestAnimationFrame` with frame interpolation (0.03 smoothing) instead of direct frame jumping, reducing visual jitter
- **Passive scroll listeners**: All scroll handlers use `{ passive: true }` for better scroll performance
- **Framer Motion `useInView`**: Sections animate only when scrolled into viewport (with `once: true` to prevent re-triggers)
- **Image preloading**: Canvas frames preload in background on mount
- **CSS `will-change`**: Applied sparingly to animated elements

### Unique Hover Effects Per Section
- **Features**: Cursor-following radial glow effect on the info card
- **Process**: 3D perspective tilt that follows mouse position
- **Services**: Gradient shimmer that sweeps across the card on hover
- **Pricing**: Mouse-tracking radial gradient background glow
- **Reviews**: Slide-in/slide-out card transitions with directional awareness

### Preserved from Original
- Hero video background (Cloudinary)
- Scroll-driven canvas frame animation
- Hexagon-style `clip-path` button
- Full dark color scheme with `#ff6b35` orange accent
- All section content, pricing, FAQ, and reviews
- Hexagon burger menu button

## Configuration

### External Assets
All images and videos are served from Cloudinary CDN. URLs are defined in `src/data/siteData.ts`.

### Webhook Integration
The calendar/booking system webhook URLs need to be configured. See the original `CLAUDE.md` for webhook setup details.

### Fonts
Google Fonts are loaded via CSS `@import` in `globals.css`:
- **Sora** / **Space Grotesk** — Headings
- **Inter** / **DM Sans** — Body
- **JetBrains Mono** — Monospace labels

## License

© 2026 Level One. All rights reserved.
