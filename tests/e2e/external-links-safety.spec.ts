import { test, expect } from "@playwright/test";

test.describe("External links safety", () => {
  test("all external links have rel=noopener noreferrer", async ({ page }) => {
    await page.goto("/");
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute("rel");
      expect(rel).toMatch(/noopener/);
      expect(rel).toMatch(/noreferrer/);
    }
  });

  test("chiplevante.es links are safe", async ({ page }) => {
    await page.goto("/");
    const links = page.locator('a[href="https://chiplevante.es/"]');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute("target", "_blank");
      const rel = await links.nth(i).getAttribute("rel");
      expect(rel).toMatch(/noopener/);
    }
  });

  test("sponsor links are safe when present", async ({ page }) => {
    await page.goto("/");
    const sponsorSection = page.locator("#patrocinadores");
    const sponsorLinks = sponsorSection.locator('a[target="_blank"]');
    const count = await sponsorLinks.count();
    for (let i = 0; i < count; i++) {
      const rel = await sponsorLinks.nth(i).getAttribute("rel");
      expect(rel).toMatch(/noopener/);
    }
  });

  test("no javascript: href links exist", async ({ page }) => {
    await page.goto("/");
    const jsLinks = page.locator('a[href^="javascript:"]');
    await expect(jsLinks).toHaveCount(0);
  });
});
