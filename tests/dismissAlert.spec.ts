import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test('Smoke Testcase - To validate to dismiss an alert from accept and dismiss', async () => {
const browser = await chromium.launch({
headless: true
})
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
page.on("dialog", async(alert) => {
const alertText = alert.message();
console.log(alertText);
await alert.dismiss();
})
await page.locator("button:has-text('Click Me')").nth(1).click();
await expect(page.locator("id=confirm-demo")).toContainText("Cancel!");
await browser.close()
})
