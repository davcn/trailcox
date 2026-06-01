import type { Lang } from "../content/siteContent";
import { copy, sponsorTiers } from "../content/siteContent";
import type { Sponsor } from "../content/siteContent";

interface SponsorsProps {
  lang: Lang;
}

function SponsorCard({ sponsor, large = false }: { sponsor: Sponsor; large?: boolean }) {
  const inner = (
    <div
      className={`glass-card flex items-center justify-center p-5 transition-colors hover:border-[rgba(255,255,255,0.25)] ${large ? "min-h-[100px]" : "min-h-[72px]"}`}
    >
      {sponsor.logoSrc ? (
        <img
          src={sponsor.logoSrc}
          alt={sponsor.name}
          className="max-h-12 max-w-full object-contain"
          loading="lazy"
        />
      ) : (
        <span
          className="text-sm font-semibold tracking-wide"
          style={{ color: "var(--color-muted)" }}
        >
          {sponsor.name}
        </span>
      )}
    </div>
  );

  if (sponsor.url) {
    return (
      <a href={sponsor.url} target="_blank" rel="noopener noreferrer" aria-label={sponsor.name}>
        {inner}
      </a>
    );
  }
  return inner;
}

function PlaceholderCard({ label }: { label: string }) {
  return (
    <div
      className="glass-card flex flex-col items-center justify-center p-5 min-h-[72px] gap-2"
      aria-hidden="true"
    >
      <div
        className="w-16 h-6 rounded"
        style={{ backgroundColor: "var(--color-surface-strong)" }}
      />
      <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-border)" }}>
        {label}
      </span>
    </div>
  );
}

export function Sponsors({ lang }: SponsorsProps) {
  const t = copy[lang].sponsors;

  return (
    <section
      id="patrocinadores"
      aria-labelledby="sponsors-title"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
    >
      <div className="container-trail">
        <p className="section-label mb-4">{t.sectionLabel}</p>
        <h2
          id="sponsors-title"
          className="font-display text-3xl md:text-5xl mb-12"
          style={{ color: "var(--color-text)" }}
        >
          {t.title}
        </h2>

        <div className="flex flex-col gap-12">
          {sponsorTiers.map((tier) => (
            <div key={tier.id}>
              <h3
                className="section-label mb-4"
              >
                {lang === "es" ? tier.esTitle : tier.enTitle}
              </h3>
              <div
                className={`grid gap-4 ${
                  tier.id === "main"
                    ? "grid-cols-1 sm:grid-cols-2"
                    : tier.id === "organizer"
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                }`}
              >
                {tier.sponsors.length > 0 ? (
                  tier.sponsors.map((sponsor) => (
                    <SponsorCard
                      key={sponsor.name}
                      sponsor={sponsor}
                      large={tier.id === "main" || tier.id === "organizer"}
                    />
                  ))
                ) : (
                  <>
                    <PlaceholderCard label={t.placeholderName} />
                    <PlaceholderCard label={t.placeholderName} />
                    {(tier.id !== "main" && tier.id !== "organizer") && (
                      <>
                        <PlaceholderCard label={t.placeholderName} />
                        <PlaceholderCard label={t.placeholderName} />
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
