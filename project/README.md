# iPlanet Design System

> **iPlanet** — loja de produtos Apple **zero na caixa** e **seminovos** em São Paulo. Lojas físicas no **Itaim Bibi** (R. Clodomiro Amazonas, 1158) e **São Caetano / ABC paulista**. Vende online, faz entregas, e aceita aparelhos Apple **na troca para upgrade**.

This design system is the **single source of truth** for designing iPlanet surfaces (landing page, store, product pages, marketing). It pairs Apple BR's uncluttered visual rhythm with a **bolder, warmer, more direct** voice — iPlanet's own. The brand's promise is to **viabilize the dream of owning Apple** for buyers who otherwise couldn't.

## Business at a glance

| | |
|---|---|
| **What they sell** | Produtos Apple **lacrados/zero** + **seminovos** revisados (iPhone, Mac, iPad, Apple Watch, AirPods, acessórios) |
| **Differentiators** | (1) Seminovos com preço acessível, (2) Trade-in para upgrade, (3) Atendimento humano em loja física e WhatsApp |
| **Locations** | **Itaim Bibi** — R. Clodomiro Amazonas, 1158 · 3 — São Paulo · **São Caetano do Sul** — região do ABC paulista |
| **Channels** | Loja física · WhatsApp · Site · Entregas |
| **Target customer** | Quem quer Apple e tem como — *e* quem está realizando o sonho de ter um pela primeira vez |
| **Tone** | premium · acolhedor · direto · ousado |
| **Primary CTAs** | **Chamar no WhatsApp** · **Comprar online** · **Visitar a loja** |

---

## Sources used to build this system

| Source | Status | Notes |
|---|---|---|
| `assets/iplanet-logo.jpg` | ✅ in project | iPlanet's primary wordmark — a black hand-holding-phone glyph next to the "iPlanet" wordmark in a heavy sans. |
| https://www.apple.com/br/ | reference (no fetch) | Hero / homepage style for product showcase rows. |
| https://www.apple.com/br/store | reference (no fetch) | Primary visual reference. Section headers use a coral `iPlanet` accent ("Loja", "As novidades", "Para todo mundo ouvir"); product cards on white with `R$` prices in 14px grey; pill CTAs in blue. |
| `assets/ref-apple-*.png` (5 screenshots) | ✅ in project | Screenshots taken by the client of apple.com/br and the Brazilian Apple Store; used as visual ground-truth. |

> **No codebase or Figma was attached** — the system is pattern-matched against the public Apple BR Store and the iPlanet logo. If you have iPlanet source files (Figma, an existing site, brand guidelines), please attach them so I can refine.

---

## Index — what's in this folder

```
iPlanet Design System/
├── README.md                  ← you are here
├── SKILL.md                   ← skill manifest for downstream agents
├── colors_and_type.css        ← all design tokens (CSS variables) + base type
├── assets/
│   ├── iplanet-logo.jpg       ← primary logo (raster — request SVG!)
│   └── ref-apple-*.png        ← reference screenshots
├── preview/                   ← Design System tab cards
│   ├── colors-*.html
│   ├── type-*.html
│   ├── spacing-*.html
│   └── components-*.html
├── ui_kits/
│   └── store/
│       ├── README.md
│       ├── index.html         ← interactive landing/store mock
│       └── *.jsx              ← reusable components
└── slides/                    ← (empty — no deck template provided)
```

---

## CONTENT FUNDAMENTALS

iPlanet operates **in Brazilian Portuguese (pt‑BR)**. The voice is **premium, acolhedor, direto, ousado** — Apple BR's restraint, but warmer and bolder. We borrow Apple BR's typographic rhythm; we do **not** borrow Apple's coldness.

### Voice & Tone

- **Premium**: short, declarative sentences. No hype words. Whitespace earns the premium feeling, not adjectives. "iPhone 16 Pro. Pronto pra entrega." Not "O incrível e revolucionário iPhone 16 Pro!"
- **Acolhedor**: address the buyer warmly. Use **"a gente"** instead of "nós" ("a gente entrega", "fala com a gente"). Use **"seu/sua"** generously. Treat seminovos buyers with the same respect as zero-na-caixa buyers — never apologetic.
- **Direto**: say what it is. "iPhone 14 seminovo, revisado, 1 ano de garantia. R$ 3.290 ou 12x de R$ 274." No detours. No "descubra…" / "explore…" filler verbs.
- **Ousado**: the brand earns boldness from being a **reseller that beats Apple's own store on access**. Headlines can be confident: "Seu primeiro Apple começa aqui.", "Tudo Apple. Mais perto. Mais possível.", "Zero na caixa ou seminovo revisado — você escolhe."

