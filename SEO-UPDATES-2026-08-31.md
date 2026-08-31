# M&T Treecut SEO & Phone Number Updates

**Date:** 2026-08-31
**Repo:** https://github.com/par5media55-code/M-and-T-Treecut.git
**Working folder:** `C:/Users/Dhruv/Desktop/client websites/demos/mt treecut`

## Summary of Changes

All changes from the 2026-08-31 session, isolated so they can be applied to a fresh rebuild without redoing work.

---

## 1. Phone Numbers

**Primary:** 079 064 2188 (Deacon's number — top bar, primary CTA)
**Secondary:** 072 232 1139 (existing — footer, contact, mobile)

### Files modified:

#### `components/Navigation.tsx`
- Add thin top bar above nav with 0790642188 (right-aligned, gold monospace)
- Add "Blog" link to nav links array: `{ name: 'Blog', href: '/blog' }`
- Change brand text from `text-white` to `text-am-text` (for light theme)
- Mobile menu: add both numbers as call buttons
- Desktop: keep "Free Quote" button linking to 0790642188

#### `components/Footer.tsx`
- Footer background: `bg-am-charcoal` (dark, keeps contrast)
- Add both phone numbers in contact section:
```tsx
<li className="flex items-start gap-3">
  <Phone size={14} className="text-am-gold shrink-0 mt-0.5" />
  <div className="flex flex-col gap-1">
    <a href="tel:0790642188" className="hover:text-am-gold transition-colors">079 064 2188</a>
    <a href="tel:0722321139" className="hover:text-am-gold transition-colors">072 232 1139</a>
  </div>
</li>
```
- Add Blog link to Quick Links

#### `components/sections/Hero.tsx`
- Add second call button for 0722321139:
```tsx
<a href="tel:0722321139" className="...">
  <span className="text-xs uppercase font-bold tracking-widest">Call: 072 232 1139</span>
</a>
```

#### `components/sections/Contact.tsx`
- Add both numbers in phone section:
```tsx
<div className="flex flex-col gap-1">
  <a href="tel:0790642188" className="text-am-wood hover:text-am-gold transition-colors text-sm">079 064 2188</a>
  <a href="tel:0722321139" className="text-am-wood hover:text-am-gold transition-colors text-sm">072 232 1139</a>
</div>
```

---

## 2. Blog Page (5 SEO Articles)

### Route: `/app/blog/page.tsx`
- Lists 5 articles with title, excerpt, date, category
- Each article links to `/blog/[slug]`
- Metadata: title, description, OG tags

### Article slugs:
1. `signs-tree-needs-removal` — "5 Signs Your Tree Needs to Be Removed"
2. `stump-removal-vs-grinding` — "Stump Removal vs Stump Grinding: Which Do You Need?"
3. `tree-pruning-best-practices` — "Tree Pruning Best Practices for North West Climate"
4. `emergency-tree-removal-storms` — "Emergency Tree Removal: What to Do After a Storm"
5. `cost-of-tree-felling-south-africa` — "How Much Does Tree Felling Cost in South Africa?"

### Article template (each in `/app/blog/[slug]/page.tsx`):
```tsx
export const metadata = {
  title: 'Article Title | M&T Treecut',
  description: 'Article description for SEO',
};

export default function ArticlePage() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-20">
      <div className="text-am-gold text-[10px] uppercase tracking-widest font-bold mb-4">Category • Date</div>
      <h1 className="text-4xl font-serif text-white mb-6">Article Title</h1>
      {/* Content */}
      <div className="bg-am-green-dark/30 border border-am-gold p-6 mt-10">
        <p className="text-white font-bold mb-2">CTA Headline</p>
        <p className="text-am-wood text-sm mb-4">CTA text</p>
        <a href="tel:0790642188" className="text-am-gold font-mono text-lg">079 064 2188</a>
      </div>
    </article>
  );
}
```

---

## 3. SEO Enhancements

### `app/layout.tsx` — Enhanced metadata:
```tsx
export const metadata: Metadata = {
  title: 'M&T Treecut | Professional Tree Felling in North West Province, South Africa',
  description: 'M&T Treecut offers professional tree felling, stump removal, tree pruning, plot clearing and garden services across North West Province. Call 079 064 2188 for a free quote.',
  keywords: ['tree felling', 'tree removal', 'stump removal', 'tree pruning', 'North West Province', 'Rustenburg', 'Mahikeng', 'Klerksdorp', 'Potchefstroom', 'tree services'],
  authors: [{ name: 'M&T Treecut' }],
  creator: 'M&T Treecut',
  publisher: 'M&T Treecut',
  formatDetection: { email: false, address: true, telephone: true },
  metadataBase: new URL('https://mttreecut.co.za'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'M&T Treecut | Professional Tree Felling in North West Province',
    description: 'Professional tree felling, stump removal, tree pruning and garden services across North West Province, South Africa. Free quotations. Call now.',
    url: 'https://mttreecut.co.za',
    siteName: 'M&T Treecut',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: 'https://mttreecut.co.za/og-image.jpg', width: 1200, height: 630, alt: 'M&T Treecut - Professional Tree Felling Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M&T Treecut | Professional Tree Felling in North West Province',
    description: 'Professional tree felling, stump removal, tree pruning and garden services across North West Province. Free quotations. Call 079 064 2188 now.',
    images: ['https://mttreecut.co.za/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};
```

### `app/page.tsx` — 3 JSON-LD schemas:
1. **LocalBusiness** (with `@id`, aggregateRating, priceRange)
2. **BreadcrumbList** (Home → Blog)
3. **Service** (Tree Felling & Removal, areaServed: North West Province)

### `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://mttreecut.co.za</loc><lastmod>2024-01-15</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://mttreecut.co.za/blog</loc><lastmod>2024-01-15</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://mttreecut.co.za/blog/signs-tree-needs-removal</loc><lastmod>2024-01-15</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://mttreecut.co.za/blog/stump-removal-vs-grinding</loc><lastmod>2024-01-10</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://mttreecut.co.za/blog/tree-pruning-best-practices</loc><lastmod>2024-01-05</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://mttreecut.co.za/blog/emergency-tree-removal-storms</loc><lastmod>2023-12-28</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://mttreecut.co.za/blog/cost-of-tree-felling-south-africa</loc><lastmod>2023-12-20</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>
```

### `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://mttreecut.co.za/sitemap.xml
```

---

## 4. Light Theme (globals.css)

```css
@import "tailwindcss";
@import "tw-animate-css";

@theme {
  --color-am-green-dark: #1B3022;
  --color-am-green-base: #1A241C;
  --color-am-charcoal: #F7F6F2;        /* page background (light) */
  --color-am-charcoal-light: #FFFFFF;  /* panels / cards (light) */
  --color-am-wood: #4A4E4A;            /* muted body text */
  --color-am-wood-light: #6A6E6A;
  --color-am-gold: #A87B2C;            /* darkened bronze for contrast on white */
  --color-am-gold-light: #C39A4A;
  --color-am-text: #1A1D1A;            /* primary text (near-black) */
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-serif: var(--font-playfair), ui-serif, Georgia, serif;
}

html { scroll-behavior: smooth; }
body { @apply bg-am-charcoal text-am-text antialiased; }

.text-white { color: var(--color-am-text) !important; }
#home .text-white { color: #ffffff !important; }

input, select, textarea {
  color: var(--color-am-text);
  background-color: var(--color-am-charcoal-light);
}
```

---

## 5. Prompt to Apply These Changes

Use this prompt when ready to add these changes to the rebuilt site:

```
Apply the mt-treecut-seo-updates skill to this site. The skill contains:
1. Phone numbers: 0790642188 (top bar, primary) + 0722321139 (secondary)
2. Blog page at /blog with 5 SEO articles
3. Enhanced meta tags (OG, Twitter, canonical)
4. 3 JSON-LD schemas (LocalBusiness, Service, BreadcrumbList)
5. sitemap.xml + robots.txt
6. Light theme globals.css

Load the skill and apply all changes. Do not redo work — the skill has exact code snippets.
```

---

## Notes

- The deployed Vercel site (mt-tree-felling-1.vercel.app) is a DIFFERENT, more polished version with logo, gallery images, more services (8 vs 5), and different areas (Phokeng, Tlhabane, Boitekong, Kroondal, Mogwase, Sun City). It does NOT have 0790642188 or blog.
- The GitHub repo (par5media55-code/M-and-T-Treecut) has the older version which is what we've been editing.
- When rebuilding, start from the version that matches the deployed Vercel site, then apply these changes on top.
