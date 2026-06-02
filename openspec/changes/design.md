# Design: Trail Cox Website

## Overview

Trail Cox will be implemented as a static, responsive, bilingual event website. The page should work well before final race data and media assets are available by using elegant placeholders and centralized configuration.

The design direction is a dark, premium, modern trail-race identity with strong typography, glass cards, electric accents, route information, sponsor grids, and cinematic media.

## Recommended Stack

Use the existing project stack if one already exists. For a new implementation, use:

- Vite.
- React.
- TypeScript.
- Tailwind CSS.
- Static hosting.

Optional:

- Framer Motion for small, tasteful animations only if it does not add unnecessary complexity.

Avoid:

- A backend.
- A CMS.
- Heavy animation libraries for simple effects.
- Paid or bundled font files.
- Copied assets from reference sites.

## Folder Structure

Recommended implementation structure:

```txt
src/
  assets/
  components/
    DiscoverCox.tsx
    Faq.tsx
    Footer.tsx
    GallerySection.tsx
    Header.tsx
    Hero.tsx
    LanguageToggle.tsx
    MapSection.tsx
    QuickFacts.tsx
    RaceTicker.tsx
    RouteCards.tsx
    RunnerGuide.tsx
    Schedule.tsx
    ScrollVideo.tsx
    Sponsors.tsx
    TrailCoxLogo.tsx
  content/
    siteContent.ts
  hooks/
    useLanguage.ts
    usePrefersReducedMotion.ts
  App.tsx
  main.tsx
  index.css
```

## Visual System

### Color Tokens

Use CSS variables or Tailwind theme tokens:

```css
:root {
  --color-bg: #050509;
  --color-bg-soft: #0c0c12;
  --color-surface: rgba(255, 255, 255, 0.06);
  --color-surface-strong: rgba(255, 255, 255, 0.1);
  --color-border: rgba(255, 255, 255, 0.14);
  --color-text: #f7f7f4;
  --color-muted: #b8b8b8;
  --color-accent: #d7ff37;
  --color-accent-2: #2ee6a6;
  --color-hot: #ff6b35;
  --color-black: #000000;
  --color-white: #ffffff;
}
```

### Visual Motifs

Use:

- Dark backgrounds.
- Mountain and trail silhouettes.
- Subtle gradients.
- Glass-style cards.
- Electric accent CTAs.
- Bold uppercase labels.
- Condensed display typography.
- Circular race-badge shapes.
- Topographic or route-line patterns.

Do not use:

- Direct visual copies from reference pages.
- Any external brand logo except sponsor logos provided by the organizer.
- Unlicensed photography.

### Typography

Suggested font strategy:

- Display: `Bebas Neue`, `Anton`, `Oswald`, or system fallback.
- Body: `Inter`, `Montserrat`, or system sans-serif.

If Google Fonts are used, load them responsibly. Do not bundle paid fonts.

## Branding and Logo

Create `TrailCoxLogo.tsx` as an original inline SVG component.

Logo concept:

- Circular or shield-like badge.
- Mountain ridge.
- Trail path.
- Small castle silhouette or tower reference.
- Optional initials `TC`.
- Text lockup for `Trail Cox`.

Requirements:

- Works in header at small size.
- Works in hero at large size.
- Works on dark background.
- Can be rendered in monochrome for footer if needed.
- Has accessible label when meaningful.
- Decorative SVG paths use `aria-hidden="true"` where appropriate.

Example component interface:

```tsx
type TrailCoxLogoProps = {
  className?: string;
  showText?: boolean;
  label?: string;
};
```

## Content Architecture

Use `src/content/siteContent.ts` as the single source for configuration and text.

### Configuration

```ts
export const siteConfig = {
  registrationUrl: "https://chiplevante.es/",
  galleryUrl: "REPLACE_WITH_GOOGLE_DRIVE_FOLDER_URL",
  mapEmbedUrl: "REPLACE_WITH_GOOGLE_MAPS_EMBED_URL",
  mapExternalUrl: "REPLACE_WITH_GOOGLE_MAPS_PUBLIC_URL",
  gpxUrl: "",
  wikilocUrl: "",
  contactEmail: "info@trailcox.com",
  instagramUrl: "",
  facebookUrl: "",
  videoSrc: "",
  videoPoster: "",
};
```

