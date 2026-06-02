import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageToggle } from "../components/LanguageToggle";

describe("LanguageToggle", () => {
  it("renders ES and EN buttons", () => {
    render(<LanguageToggle lang="es" setLang={vi.fn()} />);
    expect(screen.getByRole("button", { name: /ES/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /EN/i })).toBeInTheDocument();
  });

  it("marks ES as pressed when lang=es", () => {
    render(<LanguageToggle lang="es" setLang={vi.fn()} />);
    expect(screen.getByRole("button", { name: /ES/i })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: /EN/i })).toHaveAttribute("aria-pressed", "false");
  });

  it("marks EN as pressed when lang=en", () => {
    render(<LanguageToggle lang="en" setLang={vi.fn()} />);
    expect(screen.getByRole("button", { name: /EN/i })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: /ES/i })).toHaveAttribute("aria-pressed", "false");
  });

  it("calls setLang with en when EN is clicked", async () => {
    const setLang = vi.fn();
    render(<LanguageToggle lang="es" setLang={setLang} />);
    await userEvent.click(screen.getByRole("button", { name: /EN/i }));
    expect(setLang).toHaveBeenCalledWith("en");
  });

  it("calls setLang with es when ES is clicked", async () => {
    const setLang = vi.fn();
    render(<LanguageToggle lang="en" setLang={setLang} />);
    await userEvent.click(screen.getByRole("button", { name: /ES/i }));
    expect(setLang).toHaveBeenCalledWith("es");
  });

  it("has a group role with bilingual aria-label", () => {
    render(<LanguageToggle lang="es" setLang={vi.fn()} />);
    const group = screen.getByRole("group");
    expect(group).toHaveAttribute("aria-label", expect.stringContaining("idioma"));
    expect(group).toHaveAttribute("aria-label", expect.stringContaining("language"));
  });

  it("separator is aria-hidden", () => {
    const { container } = render(<LanguageToggle lang="es" setLang={vi.fn()} />);
    const separator = container.querySelector('[aria-hidden="true"]');
    expect(separator).toBeInTheDocument();
    expect(separator?.textContent).toBe("|");
  });
});
