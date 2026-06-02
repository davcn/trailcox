# Delta for Trail Cox Website

## ADDED Requirements

### Requirement: Bilingual Event Website

The system SHALL provide a public-facing event website for Trail Cox with Spanish and English content for all primary user-facing sections.

#### Scenario: Visitor opens the website in Spanish

- GIVEN a visitor opens the website for the first time
- WHEN the homepage renders
- THEN the website SHALL display Spanish content by default
- AND the navigation labels SHALL be in Spanish
- AND the primary registration CTA SHALL read "Inscripciones"

#### Scenario: Visitor switches to English

- GIVEN the visitor is viewing the Spanish version
- WHEN the visitor selects the "EN" language control
- THEN the website SHALL display English content
- AND the navigation labels SHALL be translated
- AND the primary registration CTA SHALL read "Register"
- AND the selected language SHALL be visually indicated

#### Scenario: Visitor switches back to Spanish

- GIVEN the visitor is viewing the English version
- WHEN the visitor selects the "ES" language control
- THEN the website SHALL display Spanish content
- AND the selected language SHALL be visually indicated

### Requirement: Professional Modern Race Design

The system SHALL use a professional, modern, race-event visual design suitable for a trail-running event.

#### Scenario: Visitor lands on the homepage

- GIVEN a visitor opens the website
- WHEN the hero section is visible
- THEN the website SHALL present a polished dark visual design
- AND the design SHALL feel sporty, modern, and premium
- AND the page SHALL clearly communicate that Trail Cox is a trail-running event

#### Scenario: Design references are used

- GIVEN the implementation uses external race-event websites for inspiration
- WHEN visual assets and copy are created
- THEN the implementation SHALL NOT copy logos, images, videos, icons, text, fonts, CSS, or exact layouts from reference websites
- AND the implementation SHALL use original Trail Cox branding

### Requirement: Original Trail Cox Logo

The system SHALL include an original generated inline SVG logo for Trail Cox.

#### Scenario: Header logo is visible

- GIVEN the website has loaded
- WHEN the header renders
- THEN an inline SVG Trail Cox logo SHALL be visible
- AND the logo SHALL be accessible with an appropriate label
- AND the logo SHALL work at small header size

#### Scenario: Hero logo is visible

- GIVEN the hero section renders
- WHEN the visitor views the hero
- THEN the Trail Cox logo SHALL appear in a prominent hero composition
- AND the logo SHALL include or imply trail, mountain, path, race, or local Cox identity
- AND the logo SHALL remain original and not use copied artwork

### Requirement: Header Navigation

The system SHALL include responsive header navigation with anchor links, language switching, and a registration CTA.

#### Scenario: Desktop visitor uses navigation

- GIVEN a desktop visitor is on the homepage
- WHEN the header is visible
- THEN the header SHALL show the logo, section navigation, language switcher, and registration CTA
- AND clicking a navigation item SHALL move the visitor to the corresponding page section

#### Scenario: Mobile visitor uses navigation

- GIVEN a mobile visitor is on the homepage
- WHEN the visitor opens the mobile menu
- THEN the menu SHALL show the main navigation links
- AND the language switcher SHALL remain available
- AND the registration CTA SHALL remain available

### Requirement: Registration Link

The system SHALL provide a prominent external registration link to the configured Chiplevante URL.

#### Scenario: Spanish visitor clicks registration

- GIVEN the visitor sees a CTA labeled "Inscripciones"
- WHEN the visitor clicks the CTA
- THEN the browser SHALL open the configured registration URL
- AND the configured default SHALL be `https://chiplevante.es/`
- AND the link SHALL use `target="_blank"`
- AND the link SHALL use `rel="noopener noreferrer"`

#### Scenario: English visitor clicks registration

- GIVEN the visitor sees a CTA labeled "Register"
- WHEN the visitor clicks the CTA
- THEN the browser SHALL open the configured registration URL
- AND the link SHALL use safe external-link attributes

### Requirement: Hero Section

The system SHALL include a high-impact hero section for Trail Cox.

#### Scenario: Hero renders

- GIVEN the homepage loads
- WHEN the hero section is visible
- THEN the hero SHALL display the main title "Trail Cox"
- AND the hero SHALL display a bilingual subtitle based on the active language
- AND the hero SHALL display primary and secondary CTAs
- AND the hero SHALL display event metadata placeholders
- AND the hero SHALL use a dark trail/race visual treatment

#### Scenario: Hero CTA to route is selected

- GIVEN the visitor sees the secondary hero CTA
- WHEN the visitor clicks "Ver recorrido" or "View route"
- THEN the page SHALL scroll to the Recorrido / Route section

### Requirement: Race Information Ticker

The system SHALL include a race-information ticker or highlight strip.

#### Scenario: Ticker renders

- GIVEN the homepage is loaded
- WHEN the ticker is visible
- THEN the ticker SHALL repeat short Trail Cox event terms such as Cox, Trail, Montaña, Nocturno, Castillo, or Inscripciones
- AND the ticker SHALL visually reinforce the race-event identity

