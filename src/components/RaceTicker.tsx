import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const TERMS = [
  "TRAIL COX",
  "COX",
  "CASTILLO",
  "MONTAÑA",
  "NOCTURNO",
  "INSCRIPCIONES",
  "SIERRA",
  "ALICANTE",
  "TRAIL COX",
  "COX",
  "CASTILLO",
  "MONTAÑA",
  "NOCTURNO",
  "INSCRIPCIONES",
  "SIERRA",
  "ALICANTE",
];

export function RaceTicker() {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return (
      <div
        className="w-full overflow-hidden border-y py-3"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-bg-soft)",
        }}
        aria-hidden="true"
      >
        <div className="container-trail flex gap-6 flex-wrap">
          {TERMS.slice(0, 8).map((term, i) => (
            <span
              key={i}
              className="font-display text-sm tracking-widest"
              style={{ color: i % 2 === 0 ? "var(--color-accent)" : "var(--color-muted)" }}
            >
              {term}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full overflow-hidden border-y py-3"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-bg-soft)",
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>
      <div className="ticker-track" role="presentation">
        {TERMS.map((term, i) => (
          <span
            key={i}
            className="font-display text-sm tracking-widest px-5"
            style={{ color: i % 2 === 0 ? "var(--color-accent)" : "var(--color-muted)" }}
          >
            {term}
            {i < TERMS.length - 1 && (
              <span
                className="ml-5"
                style={{ color: "var(--color-muted)" }}
                aria-hidden="true"
              >
                ✦
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
