import type { Lang } from "../content/siteContent";
import { copy, siteConfig, routeStats } from "../content/siteContent";

interface MapSectionProps {
  lang: Lang;
}

function isPlaceholderUrl(url: string): boolean {
  return !url || url.startsWith("REPLACE_WITH");
}

export function MapSection({ lang }: MapSectionProps) {
  const t = copy[lang].route;
  const mapMissing = isPlaceholderUrl(siteConfig.mapEmbedUrl);
  const externalMapMissing = isPlaceholderUrl(siteConfig.mapExternalUrl);

  return (
    <section
      id="recorrido"
      aria-labelledby="route-section-title"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
    >
      <div className="container-trail">
        <p className="section-label mb-4">{t.sectionLabel}</p>
        <h2
          id="route-section-title"
          className="font-display text-3xl md:text-5xl mb-12"
          style={{ color: "var(--color-text)" }}
        >
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: description + stats */}
          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
              {t.description}
            </p>

            {/* Route stats */}
            <div>
              <h3
                className="font-display text-lg mb-4"
                style={{ color: "var(--color-text)" }}
              >
                {t.statsTitle}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {routeStats.map((stat) => (
                  <div key={stat.id} className="glass-card p-4">
                    <div
                      className="text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {lang === "es" ? stat.esLabel : stat.enLabel}
                    </div>
                    <div
                      className="font-display text-2xl"
                      style={{ color: stat.pending ? "var(--color-hot)" : "var(--color-text)" }}
                    >
                      {stat.value}
                    </div>
                    {stat.pending && (
                      <span className="pending-tag mt-1 block w-fit">
                        {lang === "es" ? "Por confirmar" : "To be confirmed"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {!isPlaceholderUrl(siteConfig.gpxUrl) && (
                <a
                  href={siteConfig.gpxUrl}
                  download
                  className="btn-secondary text-sm"
                >
                  {t.gpxButton}
                </a>
              )}
              {!isPlaceholderUrl(siteConfig.wikilocUrl) && (
                <a
                  href={siteConfig.wikilocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  {t.wikilocButton}
                </a>
              )}
              {!externalMapMissing && (
                <a
                  href={siteConfig.mapExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  {t.externalMapButton}
                </a>
              )}
            </div>
          </div>

          {/* Right: map */}
          <div>
            {mapMissing ? (
              <div
                className="glass-card flex flex-col items-center justify-center text-center p-12 min-h-[320px] gap-4"
              >
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="28" cy="28" r="27" stroke="var(--color-border)" strokeWidth="1.5" />
                  <path
                    d="M28 14 C22 14 18 19 18 24 C18 31 28 42 28 42 C28 42 38 31 38 24 C38 19 34 14 28 14Z"
                    stroke="var(--color-muted)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="28" cy="24" r="3" stroke="var(--color-muted)" strokeWidth="1.5" fill="none" />
                </svg>
                <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                  {t.mapFallback}
                </p>
                {!externalMapMissing && (
                  <a
                    href={siteConfig.mapExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    {t.externalMapButton}
                  </a>
                )}
              </div>
            ) : (
              <div
                className="glass-card overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <iframe
                  title="Trail Cox route map"
                  src={siteConfig.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  style={{ minHeight: "320px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
