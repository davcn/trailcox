import { useRef, useEffect } from "react";
import type { Lang } from "../content/siteContent";
import { copy, siteConfig } from "../content/siteContent";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface ScrollVideoProps {
  lang: Lang;
}

export function ScrollVideo({ lang }: ScrollVideoProps) {
  const t = copy[lang].video;
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const metaLoadedRef = useRef(false);
  const prefersReduced = usePrefersReducedMotion();
  const hasVideo = Boolean(siteConfig.videoSrc);

  useEffect(() => {
    if (!hasVideo || prefersReduced) return;

    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const onMetadata = () => {
      metaLoadedRef.current = true;
    };
    video.addEventListener("loadedmetadata", onMetadata);

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        if (!metaLoadedRef.current) return;
        const rect = section.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, -rect.top / (rect.height - window.innerHeight))
        );
        if (video.duration && Number.isFinite(video.duration)) {
          video.currentTime = progress * video.duration;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadedmetadata", onMetadata);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasVideo, prefersReduced]);

  if (!hasVideo) {
    return (
      <section
        aria-labelledby="video-section-title"
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-trail">
          <p className="section-label mb-4">{t.sectionLabel}</p>
          <h2
            id="video-section-title"
            className="font-display text-3xl md:text-5xl mb-8"
            style={{ color: "var(--color-text)" }}
          >
            {t.title}
          </h2>
          <div
            className="glass-card flex flex-col items-center justify-center text-center min-h-[260px] gap-4 p-10"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="32" cy="32" r="30" stroke="var(--color-border)" strokeWidth="1.5" />
              <polygon
                points="25,20 48,32 25,44"
                stroke="var(--color-muted)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <p style={{ color: "var(--color-muted)" }}>{t.placeholder}</p>
          </div>
        </div>
      </section>
    );
  }

  if (prefersReduced) {
    return (
      <section
        aria-labelledby="video-section-title"
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-trail">
          <p className="section-label mb-4">{t.sectionLabel}</p>
          <h2
            id="video-section-title"
            className="font-display text-3xl md:text-5xl mb-8"
            style={{ color: "var(--color-text)" }}
          >
            {t.title}
          </h2>
          <video
            src={siteConfig.videoSrc}
            poster={siteConfig.videoPoster || undefined}
            controls
            muted
            playsInline
            preload="metadata"
            className="w-full rounded-lg"
            style={{ maxHeight: "60vh", objectFit: "cover" }}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="video-section-title"
      style={{ height: "240vh", position: "relative", backgroundColor: "var(--color-bg)" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div className="container-trail absolute top-8 left-0 right-0 z-10">
          <p className="section-label mb-2">{t.sectionLabel}</p>
          <h2
            id="video-section-title"
            className="font-display text-3xl md:text-5xl"
            style={{ color: "var(--color-text)" }}
          >
            {t.title}
          </h2>
        </div>
        <video
          ref={videoRef}
          src={siteConfig.videoSrc}
          poster={siteConfig.videoPoster || undefined}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(5,5,9,0.5) 0%, transparent 30%, rgba(5,5,9,0.3) 100%)" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
