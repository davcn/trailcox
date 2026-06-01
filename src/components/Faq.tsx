import type { Lang } from "../content/siteContent";
import { copy, faqItems } from "../content/siteContent";

interface FaqProps {
  lang: Lang;
}

export function Faq({ lang }: FaqProps) {
  const t = copy[lang].faq;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-trail">
        <p className="section-label mb-4">{t.sectionLabel}</p>
        <h2
          id="faq-title"
          className="font-display text-3xl md:text-5xl mb-10"
          style={{ color: "var(--color-text)" }}
        >
          {t.title}
        </h2>

        <div className="flex flex-col gap-2">
          {faqItems.map((item) => (
            <details
              key={item.id}
              className="glass-card group"
            >
              <summary
                className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-medium text-left w-full"
                style={{ color: "var(--color-text)", listStyle: "none", WebkitAppearance: "none" }}
              >
                <span>{lang === "es" ? item.esQuestion : item.enQuestion}</span>
                <svg
                  className="flex-shrink-0 transition-transform group-open:rotate-45"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  style={{ color: "var(--color-accent)" }}
                >
                  <line x1="9" y1="3" x2="9" y2="15" />
                  <line x1="3" y1="9" x2="15" y2="9" />
                </svg>
              </summary>
              <div
                className="px-6 pb-5 text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {lang === "es" ? item.esAnswer : item.enAnswer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
