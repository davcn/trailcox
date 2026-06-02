// ─────────────────────────────────────────────
// Site Configuration — update these URLs when
// final details from the organizer are available
// ─────────────────────────────────────────────
export const siteConfig = {
  registrationUrl: "https://chiplevante.es/",
  galleryUrl: "https://www.flickr.com/photos/mikemanitasdpm/albums/72177720333233589",
  mapEmbedUrl: "https://maps.google.com/maps?q=Cox,Alicante,Spain&output=embed&z=14",
  mapExternalUrl: "https://maps.google.com/?q=Cox,Alicante",
  gpxUrl: "",
  wikilocUrl: "",
  contactEmail: "info@trailcox.com",
  instagramUrl: "",
  facebookUrl: "",
  videoSrc: "",
  videoPoster: "",
};

// ─────────────────────────────────────────────
// Language Types
// ─────────────────────────────────────────────
export type Lang = "es" | "en";

// ─────────────────────────────────────────────
// Copy Dictionaries
// ─────────────────────────────────────────────
export const copy = {
  es: {
    common: {
      pending: "Por confirmar",
      distance: "Distancia",
      elevation: "Desnivel",
      startTime: "Salida",
    },
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
      subtitle:
        "Corre bajo las estrellas, sube hacia la historia y vive la sierra de Cox como nunca.",
      primaryCta: "Inscripciones",
      secondaryCta: "Ver recorrido",
      badgeNight: "Nocturno",
      badgeModalities: "Trail + Senderismo",
    },
    quickFacts: {
      sectionLabel: "Datos del evento",
      title: "El evento",
      date: "Fecha",
      datePending: "Por confirmar",
      time: "Hora",
      timePending: "Por confirmar",
      location: "Lugar",
      locationValue: "Cox, Alicante",
      distance: "Distancia",
      distancePending: "Por confirmar",
      elevation: "Desnivel",
      elevationPending: "Por confirmar",
      modalities: "Modalidades",
      modalitiesValue: "Trail + Senderismo",
      registrationStatus: "Inscripciones",
      registrationOpen: "Abiertas",
    },
    race: {
      sectionLabel: "Modalidades",
      title: "Elige tu recorrido",
      registerCta: "Inscripciones",
    },
    route: {
      sectionLabel: "Recorrido",
      title: "La ruta",
      description:
        "Descubre el trazado que te llevará por los parajes más espectaculares de la sierra de Cox. Un recorrido nocturno con vistas al castillo, la vega del Segura y los cielos estrellados de la comarca.",
      statsTitle: "Datos del recorrido",
      mapFallback: "El mapa del recorrido final se publicará próximamente.",
      gpxButton: "Descargar GPX",
      wikilocButton: "Ver en Wikiloc",
      externalMapButton: "Abrir en Google Maps",
    },
    video: {
      sectionLabel: "El evento",
      title: "Vive Trail Cox",
      placeholder: "El vídeo del evento estará disponible próximamente.",
    },
    gallery: {
      sectionLabel: "Galería",
      title: "Momentos Trail Cox",
      description: "Revive los mejores momentos de Trail Cox.",
      ctaButton: "Ver galería completa",
      comingSoon: "La galería estará disponible próximamente.",
      prevImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      imageLabel: "Imagen",
    },
    runnerGuide: {
      sectionLabel: "Guía del corredor",
      title: "Todo lo que necesitas saber",
      pendingNote: "Información pendiente de confirmación por la organización.",
    },
    schedule: {
      sectionLabel: "Programa",
      title: "Horarios del día",
      pendingNote: "Horarios sujetos a confirmación.",
    },
    arrive: {
      sectionLabel: "Cómo llegar",
      title: "Llegar y aparcar",
      addressLabel: "Dirección",
      addressValue: "Cox, Alicante — dirección exacta por confirmar",
      parkingLabel: "Aparcamiento",
      parkingValue:
        "Zona de aparcamiento habilitada para el evento. Detalles por confirmar.",
      mapButton: "Ver en Google Maps",
    },
    discover: {
      sectionLabel: "Descubre Cox",
      title: "Más que una carrera",
      description:
        "Cox es un municipio del Vinalopó Medio con un patrimonio único. Aprovecha el evento para descubrir su castillo árabe, su sierra y su gastronomía.",
    },
    sponsors: {
      sectionLabel: "Colaboradores",
      title: "Gracias a nuestros patrocinadores",
      placeholderName: "Patrocinador",
    },
    faq: {
      sectionLabel: "FAQ",
      title: "Preguntas frecuentes",
    },
    footer: {
      description: "Carrera de montaña nocturna en Cox, Alicante.",
      legal: "Aviso legal",
      privacy: "Privacidad",
      copyright: "Trail Cox. Todos los derechos reservados.",
      contactLabel: "Contacto",
      socialLabel: "Redes sociales",
      instagramComingSoon: "Instagram (próximamente)",
    },
  },
  en: {
    common: {
      pending: "To be confirmed",
      distance: "Distance",
      elevation: "Elevation",
      startTime: "Start",
    },
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
      subtitle:
        "Run under the stars, climb into history and experience the Cox mountains like never before.",
      primaryCta: "Register",
      secondaryCta: "View route",
      badgeNight: "Night race",
      badgeModalities: "Trail + Walking",
    },
    quickFacts: {
      sectionLabel: "Event facts",
      title: "The event",
      date: "Date",
      datePending: "To be confirmed",
      time: "Time",
      timePending: "To be confirmed",
      location: "Location",
      locationValue: "Cox, Alicante",
      distance: "Distance",
      distancePending: "To be confirmed",
      elevation: "Elevation",
      elevationPending: "To be confirmed",
      modalities: "Modalities",
      modalitiesValue: "Trail + Walking",
      registrationStatus: "Registration",
      registrationOpen: "Open",
    },
    race: {
      sectionLabel: "Race modalities",
      title: "Choose your route",
      registerCta: "Register",
    },
    route: {
      sectionLabel: "Route",
      title: "The route",
      description:
        "Explore the trail that will take you through the most spectacular landscapes of the Cox mountains. A night route with views of the castle, the Segura valley and the starlit skies of the region.",
      statsTitle: "Route stats",
      mapFallback: "The final route map will be published soon.",
      gpxButton: "Download GPX",
      wikilocButton: "View on Wikiloc",
      externalMapButton: "Open in Google Maps",
    },
    video: {
      sectionLabel: "The event",
      title: "Experience Trail Cox",
      placeholder: "Event video coming soon.",
    },
    gallery: {
      sectionLabel: "Gallery",
      title: "Trail Cox moments",
      description: "Relive the best moments of Trail Cox.",
      ctaButton: "View full gallery",
      comingSoon: "Gallery coming soon.",
      prevImage: "Previous image",
      nextImage: "Next image",
      imageLabel: "Image",
    },
    runnerGuide: {
      sectionLabel: "Runner guide",
      title: "Everything you need to know",
      pendingNote: "Information pending confirmation from the organizer.",
    },
    schedule: {
      sectionLabel: "Schedule",
      title: "Race day schedule",
      pendingNote: "Times subject to confirmation.",
    },
    arrive: {
      sectionLabel: "How to arrive",
      title: "Getting there & parking",
      addressLabel: "Address",
      addressValue: "Cox, Alicante — exact address to be confirmed",
      parkingLabel: "Parking",
      parkingValue: "Designated parking area for the event. Details to be confirmed.",
      mapButton: "View on Google Maps",
    },
    discover: {
      sectionLabel: "Discover Cox",
      title: "More than a race",
      description:
        "Cox is a town in the Vinalopó Medio comarca with unique heritage. Use the event as an excuse to discover its Arab castle, mountain trails and local gastronomy.",
    },
    sponsors: {
      sectionLabel: "Partners",
      title: "Thanks to our sponsors",
      placeholderName: "Sponsor",
    },
    faq: {
      sectionLabel: "FAQ",
      title: "Frequently asked questions",
    },
    footer: {
      description: "Night trail running race in Cox, Alicante.",
      legal: "Legal notice",
      privacy: "Privacy",
      copyright: "Trail Cox. All rights reserved.",
      contactLabel: "Contact",
      socialLabel: "Social media",
      instagramComingSoon: "Instagram (coming soon)",
    },
  },
} as const;

