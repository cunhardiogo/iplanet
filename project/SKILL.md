---
name: iplanet-design
description: Use this skill to generate well-branded interfaces and assets for iPlanet, a Brazilian authorized reseller of Apple products (iPhone, Mac, iPad, Apple Watch, AirPods, accessories), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Visual language is modeled on apple.com/br/store, in Brazilian Portuguese.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key things to remember:
- All copy is in **Brazilian Portuguese** (pt-BR)
- Visual reference is **apple.com/br/store**
- Section titles use the two-clause coral + grey pattern: "**Loja**. Presentes para sua mãe ganhar o dia."
- The brand accent is `#f56300` (coral-orange) — used for section eyebrows and `NOVO` flags only
- The CTA color is `#0071e3` (Apple blue), pill-shaped
- Type is **SF Pro Display / SF Pro Text** with **Inter** as a Google Fonts substitute (flag this!)
- No emoji, no exclamation marks, no gradients, no glassmorphism — clean, product-forward
- See `colors_and_type.css` for all design tokens
- See `ui_kits/store/` for ready-made React components
- iPlanet logo is in `assets/iplanet-logo.jpg` (raster — request SVG)