### Casing
- **Sentence case** for body and most headlines.
- **Product names keep their official casing**: iPhone, iPad, Mac, Apple Watch, AirPods, AirTag, MagSafe. Never "Iphone".
- **Section titles use a two-clause "headline. subhead." pattern** — coral headline + grey subhead:
  - "**Zero na caixa**. Lacrados, com nota fiscal e garantia Apple."
  - "**Seminovos iPlanet**. Revisados, com 1 ano de garantia. Por menos."
  - "**Troca com upgrade**. Seu Apple atual vira desconto no novo."
  - "**Visite a loja**. Itaim Bibi e São Caetano. A gente te espera."
- **Eyebrows** above cards in 12px **uppercase** grey: `SEMINOVO`, `ZERO NA CAIXA`, `ACESSÓRIOS`, `TROCA COM UPGRADE`.
- **`NOVO` flag** in coral, 12px uppercase. **`SEMINOVO` flag** in **deep teal `#1f6f6a`** for clarity vs. coral. **`ÚLTIMA UNIDADE`** in red `#c4262e` for urgency. These are the only three product flags.

### Prices
- Brazilian convention: `R$ 3.290` (period thousands separator), or `R$ 569,00` with decimals.
- Always show **parcelamento** — Brazilians shop on parcels: "**12x de R$ 274** sem juros" or "Em até **12x sem juros**".
- For seminovos, **show the new-price savings** when honest: "De R$ 5.499 (zero) por **R$ 3.290** (seminovo)".
- "**Frete grátis** para todo o Brasil" or "**Retire na loja** sem custo".
- **PIX discount** is part of the BR commerce vocabulary: "**5% off no PIX**".

### CTAs (button labels)
- **Chamar no WhatsApp** (filled coral pill, with whatsapp glyph) — **primary**, on every product card and hero
- **Comprar agora** (filled blue pill) — secondary, for online checkout
- **Ver na loja** (outlined blue pill) — for visiting physical stores
- **Quero trocar o meu** (text link with ↗) — trade-in entry
- **Falar com a gente ↗**, **Como chegar ↗**, **Ver no mapa ↗** — text links

### Microcopy patterns
- Lead with possibility: "Seu sonho Apple, mais perto."
- Use the trade-in as a hook: "Tem um iPhone antigo? **Vira desconto.**"
- Address the seminovo stigma head-on: "Seminovo na iPlanet é revisado por quem entende. **1 ano de garantia. Bateria nova ou em 90%+.**"
- Address physicality: "Pode passar na loja pra ver de perto. Sem compromisso."
- Never "clique aqui" / "compre já".

---

## VISUAL FOUNDATIONS

### Palette
- **Backgrounds**: `#f5f5f7` page, `#ffffff` cards. Section "washes" come in **pastel sky/mint/blush/cream** (`--ip-wash-*`) for atmospheric breaks (the Apple BR home uses a sky-blue wash for the iPad air row).
- **Ink**: `#1d1d1f` for primary text, `#6e6e73` for secondary, `#86868b` for tertiary. Pure `#000` only on dark hero cards.
- **Accent**: a **coral-orange `#f56300`** for section titles (the `Loja` / `As novidades` look) and `NOVO` flags. Used **sparingly** — never on body, never on bordered containers, never as a card background.
- **CTA blue**: `#0071e3` filled and outlined pills. This is the only "interactive" color.
- No gradients. No glassmorphism. No blue-purple AI tropes.

### Type
- **SF Pro Display / SF Pro Text** — the Apple system. Substituted with **Inter** here (load via Google Fonts) until the client provides licensed SF Pro files. ⚠️ Flag for the user.
- **Tight tracking** on display sizes (`letter-spacing: -0.022em`). Loose tracking on uppercase eyebrows.
- **Three weights only**: 400 (body), 500 (UI controls), 600 (display). Never 700+ for headlines.
- The hero size goes **big**: 96px on desktop. Section titles are 40–56px. The brand reads "premium" through whitespace and type scale, not decoration.

### Spacing & Layout
- **Centered, single-column rails** with a 980px content max for store grids. Hero rows can stretch to 1440px.
- **Generous vertical rhythm**: 88–128px between major sections.
- **4-up product grid** at desktop, 2-up at tablet, 1-up at mobile.
- Cards sit on a **light grey field** (`#f5f5f7`) so the white surface "lifts" without needing a heavy shadow.

