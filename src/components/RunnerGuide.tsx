import type { Lang } from "../content/siteContent";
import { copy, runnerGuideCards } from "../content/siteContent";

interface RunnerGuideProps {
  lang: Lang;
}

export function RunnerGuide({ lang }: RunnerGuideProps) {
  const t = copy[lang].runnerGuide;

  return (
    <section
      id="guia"
      aria-labelledby="runner-guide-title"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
    >
      <div className="container-trail">
        <p className="section-label mb-4">{t.sectionLabel}</p>
        <h2
          id="runner-guide-title"
          className="font-display text-3xl md:text-5xl mb-4"
          style={{ color: "var(--color-text)" }}
        >
          {t.title}
        </h2>
        <p className="text-sm mb-10 flex items-center gap-2" style={{ color: "var(--color-muted)" }}>
          <span aria-hidden="true">⚠️</span>
          {t.pendingNote}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {runnerGuideCards.map((card) => (
            <div key={card.id} className="glass-card p-5 flex flex-col gap-3">
              <span className="text-3xl" aria-hidden="true">
                {card.icon}
              </span>
              <h3
                className="font-display text-xl"
                style={{ color: "var(--color-text)" }}
              >
                {lang === "es" ? card.esTitle : card.enTitle}
              </h3>
              <p className="text-sm flex-1" style={{ color: "var(--color-muted)" }}>
                {lang === "es" ? card.esBody : card.enBody}
              </p>
              {card.pending && <span className="pending-tag w-fit">Por confirmar</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