#### Scenario: Reduced motion visitor views ticker

- GIVEN a visitor has enabled reduced motion
- WHEN the ticker is visible
- THEN the ticker SHALL avoid continuous motion or provide a static equivalent

### Requirement: Quick Facts Section

The system SHALL display quick event facts in scannable cards.

#### Scenario: Visitor views quick facts

- GIVEN the visitor scrolls below the hero
- WHEN the quick facts section appears
- THEN the website SHALL show cards for date, time, location, modalities, distance, elevation, and registration status
- AND unconfirmed values SHALL be clearly shown as placeholders or "to be confirmed"

### Requirement: Race Modalities Section

The system SHALL present configurable race modality cards.

#### Scenario: Visitor views race options

- GIVEN the visitor scrolls to the race section
- WHEN modality cards render
- THEN the website SHALL show at least one Trail modality card
- AND the website SHOULD show a Senderismo / Walking modality card if applicable
- AND each card SHALL include distance, elevation, difficulty, start time, included services, and registration CTA fields

#### Scenario: Event details are not confirmed

- GIVEN final distance or elevation details are unavailable
- WHEN the modality cards render
- THEN the website SHALL show tasteful placeholder content
- AND the content SHALL make clear that final details are pending confirmation

### Requirement: Recorrido Section with Google Maps

The system SHALL include a Recorrido / Route section with a mini Google Maps embed.

#### Scenario: Map URL is configured

- GIVEN `siteConfig.mapEmbedUrl` contains a valid Google Maps embed URL
- WHEN the Recorrido section renders
- THEN the website SHALL render a Google Maps iframe
- AND the iframe SHALL be lazy-loaded
- AND the iframe SHALL have a descriptive `title`
- AND the iframe SHALL use `referrerPolicy="no-referrer-when-downgrade"`

#### Scenario: Map URL is missing

- GIVEN `siteConfig.mapEmbedUrl` is empty or contains a placeholder value
- WHEN the Recorrido section renders
- THEN the website SHALL show a visually consistent fallback card
- AND the fallback SHALL explain that the final route map will be published soon

#### Scenario: Visitor opens route externally

- GIVEN `siteConfig.mapExternalUrl` is configured
- WHEN the visitor clicks the external map button
- THEN the website SHALL open the external map URL in a new tab
- AND the link SHALL use safe external-link attributes

### Requirement: Scroll-Controlled Video Section

The scroll-controlled video section has been removed. The `ScrollVideo.tsx` component exists in the codebase but is not rendered. This section may be reintroduced when a video asset is available.

### Requirement: Gallery Section

The system SHALL include a gallery section with an image carousel and a link to the external Flickr album.

#### Scenario: Visitor navigates the carousel

- GIVEN the gallery section is visible
- WHEN the visitor clicks the previous or next carousel buttons
- THEN the displayed image SHALL change accordingly
- AND the buttons SHALL have accessible labels from the translation dictionary
- AND the dot indicators SHALL reflect the current image
- AND each dot button SHALL have a minimum 24×24px tap target

#### Scenario: Visitor clicks gallery CTA

- GIVEN the visitor sees the gallery section
- WHEN the visitor clicks the gallery CTA
- THEN the website SHALL open the configured gallery URL in a new tab
- AND the link SHALL use `target="_blank"`
- AND the link SHALL use `rel="noopener noreferrer"`

#### Scenario: Gallery URL is missing

- GIVEN the configured gallery URL is empty or still a placeholder
- WHEN the gallery section renders
- THEN the website SHALL show a clear placeholder message
- AND the gallery CTA SHALL be disabled or visually marked as coming soon

### Requirement: Runner Guide Section

The system SHALL include participant guidance beyond the minimum landing-page content.

#### Scenario: Runner views practical information

- GIVEN the visitor scrolls to the runner guide
- WHEN the section renders
- THEN the website SHALL show guidance cards for runner bag, bib pickup, required gear, rules, aid stations, safety, classifications, and results
- AND each card SHALL be translated according to the active language

### Requirement: Schedule Section

The system SHALL include a configurable event schedule.

#### Scenario: Visitor views schedule

- GIVEN the visitor scrolls to the schedule section
- WHEN the schedule renders
- THEN the website SHALL show a chronological timeline of event-day milestones
- AND unconfirmed times SHALL be marked as placeholders or pending confirmation

### Requirement: How to Arrive and Parking Section

The system SHALL include visitor guidance for arrival and parking.

#### Scenario: Visitor checks location logistics

- GIVEN the visitor scrolls to the arrival section
- WHEN the section renders
- THEN the website SHALL show location/address placeholder content
- AND the website SHALL show parking guidance placeholder content
- AND the website SHALL provide an external Google Maps button when a map URL is configured

### Requirement: Discover Cox Section

The system SHALL include a local discovery section for Cox.

#### Scenario: Visitor views local information

