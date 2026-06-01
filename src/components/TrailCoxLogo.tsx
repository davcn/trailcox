interface TrailCoxLogoProps {
  className?: string;
  showText?: boolean;
  label?: string;
  variant?: "header" | "hero" | "footer";
}

export function TrailCoxLogo({
  className = "",
  showText = true,
  label = "Trail Cox",
  variant = "header",
}: TrailCoxLogoProps) {
  const size = variant === "hero" ? 120 : variant === "footer" ? 48 : 40;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={showText ? undefined : label}
        role={showText ? "presentation" : "img"}
        aria-hidden={showText ? "true" : undefined}
      >
        {/* Shield / badge background */}
        <path
          d="M50 4 L88 18 L88 54 C88 74 70 90 50 96 C30 90 12 74 12 54 L12 18 Z"
          fill="#0c0c12"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
        />
        {/* Mountain ridge */}
        <polyline
          points="22,68 38,44 50,58 62,36 78,68"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          aria-hidden="true"
        />
        {/* Trail path */}
        <path
          d="M22 76 Q36 70 50 76 Q64 82 78 76"
          stroke="var(--color-accent-2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          aria-hidden="true"
        />
        {/* Castle silhouette at peak */}
        <rect x="46" y="24" width="8" height="7" fill="var(--color-accent)" aria-hidden="true" />
        <rect x="44" y="22" width="3" height="4" fill="var(--color-accent)" aria-hidden="true" />
        <rect x="53" y="22" width="3" height="4" fill="var(--color-accent)" aria-hidden="true" />
        {/* Stars */}
        <circle cx="30" cy="24" r="1.2" fill="var(--color-accent)" opacity="0.7" aria-hidden="true" />
        <circle cx="72" cy="30" r="1" fill="var(--color-accent)" opacity="0.5" aria-hidden="true" />
        <circle cx="66" cy="20" r="1.5" fill="var(--color-accent)" opacity="0.6" aria-hidden="true" />
      </svg>
      {showText && (
        <span
          className="font-display tracking-wider leading-none"
          style={{
            fontSize: variant === "hero" ? "2.5rem" : variant === "footer" ? "1.1rem" : "1.25rem",
            color: "var(--color-text)",
          }}
          aria-label={label}
        >
          TRAIL COX
        </span>
      )}
    </span>
  );
}
