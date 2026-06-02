import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Faq } from "../components/Faq";
import { faqItems } from "../content/siteContent";

describe("Faq", () => {
  it("renders the Spanish heading", () => {
    render(<Faq lang="es" />);
    expect(screen.getByRole("heading", { name: /Preguntas frecuentes/i })).toBeInTheDocument();
  });

  it("renders the English heading", () => {
    render(<Faq lang="en" />);
    expect(screen.getByRole("heading", { name: /Frequently asked questions/i })).toBeInTheDocument();
  });

  it("section has id=faq and aria-labelledby=faq-title", () => {
    const { container } = render(<Faq lang="es" />);
    const section = container.querySelector("section#faq");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("aria-labelledby", "faq-title");
  });

  it("renders all 8 FAQ items", () => {
    const { container } = render(<Faq lang="es" />);
    const details = container.querySelectorAll("details");
    expect(details).toHaveLength(faqItems.length);
  });

  it("shows Spanish question text", () => {
    render(<Faq lang="es" />);
    expect(screen.getByText("¿Dónde me inscribo?")).toBeInTheDocument();
  });

  it("shows English question text", () => {
    render(<Faq lang="en" />);
    expect(screen.getByText("Where do I register?")).toBeInTheDocument();
  });

  it("answer is not visible initially", () => {
    const { container } = render(<Faq lang="es" />);
    const firstDetails = container.querySelector("details");
    expect(firstDetails).not.toHaveAttribute("open");
  });

  it("opens item on summary click", async () => {
    const { container } = render(<Faq lang="es" />);
    const firstSummary = container.querySelector("summary")!;
    await userEvent.click(firstSummary);
    const firstDetails = container.querySelector("details");
    expect(firstDetails).toHaveAttribute("open");
  });

  it("answer contains Chiplevante after opening first item in Spanish", async () => {
    const { container } = render(<Faq lang="es" />);
    await userEvent.click(container.querySelector("summary")!);
    expect(screen.getByText(/Chiplevante/i)).toBeInTheDocument();
  });

  it("answer contains Chiplevante after opening first item in English", async () => {
    const { container } = render(<Faq lang="en" />);
    await userEvent.click(container.querySelector("summary")!);
    expect(screen.getByText(/Chiplevante/i)).toBeInTheDocument();
  });

  it("summary elements are not disabled", () => {
    const { container } = render(<Faq lang="es" />);
    const summaries = container.querySelectorAll("summary");
    for (const s of summaries) {
      expect(s).not.toBeDisabled();
    }
  });
});
