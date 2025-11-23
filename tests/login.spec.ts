import { test, expect, chromium } from '@playwright/test';

test.setTimeout(1200000);

test('Login to Fake Store Application', async ({page}) => {
    const browser = await chromium.launch({
        headless: true, // Set to true if you want to run tests in headless mode
    })
    // const context = await browser.newContext();
    // page = await context.newPage();
    await page.goto('https://letcode.in/login');
    await page.getByRole('textbox', { name: 'Enter Username' }).click();
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('mor_2314');
    await page.getByRole('textbox', { name: 'Enter Password' }).click();
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('83r5^_');
    await page.getByRole('button', { name: 'Login' }).click();
    expect(page.getByRole('heading', { name: 'Fake Store' })).toHaveText('Fake Store');
    await browser.close()
})
