import { test, expect } from "@playwright/test";

test.describe("Map section", () => {
  test("map section exists with id=recorrido", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#recorrido")).toBeAttached();
  });

  test("map section heading is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#route-section-title")).toBeAttached();
  });

  test("map section is reachable via nav scroll (desktop)", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: /Navegación principal/i });
    await nav.getByRole("link", { name: /Recorrido/i }).click();
    await expect(page.locator("#recorrido")).toBeInViewport({ timeout: 3000 });
  });
});
