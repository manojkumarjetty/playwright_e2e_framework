import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test('Smoke Testcase - To validate to print a value present in an attribute', async ({page}) => {
const browser = await chromium.launch({
headless: true
})
// const context = await browser.newContext();
// page = await context.newPage();
await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
const messageInput = page.locator('#user-message:nth-child(2)'); 
console.log('Attribute value is ' + await messageInput.getAttribute('placeholder'));
await browser.close();
})
