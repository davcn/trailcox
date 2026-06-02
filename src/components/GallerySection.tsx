import { useState } from "react";
import type { Lang } from "../content/siteContent";
import { copy, siteConfig } from "../content/siteContent";

interface GallerySectionProps {
  lang: Lang;
}

const GALLERY_IMAGES = [
  { src: "https://live.staticflickr.com/65535/55221183298_d6fe00cb16_z.jpg", alt: "Corredores en la salida de la carrera de montaña Trail Cox", width: 640, height: 427 },
  { src: "https://live.staticflickr.com/65535/55221427755_d99b3f9790_z.jpg", alt: "Participantes corriendo por la sierra de Cox durante la carrera nocturna", width: 640, height: 427 },
  { src: "https://live.staticflickr.com/65535/55221183783_11ca2b6daa_z.jpg", alt: "Corredor de trail ascendiendo por el recorrido de Trail Cox", width: 640, height: 427 },
  { src: "https://live.staticflickr.com/65535/55221024991_6df6f1dc1d_z.jpg", alt: "Grupo de corredores en la carrera de montaña de Cox, Alicante", width: 640, height: 427 },
  { src: "https://live.staticflickr.com/65535/55221023871_d090f6b6fc_z.jpg", alt: "Corredor cruzando la meta en la carrera de trail de Cox", width: 640, height: 427 },
  { src: "https://live.staticflickr.com/65535/55221025796_515826dcfc_z.jpg", alt: "Ambiente en la carrera de trail nocturna de Cox, Alicante", width: 640, height: 427 },
];

export function GallerySection({ lang }: GallerySectionProps) {
  const t = copy[lang].gallery;
  const [current, setCurrent] = useState(0);
  const total = GALLERY_IMAGES.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

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
        <p className="text-base mb-8" style={{ color: "var(--color-muted)" }}>
          {t.description}
        </p>

        {/* Carousel */}
        <div className="relative mb-6" aria-label="Galería de imágenes">
          {/* Main image */}
          <div className="overflow-hidden rounded-xl" style={{ height: "clamp(260px, 50vw, 560px)" }}>
            {GALLERY_IMAGES.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0"
                style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
              />
            ))}
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label={lang === "es" ? "Imagen anterior" : "Previous image"}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full glass-card-strong transition-colors hover:border-[rgba(255,255,255,0.3)]"
            style={{ color: "var(--color-text)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M11 4 L6 9 L11 14" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label={lang === "es" ? "Imagen siguiente" : "Next image"}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full glass-card-strong transition-colors hover:border-[rgba(255,255,255,0.3)]"
            style={{ color: "var(--color-text)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M7 4 L12 9 L7 14" />
            </svg>
          </button>

          {/* Counter */}
          <div
            className="absolute bottom-3 right-4 text-xs font-semibold px-2 py-1 rounded glass-card"
            style={{ color: "var(--color-muted)" }}
          >
            {current + 1} / {total}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-8" role="tablist" aria-label="Seleccionar imagen">
          {GALLERY_IMAGES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`${lang === "es" ? "Imagen" : "Image"} ${i + 1}`}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                backgroundColor: i === current ? "var(--color-accent)" : "var(--color-border)",
              }}
            />
          ))}
        </div>

        {/* Flickr CTA */}
        <div className="flex justify-center">
          <a
            href={siteConfig.galleryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10"
          >
            {t.ctaButton}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 12 L12 4 M5 4 H12 V11" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
