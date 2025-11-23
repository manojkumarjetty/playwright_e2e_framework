import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test('Smoke Testcase - To validate Bootstrap Dropdown', async () => {
const browser = await chromium.launch({
headless: true
})
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
await page.click("#country+span");
await page.locator("ul#select2-country-results")
.locator("li", {
hasText: "India"
}).click()
await browser.close()
})
