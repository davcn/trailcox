import { test, expect } from "@playwright/test";

test.describe("Accessibility basics", () => {
  test("page has lang attribute set to es by default", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
  });

  test("page has lang=en after language switch", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "EN" }).first().click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("images have alt attributes", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("main landmark exists", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("skip link or header landmark is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("banner")).toBeVisible();
  });

  test("footer landmark exists", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });

  test("language toggle buttons have aria-pressed", async ({ page }) => {
    await page.goto("/");
    const es = page.getByRole("button", { name: "ES" }).first();
    const en = page.getByRole("button", { name: "EN" }).first();
    await expect(es).toHaveAttribute("aria-pressed", "true");
    await expect(en).toHaveAttribute("aria-pressed", "false");
  });
});
