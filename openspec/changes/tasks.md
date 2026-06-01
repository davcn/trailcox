# Tasks

## 1. Project Setup

- [x] 1.1 Verify the current frontend stack or create a Vite + React + TypeScript project.
- [x] 1.2 Install and configure Tailwind CSS if not already present.
- [x] 1.3 Create the recommended folder structure under `src/`.
- [x] 1.4 Add global CSS variables for the Trail Cox visual system.
- [x] 1.5 Add responsive container utilities.
- [x] 1.6 Confirm production build command works before adding major features.

## 2. Content and Configuration

- [x] 2.1 Create `src/content/siteContent.ts`.
- [x] 2.2 Add `siteConfig` with registration, gallery, map, social, contact, video, GPX, and Wikiloc URLs.
- [x] 2.3 Set default `registrationUrl` to `https://chiplevante.es/`.
- [x] 2.4 Add Spanish and English copy dictionaries.
- [x] 2.5 Add quick facts placeholder data.
- [x] 2.6 Add race modality placeholder data.
- [x] 2.7 Add route stats placeholder data.
- [x] 2.8 Add runner guide content.
- [x] 2.9 Add schedule placeholder data.
- [x] 2.10 Add sponsor tier placeholder data.
- [x] 2.11 Add bilingual FAQ data.

## 3. Language Support

- [x] 3.1 Add a typed `Lang` model for `es` and `en`.
- [x] 3.2 Implement language state in `App.tsx` or a `useLanguage` hook.
- [x] 3.3 Build `LanguageToggle` component.
- [x] 3.4 Ensure active language state is visually indicated.
- [x] 3.5 Ensure language controls are keyboard accessible.
- [x] 3.6 Verify all primary sections change language correctly.

## 4. Branding

- [x] 4.1 Create `src/components/TrailCoxLogo.tsx`.
- [x] 4.2 Implement the logo as original inline SVG.
- [x] 4.3 Include trail, mountain, path, and/or Cox/castle-inspired elements.
- [x] 4.4 Add a small header variant.
- [x] 4.5 Add a large hero variant.
- [x] 4.6 Add accessible label support.
- [x] 4.7 Verify the logo works on dark backgrounds.

## 5. Header and Navigation

- [x] 5.1 Build `Header.tsx`.
- [x] 5.2 Add logo, navigation links, language switcher, and registration CTA.
- [x] 5.3 Add sticky header behavior.
- [x] 5.4 Add mobile menu behavior.
- [x] 5.5 Add visible hover and focus states.
- [x] 5.6 Ensure anchor links scroll to the correct sections.
- [x] 5.7 Ensure the registration CTA uses safe external-link attributes.

## 6. Hero and Ticker

- [x] 6.1 Build `Hero.tsx`.
- [x] 6.2 Display main title `Trail Cox`.
- [x] 6.3 Display active-language subtitle.
- [x] 6.4 Add primary registration CTA.
- [x] 6.5 Add secondary route CTA.
- [x] 6.6 Add race metadata chips.
- [x] 6.7 Build `RaceTicker.tsx`.
- [x] 6.8 Add reduced-motion fallback for ticker animation.
- [x] 6.9 Verify hero responsiveness across mobile, tablet, and desktop.

## 7. Quick Facts and Race Modalities

- [x] 7.1 Build `QuickFacts.tsx`.
- [x] 7.2 Display date, time, location, distance, elevation, modalities, and registration status.
- [x] 7.3 Mark unconfirmed values clearly.
- [x] 7.4 Build `RouteCards.tsx`.
- [x] 7.5 Add Trail modality card.
- [x] 7.6 Add Senderismo / Walking modality card if applicable.
- [x] 7.7 Add registration CTA to each card.
- [x] 7.8 Verify all copy changes with the active language.

## 8. Recorrido / Route Section

- [x] 8.1 Build `MapSection.tsx`.
- [x] 8.2 Add route description content.
- [x] 8.3 Add route stats cards.
- [x] 8.4 Render Google Maps iframe when `siteConfig.mapEmbedUrl` is configured.
- [x] 8.5 Add lazy loading to map iframe.
- [x] 8.6 Add iframe `title` and `referrerPolicy`.
- [x] 8.7 Add fallback card when map URL is missing.
- [x] 8.8 Add optional GPX, Wikiloc, and external Google Maps buttons.
- [x] 8.9 Ensure all external links use safe attributes.

## 9. Scroll-Controlled Video

