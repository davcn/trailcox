# Claude Code Prompt: Apply Trail Cox OpenSpec Change

Use this after placing the OpenSpec files in the repository.

```text
/opsx:apply build-trail-cox-website
```

If your Claude Code/OpenSpec setup uses the expanded workflow, you can review first:

```text
/opsx:show build-trail-cox-website
/opsx:apply build-trail-cox-website
```

## Implementation Notes

- Build a professional, modern, bilingual Spanish/English website for Trail Cox.
- Use the files in `openspec/changes/build-trail-cox-website/` as the source of truth.
- Use “Inscripciones” in Spanish UI, not “Incripciones”.
- Keep external URLs in `siteConfig`.
- Registration URL defaults to `https://chiplevante.es/`.
- Gallery URL must be configurable and should point to a Google Drive folder once available.
- Map embed URL must be configurable and should use a Google Maps embed URL once available.
- Treat dates, times, distances, elevation, GPX, Wikiloc, sponsor logos, and final address as placeholders unless provided.
- Generate the Trail Cox logo as original inline SVG.
- Use the reference websites only for high-level design and content-architecture inspiration.
- Do not copy assets, text, logos, CSS, or exact layouts from reference websites.
- Prioritize mobile responsiveness.
- Add reduced-motion fallback for animated ticker and scroll video.
- The site must work without a backend.
```
