import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { QuickFacts } from "../components/QuickFacts";

describe("QuickFacts", () => {
  it("renders El evento heading in Spanish", () => {
    render(<QuickFacts lang="es" />);
    expect(screen.getByRole("heading", { name: /El evento/i })).toBeInTheDocument();
  });

  it("renders The event heading in English", () => {
    render(<QuickFacts lang="en" />);
    expect(screen.getByRole("heading", { name: /The event/i })).toBeInTheDocument();
  });

  it("section has aria-labelledby", () => {
    const { container } = render(<QuickFacts lang="es" />);
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("aria-labelledby");
  });

  it("shows Fecha card in Spanish", () => {
    render(<QuickFacts lang="es" />);
    expect(screen.getByText("Fecha")).toBeInTheDocument();
  });

  it("shows Date card in English", () => {
    render(<QuickFacts lang="en" />);
    expect(screen.getByText("Date")).toBeInTheDocument();
  });

  it("shows Por confirmar for pending fact in Spanish", () => {
    render(<QuickFacts lang="es" />);
    expect(screen.getAllByText("Por confirmar").length).toBeGreaterThan(0);
  });

  it("shows To be confirmed for pending fact in English", () => {
    render(<QuickFacts lang="en" />);
    expect(screen.getAllByText("To be confirmed").length).toBeGreaterThan(0);
  });

  it("shows registration status as open (non-pending) in Spanish", () => {
    render(<QuickFacts lang="es" />);
    expect(screen.getByText("Abiertas")).toBeInTheDocument();
  });

  it("shows registration status as Open in English", () => {
    render(<QuickFacts lang="en" />);
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("shows modalities as Trail + Senderismo in Spanish", () => {
    render(<QuickFacts lang="es" />);
    expect(screen.getByText("Trail + Senderismo")).toBeInTheDocument();
  });

  it("shows modalities as Trail + Walking in English", () => {
    render(<QuickFacts lang="en" />);
    expect(screen.getByText("Trail + Walking")).toBeInTheDocument();
  });
});
