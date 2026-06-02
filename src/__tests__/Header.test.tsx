import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "../components/Header";

describe("Header", () => {
  it("renders the Trail Cox logo link", () => {
    render(<Header lang="es" setLang={vi.fn()} />);
    expect(screen.getByRole("link", { name: /Trail Cox/i })).toBeInTheDocument();
  });

  it("desktop nav contains main section links in Spanish", () => {
    render(<Header lang="es" setLang={vi.fn()} />);
    expect(screen.getAllByRole("link", { name: /Carrera/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Recorrido/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Galería/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /FAQ/i }).length).toBeGreaterThan(0);
  });

  it("desktop nav labels change to English", () => {
    render(<Header lang="en" setLang={vi.fn()} />);
    expect(screen.getAllByRole("link", { name: /Race/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Route/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Gallery/i }).length).toBeGreaterThan(0);
  });

  it("registration CTA reads Inscripciones in Spanish", () => {
    render(<Header lang="es" setLang={vi.fn()} />);
    const links = screen.getAllByRole("link", { name: /Inscripciones/i });
    expect(links.length).toBeGreaterThan(0);
  });

  it("registration CTA reads Register in English", () => {
    render(<Header lang="en" setLang={vi.fn()} />);
    const links = screen.getAllByRole("link", { name: /^Register$/i });
    expect(links.length).toBeGreaterThan(0);
  });

  it("registration CTA links to chiplevante.es with safe attributes", () => {
    render(<Header lang="es" setLang={vi.fn()} />);
    const links = screen.getAllByRole("link", { name: /Inscripciones/i });
    const cta = links[0];
    expect(cta).toHaveAttribute("href", "https://chiplevante.es/");
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("mobile menu button starts with aria-expanded=false", () => {
    render(<Header lang="es" setLang={vi.fn()} />);
    const burger = screen.getByRole("button", { name: /menú/i });
    expect(burger).toHaveAttribute("aria-expanded", "false");
  });

  it("mobile menu opens on burger click", async () => {
    render(<Header lang="es" setLang={vi.fn()} />);
    const burger = screen.getByRole("button", { name: /menú/i });
    await userEvent.click(burger);
    expect(burger).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("mobile-menu")).toBeInTheDocument();
  });

  it("mobile menu closes on second burger click", async () => {
    render(<Header lang="es" setLang={vi.fn()} />);
    const burger = screen.getByRole("button", { name: /menú/i });
    await userEvent.click(burger);
    await userEvent.click(burger);
    expect(burger).toHaveAttribute("aria-expanded", "false");
    expect(document.getElementById("mobile-menu")).not.toBeInTheDocument();
  });

  it("mobile menu registration link has safe external attributes", async () => {
    render(<Header lang="es" setLang={vi.fn()} />);
    const burger = screen.getByRole("button", { name: /menú/i });
    await userEvent.click(burger);
    const mobileMenu = document.getElementById("mobile-menu")!;
    const regLink = mobileMenu.querySelector('a[href="https://chiplevante.es/"]');
    expect(regLink).toHaveAttribute("target", "_blank");
    expect(regLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
