import { test, expect, chromium } from '@playwright/test';

test('Open letcode', async ({page}) => {
    const browser = await chromium.launch({
        headless: false, // Set to true if you want to run tests in headless mode
    })
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://letcode.in/');
    await page.click("text=Log in");
    await page.fill("input[name='email']", 'koushik350@gmail.com');
    await page.fill("input[name='password']", 'Pass123$');
    await page.click('button:text("LOGIN")')
    await page.click('"Sign out"');
    await browser.close()
})