### Language Dictionary

Use a typed dictionary:

```ts
export type Lang = "es" | "en";

export const copy = {
  es: {
    nav: {
      home: "Inicio",
      race: "Carrera",
      route: "Recorrido",
      gallery: "Galería",
      sponsors: "Patrocinadores",
      faq: "FAQ",
      contact: "Contacto",
      register: "Inscripciones",
    },
    hero: {
      eyebrow: "Trail nocturno en Cox",
      title: "Trail Cox",
      subtitle: "Corre bajo las estrellas, sube hacia la historia y vive la sierra de Cox como nunca.",
      primaryCta: "Inscripciones",
      secondaryCta: "Ver recorrido",
    },
  },
  en: {
    nav: {
      home: "Home",
      race: "Race",
      route: "Route",
      gallery: "Gallery",
      sponsors: "Sponsors",
      faq: "FAQ",
      contact: "Contact",
      register: "Register",
    },
    hero: {
      eyebrow: "Night trail race in Cox",
      title: "Trail Cox",
      subtitle: "Run under the stars, climb into history and experience the Cox mountains like never before.",
      primaryCta: "Register",
      secondaryCta: "View route",
    },
  },
} as const;
```

### Data Models

Suggested route model:

```ts
export type RouteInfo = {
  id: string;
  esDistance: string;
  enDistance: string;
  esElevation: string;
  enElevation: string;
  difficulty: "easy" | "medium" | "hard";
  startTime: string;
  esTitle: string;
  enTitle: string;
  esDescription: string;
  enDescription: string;
  esTags: string[];
  enTags: string[];
  pending: boolean;
};
```

Note: `distance` and `elevation` are split into `esDistance`/`enDistance` and `esElevation`/`enElevation` to support per-language placeholder strings ("Por confirmar" / "To be confirmed") without inline ternaries in components.

Suggested sponsor model:

```ts
export type Sponsor = {
  name: string;
  logoSrc?: string;
  url?: string;
};

export type SponsorTier = {
  id: string;
  esTitle: string;
  enTitle: string;
  sponsors: Sponsor[];
};
```

Suggested FAQ model:

```ts
export type FaqItem = {
  id: string;
  esQuestion: string;
  esAnswer: string;
  enQuestion: string;
  enAnswer: string;
};
```

## Component Design

### Header

Behavior:

- Sticky top.
- Transparent/glass treatment over hero.
- Dark solid/glass background after scroll.
- Desktop nav visible at larger breakpoints.
- Mobile hamburger menu at smaller breakpoints.
- Registration CTA always easy to find.
- Language switcher visible.

Accessibility:

- Use semantic `header` and `nav`.
- Mobile menu button has `aria-expanded`.
- Active language uses `aria-pressed` or equivalent.
- Focus states are visible.

### Hero

Layout:

- Minimum height: 90vh.
- Content aligned with strong left or centered composition.
- Huge `Trail Cox` title.
- Logo badge.
- CTA row.
- Metadata chips.
- Decorative background gradient and trail/castle motif.

Suggested Spanish copy:

```txt
Trail nocturno en Cox
Corre bajo las estrellas, sube hacia la historia y vive la sierra de Cox como nunca.
```

Suggested English copy:

```txt
Night trail race in Cox
Run under the stars, climb into history and experience the Cox mountains like never before.
```

### RaceTicker

Ticker terms:

- TRAIL COX
- COX
- CASTILLO
- MONTAÑA
- NOCTURNO
- INSCRIPCIONES
- SIERRA

Implementation:

- CSS animation for normal motion.
- Static layout for `prefers-reduced-motion: reduce`.

### QuickFacts

Design:

- Grid of glass cards.
- Icon or label per fact.
- Placeholder-safe content.

Fields:

- Fecha / Date.
- Hora / Time.
- Lugar / Location.
- Distancia / Distance.
- Desnivel / Elevation.
- Modalidades / Modalities.

