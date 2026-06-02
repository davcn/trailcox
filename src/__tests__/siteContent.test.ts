import { describe, it, expect } from "vitest";
import {
  copy,
  siteConfig,
  routes,
  routeStats,
  faqItems,
  sponsorTiers,
  runnerGuideCards,
  scheduleItems,
} from "../content/siteContent";

describe("siteConfig", () => {
  it("registration URL defaults to chiplevante.es", () => {
    expect(siteConfig.registrationUrl).toBe("https://chiplevante.es/");
  });

  it("mapEmbedUrl is non-empty", () => {
    expect(siteConfig.mapEmbedUrl).toBeTruthy();
  });

  it("mapExternalUrl is non-empty", () => {
    expect(siteConfig.mapExternalUrl).toBeTruthy();
  });

  it("contactEmail is set", () => {
    expect(siteConfig.contactEmail).toBe("info@trailcox.com");
  });
});

describe("copy — translation architecture", () => {
  const esKeys = Object.keys(copy.es).sort();
  const enKeys = Object.keys(copy.en).sort();

  it("both languages have the same top-level keys", () => {
    expect(esKeys).toEqual(enKeys);
  });

  it("both languages have identical nav keys", () => {
    expect(Object.keys(copy.es.nav).sort()).toEqual(Object.keys(copy.en.nav).sort());
  });

  it("registration label is Inscripciones in Spanish", () => {
    expect(copy.es.nav.register).toBe("Inscripciones");
  });

  it("registration label is Register in English", () => {
    expect(copy.en.nav.register).toBe("Register");
  });

  it("common.pending is Por confirmar in Spanish", () => {
    expect(copy.es.common.pending).toBe("Por confirmar");
  });

  it("common.pending is To be confirmed in English", () => {
    expect(copy.en.common.pending).toBe("To be confirmed");
  });

  it("hero badges exist in both languages", () => {
    expect(copy.es.hero.badgeNight).toBe("Nocturno");
    expect(copy.en.hero.badgeNight).toBe("Night race");
    expect(copy.es.hero.badgeModalities).toBe("Trail + Senderismo");
    expect(copy.en.hero.badgeModalities).toBe("Trail + Walking");
  });

  it("quickFacts.title exists in both languages", () => {
    expect(copy.es.quickFacts.title).toBe("El evento");
    expect(copy.en.quickFacts.title).toBe("The event");
  });

  it("gallery navigation labels exist in both languages", () => {
    expect(copy.es.gallery.prevImage).toBe("Imagen anterior");
    expect(copy.en.gallery.prevImage).toBe("Previous image");
    expect(copy.es.gallery.nextImage).toBe("Imagen siguiente");
    expect(copy.en.gallery.nextImage).toBe("Next image");
    expect(copy.es.gallery.imageLabel).toBe("Imagen");
    expect(copy.en.gallery.imageLabel).toBe("Image");
  });

  it("footer instagramComingSoon exists in both languages", () => {
    expect(copy.es.footer.instagramComingSoon).toBe("Instagram (próximamente)");
    expect(copy.en.footer.instagramComingSoon).toBe("Instagram (coming soon)");
  });
});

describe("routes data", () => {
  it("has exactly 2 routes", () => {
    expect(routes).toHaveLength(2);
  });

  it("contains trail and senderismo", () => {
    const ids = routes.map((r) => r.id);
    expect(ids).toContain("trail");
    expect(ids).toContain("senderismo");
  });

  it("each route has esDistance and enDistance (not merged distance field)", () => {
    for (const route of routes) {
      expect(route).toHaveProperty("esDistance");
      expect(route).toHaveProperty("enDistance");
      expect(route).not.toHaveProperty("distance");
    }
  });

  it("each route has esElevation and enElevation", () => {
    for (const route of routes) {
      expect(route).toHaveProperty("esElevation");
      expect(route).toHaveProperty("enElevation");
    }
  });

  it("English distance/elevation values are To be confirmed", () => {
    for (const route of routes) {
      expect(route.enDistance).toBe("To be confirmed");
      expect(route.enElevation).toBe("To be confirmed");
    }
  });
});

describe("routeStats data", () => {
  it("has 4 stats", () => {
    expect(routeStats).toHaveLength(4);
  });

  it("all stats are pending", () => {
    for (const stat of routeStats) {
      expect(stat.pending).toBe(true);
    }
  });
});

describe("faqItems data", () => {
  it("has 8 items", () => {
    expect(faqItems).toHaveLength(8);
  });

  it("every item has bilingual question and answer", () => {
    for (const item of faqItems) {
      expect(item.esQuestion).toBeTruthy();
      expect(item.enQuestion).toBeTruthy();
      expect(item.esAnswer).toBeTruthy();
      expect(item.enAnswer).toBeTruthy();
    }
  });
});

describe("sponsorTiers data", () => {
  it("has 6 tiers", () => {
    expect(sponsorTiers).toHaveLength(6);
  });

  it("tier ids are correct", () => {
    const ids = sponsorTiers.map((t) => t.id);
    expect(ids).toEqual(["organizer", "main", "institutional", "sponsors", "collaborators", "media"]);
  });
});

describe("runnerGuideCards data", () => {
  it("has 8 cards", () => {
    expect(runnerGuideCards).toHaveLength(8);
  });

  it("contains expected card ids", () => {
    const ids = runnerGuideCards.map((c) => c.id);
    expect(ids).toEqual(["bag", "bib", "gear", "rules", "aid", "safety", "classifications", "results"]);
  });
});

describe("scheduleItems data", () => {
  it("has 6 items", () => {
    expect(scheduleItems).toHaveLength(6);
  });

  it("every item has both es and en labels", () => {
    for (const item of scheduleItems) {
      expect(item.es).toBeTruthy();
      expect(item.en).toBeTruthy();
    }
  });
});