- GIVEN the visitor scrolls to the Discover Cox section
- WHEN the section renders
- THEN the website SHALL show content about local identity, trails, heritage, Castillo de Cox, local businesses, and visitor experience
- AND the content SHALL be available in Spanish and English

### Requirement: Sponsor Section

The system SHALL include tiered sponsor groups similar to professional race-event pages.

#### Scenario: Sponsors render with configured logos

- GIVEN sponsor data contains tier names and sponsor logos
- WHEN the sponsor section renders
- THEN sponsors SHALL be grouped by tier
- AND each tier SHALL have a visible translated heading
- AND sponsor logos SHALL be displayed consistently

#### Scenario: Sponsor logos are missing

- GIVEN a sponsor tier has no configured logos
- WHEN the sponsor section renders
- THEN the website SHALL show tasteful placeholder sponsor cards
- AND the layout SHALL remain visually balanced

#### Scenario: Sponsor has URL

- GIVEN a sponsor has a configured URL
- WHEN the visitor clicks the sponsor card
- THEN the website SHALL open the sponsor URL in a new tab
- AND the link SHALL use safe external-link attributes

### Requirement: FAQ Section

The system SHALL include a bilingual FAQ section.

#### Scenario: Visitor opens an FAQ item

- GIVEN the FAQ section is visible
- WHEN the visitor opens an FAQ item
- THEN the answer SHALL be displayed in the active language
- AND the control SHALL be keyboard-accessible
- AND the expanded/collapsed state SHALL be communicated to assistive technology

### Requirement: Contact and Footer

The system SHALL include a contact section and footer.

#### Scenario: Visitor reaches footer

- GIVEN the visitor scrolls to the bottom of the page
- WHEN the footer is visible
- THEN the website SHALL show contact information placeholders
- AND social media placeholders
- AND legal links
- AND copyright information
- AND language-aware labels

### Requirement: Centralized Configuration and Content

The system SHALL centralize external URLs, event metadata, translatable copy, sponsors, routes, schedule, and FAQ data.

#### Scenario: Organizer updates registration URL

- GIVEN the registration URL needs to change
- WHEN a developer updates the registration value in the site configuration
- THEN all registration CTAs SHALL use the updated value

#### Scenario: Organizer updates copy

- GIVEN text content needs to change
- WHEN a developer updates the Spanish or English copy dictionary
- THEN the website SHALL render the updated copy consistently

### Requirement: Translation Architecture

The system SHALL store all user-facing strings in the `copy` dictionary in `siteContent.ts`. No translatable string SHALL be hardcoded as a literal inside component JSX.

#### Scenario: Developer adds a new language

- GIVEN a developer wants to add a third language (e.g. French)
- WHEN the developer adds a new key to the `copy` object
- THEN no component files SHALL need to be modified to surface the new language strings

#### Scenario: Component renders a pending label

- GIVEN an event detail is not yet confirmed
- WHEN the component renders a pending badge
- THEN the badge text SHALL come from `copy[lang].common.pending`
- AND SHALL read "Por confirmar" in Spanish and "To be confirmed" in English

### Requirement: Accessibility

The system SHALL meet basic accessibility requirements for keyboard, screen reader, contrast, and motion preferences.

#### Scenario: Keyboard visitor navigates the site

- GIVEN the visitor uses keyboard navigation
- WHEN the visitor tabs through the page
- THEN all interactive elements SHALL be reachable
- AND focus states SHALL be visible
- AND controls SHALL be operable without a mouse

#### Scenario: Screen reader visitor navigates the site

- GIVEN the visitor uses a screen reader
- WHEN page content is read
- THEN sections SHALL use semantic landmarks and meaningful headings
- AND links and buttons SHALL have understandable accessible names
- AND decorative graphics SHALL be hidden from assistive technology where appropriate

#### Scenario: Visitor prefers reduced motion

- GIVEN the visitor has enabled reduced motion
- WHEN animated sections render
- THEN continuous animation and scroll-scrubbing SHALL be reduced or disabled
- AND the content SHALL remain usable

### Requirement: Performance

The system SHALL optimize loading for media-heavy event content.

#### Scenario: Mobile visitor opens the website

- GIVEN the visitor opens the website on a mobile connection
- WHEN the page loads
- THEN critical hero and navigation content SHALL render quickly
- AND map, gallery, and video assets SHALL be lazy-loaded or deferred where practical
- AND video SHALL preload metadata only unless user interaction or scroll behavior requires more

### Requirement: SEO and Social Sharing

The system SHALL include basic SEO and social-sharing metadata for Trail Cox.

#### Scenario: Search engine reads the page

- GIVEN the website is crawled
- WHEN metadata is parsed
- THEN the page SHALL expose a title containing "Trail Cox"
- AND the page SHALL expose a Spanish description
- AND the page SHOULD expose bilingual metadata where the framework supports it

#### Scenario: Website is shared socially

- GIVEN a visitor shares the website URL
- WHEN a social platform reads Open Graph metadata
- THEN the preview SHALL include Trail Cox title and description metadata
- AND the preview SHOULD use a configured Open Graph image when available
