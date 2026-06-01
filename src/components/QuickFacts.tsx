import type { Lang } from "../content/siteContent";
import { copy } from "../content/siteContent";

interface QuickFactsProps {
  lang: Lang;
}

export function QuickFacts({ lang }: QuickFactsProps) {
  const t = copy[lang].quickFacts;

  const facts = [
    {
      label: t.date,
      value: t.datePending,
      pending: true,
      icon: "📅",
    },
    {
      label: t.distance,
      value: t.distancePending,
      pending: true,
      icon: "📏",
    },
    {
      label: t.modalities,
      value: t.modalitiesValue,
      pending: false,
      icon: "🏃",
    },
    {
      label: t.registrationStatus,
      value: t.registrationOpen,
      pending: false,
      icon: "✅",
    },
  ];

  return (
    <section
      id="datos"
      aria-labelledby="quick-facts-title"
      className="py-16 md:py-20"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
    >
      <div className="container-trail">
        <p className="section-label mb-4">{t.sectionLabel}</p>
        <h2
          id="quick-facts-title"
          className="font-display text-3xl md:text-4xl mb-10"
          style={{ color: "var(--color-text)" }}
        >
          {lang === "es" ? "El evento" : "The event"}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="glass-card p-5 flex flex-col gap-2"
            >
              <span className="text-2xl" aria-hidden="true">
                {fact.icon}
              </span>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--color-muted)" }}
              >
                {fact.label}
              </span>
              <span
                className="font-display text-xl leading-tight"
                style={{ color: fact.pending ? "var(--color-hot)" : "var(--color-text)" }}
              >
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
