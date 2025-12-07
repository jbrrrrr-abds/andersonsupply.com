// @ts-check
import { test, expect } from '@playwright/test';

test('nav from home to services', async ({ page }) => {
  await page.goto("/services");
  await expect(page).toHaveTitle(/Anderson/);
});
