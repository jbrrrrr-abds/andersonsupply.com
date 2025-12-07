// @ts-check
import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1400, height: 700 } });

test.describe("match site page screenshots", () => {
  test("homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: false,
      maxDiffPixelRatio: 0.2,
    });
  });

  test("services-all", async ({ page }) => {
    await page.goto("/services");
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test("process", async ({ page }) => {
    await page.goto("/process");
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test("work", async ({ page }) => {
    await page.goto("/work");
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test("screen-printing", async ({ page }) => {
    await page.goto("/screen-printing");
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test("headwear", async ({ page }) => {
    await page.goto("/headwear");
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test("accessories", async ({ page }) => {
    await page.goto("/accessories");
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: true,
      maxDiffPixelRatio: 0.1,
    });
  });

  test("cut-and-sew", async ({ page }) => {
    await page.goto("/cut-and-sew");
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test("contact", async ({ page }) => {
    await page.goto("/contact");
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });
});