// ─────────────────────────────────────────────
// Quick Facts Data
// ─────────────────────────────────────────────
export interface QuickFact {
  id: string;
  icon: string;
  esPending?: boolean;
  enPending?: boolean;
}

// ─────────────────────────────────────────────
// Race Modality Data Model
// ─────────────────────────────────────────────
export interface RouteInfo {
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
}

export const routes: RouteInfo[] = [
  {
    id: "trail",
    esDistance: "Por confirmar",
    enDistance: "To be confirmed",
    esElevation: "Por confirmar",
    enElevation: "To be confirmed",
    difficulty: "hard",
    startTime: "21:00",
    esTitle: "Trail Competitivo",
    enTitle: "Competitive Trail",
    esDescription:
      "El recorrido técnico de montaña nocturno que pasa por el Castillo de Cox. Para corredores con experiencia en carreras de montaña.",
    enDescription:
      "The technical night mountain route passing through Cox Castle. For runners with trail race experience.",
    esTags: ["Distancia por confirmar", "Desnivel por confirmar", "Nocturno"],
    enTags: ["Distance to be confirmed", "Elevation to be confirmed", "Night race"],
    pending: true,
  },
  {
    id: "senderismo",
    esDistance: "Por confirmar",
    enDistance: "To be confirmed",
    esElevation: "Por confirmar",
    enElevation: "To be confirmed",
    difficulty: "easy",
    startTime: "21:05",
    esTitle: "Senderismo",
    enTitle: "Walking Route",
    esDescription:
      "Una ruta senderista accesible para toda la familia por la sierra de Cox. Sin carácter competitivo.",
    enDescription:
      "An accessible walking route for all the family through the Cox mountains. Non-competitive.",
    esTags: ["Para todos los niveles", "Familiar", "No competitivo"],
    enTags: ["All levels", "Family-friendly", "Non-competitive"],
    pending: true,
  },
];