### Backgrounds & imagery
- **Product photography on pure white** is the default — cut-out renders, not lifestyle. The product is the hero.
- **Lifestyle imagery is reserved for "Pequenas empresas" / "Educação" cards** — warm-tone, candid, often dark backgrounds.
- **Confetti / decorative pattern overlays** appear seasonally (the Mother's Day "Dicas para o Dia das Mães" row uses small flower & ribbon glyphs scattered across the page). Treat these as **temporary toppings**, not part of the base system.
- **Full-bleed dark hero cards** (e.g. "iPhone 17 Pro") use black backgrounds with white text and a single product cut-out. Corner radius `--ip-radius-xl` (28px).

### Shape language
- **Corner radii**: `8 / 14 / 18 / 28` plus a `980px` pill for CTAs. Cards use 18, hero cards 28, inputs 14.
- **Shadows are nearly invisible**. Default card shadow is two stacked very-soft shadows (4% + 6% black). Hover lifts to 6% + 10%.
- **No borders by default** — the white card on grey field provides the boundary. Hairline `#d2d2d7` borders only on outlined CTAs and dividers.

### Animation & interaction
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (standard) and `cubic-bezier(0, 0, 0.2, 1)` (ease-out) only. **No bounces, no springs.**
- **Durations**: 150ms (micro), 220ms (default), 420ms (cards lifting / image swaps).
- **Hover**: cards lift 2px and shadow deepens. Buttons darken ~6% (`--ip-blue-hover`). Links underline on hover, never bold.
- **Press**: buttons darken further (`--ip-blue-press`); no scale-down. Card press = 1px scale-down (`scale(0.995)`).
- **No fade-in scroll animations.** Apple BR doesn't use them for the store.

### Borders, transparency, blur
- The **top nav uses a translucent white** `rgba(255,255,255,0.8)` with `backdrop-filter: blur(20px)` — the only place blur appears.
- Outline buttons: `1px solid var(--ip-blue)`, transparent fill.
- Dividers: `1px solid var(--ip-line-soft)`.
- No drop-shadows on text. No glows.

### Cards
A **standard product card** is:
- White surface, 18px radius, no border, soft shadow.
- 4:5 aspect product image area (white) with the cut-out product centered.
- Optional **`NOVO`** eyebrow above the title (coral, uppercase 12px).
- Title (h3, 21–28px, semibold, #1d1d1f).
- One-line description (17px, #6e6e73).
- Price line (14px) — `R$ 11.499` or `A partir de R$ 11.499`.
- No CTA on the card itself; the entire card is the click target.

A **promo / hero card** is:
- Black or pastel-wash full-bleed background.
- White or ink text.
- Product cut-out anchored bottom-right or center-bottom.
- 28px radius. No shadow.

### Layout rules
- **Top nav is fixed** (`position: sticky`, top 0), 44px tall, blurred white, hairline bottom.
- **No fixed footers.** The page ends with a "Links rápidos" pill row and a long legal-text footer.
- **Floating chat bubble** ("specialist") at bottom-right. Round, 56px, with a real photo headshot inside. White ring, soft shadow.

---

## ICONOGRAPHY

Apple's product navigation uses **monochrome glyph icons** — simplified silhouettes of each product (a Mac silhouette, an iPhone silhouette, an Apple Watch silhouette, etc) rendered in **`#1d1d1f` line/fill**, ~28×28px, sitting above a label. iPlanet should follow the same pattern.

### Feature icons (the "Várias opções de parcelamento" row)
**Filled coral-orange glyphs** in soft squircle backgrounds, ~24px. Topics covered on the Apple BR store:
- card / parcelamento
- box / shipping
- store-app / app icon
- apple-logo / personalize

### Approach
- **No emoji.** Anywhere. Even in marketing copy.
- **No hand-drawn / sketchy icons.**
- **Stroke icons at 1.5–2px**, monochrome, `currentColor`.
- **Filled icons** for the small "feature row" tiles where the icon sits in a coral square.

### CDN substitution (until the client provides their set)
We use **Lucide** (lucide.dev, MIT) for UI glyphs (search, bag, chevron, arrow). Lucide's stroke weight (2px) and corner style match Apple's UI iconography closely.

⚠️ **Substitution flag**: Apple's actual SF Symbols set is not freely redistributable. Lucide is a stand-in. Replace with iPlanet's licensed iconography when available.

### Product silhouettes
Drawn inline as simplified SVG paths in components when needed (e.g. category nav). When the real product photography is required, **always use a real cut-out PNG** — never approximate with SVG.

---

## How to use this system

```html
<link rel="stylesheet" href="colors_and_type.css">

<h2 class="ip-section-title">
  <em>Loja</em>. <span>Presentes para sua mãe ganhar o dia.</span>
</h2>
```

For React surfaces, see `ui_kits/store/` for ready-made components.

---

## Open questions for the client

1. **iPlanet's own brand colors** — is the coral-orange of Apple BR appropriate, or does iPlanet have a different signature color?
2. **Logo**: do you have an SVG version? The current asset is a low-res JPG.
3. **Tagline / brand promise**: is there one? ("Sua loja Apple", "Tudo Apple, mais perto de você", etc.)
4. **Physical store info**: address, hours, city — needed for "Encontre uma loja" links.
5. **Font licensing**: SF Pro is currently substituted with Inter. If iPlanet has SF Pro licensed, please share.
6. **Product catalog scope**: same lineup as apple.com.br, or a subset?
