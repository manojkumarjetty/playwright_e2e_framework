import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test('Smoke Testcase - To validate to display What is the value inside the text box', async ({ page
}) => {
const browser = await chromium.launch({
headless: true
})

// const context = await browser.newContext();
// page = await context.newPage();
await page.goto('https://letcode.in/edit');
const text = await page.getAttribute("id=getMe", "value");
console.log("The value inside the text box is "+text);
await browser.close()
})
