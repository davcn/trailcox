import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MapSection } from "../components/MapSection";

vi.mock("../content/siteContent", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../content/siteContent")>();
  return { ...actual };
});

import * as siteContentModule from "../content/siteContent";

describe("MapSection — map configured", () => {
  it("renders the map iframe with correct title", () => {
    render(<MapSection lang="es" />);
    const iframe = document.querySelector("iframe");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("title", "Trail Cox route map");
  });

  it("iframe has lazy loading", () => {
    render(<MapSection lang="es" />);
    const iframe = document.querySelector("iframe");
    expect(iframe).toHaveAttribute("loading", "lazy");
  });

  it("iframe has referrerPolicy", () => {
    render(<MapSection lang="es" />);
    const iframe = document.querySelector("iframe");
    expect(iframe).toHaveAttribute("referrerpolicy", "no-referrer-when-downgrade");
  });

  it("iframe src contains maps.google.com", () => {
    render(<MapSection lang="es" />);
    const iframe = document.querySelector("iframe");
    expect(iframe?.getAttribute("src")).toContain("maps.google.com");
  });

  it("external map button in Spanish", () => {
    render(<MapSection lang="es" />);
    const btn = screen.getByRole("link", { name: /Abrir en Google Maps/i });
    expect(btn).toHaveAttribute("target", "_blank");
    expect(btn).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("external map button in English", () => {
    render(<MapSection lang="en" />);
    expect(screen.getByRole("link", { name: /Open in Google Maps/i })).toBeInTheDocument();
  });

  it("shows pending badge on route stats in Spanish", () => {
    render(<MapSection lang="es" />);
    expect(screen.getAllByText("Por confirmar").length).toBeGreaterThan(0);
  });

  it("shows pending badge on route stats in English", () => {
    render(<MapSection lang="en" />);
    expect(screen.getAllByText("To be confirmed").length).toBeGreaterThan(0);
  });
});

describe("MapSection — map URL missing", () => {
  beforeEach(() => {
    vi.spyOn(siteContentModule, "siteConfig", "get").mockReturnValue({
      ...siteContentModule.siteConfig,
      mapEmbedUrl: "",
      mapExternalUrl: "",
    });
  });

  it("shows no iframe when mapEmbedUrl is empty", () => {
    render(<MapSection lang="es" />);
    expect(document.querySelector("iframe")).not.toBeInTheDocument();
  });

  it("shows fallback text in Spanish", () => {
    render(<MapSection lang="es" />);
    expect(
      screen.getByText(/El mapa del recorrido final se publicará próximamente/i)
    ).toBeInTheDocument();
  });

  it("shows fallback text in English", () => {
    render(<MapSection lang="en" />);
    expect(
      screen.getByText(/The final route map will be published soon/i)
    ).toBeInTheDocument();
  });
});