### RouteCards

Design:

- Two or more cards.
- Trail card visually primary.
- Senderismo card visually secondary.
- CTA to registration.

Include placeholder values:

```txt
Distancia pendiente de confirmación
Desnivel pendiente de confirmación
Hora pendiente de confirmación
```

English equivalents:

```txt
Distance to be confirmed
Elevation to be confirmed
Start time to be confirmed
```

### MapSection

Layout:

- Two columns on desktop.
- Text and route stats on one side.
- Map card on the other side.
- Single column on mobile.

Iframe requirements:

```tsx
<iframe
  title="Trail Cox route map"
  src={siteConfig.mapEmbedUrl}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

Fallback:

- Show placeholder card when URL is empty or starts with `REPLACE_WITH`.
- Keep the layout visually complete.

### ScrollVideo

Purpose:

Create a cinematic section where route/trail footage is revealed through scroll.

Implementation approach:

- Section height around `220vh` or `260vh`.
- Sticky video container.
- `requestAnimationFrame` to avoid excessive scroll work.
- Read section bounding rect.
- Clamp progress between 0 and 1.
- Set `video.currentTime = progress * video.duration` only after metadata is loaded.

Pseudo-code:

```ts
const progress = clamp(-rect.top / (rect.height - window.innerHeight), 0, 1);

if (video.duration && Number.isFinite(video.duration)) {
  video.currentTime = progress * video.duration;
}
```

Fallback rules:

- If reduced motion is enabled, do not scrub.
- If video source is missing, show designed placeholder.
- If metadata is not loaded, show poster/placeholder.
- Keep normal controls optional in fallback mode.

### GallerySection

Design:

- Image carousel with previous/next arrow buttons and dot indicator navigation.
- Dot indicators use a minimum 24×24px tap target (visual dot rendered as inner `<span>`).
- Carousel counter (e.g. "1 / 6") displayed over the image.
- Strong CTA button linking to the Flickr album.
- External link icon.

Accessibility:
- Prev/next buttons use `aria-label` from `copy[lang].gallery.prevImage` / `nextImage`.
- Dot buttons use `aria-label` from `copy[lang].gallery.imageLabel` + index.
- Dot container uses `role="tablist"`.

Spanish copy:

```txt
Revive los mejores momentos de Trail Cox.
```

English copy:

```txt
Relive the best moments of Trail Cox.
```

External link:

```tsx
<a href={siteConfig.galleryUrl} target="_blank" rel="noopener noreferrer">
```

### RunnerGuide

Cards:

- Bolsa del corredor / Runner bag.
- Recogida de dorsales / Bib pickup.
- Material obligatorio / Required gear.
- Reglamento / Rules.
- Avituallamientos / Aid stations.
- Seguridad / Safety.
- Clasificaciones / Classifications.
- Resultados / Results.

Use placeholder text until confirmed.

### Schedule

Use a timeline.

Initial placeholder data:

```ts
export const scheduleItems = [
  { time: "17:00", es: "Apertura recogida de dorsales", en: "Bib pickup opens" },
  { time: "20:30", es: "Briefing corredores", en: "Runner briefing" },
  { time: "21:00", es: "Salida Trail", en: "Trail start" },
  { time: "21:05", es: "Salida Senderismo", en: "Walking route start" },
  { time: "23:00", es: "Entrega de premios", en: "Awards ceremony" },
];
```

Label times as placeholders unless confirmed.

### DiscoverCox

Goal:

Make the site feel local and useful for visitors.

Content cards:

- Castillo de Cox.
- Sierra de Cox.
- Local heritage.
- Local food and businesses.
- Weekend visit idea.

### Sponsors

Layout:

- Tier heading.
- Logo grid.
- Larger cards for main sponsor.
- Smaller cards for collaborators.
- Placeholder cards if empty.

Initial data:

```ts
export const sponsorTiers = [
  { id: "organizer", esTitle: "Organiza", enTitle: "Organizer", sponsors: [] },
  { id: "main", esTitle: "Patrocinador principal", enTitle: "Main sponsor", sponsors: [] },
  { id: "institutional", esTitle: "Colaboradores institucionales", enTitle: "Institutional partners", sponsors: [] },
  { id: "sponsors", esTitle: "Patrocinadores", enTitle: "Sponsors", sponsors: [] },
  { id: "collaborators", esTitle: "Colaboradores", enTitle: "Collaborators", sponsors: [] },
  { id: "media", esTitle: "Media partners", enTitle: "Media partners", sponsors: [] },
];
```

### FAQ

Use accessible accordion behavior:

- Native `details` / `summary`, or
- Button with `aria-expanded` and controlled panel.

Include bilingual FAQ content for:

- Where do I register?
- Can I walk?
- What gear do I need?
- Where do I pick up my bib?
- Are there aid stations?
- Where can I park?
- Where can I see the gallery?
- Where can I see results?

### Footer

Include:

- Logo.
- Short event description.
- Contact email.
- Social placeholders.
- Legal links.
- Copyright.

## Accessibility Notes

- Use one `h1` only.
- Preserve heading order.
- Use semantic `section` landmarks with labels where helpful.
- Keep CTA labels explicit.
- Add visible focus states.
- Ensure color contrast is acceptable.
- Respect `prefers-reduced-motion`.
- Keep video muted and non-intrusive.
- Add `title` to iframe.
- Add accessible language switcher state.

## SEO Notes

Include:

- Page title: `Trail Cox | Carrera de montaña en Cox`.
- Meta description in Spanish.
- Open Graph title.
- Open Graph description.
- Open Graph image placeholder.
- Canonical URL if known.

Only add JSON-LD Event if the date, location, organizer, and ticket/registration details are confirmed.

## Performance Notes

- Lazy-load map iframe.
- Lazy-load gallery images.
- Preload video metadata only.
- Use poster images for video.
- Avoid blocking render with third-party embeds.
- Use optimized images when real assets are added.
- Keep animation lightweight.

## Translation Architecture

All user-facing strings MUST live in the `copy` dictionary in `siteContent.ts`. Components MUST NOT contain hardcoded Spanish or English literals.

### copy structure additions (beyond initial spec)

```ts
copy.es.common = {
  pending: "Por confirmar",
  distance: "Distancia",
  elevation: "Desnivel",
  startTime: "Salida",
};

