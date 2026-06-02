import type { Lang } from "../content/siteContent";

interface LanguageToggleProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export function LanguageToggle({ lang, setLang }: LanguageToggleProps) {
  return (
    <div
      role="group"
      aria-label="Seleccionar idioma / Select language"
      className="flex items-center gap-1"
    >
      <button
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`px-2 py-1 text-xs font-bold tracking-widest uppercase rounded transition-colors ${
          lang === "es"
            ? "text-black"
            : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
        }`}
        style={lang === "es" ? { backgroundColor: "var(--color-accent)" } : {}}
      >
        ES
      </button>
      <span className="select-none" style={{ color: "var(--color-muted)" }} aria-hidden="true">|</span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2 py-1 text-xs font-bold tracking-widest uppercase rounded transition-colors ${
          lang === "en"
            ? "text-black"
            : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
        }`}
        style={lang === "en" ? { backgroundColor: "var(--color-accent)" } : {}}
      >
        EN
      </button>
    </div>
  );
}
