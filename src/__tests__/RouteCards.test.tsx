import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouteCards } from "../components/RouteCards";

describe("RouteCards", () => {
  it("renders Trail Competitivo card in Spanish", () => {
    render(<RouteCards lang="es" />);
    expect(screen.getByText("Trail Competitivo")).toBeInTheDocument();
  });

  it("renders Competitive Trail card in English", () => {
    render(<RouteCards lang="en" />);
    expect(screen.getByText("Competitive Trail")).toBeInTheDocument();
  });

  it("renders Senderismo card in Spanish", () => {
    render(<RouteCards lang="es" />);
    expect(screen.getByText("Senderismo")).toBeInTheDocument();
  });

  it("renders Walking Route card in English", () => {
    render(<RouteCards lang="en" />);
    expect(screen.getByText("Walking Route")).toBeInTheDocument();
  });

  it("shows Por confirmar pending badge in Spanish", () => {
    render(<RouteCards lang="es" />);
    expect(screen.getAllByText("Por confirmar").length).toBeGreaterThan(0);
  });

  it("shows To be confirmed pending badge in English", () => {
    render(<RouteCards lang="en" />);
    expect(screen.getAllByText("To be confirmed").length).toBeGreaterThan(0);
  });

  it("distance label is Distancia in Spanish", () => {
    render(<RouteCards lang="es" />);
    expect(screen.getAllByText("Distancia").length).toBeGreaterThan(0);
  });

  it("distance label is Distance in English", () => {
    render(<RouteCards lang="en" />);
    expect(screen.getAllByText("Distance").length).toBeGreaterThan(0);
  });

  it("elevation label is Desnivel in Spanish", () => {
    render(<RouteCards lang="es" />);
    expect(screen.getAllByText("Desnivel").length).toBeGreaterThan(0);
  });

  it("elevation label is Elevation in English", () => {
    render(<RouteCards lang="en" />);
    expect(screen.getAllByText("Elevation").length).toBeGreaterThan(0);
  });

  it("start time label is Salida in Spanish", () => {
    render(<RouteCards lang="es" />);
    expect(screen.getAllByText("Salida").length).toBeGreaterThan(0);
  });

  it("start time label is Start in English", () => {
    render(<RouteCards lang="en" />);
    expect(screen.getAllByText("Start").length).toBeGreaterThan(0);
  });

  it("registration CTAs link to chiplevante.es with safe attributes", () => {
    render(<RouteCards lang="es" />);
    const links = screen.getAllByRole("link", { name: /Inscripciones/i });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toHaveAttribute("href", "https://chiplevante.es/");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("registration CTAs read Register in English", () => {
    render(<RouteCards lang="en" />);
    const links = screen.getAllByRole("link", { name: /^Register$/i });
    expect(links.length).toBeGreaterThan(0);
  });
});
