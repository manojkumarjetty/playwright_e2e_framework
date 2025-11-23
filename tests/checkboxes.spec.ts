import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test('test', async ({ page }) => {
    const browser = await chromium.launch({
        headless: true
    })  
  // const context = await browser.newContext();
  // page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await page.getByRole('checkbox').first().check();
  await expect(page.getByRole('checkbox').first()).toBeChecked();
  await page.getByRole('checkbox').nth(1).uncheck();
  await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();
  await browser.close()
});

