// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  // Expect that page title to have 'Anderson' somewhere in it
  await expect(page).toHaveTitle(/Anderson/);
});

test('screenshots', async ({ page}) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot();
});
