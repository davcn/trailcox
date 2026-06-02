import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sponsors } from "../components/Sponsors";

describe("Sponsors — empty tiers (default config)", () => {
  it("renders all 6 tier headings in Spanish", () => {
    render(<Sponsors lang="es" />);
    expect(screen.getByText("Organiza")).toBeInTheDocument();
    expect(screen.getByText("Patrocinador principal")).toBeInTheDocument();
    expect(screen.getByText("Colaboradores institucionales")).toBeInTheDocument();
    expect(screen.getByText("Patrocinadores")).toBeInTheDocument();
    expect(screen.getAllByText("Colaboradores").length).toBeGreaterThan(0);
    expect(screen.getByText(/Media partners/i)).toBeInTheDocument();
  });

  it("renders all 6 tier headings in English", () => {
    render(<Sponsors lang="en" />);
    expect(screen.getByText("Organizer")).toBeInTheDocument();
    expect(screen.getByText("Main sponsor")).toBeInTheDocument();
    expect(screen.getByText("Institutional partners")).toBeInTheDocument();
    expect(screen.getByText("Sponsors")).toBeInTheDocument();
    expect(screen.getByText("Collaborators")).toBeInTheDocument();
  });

  it("renders placeholder cards when tiers are empty", () => {
    const { container } = render(<Sponsors lang="es" />);
    // Placeholder cards have a decorative inner div (the logo placeholder block)
    const placeholderBlocks = container.querySelectorAll(".w-16.h-6.rounded");
    expect(placeholderBlocks.length).toBeGreaterThan(0);
  });

  it("section has id=patrocinadores", () => {
    const { container } = render(<Sponsors lang="es" />);
    expect(container.querySelector("section#patrocinadores")).toBeInTheDocument();
  });
});
