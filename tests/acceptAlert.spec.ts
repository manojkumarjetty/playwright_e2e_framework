import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test('Smoke Testcase - To validate to accept an alert', async () => {
const browser = await chromium.launch({
headless: true
})
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
page.on("dialog", async(alert) => {
const text = alert.defaultValue();
console.log(text);
await alert.accept();
})
await page.locator("button:has-text('Click Me')").nth(0).click(); 
// await page.waitForTimeout(5000)
await browser.close()
})