// ─────────────────────────────────────────────
// Route Stats
// ─────────────────────────────────────────────
export interface RouteStat {
  id: string;
  esLabel: string;
  enLabel: string;
  value: string;
  pending: boolean;
}

export const routeStats: RouteStat[] = [
  { id: "distance", esLabel: "Distancia", enLabel: "Distance", value: "—", pending: true },
  { id: "elevation", esLabel: "Desnivel +", enLabel: "Elevation +", value: "—", pending: true },
  { id: "max-alt", esLabel: "Altitud máx.", enLabel: "Max altitude", value: "—", pending: true },
  { id: "checkpoints", esLabel: "Avituallamientos", enLabel: "Aid stations", value: "—", pending: true },
];

// ─────────────────────────────────────────────
// Runner Guide Cards
// ─────────────────────────────────────────────
export interface RunnerGuideCard {
  id: string;
  icon: string;
  esTitle: string;
  enTitle: string;
  esBody: string;
  enBody: string;
  pending: boolean;
}

export const runnerGuideCards: RunnerGuideCard[] = [
  {
    id: "bag",
    icon: "🎒",
    esTitle: "Bolsa del corredor",
    enTitle: "Runner bag",
    esBody: "Contenido de la bolsa por confirmar. Incluirá productos de los patrocinadores.",
    enBody: "Bag contents to be confirmed. Will include products from sponsors.",
    pending: true,
  },
  {
    id: "bib",
    icon: "🏷️",
    esTitle: "Recogida de dorsales",
    enTitle: "Bib pickup",
    esBody: "Apertura de la recogida de dorsales: 17:00. Lugar: zona de salida. Presentar DNI o pasaporte.",
    enBody: "Bib pickup opens: 17:00. Location: start area. Present ID or passport.",
    pending: false,
  },
  {
    id: "gear",
    icon: "⚙️",
    esTitle: "Material obligatorio",
    enTitle: "Required gear",
    esBody: "Lista de material obligatorio por confirmar. Se publicará antes de la carrera.",
    enBody: "Required gear list to be confirmed. Will be published before the race.",
    pending: true,
  },
  {
    id: "rules",
    icon: "📋",
    esTitle: "Reglamento",
    enTitle: "Rules",
    esBody: "Reglamento de la carrera por publicar. Consulta las instrucciones del organizador.",
    enBody: "Race regulations to be published. Check the organizer's instructions.",
    pending: true,
  },
  {
    id: "aid",
    icon: "💧",
    esTitle: "Avituallamientos",
    enTitle: "Aid stations",
    esBody: "Número y ubicación de los avituallamientos por confirmar.",
    enBody: "Number and location of aid stations to be confirmed.",
    pending: true,
  },
  {
    id: "safety",
    icon: "🦺",
    esTitle: "Seguridad",
    enTitle: "Safety",
    esBody: "El recorrido contará con personal de seguridad y puntos de control. Detalles por confirmar.",
    enBody: "The route will have safety personnel and checkpoints. Details to be confirmed.",
    pending: true,
  },
  {
    id: "classifications",
    icon: "🏆",
    esTitle: "Clasificaciones",
    enTitle: "Classifications",
    esBody: "Categorías y premiación por confirmar.",
    enBody: "Categories and awards to be confirmed.",
    pending: true,
  },
  {
    id: "results",
    icon: "📊",
    esTitle: "Resultados",
    enTitle: "Results",
    esBody: "Los resultados se publicarán en la web después de la carrera.",
    enBody: "Results will be published on the website after the race.",
    pending: false,
  },
];

