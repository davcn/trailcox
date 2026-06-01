import type { Lang } from "../content/siteContent";
import { copy, siteConfig } from "../content/siteContent";
import { TrailCoxLogo } from "./TrailCoxLogo";

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const t = copy[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="pt-16 pb-8"
      style={{
        backgroundColor: "var(--color-bg-soft)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-trail">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: "var(--color-border)" }}>
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <TrailCoxLogo variant="footer" showText={true} />
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              {t.description}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="section-label">{t.contactLabel}</h3>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-sm hover:text-[var(--color-accent)] transition-colors"
              style={{ color: "var(--color-muted)" }}
            >
              {siteConfig.contactEmail}
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h3 className="section-label">{t.socialLabel}</h3>
            <div className="flex gap-3">
              {siteConfig.instagramUrl ? (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="btn-secondary px-3 py-2 text-xs"
                >
                  Instagram
                </a>
              ) : (
                <span
                  className="text-sm"
                  style={{ color: "var(--color-border)" }}
                >
                  Instagram (próximamente)
                </span>
              )}
              {siteConfig.facebookUrl ? (
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="btn-secondary px-3 py-2 text-xs"
                >
                  Facebook
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            © {year} {t.copyright}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs hover:text-[var(--color-accent)] transition-colors"
              style={{ color: "var(--color-muted)" }}
            >
              {t.legal}
            </a>
            <a
              href="#"
              className="text-xs hover:text-[var(--color-accent)] transition-colors"
              style={{ color: "var(--color-muted)" }}
            >
              {t.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
