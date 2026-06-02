import { test, expect } from "@playwright/test";

test.describe("Registration links", () => {
  test("desktop CTA in header links to chiplevante.es with safe attrs", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("link", { name: /Inscripciones/i }).first();
    await expect(cta).toHaveAttribute("href", "https://chiplevante.es/");
    await expect(cta).toHaveAttribute("target", "_blank");
    await expect(cta).toHaveAttribute("rel", /noopener/);
  });

  test("hero CTA links to chiplevante.es", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("#inicio");
    const cta = hero.getByRole("link", { name: /Inscripciones/i }).first();
    await expect(cta).toHaveAttribute("href", "https://chiplevante.es/");
  });

  test("route cards registration links point to chiplevante.es", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#carrera");
    const links = section.getByRole("link", { name: /Inscríbete|Inscripciones|Register/i });
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute("href", "https://chiplevante.es/");
    }
  });

  test("registration links in English mode", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "EN" }).first().click();
    const cta = page.getByRole("link", { name: /^Register$/i }).first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "https://chiplevante.es/");
  });
});
