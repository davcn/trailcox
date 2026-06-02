import { test, expect } from "@playwright/test";

test.describe("SEO metadata", () => {
  test("page title contains Trail Cox", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Trail Cox/);
  });

  test("meta description is present", async ({ page }) => {
    await page.goto("/");
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute("content", /.+/);
  });

  test("og:title is present", async ({ page }) => {
    await page.goto("/");
    const og = page.locator('meta[property="og:title"]');
    await expect(og).toHaveAttribute("content", /.+/);
  });

  test("og:image is present", async ({ page }) => {
    await page.goto("/");
    const og = page.locator('meta[property="og:image"]');
    await expect(og).toHaveAttribute("content", /.+/);
  });

  test("canonical or og:url is present", async ({ page }) => {
    await page.goto("/");
    const canonical = page.locator('link[rel="canonical"]');
    const ogUrl = page.locator('meta[property="og:url"]');
    const hasCanonical = await canonical.count() > 0;
    const hasOgUrl = await ogUrl.count() > 0;
    expect(hasCanonical || hasOgUrl).toBe(true);
  });

  test("robots meta is not noindex", async ({ page }) => {
    await page.goto("/");
    const robots = page.locator('meta[name="robots"]');
    const count = await robots.count();
    if (count > 0) {
      const content = await robots.getAttribute("content");
      expect(content).not.toMatch(/noindex/i);
    }
  });
});