// ─────────────────────────────────────────────
// Schedule
// ─────────────────────────────────────────────
export interface ScheduleItem {
  time: string;
  es: string;
  en: string;
  pending: boolean;
}

export const scheduleItems: ScheduleItem[] = [
  { time: "17:00", es: "Apertura recogida de dorsales", en: "Bib pickup opens", pending: false },
  { time: "20:30", es: "Briefing corredores", en: "Runner briefing", pending: false },
  { time: "21:00", es: "Salida Trail", en: "Trail start", pending: true },
  { time: "21:05", es: "Salida Senderismo", en: "Walking route start", pending: true },
  { time: "~23:00", es: "Llegada estimada primeros", en: "Estimated first finishers", pending: true },
  { time: "~23:30", es: "Entrega de premios", en: "Awards ceremony", pending: true },
];

// ─────────────────────────────────────────────
// Discover Cox Cards
// ─────────────────────────────────────────────
export interface DiscoverCard {
  id: string;
  icon: string;
  esTitle: string;
  enTitle: string;
  esBody: string;
  enBody: string;
}

export const discoverCards: DiscoverCard[] = [
  {
    id: "castle",
    icon: "🏰",
    esTitle: "Castillo de Cox",
    enTitle: "Cox Castle",
    esBody:
      "El castillo árabe de Cox domina el municipio desde lo alto y forma parte del recorrido de la carrera. Una parada histórica imprescindible.",
    enBody:
      "The Arab castle of Cox dominates the town from above and is part of the race route. An unmissable historical stop.",
  },
  {
    id: "sierra",
    icon: "⛰️",
    esTitle: "Sierra de Cox",
    enTitle: "Cox Mountains",
    esBody:
      "La sierra de Cox ofrece rutas de senderismo con vistas espectaculares a la vega del Segura y los municipios del entorno.",
    enBody:
      "The Cox mountains offer hiking routes with spectacular views of the Segura valley and surrounding towns.",
  },
  {
    id: "food",
    icon: "🍷",
    esTitle: "Gastronomía y comercio",
    enTitle: "Food & local businesses",
    esBody:
      "Aprovecha la visita para disfrutar de la gastronomía local y apoyar el comercio de Cox y los municipios vecinos.",
    enBody:
      "Use your visit to enjoy local gastronomy and support the businesses of Cox and neighbouring towns.",
  },
  {
    id: "visit",
    icon: "🌙",
    esTitle: "Un fin de semana en Cox",
    enTitle: "A weekend in Cox",
    esBody:
      "Combina la carrera con una escapada para descubrir el patrimonio, la naturaleza y la hospitalidad del Vinalopó Medio.",
    enBody:
      "Combine the race with a getaway to discover the heritage, nature and hospitality of the Vinalopó Medio.",
  },
];

