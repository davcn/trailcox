import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../components/Hero";

describe("Hero", () => {
  it("renders Trail Cox as the h1 in Spanish", () => {
    render(<Hero lang="es" />);
    expect(screen.getByRole("heading", { level: 1, name: /Trail Cox/i })).toBeInTheDocument();
  });

  it("renders Trail Cox as the h1 in English", () => {
    render(<Hero lang="en" />);
    expect(screen.getByRole("heading", { level: 1, name: /Trail Cox/i })).toBeInTheDocument();
  });

  it("renders Spanish subtitle", () => {
    render(<Hero lang="es" />);
    expect(screen.getByText(/Corre bajo las estrellas/i)).toBeInTheDocument();
  });

  it("renders English subtitle", () => {
    render(<Hero lang="en" />);
    expect(screen.getByText(/Run under the stars/i)).toBeInTheDocument();
  });

  it("primary CTA is Inscripciones in Spanish", () => {
    render(<Hero lang="es" />);
    const links = screen.getAllByRole("link", { name: /Inscripciones/i });
    expect(links.length).toBeGreaterThan(0);
  });

  it("primary CTA is Register in English", () => {
    render(<Hero lang="en" />);
    const links = screen.getAllByRole("link", { name: /^Register$/i });
    expect(links.length).toBeGreaterThan(0);
  });

  it("primary CTA links to chiplevante.es with safe attributes", () => {
    render(<Hero lang="es" />);
    const cta = screen.getAllByRole("link", { name: /Inscripciones/i })[0];
    expect(cta).toHaveAttribute("href", "https://chiplevante.es/");
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("secondary CTA links to #recorrido", () => {
    render(<Hero lang="es" />);
    const link = screen.getByRole("link", { name: /Ver recorrido/i });
    expect(link).toHaveAttribute("href", "#recorrido");
  });

  it("secondary CTA reads View route in English", () => {
    render(<Hero lang="en" />);
    expect(screen.getByRole("link", { name: /View route/i })).toBeInTheDocument();
  });

  it("renders Cox Alicante metadata chip", () => {
    render(<Hero lang="es" />);
    expect(screen.getByText("Cox, Alicante")).toBeInTheDocument();
  });

  it("renders Nocturno chip in Spanish", () => {
    render(<Hero lang="es" />);
    expect(screen.getByText("Nocturno")).toBeInTheDocument();
  });

  it("renders Night race chip in English", () => {
    render(<Hero lang="en" />);
    expect(screen.getByText("Night race")).toBeInTheDocument();
  });

  it("renders Trail + Senderismo chip in Spanish", () => {
    render(<Hero lang="es" />);
    expect(screen.getByText("Trail + Senderismo")).toBeInTheDocument();
  });

  it("renders Trail + Walking chip in English", () => {
    render(<Hero lang="en" />);
    expect(screen.getByText("Trail + Walking")).toBeInTheDocument();
  });
});
