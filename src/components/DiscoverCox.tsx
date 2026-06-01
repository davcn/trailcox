import type { Lang } from "../content/siteContent";
import { copy, siteConfig, discoverCards } from "../content/siteContent";

interface DiscoverCoxProps {
  lang: Lang;
}

function isPlaceholderUrl(url: string): boolean {
  return !url || url.startsWith("REPLACE_WITH");
}

export function DiscoverCox({ lang }: DiscoverCoxProps) {
  const tArrive = copy[lang].arrive;
  const tDiscover = copy[lang].discover;
  const externalMapMissing = isPlaceholderUrl(siteConfig.mapExternalUrl);

  return (
    <>
      {/* How to Arrive */}
      <section
        id="como-llegar"
        aria-labelledby="arrive-title"
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--color-bg-soft)" }}
      >
        <div className="container-trail">
          <p className="section-label mb-4">{tArrive.sectionLabel}</p>
          <h2
            id="arrive-title"
            className="font-display text-3xl md:text-5xl mb-10"
            style={{ color: "var(--color-text)" }}
          >
            {tArrive.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex flex-col gap-3">
              <span className="text-3xl" aria-hidden="true">📍</span>
              <h3 className="font-display text-xl" style={{ color: "var(--color-text)" }}>
                {tArrive.addressLabel}
              </h3>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                {tArrive.addressValue}
              </p>
              <span className="pending-tag w-fit">Por confirmar</span>
            </div>

            <div className="glass-card p-6 flex flex-col gap-3">
              <span className="text-3xl" aria-hidden="true">🚗</span>
              <h3 className="font-display text-xl" style={{ color: "var(--color-text)" }}>
                {tArrive.parkingLabel}
              </h3>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                {tArrive.parkingValue}
              </p>
              <span className="pending-tag w-fit">Por confirmar</span>
            </div>
          </div>

          {!externalMapMissing && (
            <div className="mt-6">
              <a
                href={siteConfig.mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {tArrive.mapButton}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Discover Cox */}
      <section
        id="descubre-cox"
        aria-labelledby="discover-title"
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-trail">
          <p className="section-label mb-4">{tDiscover.sectionLabel}</p>
          <h2
            id="discover-title"
            className="font-display text-3xl md:text-5xl mb-4"
            style={{ color: "var(--color-text)" }}
          >
            {tDiscover.title}
          </h2>
          <p className="text-base mb-10 max-w-2xl" style={{ color: "var(--color-muted)" }}>
            {tDiscover.description}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {discoverCards.map((card) => (
              <div key={card.id} className="glass-card p-6 flex flex-col gap-3">
                <span className="text-3xl" aria-hidden="true">
                  {card.icon}
                </span>
                <h3
                  className="font-display text-xl"
                  style={{ color: "var(--color-text)" }}
                >
                  {lang === "es" ? card.esTitle : card.enTitle}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                  {lang === "es" ? card.esBody : card.enBody}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
