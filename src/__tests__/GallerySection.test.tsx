import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GallerySection } from "../components/GallerySection";

describe("GallerySection", () => {
  it("renders the first image counter as 1 / 6", () => {
    render(<GallerySection lang="es" />);
    expect(screen.getByText("1 / 6")).toBeInTheDocument();
  });

  it("prev button has correct aria-label in Spanish", () => {
    render(<GallerySection lang="es" />);
    expect(screen.getByRole("button", { name: "Imagen anterior" })).toBeInTheDocument();
  });

  it("next button has correct aria-label in Spanish", () => {
    render(<GallerySection lang="es" />);
    expect(screen.getByRole("button", { name: "Imagen siguiente" })).toBeInTheDocument();
  });

  it("prev button has correct aria-label in English", () => {
    render(<GallerySection lang="en" />);
    expect(screen.getByRole("button", { name: "Previous image" })).toBeInTheDocument();
  });

  it("next button has correct aria-label in English", () => {
    render(<GallerySection lang="en" />);
    expect(screen.getByRole("button", { name: "Next image" })).toBeInTheDocument();
  });

  it("clicking next advances to image 2", async () => {
    render(<GallerySection lang="es" />);
    await userEvent.click(screen.getByRole("button", { name: "Imagen siguiente" }));
    expect(screen.getByText("2 / 6")).toBeInTheDocument();
  });

  it("clicking prev from first image wraps to last", async () => {
    render(<GallerySection lang="es" />);
    await userEvent.click(screen.getByRole("button", { name: "Imagen anterior" }));
    expect(screen.getByText("6 / 6")).toBeInTheDocument();
  });

  it("clicking a dot sets that image as active", async () => {
    render(<GallerySection lang="es" />);
    const dots = screen.getAllByRole("tab");
    await userEvent.click(dots[2]);
    expect(screen.getByText("3 / 6")).toBeInTheDocument();
    expect(dots[2]).toHaveAttribute("aria-selected", "true");
  });

  it("first dot is initially selected", () => {
    render(<GallerySection lang="es" />);
    const dots = screen.getAllByRole("tab");
    expect(dots[0]).toHaveAttribute("aria-selected", "true");
    expect(dots[1]).toHaveAttribute("aria-selected", "false");
  });

  it("dot buttons have Imagen N aria-labels in Spanish", () => {
    render(<GallerySection lang="es" />);
    expect(screen.getByRole("tab", { name: "Imagen 1" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Imagen 6" })).toBeInTheDocument();
  });

  it("dot buttons have Image N aria-labels in English", () => {
    render(<GallerySection lang="en" />);
    expect(screen.getByRole("tab", { name: "Image 1" })).toBeInTheDocument();
  });

  it("dot buttons have minimum 24px tap targets", () => {
    const { container } = render(<GallerySection lang="es" />);
    const buttons = container.querySelectorAll('[role="tablist"] button');
    for (const btn of buttons) {
      const el = btn as HTMLElement;
      expect(el.style.minWidth).toBe("1.5rem");
      expect(el.style.minHeight).toBe("1.5rem");
    }
  });

  it("gallery CTA has correct href and safe attributes", () => {
    render(<GallerySection lang="es" />);
    const cta = screen.getByRole("link", { name: /galería completa/i });
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta).toHaveAttribute("rel", "noopener noreferrer");
    expect(cta.getAttribute("href")).toContain("flickr.com");
  });

  it("gallery CTA reads View full gallery in English", () => {
    render(<GallerySection lang="en" />);
    expect(screen.getByRole("link", { name: /View full gallery/i })).toBeInTheDocument();
  });
});
