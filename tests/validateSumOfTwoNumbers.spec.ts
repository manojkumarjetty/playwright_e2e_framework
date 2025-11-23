import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test('Smoke Testcase - To validate sum of two numbers', async ({page}) => {
const browser = await chromium.launch({
headless: true
})
// const context = await browser.newContext();
// page = await context.newPage();
await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
const sum1_input = page.locator("#sum1")
const sum2_input = page.locator("#sum2")
const getValuesBtn = page.locator("//button[text()='Get Sum']")
let num1 = 121;
let num2 = 546;
await sum1_input.fill(" "+num1);
await sum2_input.fill(" "+num2);
await getValuesBtn.click()
const result = page.locator("#addmessage")
console.log(await result.textContent());
let expectedResult = num1 + num2;
await expect(result).toHaveText(" "+expectedResult)
await browser.close()
})
