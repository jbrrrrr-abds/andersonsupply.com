// @ts-check
import { test, expect } from '@playwright/test';

test('screenshots', async ({page}) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot();

  await page.goto("/services");
  await expect(page).toHaveScreenshot();

  await page.goto("/process");
  await expect(page).toHaveScreenshot();

  await page.goto("/work");
  await expect(page).toHaveScreenshot();

  await page.goto("/about");
  await expect(page).toHaveScreenshot();

  await page.goto("/screen-printing");
  await expect(page).toHaveScreenshot();

  await page.goto("/headwear");
  await expect(page).toHaveScreenshot();

  await page.goto("/accessories");
  await expect(page).toHaveScreenshot();

  await page.goto("/cut-and-sew");
  await expect(page).toHaveScreenshot();

  await page.goto("/screen-printing");
  await expect(page).toHaveScreenshot();

  await page.goto("/contact");
  await expect(page).toHaveScreenshot();
});
