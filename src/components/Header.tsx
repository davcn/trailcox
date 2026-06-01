import { useState, useEffect } from "react";
import type { Lang } from "../content/siteContent";
import { copy, siteConfig } from "../content/siteContent";
import { TrailCoxLogo } from "./TrailCoxLogo";
import { LanguageToggle } from "./LanguageToggle";

interface HeaderProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const NAV_LINKS = [
  { key: "race" as const, href: "#carrera" },
  { key: "route" as const, href: "#recorrido" },
  { key: "gallery" as const, href: "#galeria" },
  { key: "sponsors" as const, href: "#patrocinadores" },
  { key: "faq" as const, href: "#faq" },
];

export function Header({ lang, setLang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = copy[lang].nav;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(5,5,9,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <div className="container-trail flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" aria-label="Trail Cox — Inicio">
          <TrailCoxLogo variant="header" showText={true} />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-accent)]"
              style={{ color: "var(--color-muted)" }}
            >
              {t[key]}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            {t.register}
          </a>
        </div>

        {/* Mobile: lang + burger */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menú / Open menu"
            className="p-2 rounded"
            style={{ color: "var(--color-text)" }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="15" x2="19" y2="15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t"
          style={{
            backgroundColor: "rgba(5,5,9,0.98)",
            borderColor: "var(--color-border)",
          }}
        >
          <nav
            aria-label="Navegación móvil"
            className="container-trail flex flex-col py-4 gap-1"
          >
            {NAV_LINKS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="py-3 px-2 text-sm font-medium tracking-wide rounded hover:bg-[var(--color-surface)] transition-colors"
                style={{ color: "var(--color-text)" }}
              >
                {t[key]}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t" style={{ borderColor: "var(--color-border)" }}>
              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                {t.register}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
