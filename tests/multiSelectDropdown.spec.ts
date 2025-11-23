import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test('Smoke Testcase - To validate Multi select dropdown using index,label and value', async () => {
const browser = await chromium.launch({
headless: true
})
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
await page.selectOption("#multi-select", [{
label: "Texas"
}, {
index : 2
}, {
value: "Washington"
}])
await browser.close()
})
