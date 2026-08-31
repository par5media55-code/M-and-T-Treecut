# AI Studio Prompt — Rebrand "AM Tree Felling" → "M&T Treecut"

You are rebranding an existing Next.js website. The source project lives at:

`AM Tree Felling/`

DO NOT rebuild the app. DO NOT change the stack, layout, components, styling
classes, animation hooks, form logic, or gallery logic. Only swap the brand
identity from **AM Tree Felling** to **M&T Treecut** and update the copy/data
that references AM-specific details.

----------------------------------------------------------------------
STACK & FRAME (already built — leave intact)
----------------------------------------------------------------------

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (`@theme` tokens in app/globals.css)
- motion (motion/react) for animations
- lucide-react icons
- Fonts: Inter (sans) + Playfair Display (serif, used for headings)

Project structure:
```
AM Tree Felling/
├── app/
│   ├── layout.tsx      ← <Metadata> title/description + fonts
│   ├── globals.css     ← @theme color tokens (am-green-*, am-charcoal, am-gold…)
│   └── page.tsx        ← assembles all sections + JSON-LD LocalBusiness
├── components/
│   ├── Navigation.tsx          ← navbar logo "AM" + "AM Tree Felling" + phone
│   ├── Footer.tsx              ← brand, links, service areas, contact
│   ├── FloatingActionButtons.tsx← fixed call + WhatsApp buttons
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── WhyChooseUs.tsx
│       ├── Gallery.tsx
│       ├── Areas.tsx           ← list of service towns
│       ├── Reviews.tsx         ← testimonials
│       ├── CTA.tsx
│       └── Contact.tsx
├── lib/utils.ts
├── metadata.json
├── next.config.ts, postcss.config.mjs, eslint.config.mjs, tsconfig.json
└── package.json
```

----------------------------------------------------------------------
WHAT TO CHANGE
----------------------------------------------------------------------

### 1. app/layout.tsx — metadata
- title → `M&T Treecut | Professional Tree Felling in North West Province`
- description → `Helping homeowners with reliable and affordable tree felling
  solutions across North West Province, South Africa.`

### 2. app/page.tsx — JSON-LD LocalBusiness
Replace the jsonLd object's brand fields:
- name: 'M&T Treecut'
- image: 'https://assets.cdn.filesafe.space/icgQKkNyC7fhZ7kO0c75/media/69ec82139fe87a9994d688b0.jpeg'
- @id / url: 'https://mttreecut.co.za'
- telephone: '0722321139'
- email: 'info@mttreecut.co.za'   (the live site has no email — placeholder)
- address: streetAddress 'Rustenburg', addressLocality 'Rustenburg',
  addressRegion 'North West', postalCode '0300', addressCountry 'ZA'
- geo: latitude -25.66667, longitude 27.24138
- sameAs: remove or replace with M&T socials if known (leave empty array if none)

### 3. components/Navigation.tsx
- Logo text block: change `AM` → `M&T` (the rotated square) and
  `AM Tree Felling` → `M&T Treecut`
- Phone number stays `072 232 1139` (same as AM) — no change needed there
- Keep all classNames (bg-am-gold, text-am-charcoal, etc.) UNCHANGED

### 4. components/Footer.tsx
- Brand: `AM Tree Felling` → `M&T Treecut`, logo `AM` → `M&T`
- Tagline: `Professional, safe, and affordable tree felling and removal services
  in Rustenburg and surrounding areas.` →
  `Reliable, affordable tree felling, stump removal, trimming and garden
  services across North West Province.`
- Service Areas list → replace the 7 towns with M&T's 21 areas:
  Mahikeng, Rustenburg, Klerksdorp, Potchefstroom, Brits, Mmabatho, Zeerust,
  Lichtenburg, Schweizer-Reneke, Vryburg, Coligny, Bloemhof, Christiana,
  Orkney, Hartbeespoort, Delareyville, Ottosdal, Stilfontein, Koster,
  Swartruggens, Ventersdorp
- Contact email `moyoandrew84@gmail.com` → `info@mttreecut.co.za`
- Copyright `© {year} AM Tree Felling` → `© {year} M&T Treecut`

### 5. components/FloatingActionButtons.tsx
- Phone href `tel:0722321139` — unchanged (same number)
- WhatsApp href `https://wa.me/27722321139` — unchanged
- No brand text in this file; leave as-is

### 6. components/sections/Hero.tsx
- Heading currently references "Tree Felling" / AM copy — change the visible
  headline to: `Professional Tree Felling & Tree Care in North West Province`
- Subtext → `Helping homeowners with reliable and affordable tree felling
  solutions.`
- Keep the background image, overlay, motion classes, and all `am-*` classes

### 7. components/sections/Services.tsx
- Keep the 5 service cards and their lucide icons (TreePine, Trash2, Scissors,
  etc.) — only reword descriptions if they mention AM-specific phrasing.
  Services to keep: Tree Felling & Removal, Stump Removal, Tree Trimming &
  Pruning, Plot Clearing, Lawn Maintenance.

### 8. components/sections/WhyChooseUs.tsx
- Keep the 8 reasons; reword any that say "AM Tree Felling" to "M&T Treecut".
  No structural change.

### 9. components/sections/Areas.tsx
- Replace the `areas` array with M&T's 21 towns (same list as Footer):
  Mahikeng, Rustenburg, Klerksdorp, Potchefstroom, Brits, Mmabatho, Zeerust,
  Lichtenburg, Schweizer-Reneke, Vryburg, Coligny, Bloemhof, Christiana,
  Orkney, Hartbeespoort, Delareyville, Ottosdal, Stilfontein, Koster,
  Swartruggens, Ventersdorp

### 10. components/sections/Reviews.tsx
- Replace the 3 placeholder reviews with M&T's real testimonials:
  1. name 'Ziaan Martins', location 'Rustenburg',
     text 'M&T Tree felling is the best tree felling company in Rustenburg
     hands down!'
  2. name 'Merinda Starbuck', location 'North West',
     text 'The team was very professional and took down the tree perfectly in
     our backyard.'
  3. (optional) name 'Local Homeowner', location 'North West',
     text 'Fast, affordable and tidy work — highly recommend M&T Treecut.'

### 11. components/sections/Contact.tsx
- Phone `072 232 1139` unchanged
- Email `moyoandrew84@gmail.com` → `info@mttreecut.co.za`
- Location text `Rustenburg, South Africa` → `Rustenburg, North West Province`

### 12. components/sections/CTA.tsx
- Keep structure; if any copy says "AM Tree Felling" change to "M&T Treecut"

### 13. components/sections/Gallery.tsx
- Currently hidden in page.tsx (`{/* <Gallery /> */}`). Leave hidden, OR if
  enabling, swap the Unsplash URLs for M&T photos. Default: leave as-is.

### 14. metadata.json
- name: 'M&T Treecut'
- description: 'Reliable and affordable tree felling services across North West
  Province, South Africa.'

### 15. DO NOT TOUCH
- app/globals.css (color tokens stay — they're generic "am-" names but the
  palette works for M&T; do NOT rename them)
- lib/utils.ts, next.config.ts, postcss.config.mjs, eslint.config.mjs,
  tsconfig.json, package.json
- Any `am-*` Tailwind classNames anywhere (they're just color tokens)

----------------------------------------------------------------------
VERIFICATION
----------------------------------------------------------------------
Run from the project root:
  npm install
  npm run build   → must compile with no errors
  npm run lint    → 0 errors

Rendered site must show "M&T Treecut" in navbar + footer, phone 072 232 1139
everywhere, Rustenburg / North West as location, and NO "AM Tree Felling"
text anywhere in the output.
