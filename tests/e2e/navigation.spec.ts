import { test, expect } from "@playwright/test";

test.describe("Navigation — desktop", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("header contains logo, nav links, language switcher and CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /Trail Cox.*Inicio/i })).toBeVisible();
    await expect(page.getByRole("navigation", { name: /Navegación principal/i })).toBeVisible();
    await expect(page.getByRole("group", { name: /idioma/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Inscripciones/i }).first()).toBeVisible();
  });

  test("nav contains expected section links", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: /Navegación principal/i });
    await expect(nav.getByRole("link", { name: /Carrera/i })).toBeVisible();
    await expect(nav.getByRole("link", { name: /Recorrido/i })).toBeVisible();
    await expect(nav.getByRole("link", { name: /Galería/i })).toBeVisible();
    await expect(nav.getByRole("link", { name: /FAQ/i })).toBeVisible();
  });

  test("clicking Recorrido nav link scrolls to route section", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: /Navegación principal/i });
    await nav.getByRole("link", { name: /Recorrido/i }).click();
    await expect(page.locator("#recorrido")).toBeInViewport({ timeout: 3000 });
  });

  test("registration CTA links to chiplevante.es", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("link", { name: /Inscripciones/i }).first();
    await expect(cta).toHaveAttribute("href", "https://chiplevante.es/");
  });
});

test.describe("Navigation — mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("hamburger opens mobile menu", async ({ page }) => {
    await page.goto("/");
    const burger = page.getByRole("button", { name: /menú/i });
    await expect(burger).toHaveAttribute("aria-expanded", "false");
    await burger.click();
    await expect(burger).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#mobile-menu")).toBeVisible();
  });

  test("mobile menu contains registration link", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /menú/i }).click();
    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu.getByRole("link", { name: /Inscripciones/i })).toBeVisible();
  });

  test("clicking FAQ in mobile menu closes menu and scrolls to section", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /menú/i }).click();
    await page.locator("#mobile-menu").getByRole("link", { name: /FAQ/i }).click();
    await expect(page.getByRole("button", { name: /menú/i })).toHaveAttribute("aria-expanded", "false");
  });
});
