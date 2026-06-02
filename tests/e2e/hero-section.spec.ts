import { test, expect } from "@playwright/test";

test.describe("Hero section", () => {
  test("h1 contains Trail Cox", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Trail Cox");
  });

  test("hero has registration CTA link", async ({ page }) => {
    await page.goto("/");
    // The hero section is a <section aria-label="Trail Cox"> — use first CTA in page
    const cta = page.getByRole("link", { name: /Inscripciones/i }).first();
    await expect(cta).toBeAttached();
    await expect(cta).toHaveAttribute("href", "https://chiplevante.es/");
  });

  test("hero modality/night chips are present in Spanish", async ({ page }) => {
    await page.goto("/");
    // Chips are rendered as spans in the page — use exact match to avoid strict mode violations
    await expect(page.getByText("Nocturno", { exact: true })).toBeAttached();
    await expect(page.getByText("Trail + Senderismo", { exact: true })).toBeAttached();
  });

  test("main content landmark exists", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("main")).toBeAttached();
  });
});
