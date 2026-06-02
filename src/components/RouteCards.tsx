import type { Lang } from "../content/siteContent";
import { copy, routes, siteConfig } from "../content/siteContent";

interface RouteCardsProps {
  lang: Lang;
}

const DIFFICULTY_COLOR: Record<string, string> = {
  easy: "var(--color-accent-2)",
  medium: "var(--color-accent)",
  hard: "var(--color-hot)",
};

const DIFFICULTY_LABEL: Record<string, Record<string, string>> = {
  easy: { es: "Fácil", en: "Easy" },
  medium: { es: "Medio", en: "Medium" },
  hard: { es: "Difícil", en: "Hard" },
};

export function RouteCards({ lang }: RouteCardsProps) {
  const t = copy[lang].race;
  const tc = copy[lang].common;

  return (
    <section
      id="carrera"
      aria-labelledby="race-section-title"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-trail">
        <p className="section-label mb-4">{t.sectionLabel}</p>
        <h2
          id="race-section-title"
          className="font-display text-3xl md:text-5xl mb-12"
          style={{ color: "var(--color-text)" }}
        >
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((route) => {
            const title = lang === "es" ? route.esTitle : route.enTitle;
            const description = lang === "es" ? route.esDescription : route.enDescription;
            const tags = lang === "es" ? route.esTags : route.enTags;
            const diffLabel = DIFFICULTY_LABEL[route.difficulty]?.[lang] ?? route.difficulty;
            const diffColor = DIFFICULTY_COLOR[route.difficulty];

            return (
              <article
                key={route.id}
                className="glass-card-strong p-7 flex flex-col gap-5"
                style={
                  route.id === "trail"
                    ? { border: "1px solid rgba(215,255,55,0.3)" }
                    : undefined
                }
              >
                {/* Difficulty badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      color: diffColor,
                      border: `1px solid ${diffColor}`,
                      background: `${diffColor}18`,
                    }}
                  >
                    {diffLabel}
                  </span>
                  {route.pending && <span className="pending-tag">{tc.pending}</span>}
                </div>

                {/* Title */}
                <h3
                  className="font-display text-3xl leading-none"
                  style={{ color: "var(--color-text)" }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p style={{ color: "var(--color-muted)" }}>{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded glass-card"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats row */}
                <div
                  className="grid grid-cols-3 gap-3 py-4 border-t border-b"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  {[
                    { label: tc.distance, value: lang === "es" ? route.esDistance : route.enDistance },
                    { label: tc.elevation, value: lang === "es" ? route.esElevation : route.enElevation },
                    { label: tc.startTime, value: route.startTime },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <div
                        className="text-xs font-semibold tracking-widest uppercase mb-1"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {label}
                      </div>
                      <div
                        className="font-display text-lg"
                        style={{ color: "var(--color-text)" }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={route.id === "trail" ? "btn-primary self-start" : "btn-secondary self-start"}
                >
                  {t.registerCta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
