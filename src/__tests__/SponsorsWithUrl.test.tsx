import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

vi.mock("../content/siteContent", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../content/siteContent")>();
  return {
    ...actual,
    sponsorTiers: [
      {
        id: "main",
        esTitle: "Patrocinador principal",
        enTitle: "Main sponsor",
        sponsors: [{ name: "Acme Corp", url: "https://acme.example.com" }],
      },
    ],
  };
});

describe("Sponsors — sponsor with URL", () => {
  it("sponsor with URL is wrapped in anchor with safe attributes", async () => {
    const { Sponsors } = await import("../components/Sponsors");
    const { container } = render(<Sponsors lang="es" />);
    const anchor = container.querySelector('a[href="https://acme.example.com"]');
    expect(anchor).toHaveAttribute("target", "_blank");
    expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
    expect(anchor).toHaveAttribute("aria-label", "Acme Corp");
  });
});
