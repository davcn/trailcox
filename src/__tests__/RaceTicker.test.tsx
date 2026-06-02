import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { RaceTicker } from "../components/RaceTicker";

vi.mock("../hooks/usePrefersReducedMotion", () => ({
  usePrefersReducedMotion: vi.fn(() => false),
}));

import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

describe("RaceTicker — normal motion", () => {
  beforeEach(() => {
    vi.mocked(usePrefersReducedMotion).mockReturnValue(false);
  });

  it("renders ticker track with role=presentation", () => {
    const { container } = render(<RaceTicker />);
    expect(container.querySelector('[role="presentation"]')).toBeInTheDocument();
  });

  it("outer container is aria-hidden", () => {
    const { container } = render(<RaceTicker />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("contains key race terms", () => {
    render(<RaceTicker />);
    expect(screen.getAllByText("TRAIL COX").length).toBeGreaterThan(0);
    expect(screen.getAllByText("CASTILLO").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOCTURNO").length).toBeGreaterThan(0);
    expect(screen.getAllByText("INSCRIPCIONES").length).toBeGreaterThan(0);
  });
});

describe("RaceTicker — reduced motion", () => {
  beforeEach(() => {
    vi.mocked(usePrefersReducedMotion).mockReturnValue(true);
  });

  it("renders static layout without ticker-track", () => {
    const { container } = render(<RaceTicker />);
    expect(container.querySelector(".ticker-track")).not.toBeInTheDocument();
  });

  it("outer container is still aria-hidden", () => {
    const { container } = render(<RaceTicker />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("still shows key terms in static mode", () => {
    render(<RaceTicker />);
    expect(screen.getAllByText("TRAIL COX").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOCTURNO").length).toBeGreaterThan(0);
  });
});
