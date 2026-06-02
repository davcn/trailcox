import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TrailCoxLogo } from "../components/TrailCoxLogo";

describe("TrailCoxLogo", () => {
  it("renders TRAIL COX text when showText=true", () => {
    render(<TrailCoxLogo showText={true} />);
    expect(screen.getByText("TRAIL COX")).toBeInTheDocument();
  });

  it("text span has aria-label when showText=true", () => {
    render(<TrailCoxLogo showText={true} label="Trail Cox" />);
    const span = screen.getByText("TRAIL COX");
    expect(span).toHaveAttribute("aria-label", "Trail Cox");
  });

  it("SVG is presentational when showText=true", () => {
    const { container } = render(<TrailCoxLogo showText={true} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("role", "presentation");
  });

  it("SVG has img role with aria-label when showText=false", () => {
    const { container } = render(<TrailCoxLogo showText={false} label="Trail Cox Logo" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-label", "Trail Cox Logo");
  });

  it("header variant renders SVG with size 40", () => {
    const { container } = render(<TrailCoxLogo variant="header" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "40");
    expect(svg).toHaveAttribute("height", "40");
  });

  it("hero variant renders SVG with size 120", () => {
    const { container } = render(<TrailCoxLogo variant="hero" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "120");
    expect(svg).toHaveAttribute("height", "120");
  });

  it("SVG contains a shield path", () => {
    const { container } = render(<TrailCoxLogo />);
    const paths = container.querySelectorAll("path");
    expect(paths.length).toBeGreaterThan(0);
  });

  it("SVG contains a mountain polyline", () => {
    const { container } = render(<TrailCoxLogo />);
    const polyline = container.querySelector("polyline");
    expect(polyline).toBeInTheDocument();
  });

  it("SVG contains castle rect elements", () => {
    const { container } = render(<TrailCoxLogo />);
    const rects = container.querySelectorAll("rect");
    expect(rects.length).toBeGreaterThan(0);
  });

  it("renders without throwing for all variants", () => {
    expect(() => render(<TrailCoxLogo variant="header" />)).not.toThrow();
    expect(() => render(<TrailCoxLogo variant="hero" />)).not.toThrow();
    expect(() => render(<TrailCoxLogo variant="footer" />)).not.toThrow();
  });
});