- [x] 9.1 Build `ScrollVideo.tsx`.
- [x] 9.2 Add sticky video layout inside a tall section.
- [x] 9.3 Configure video with `muted`, `playsInline`, and `preload="metadata"`.
- [x] 9.4 Wait for video metadata before setting current time.
- [x] 9.5 Calculate scroll progress using the section bounding rectangle.
- [x] 9.6 Use `requestAnimationFrame` to update `video.currentTime`.
- [x] 9.7 Clamp progress between 0 and 1.
- [x] 9.8 Add placeholder state when video source is missing.
- [x] 9.9 Add reduced-motion fallback.
- [x] 9.10 Test behavior on desktop and mobile.

## 10. Gallery

- [x] 10.1 Build `GallerySection.tsx`.
- [x] 10.2 Add preview grid with placeholders or provided images.
- [x] 10.3 Add Google Drive gallery CTA.
- [x] 10.4 Use `siteConfig.galleryUrl` for the CTA.
- [x] 10.5 Add placeholder/coming-soon state when gallery URL is missing.
- [x] 10.6 Add safe external-link attributes.
- [x] 10.7 Verify Spanish and English copy.

## 11. Runner Guide

- [x] 11.1 Build `RunnerGuide.tsx`.
- [x] 11.2 Add cards for runner bag, bib pickup, required gear, rules, aid stations, safety, classifications, and results.
- [x] 11.3 Mark unconfirmed information as pending confirmation.
- [x] 11.4 Ensure all cards are bilingual.
- [x] 11.5 Ensure mobile layout remains readable.

## 12. Schedule

- [x] 12.1 Build `Schedule.tsx`.
- [x] 12.2 Render configurable timeline items.
- [x] 12.3 Mark placeholder times as pending confirmation.
- [x] 12.4 Ensure the timeline works on mobile.
- [x] 12.5 Verify Spanish and English content.

## 13. How to Arrive and Discover Cox

- [x] 13.1 Add How to Arrive / Parking section.
- [x] 13.2 Add address/location placeholder.
- [x] 13.3 Add parking guidance placeholder.
- [x] 13.4 Add external map button when configured.
- [x] 13.5 Build `DiscoverCox.tsx`.
- [x] 13.6 Add cards for Castillo de Cox, Sierra de Cox, local heritage, local food/businesses, and visitor experience.
- [x] 13.7 Verify content is bilingual.

## 14. Sponsors

- [x] 14.1 Build `Sponsors.tsx`.
- [x] 14.2 Render sponsor tiers from configuration.
- [x] 14.3 Support organizer, main sponsor, institutional partners, sponsors, collaborators, and media partners.
- [x] 14.4 Render logo cards consistently.
- [x] 14.5 Render tasteful placeholders when logos are missing.
- [x] 14.6 Support sponsor URLs with safe external-link attributes.
- [x] 14.7 Verify responsive grid behavior.

## 15. FAQ and Footer

- [x] 15.1 Build `Faq.tsx`.
- [x] 15.2 Use accessible accordion behavior.
- [x] 15.3 Add bilingual FAQ items.
- [x] 15.4 Build `Footer.tsx`.
- [x] 15.5 Add logo, short description, contact, social placeholders, legal links, and copyright.
- [x] 15.6 Verify footer labels update with active language.

## 16. SEO and Metadata

- [x] 16.1 Set page title containing `Trail Cox`.
- [x] 16.2 Add Spanish meta description.
- [x] 16.3 Add Open Graph title and description.
- [x] 16.4 Add Open Graph image placeholder when available.
- [x] 16.5 Add canonical URL if known.
- [x] 16.6 Add JSON-LD Event only if final event date, location, organizer, and registration details are confirmed.

## 17. Accessibility and Performance

- [x] 17.1 Verify semantic landmarks and heading hierarchy.
- [x] 17.2 Verify all interactive elements are keyboard accessible.
- [x] 17.3 Verify visible focus states.
- [x] 17.4 Verify color contrast.
- [x] 17.5 Verify language switcher accessibility.
- [x] 17.6 Verify reduced-motion behavior.
- [x] 17.7 Verify map iframe has a title.
- [x] 17.8 Verify video is muted and safe.
- [x] 17.9 Verify lazy loading for map and gallery media.
- [x] 17.10 Verify mobile performance with video fallback.

## 18. Final Validation

- [x] 18.1 Run formatter.
- [x] 18.2 Run TypeScript checks.
- [x] 18.3 Run production build.
- [x] 18.4 Test all navigation anchors.
- [x] 18.5 Test all external links.
- [x] 18.6 Test Spanish and English language switching.
- [x] 18.7 Test mobile menu.
- [x] 18.8 Confirm no copied reference-site assets are included.
- [x] 18.9 Run `openspec validate build-trail-cox-website` if OpenSpec CLI is installed.
- [x] 18.10 Update README/customization notes if implementation adds project-specific details.
