# Agent: page spacing (Taxi-driver-page)

**Rule:** one owner per axis. No duplicate vertical padding on section wrapper **and** page `gap-*`.

| Axis | Owner |
|------|--------|
| Left/right inset (stacked sections) | `.section-gutter` (`global.css`) |
| Gap between major blocks in `<main>` | `.page-stack` `gap-*` only |
| Contact / CTA band vertical | `py-8` · `md:py-8` · `lg:py-16` (32 / 32 / 64 px) |

Breakpoints: **md** 768 · **lg** 1024 · **xl** 1280

---

## Values (px)

| | Mobile | md | lg | xl |
|--|--------|-----|-----|-----|
| `.section-gutter` | 16 | 24 | 64 | 80 |
| Page stack `gap` | 32 | 32 | 48 | 64 |
| Page stack `pt` | 32 | 40 | 48 | 64 |
| Page stack `pb` | 64 | 64 | 96 | 96 |
| Contact band `py` | 32 | 32 | 64 | 64 |

---

## Page stack (inside `<main>`)

```html
<div class="page-stack flex flex-col gap-8 pb-16 pt-8 md:gap-8 md:pb-16 md:pt-10 lg:gap-12 lg:pb-24 lg:pt-12 xl:gap-16 xl:pt-16">
  <!-- sections, ContactScrollBand, Instagram bloque -->
</div>
```

---

## DO NOT

- Add `margin-top` between stack children — use parent `gap-*` only
- Use colours outside `global.css` / `@theme` tokens (no ad‑hoc oklab / hex alpha)
- Double `py-*` on contact band **and** extra margin on the next sibling

CSS: `src/styles/global.css` (`.section-gutter`, `.page-stack`).
