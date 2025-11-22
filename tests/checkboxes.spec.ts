import { test, expect, chromium } from '@playwright/test';

test('test', async ({ page }) => {
    const browser = await chromium.launch({
        headless: true
    })  
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').nth(1).uncheck();
  await browser.close()
});