// ─────────────────────────────────────────────
// Sponsor Tiers
// ─────────────────────────────────────────────
export interface Sponsor {
  name: string;
  logoSrc?: string;
  url?: string;
}

export interface SponsorTier {
  id: string;
  esTitle: string;
  enTitle: string;
  sponsors: Sponsor[];
}

export const sponsorTiers: SponsorTier[] = [
  { id: "organizer", esTitle: "Organiza", enTitle: "Organizer", sponsors: [] },
  { id: "main", esTitle: "Patrocinador principal", enTitle: "Main sponsor", sponsors: [] },
  {
    id: "institutional",
    esTitle: "Colaboradores institucionales",
    enTitle: "Institutional partners",
    sponsors: [],
  },
  { id: "sponsors", esTitle: "Patrocinadores", enTitle: "Sponsors", sponsors: [] },
  { id: "collaborators", esTitle: "Colaboradores", enTitle: "Collaborators", sponsors: [] },
  { id: "media", esTitle: "Media partners", enTitle: "Media partners", sponsors: [] },
];

// ─────────────────────────────────────────────
// FAQ Items
// ─────────────────────────────────────────────
export interface FaqItem {
  id: string;
  esQuestion: string;
  esAnswer: string;
  enQuestion: string;
  enAnswer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "register",
    esQuestion: "¿Dónde me inscribo?",
    esAnswer:
      "Las inscripciones se gestionan a través de Chiplevante. Pulsa el botón 'Inscripciones' en la cabecera o en la sección de modalidades.",
    enQuestion: "Where do I register?",
    enAnswer:
      "Registrations are managed through Chiplevante. Click the 'Register' button in the header or in the modalities section.",
  },
  {
    id: "walk",
    esQuestion: "¿Puedo participar caminando?",
    esAnswer:
      "Sí. Hay una modalidad de senderismo no competitiva abierta a todos los niveles y adecuada para grupos familiares.",
    enQuestion: "Can I participate walking?",
    enAnswer:
      "Yes. There is a non-competitive walking modality open to all fitness levels and suitable for family groups.",
  },
  {
    id: "gear",
    esQuestion: "¿Qué material obligatorio necesito?",
    esAnswer:
      "La lista de material obligatorio se publicará antes de la carrera. Consulta esta web o las redes sociales para estar al día.",
    enQuestion: "What required gear do I need?",
    enAnswer:
      "The required gear list will be published before the race. Check this website or social media to stay up to date.",
  },
  {
    id: "bib",
    esQuestion: "¿Cuándo recojo mi dorsal?",
    esAnswer:
      "La recogida de dorsales abre a las 17:00 en la zona de salida. Trae tu DNI o pasaporte.",
    enQuestion: "When do I pick up my bib?",
    enAnswer:
      "Bib pickup opens at 17:00 in the start area. Bring your ID or passport.",
  },
  {
    id: "aid-stations",
    esQuestion: "¿Habrá avituallamientos?",
    esAnswer:
      "Sí, habrá puntos de avituallamiento en el recorrido. El número y la ubicación se confirmarán próximamente.",
    enQuestion: "Are there aid stations?",
    enAnswer:
      "Yes, there will be aid stations along the route. Number and location will be confirmed soon.",
  },
  {
    id: "parking",
    esQuestion: "¿Dónde puedo aparcar?",
    esAnswer:
      "Se habilitará una zona de aparcamiento para el evento. Los detalles se publicarán antes de la carrera.",
    enQuestion: "Where can I park?",
    enAnswer:
      "A parking area will be designated for the event. Details will be published before the race.",
  },
  {
    id: "gallery",
    esQuestion: "¿Dónde puedo ver las fotos?",
    esAnswer:
      "Las fotos del evento se publicarán en una galería de Google Drive accesible desde esta web.",
    enQuestion: "Where can I see the photos?",
    enAnswer:
      "Event photos will be published in a Google Drive gallery accessible from this website.",
  },
  {
    id: "results",
    esQuestion: "¿Dónde veo los resultados?",
    esAnswer:
      "Los resultados se publicarán en esta web tras la finalización de la carrera.",
    enQuestion: "Where can I see the results?",
    enAnswer:
      "Results will be published on this website after the race finishes.",
  },
];