copy.es.hero.badgeNight = "Nocturno";
copy.es.hero.badgeModalities = "Trail + Senderismo";
copy.es.quickFacts.title = "El evento";
copy.es.gallery.prevImage = "Imagen anterior";
copy.es.gallery.nextImage = "Imagen siguiente";
copy.es.gallery.imageLabel = "Imagen";
copy.es.footer.instagramComingSoon = "Instagram (próximamente)";
```

English equivalents follow the same keys.

### Font loading

Fonts are loaded non-blocking to reduce CLS and eliminate render-blocking:

```html
<link rel="preload" as="font" type="font/woff2" crossorigin href="...bebasneue...woff2" />
<link rel="preload" as="font" type="font/woff2" crossorigin href="...inter...woff2" />
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?..." />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?..." media="print" onload="this.media='all'" />
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?..." /></noscript>
```

### GitHub Pages deployment

- Deploy with `npx gh-pages -d dist --nojekyll`.
- The `--nojekyll` flag is required to serve files from the `assets/` directory on GitHub Pages.

## Implementation Checklist

Before considering the feature complete, verify:

- The project builds.
- The page works on mobile.
- Language switch works.
- Registration link works.
- Gallery carousel works with real images.
- Gallery link opens Flickr album.
- Map embed works or shows placeholder.
- Sponsor tiers render with and without data.
- Keyboard navigation works.
- Reduced motion behavior works.
- No copied assets from reference websites are included.
- No hardcoded translation strings in component JSX.
- Lighthouse color contrast passes (all text uses `--color-muted` or higher contrast tokens, never `--color-border`).
- Touch targets for interactive elements are at least 24×24px.
- `.nojekyll` is present in the `gh-pages` branch.
