# Trail Cox OpenSpec Package

This package contains an OpenSpec change proposal for building the Trail Cox website.

## Files

```txt
openspec/changes/build-trail-cox-website/
  proposal.md
  design.md
  tasks.md
  specs/trail-cox-website/spec.md
claude-prompt.md
```

## Usage

Copy the `openspec/` folder into the root of your project.

Then run, depending on your OpenSpec/Claude Code setup:

```txt
/opsx:apply build-trail-cox-website
```

Or validate first from the CLI if available:

```sh
openspec validate build-trail-cox-website
```

## Notes

- The delta spec uses the OpenSpec `## ADDED Requirements` format.
- The website requirements are intentionally placeholder-friendly because final race details may not be confirmed yet.
- Replace Google Drive, Google Maps, GPX, Wikiloc, sponsor, video, and social URLs in the generated implementation config.
