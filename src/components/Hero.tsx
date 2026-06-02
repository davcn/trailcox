import type { Lang } from "../content/siteContent";
import { copy, siteConfig } from "../content/siteContent";
import { TrailCoxLogo } from "./TrailCoxLogo";

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const t = copy[lang].hero;

  const handleScrollToRoute = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#recorrido")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      aria-label={t.title}
      className="relative flex flex-col justify-end min-h-[90vh] overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(215,255,55,0.07) 0%, transparent 60%), " +
            "linear-gradient(160deg, #050509 0%, #0c0c12 60%, #050509 100%)",
        }}
      />

      {/* Topographic pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, var(--color-accent) 0px, transparent 1px, transparent 40px, var(--color-accent) 41px), repeating-linear-gradient(90deg, var(--color-accent) 0px, transparent 1px, transparent 40px, var(--color-accent) 41px)`,
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      {/* Mountain silhouette */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ height: "200px" }}
      >
        <path
          d="M0,200 L0,160 L120,80 L200,130 L340,30 L480,110 L600,50 L720,120 L860,20 L960,90 L1080,40 L1200,100 L1320,60 L1440,110 L1440,200 Z"
          fill="rgba(215,255,55,0.04)"
        />
        <path
          d="M0,200 L0,170 L180,100 L300,150 L440,70 L560,140 L680,90 L800,150 L920,60 L1060,120 L1200,80 L1320,130 L1440,90 L1440,200 Z"
          fill="rgba(215,255,55,0.03)"
        />
      </svg>

      {/* Hero content */}
      <div className="container-trail relative z-10 pb-24 pt-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="section-label mb-5">{t.eyebrow}</p>

        {/* Logo + Title inline */}
        <div className="flex items-center justify-center gap-5 mb-6 flex-wrap">
          <TrailCoxLogo variant="hero" showText={false} label="Trail Cox logo" />
          <h1
            className="font-display leading-none"
            style={{
              fontSize: "clamp(4rem, 12vw, 9rem)",
              color: "var(--color-text)",
              letterSpacing: "0.02em",
            }}
          >
            {t.title}
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            {t.primaryCta}
          </a>
          <a
            href="#recorrido"
            onClick={handleScrollToRoute}
            className="btn-secondary text-base px-8 py-4"
          >
            {t.secondaryCta}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M8 3 L8 13 M4 9 L8 13 L12 9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Metadata chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: "📍", text: "Cox, Alicante" },
            { icon: "🌙", text: t.badgeNight },
            { icon: "🏔️", text: t.badgeModalities },
          ].map((chip) => (
            <span
              key={chip.text}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full glass-card"
              style={{ color: "var(--color-muted)" }}
            >
              <span aria-hidden="true">{chip.icon}</span>
              {chip.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
