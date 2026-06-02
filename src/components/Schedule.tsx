import type { Lang } from "../content/siteContent";
import { copy, scheduleItems } from "../content/siteContent";

interface ScheduleProps {
  lang: Lang;
}

export function Schedule({ lang }: ScheduleProps) {
  const t = copy[lang].schedule;
  const tc = copy[lang].common;

  return (
    <section
      id="programa"
      aria-labelledby="schedule-title"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-trail">
        <p className="section-label mb-4">{t.sectionLabel}</p>
        <h2
          id="schedule-title"
          className="font-display text-3xl md:text-5xl mb-4"
          style={{ color: "var(--color-text)" }}
        >
          {t.title}
        </h2>
        <p className="text-sm mb-10 flex items-center gap-2" style={{ color: "var(--color-muted)" }}>
          <span aria-hidden="true">⏱️</span>
          {t.pendingNote}
        </p>

        {/* Mobile: vertical timeline */}
        <ol className="flex flex-col gap-6 md:hidden" aria-label="Programa del evento">
          {scheduleItems.map((item, index) => (
            <li key={item.time} className="relative flex items-start gap-5">
              {/* Vertical connector */}
              {index < scheduleItems.length - 1 && (
                <div
                  className="absolute top-10 bottom-0 w-px"
                  style={{ backgroundColor: "var(--color-border)", left: "2.25rem" }}
                  aria-hidden="true"
                />
              )}
              {/* Time bubble */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className="w-[4.5rem] h-10 rounded-lg flex items-center justify-center font-display text-lg"
                  style={{
                    backgroundColor: item.pending ? "var(--color-surface)" : "rgba(215,255,55,0.12)",
                    color: item.pending ? "var(--color-muted)" : "var(--color-accent)",
                    border: `1px solid ${item.pending ? "var(--color-border)" : "rgba(215,255,55,0.3)"}`,
                  }}
                >
                  {item.time}
                </div>
              </div>
              {/* Content */}
              <div className="pt-2 flex flex-col gap-1">
                <span className="font-medium" style={{ color: "var(--color-text)" }}>
                  {lang === "es" ? item.es : item.en}
                </span>
                {item.pending && <span className="pending-tag w-fit">{tc.pending}</span>}
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal timeline */}
        <ol className="hidden md:flex md:items-start gap-0" aria-label="Programa del evento">
          {scheduleItems.map((item, index) => (
            <li key={item.time} className="relative flex flex-col flex-1 items-center">
              {index < scheduleItems.length - 1 && (
                <div
                  className="absolute top-5 w-full h-px"
                  style={{ backgroundColor: "var(--color-border)", left: "50%" }}
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className="w-[4.5rem] h-10 rounded-lg flex items-center justify-center font-display text-lg"
                  style={{
                    backgroundColor: item.pending ? "var(--color-surface)" : "rgba(215,255,55,0.12)",
                    color: item.pending ? "var(--color-muted)" : "var(--color-accent)",
                    border: `1px solid ${item.pending ? "var(--color-border)" : "rgba(215,255,55,0.3)"}`,
                  }}
                >
                  {item.time}
                </div>
              </div>
              <div className="text-center px-2 pt-3 flex flex-col gap-1">
                <span className="font-medium text-sm" style={{ color: "var(--color-text)" }}>
                  {lang === "es" ? item.es : item.en}
                </span>
                {item.pending && <span className="pending-tag w-fit mx-auto">{tc.pending}</span>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
