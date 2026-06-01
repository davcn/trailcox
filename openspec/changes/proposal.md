# Proposal: Build Trail Cox Website

## Intent

Create a professional, modern, bilingual Spanish/English website for the trail-running event **Trail Cox**.

The site should present the event clearly, convert visitors into registered participants, provide practical race information, showcase route and media content, and give sponsors strong visibility. The visual direction should be inspired by modern race-event websites with a dark, energetic, premium look, while remaining original and not copying assets, logos, text, images, icons, or exact layouts from reference websites.

## Scope

This change will add a complete public-facing event website with:

- Original **Trail Cox** branding and inline SVG logo.
- Spanish and English language support.
- Main title: **Trail Cox**.
- Modern dark race-style landing page.
- Registration CTA labeled **Inscripciones** in Spanish and **Register** in English.
- Registration link to `https://chiplevante.es/`.
- Gallery section linking to a configurable Google Drive folder.
- Recorrido / Route section with a Google Maps mini map embed.
- Scroll-controlled video section.
- Sponsor section with tiered sponsor groups.
- Proactive event sections for runners, walkers, visitors, organizers, and sponsors.
- Responsive, accessible, SEO-friendly implementation.

## Out of Scope

This change will not include:

- Payment processing.
- Registration backend.
- User accounts.
- CMS administration.
- Results/classification backend.
- Uploading or hosting gallery images directly.
- Final legal copy beyond placeholders unless provided by the organizer.
- Use of copyrighted assets from the reference websites.

## Inspiration and Originality Constraints

The design may be inspired by:

- Dark, premium, energetic race-event landing pages.
- Strong hero sections with clear registration CTAs.
- Race metadata tickers or highlight strips.
- Route cards and map sections.
- Sponsor grids grouped by tier.
- Complete event-information structures such as race details, runner guide, schedule, parking, gallery, and contact.

The implementation MUST NOT copy:

- Reference-site logos.
- Reference-site photographs or videos.
- Reference-site text.
- Reference-site icons.
- Reference-site CSS or exact layout.
- Any paid or licensed font files.

## External URLs

External links MUST be centralized in configuration so the organizer can replace them later:

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
};
```

## Proposed Sections

### Header

The header should include:

- Trail Cox logo.
- Anchor navigation.
- Language switcher: ES / EN.
- Primary registration CTA.
- Mobile menu.

Suggested navigation:

- Inicio / Home
- Carrera / Race
- Recorrido / Route
- Galería / Gallery
- Patrocinadores / Sponsors
- FAQ
- Contacto / Contact

### Hero

The hero should include:

- Eyebrow text.
- Main title: **Trail Cox**.
- Bilingual subtitle.
- Primary CTA: **Inscripciones** / **Register**.
- Secondary CTA: **Ver recorrido** / **View route**.
- Original Trail Cox logo.
- Dark trail/race visual identity.
- Race metadata highlights.
- Optional animated ticker.

### Quick Facts

Cards for:

- Date.
- Time.
- Location.
- Distance.
- Elevation.
- Modalities.
- Registration status.

Use placeholder values until the organizer provides confirmed event details.

### Race / Modalities

At minimum, support:

- Trail competitivo / Competitive trail.
- Senderismo / Walking route.

Each route card should include:

- Distance.
- Elevation.
- Difficulty.
- Start time.
- Included services.
- CTA to registration.

### Recorrido / Route

This section should include:

- Route narrative.
- Mini Google Maps iframe.
- Route stats.
- Optional buttons for GPX, Wikiloc, and opening the route externally.
- Fallback state if final map URLs are not configured.

### Scroll Video

Add a media section where video progress advances as the user scrolls.

Requirements:

- Video MUST be muted.
- Video MUST use `playsInline`.
- Video MUST preload only metadata by default.
- Video MUST not autoplay with sound.
- Reduced-motion users MUST receive a static or simple-playback fallback.
- Mobile or low-performance fallback MUST remain usable.

### Gallery

Gallery section should include:

- Preview grid with placeholder cards or locally provided images.
- CTA linking to the configured Google Drive folder.
- Safe external link behavior.

Suggested copy:

- ES: “Revive los mejores momentos de Trail Cox.”
- EN: “Relive the best moments of Trail Cox.”

### Runner Guide

Include proactive participant information:

- Bolsa del corredor / Runner bag.
- Recogida de dorsales / Bib pickup.
- Material obligatorio / Required gear.
- Reglamento / Rules.
- Avituallamientos / Aid stations.
- Seguridad / Safety.
- Clasificaciones / Classifications.
- Resultados / Results.

### Schedule

Add a configurable race-day timeline with placeholder times:

- Apertura recogida de dorsales / Bib pickup opens.
- Briefing corredores / Runner briefing.
- Salida Trail / Trail start.
- Salida Senderismo / Walking route start.
- Llegada estimada / Estimated first finishers.
- Entrega de premios / Awards ceremony.

### How to Arrive / Parking

Include:

- Location/address placeholder.
- Parking guidance placeholder.
- Google Maps external button.
- Organizer confirmation note.

### Discover Cox

Include a local identity section with:

- Castillo de Cox.
- Sierra and trails.
- Local heritage.
- Local food/businesses.
- Visit/weekend suggestion.

### Sponsors

Add tiered sponsor groups:

- Organiza / Organizer.
- Patrocinador principal / Main sponsor.
- Patrocinadores / Sponsors.
- Colaboradores institucionales / Institutional partners.
- Colaboradores / Collaborators.
- Media partners.

Use elegant placeholders when sponsor logos are not available.

### FAQ

Include bilingual FAQ entries for:

- Registration.
- Walking participation.
- Required gear.
- Bib pickup.
- Aid stations.
- Parking.
- Gallery.
- Results/classifications.

### Contact / Footer

Footer should include:

- Contact email placeholder.
- Social media placeholders.
- Legal links.
- Copyright.
- Language-aware labels.

## Technical Approach

Preferred implementation:

- Vite.
- React.
- TypeScript.
- Tailwind CSS.
- Static deployment.
- Centralized content/config file.
- Optional Framer Motion only if already available or clearly justified.

If the existing project uses a different frontend stack, preserve these requirements while adapting to that stack.

## Success Criteria

The change is successful when:

- The site builds without errors.
- The page is responsive across mobile, tablet, and desktop.
- Spanish and English content can be switched from the UI.
- The hero displays **Trail Cox** and the generated logo.
- The registration CTA links to `https://chiplevante.es/`.
- The gallery CTA links to the configured Google Drive URL.
- The route section renders a lazy-loaded Google Maps embed or a clear fallback.
- The scroll video section works where supported and degrades gracefully where not supported.
- Sponsor tiers render correctly with placeholders or real logos.
- The site avoids copied reference-site assets.
- Basic accessibility and SEO metadata are included.
