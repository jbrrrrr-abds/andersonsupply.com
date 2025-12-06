// @ts-check
import { test, expect } from '@playwright/test';

test('nav from home to services', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Start Now').click();
  // Expect that the contact page is navigated to
  await page.waitForURL('**/services')
  await expect(page).toHaveTitle(/Services/)
});
