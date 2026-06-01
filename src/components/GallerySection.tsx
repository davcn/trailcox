import type { Lang } from "../content/siteContent";
import { copy, siteConfig } from "../content/siteContent";

interface GallerySectionProps {
  lang: Lang;
}

function isPlaceholderUrl(url: string): boolean {
  return !url || url.startsWith("REPLACE_WITH");
}

const GALLERY_IMAGES = [
  { src: "https://live.staticflickr.com/65535/55221183298_d6fe00cb16_z.jpg", alt: "Trail runners en carrera" },
  { src: "https://live.staticflickr.com/65535/55221427755_d99b3f9790_z.jpg", alt: "Trail runners en carrera" },
  { src: "https://live.staticflickr.com/65535/55221183783_11ca2b6daa_z.jpg", alt: "Trail runners en carrera" },
  { src: "https://live.staticflickr.com/65535/55221024991_6df6f1dc1d_z.jpg", alt: "Trail runners en carrera" },
  { src: "https://live.staticflickr.com/65535/55221023871_d090f6b6fc_z.jpg", alt: "Trail runners en carrera" },
  { src: "https://live.staticflickr.com/65535/55221025796_515826dcfc_z.jpg", alt: "Trail runners en carrera" },
];

export function GallerySection({ lang }: GallerySectionProps) {
  const t = copy[lang].gallery;
  const galleryMissing = isPlaceholderUrl(siteConfig.galleryUrl);

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-section-title"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-trail">
        <p className="section-label mb-4">{t.sectionLabel}</p>
        <h2
          id="gallery-section-title"
          className="font-display text-3xl md:text-5xl mb-4"
          style={{ color: "var(--color-text)" }}
        >
          {t.title}
        </h2>
        <p className="text-base mb-10" style={{ color: "var(--color-muted)" }}>
          {t.description}
        </p>

        {/* Preview grid — 3 cols, 2 rows, all cells explicitly placed */}
        <div
          className="mb-8"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "280px 280px",
            gap: "0.75rem",
          }}
        >
          {/* Large feature: col 1-2, row 1 */}
          <div style={{ gridColumn: "1 / 3", gridRow: "1" }} className="overflow-hidden rounded-xl">
            <img src={GALLERY_IMAGES[0].src} alt={GALLERY_IMAGES[0].alt} loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          {/* Top right */}
          <div style={{ gridColumn: "3", gridRow: "1" }} className="overflow-hidden rounded-xl">
            <img src={GALLERY_IMAGES[1].src} alt={GALLERY_IMAGES[1].alt} loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          {/* Bottom left */}
          <div style={{ gridColumn: "1", gridRow: "2" }} className="overflow-hidden rounded-xl">
            <img src={GALLERY_IMAGES[2].src} alt={GALLERY_IMAGES[2].alt} loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          {/* Bottom middle */}
          <div style={{ gridColumn: "2", gridRow: "2" }} className="overflow-hidden rounded-xl">
            <img src={GALLERY_IMAGES[3].src} alt={GALLERY_IMAGES[3].alt} loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          {/* Bottom right */}
          <div style={{ gridColumn: "3", gridRow: "2" }} className="overflow-hidden rounded-xl">
            <img src={GALLERY_IMAGES[4].src} alt={GALLERY_IMAGES[4].alt} loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          {galleryMissing ? (
            <div
              className="glass-card px-8 py-4 text-center"
              style={{ color: "var(--color-muted)" }}
            >
              <span className="text-sm">{t.comingSoon}</span>
            </div>
          ) : (
            <a
              href={siteConfig.galleryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10"
            >
              {t.ctaButton}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 12 L12 4 M5 4 H12 V11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
