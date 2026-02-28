# DD Catering Services — Deployment Guide

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended — Free)

### Option A: CLI Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, choose defaults
```

### Option B: GitHub + Vercel (Best Practice)
1. Push this project to a GitHub repository
2. Go to https://vercel.com → Sign in with GitHub
3. Click "New Project" → Import your GitHub repo
4. Click "Deploy" — Vercel auto-detects Next.js
5. Your site will be live at `your-project.vercel.app`

### Option C: Vercel Dashboard
1. Go to https://vercel.com/new
2. Drag & drop this project folder
3. Deploy!

## Folder Structure

```
dd-catering-service/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (SEO, fonts, schema)
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── about/page.tsx      # About page
│   │   ├── services/page.tsx   # Services page
│   │   ├── menu/page.tsx       # Menu page
│   │   ├── gallery/page.tsx    # Gallery page
│   │   └── contact/page.tsx    # Contact page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky responsive navbar
│   │   │   ├── Footer.tsx      # Rich footer
│   │   │   └── MobileBar.tsx   # Sticky mobile bottom bar
│   │   ├── home/
│   │   │   ├── Hero.tsx        # Full viewport hero
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── MenuHighlights.tsx
│   │   │   ├── Reviews.tsx     # Auto-play carousel
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── EventTypes.tsx
│   │   │   ├── GalleryPreview.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/
│   │   │   ├── FloatingWhatsApp.tsx
│   │   │   ├── TrustBadges.tsx
│   │   │   └── FAQ.tsx
│   │   └── shared/
│   │       └── SectionHeader.tsx
│   └── lib/
│       └── constants.ts        # All business data (edit here!)
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Customization Guide

### Update Business Info
Edit `src/lib/constants.ts` to update:
- Business name, phone, address
- WhatsApp number
- Menu items
- Reviews
- Gallery images (Unsplash URLs or your own)

### Add Real Photos
Replace Unsplash URLs in `constants.ts` with your actual food/event photos.
Upload images to `/public/images/` and reference as `/images/your-photo.jpg`.

### Custom Domain on Vercel
1. Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., ddcateringservices.in)
3. Update DNS records as instructed by Vercel

### Google Maps Embed
In `src/lib/constants.ts`, update `mapEmbedUrl` with an accurate Google Maps embed URL for your exact location.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (Custom gold/maroon theme)
- **Framer Motion** (Animations)
- **React Icons** (Icons)
- **Google Fonts** (Playfair Display + Inter)
