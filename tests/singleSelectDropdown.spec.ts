import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test('Smoke Testcase - To validate Single select dropdown using label, value and index', async () => {
const browser = await chromium.launch({
headless: true
})
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
// Single select dropdown using label
await page.selectOption("#select-demo", {
label : "Tuesday"
})
// Single select dropdown using value
await page.selectOption("#select-demo", {
value : "Friday"
})
// Single select dropdown using index
await page.selectOption("#select-demo", {
index: 5
})
await browser.close()
})
