import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";

describe("Footer", () => {
  it("has id=contacto", () => {
    const { container } = render(<Footer lang="es" />);
    expect(container.querySelector("footer#contacto")).toBeInTheDocument();
  });

  it("renders the contact email link", () => {
    render(<Footer lang="es" />);
    const link = screen.getByRole("link", { name: /info@trailcox.com/i });
    expect(link).toHaveAttribute("href", "mailto:info@trailcox.com");
  });

  it("social section heading is Redes sociales in Spanish", () => {
    render(<Footer lang="es" />);
    expect(screen.getByText("Redes sociales")).toBeInTheDocument();
  });

  it("social section heading is Social media in English", () => {
    render(<Footer lang="en" />);
    expect(screen.getByText("Social media")).toBeInTheDocument();
  });

  it("shows Instagram placeholder in Spanish when instagramUrl is empty", () => {
    render(<Footer lang="es" />);
    expect(screen.getByText("Instagram (próximamente)")).toBeInTheDocument();
  });

  it("shows Instagram placeholder in English when instagramUrl is empty", () => {
    render(<Footer lang="en" />);
    expect(screen.getByText("Instagram (coming soon)")).toBeInTheDocument();
  });

  it("legal link is Aviso legal in Spanish", () => {
    render(<Footer lang="es" />);
    expect(screen.getByText("Aviso legal")).toBeInTheDocument();
  });

  it("legal link is Legal notice in English", () => {
    render(<Footer lang="en" />);
    expect(screen.getByText("Legal notice")).toBeInTheDocument();
  });

  it("privacy link is Privacidad in Spanish", () => {
    render(<Footer lang="es" />);
    expect(screen.getByText("Privacidad")).toBeInTheDocument();
  });

  it("privacy link is Privacy in English", () => {
    render(<Footer lang="en" />);
    expect(screen.getByText("Privacy")).toBeInTheDocument();
  });

  it("copyright contains Trail Cox and current year", () => {
    render(<Footer lang="es" />);
    const year = new Date().getFullYear().toString();
    const copyright = screen.getByText(new RegExp(year));
    expect(copyright.textContent).toContain("Trail Cox");
  });

  it("renders the Trail Cox logo SVG", () => {
    const { container } = render(<Footer lang="es" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
