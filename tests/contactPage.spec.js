// @ts-check
import { test, expect } from '@playwright/test';

test('nav from home to contact', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Start Now').click();
  // Expect that the contact page is navigated to
  await page.waitForURL('**/contact')
  await expect(page).toHaveTitle(/Contact/);
});
