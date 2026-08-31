# M&T Treecut — Image Inventory & Swap Map

Source folder: `mt treecut/images_2026-08-20_18-03-18/`
Target project: `AM Tree Felling/` (Next.js App Router)
Status: OBSERVED ONLY — no swap performed yet.

## ★ BRAND LOGO (most important)
| File | Subject | Role in site | Destination filename |
|------|---------|--------------|----------------------|
| `Brand_Logo.webp` | Official M&T Treecut logo — green tree + chainsaw arborist, "M&T TREECUT" wordmark, tagline "TREE SURGEONS & FELLING SERVICES" | Replaces the text logo (`AM` square + "AM Tree Felling") in BOTH `Navigation.tsx` and `Footer.tsx` | `public/mt-treecut-logo.webp` |

## TRUST / SOCIAL PROOF
| File | Subject | Role | Destination |
|------|---------|------|-------------|
| `image_500x280_22.webp` | Google 5-star rating graphic | Trust badge in `Reviews.tsx` (or near hero/CTA) | `public/google-5star.webp` |

## WORK / PROJECT PHOTOS → GALLERY (enable `<Gallery />` in page.tsx)
| File | Subject | Proposed gallery label | Destination |
|------|---------|------------------------|-------------|
| `image_1200x1200_14.webp` | Large tree cut, worker on roof structure | Tree felling in progress | `gallery-01-tree-roof.webp` |
| `image_1200x1594_16.webp` | Kloofzicht estate entrance, palms, gate | Our service areas | `gallery-02-kloofzicht.webp` |
| `image_142x153_1.jpeg` | Arborist pruning tall tree, house behind | Crown reduction | `gallery-03-pruning-house.jpeg` |
| `image_142x153_2.jpeg` | Trimmed Canary Island date palm, garden | Palm maintenance | `gallery-04-palm-trim.jpeg` |
| `image_142x153_3.jpeg` | Fresh stump + root ball in excavation | Stump removal | `gallery-05-stump-rootball.jpeg` |
| `image_142x153_4.jpeg` | Stump + log piles, water tanks, industrial | Plot / land clearing | `gallery-06-land-clearing.jpeg` |
| `image_142x153_5.jpeg` | Two arborists dismantling storm tree on roof | Emergency / storm damage | `gallery-07-storm-roof.jpeg` |
| `image_142x153_6.webp` | Worker on flatbed truck piled with logs | Debris removal | `gallery-08-truck-load.webp` |
| `image_431x575_21.webp` | Row of palms against blue sky | Palm care | `gallery-09-palms-sky.webp` |
| `image_540x960_19.webp` | Chainsaw at base + harnessed climber, thatched house | Sectional felling | `gallery-10-chainsaw-climber.webp` |
| `image_715x536_20.webp` | Worker cutting branch OVER power lines | ⚠ SAFETY HAZARD — confirm before using | `gallery-11-powerlines.webp` |
| `image_715x953_18.webp` | Team removing tree, climber + ladder + ground crew | Full removal job | `gallery-12-team-removal.webp` |
| `image_720x1280_17.webp` | Arborist high in tree, residential wall | Climbing / pruning | `gallery-13-arborist-tree.webp` |
| `image_780x1040_13.jpeg` | Removal site, ladder on trunk, debris pile | Tree removal | `gallery-14-removal-ladder.jpeg` |
| `image_860x484_8.jpg` | Tall pruned tree in shadowy backyard | Canopy lift | `gallery-15-pruned-backyard.jpg` |
| `image_860x484_9.jpg` | Arborist dismantling tall pine near houses | Pine removal | `gallery-16-pine-climb.jpg` |
| `image_860x484_10.jpg` | Tree pruning, residential, rope rigging | Rigging / pruning | `gallery-17-pruning-res.jpg` |
| `image_867x1156_12.webp` | Two workers + chainsaw, cut-log pile | Cutting crew | `gallery-18-workers-logs.webp` |
| `image_900x535_7.webp` | Arborist trimming tree above wall/fence | Hedge / boundary work | `gallery-19-trim-wall.webp` |
| `image_960x1280_11.webp` | Arborist on flatbed truck with logs | Haul-away | `gallery-20-truck-logs.webp` |

## HERO BACKGROUND CANDIDATES
The hero (`Hero.tsx`) currently uses a remote Unsplash URL. Best local swaps:
- `image_1200x1200_14.webp` (dramatic tree-felling scene) — landscape-ish, good fit
- `image_540x960_19.webp` or `image_720x1280_17.webp` — portrait, better for mobile hero

## SWAP PLAN (run when you say go)
1. Copy all 21 files into `AM Tree Felling/public/` with the destination names above.
2. In `Navigation.tsx` + `Footer.tsx`: replace the rotated "AM" square + "AM Tree Felling" text with `<img src="/mt-treecut-logo.webp" alt="M&T Treecut" className="h-10 w-auto" />` (logo is green-on-white; may need a white chip/rounded bg on the dark nav).
3. In `Reviews.tsx`: add `<img src="/google-5star.webp" alt="Google 5-star rating" />` as a trust badge.
4. In `app/page.tsx`: uncomment `{/* <Gallery /> */}` and populate `Gallery.tsx` images array with the 20 gallery files (drop `gallery-11-powerlines` unless you confirm).
5. Optionally point `Hero.tsx` background at one of the hero candidates.
6. Verify: `npm run build` + `npm run lint` pass; no "AM Tree Felling" text remains.
