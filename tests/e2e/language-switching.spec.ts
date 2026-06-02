import { test, expect } from "@playwright/test";

test.describe("Language switching", () => {
  test("page loads in Spanish by default", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /Inscripciones/i }).first()).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page).toHaveTitle(/Trail Cox/);
  });

  test("ES button is pressed by default", async ({ page }) => {
    await page.goto("/");
    const es = page.getByRole("button", { name: "ES" }).first();
    await expect(es).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("button", { name: "EN" }).first()).toHaveAttribute("aria-pressed", "false");
  });

  test("switching to English updates CTA and lang attribute", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "EN" }).first().click();
    await expect(page.getByRole("link", { name: /^Register$/i }).first()).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("button", { name: "EN" }).first()).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("button", { name: "ES" }).first()).toHaveAttribute("aria-pressed", "false");
  });

  test("switching back to Spanish restores labels", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "EN" }).first().click();
    await page.getByRole("button", { name: "ES" }).first().click();
    await expect(page.getByRole("link", { name: /Inscripciones/i }).first()).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
  });

  test("h1 always reads Trail Cox regardless of language", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Trail Cox");
    await page.getByRole("button", { name: "EN" }).first().click();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Trail Cox");
  });
});
