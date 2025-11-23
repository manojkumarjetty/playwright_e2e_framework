import { test, expect, chromium, Page } from '@playwright/test';

let facebookPage: Page;

test.setTimeout(60000);

// Program : Interact with multiple tabs
test("Interact with multiple tabs", async ({ page }) => {
await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
// console.log(page.url());
const [multiPage] = await Promise.all([
page.waitForEvent("popup"),
page.click("#followboth")
])
await multiPage.waitForLoadState();
const pages = multiPage.context().pages();
console.log('No.of tabs: ' + pages.length);
pages.forEach(tab => {
console.log(tab.url());
})
for (let index = 0; index < pages.length; index++) {
const url = pages[index].url()
if (url ==
"https://www.facebook.com/lambdatest/") {
facebookPage = pages[index];
}
}
const text = await facebookPage.textContent("//h1")
console.log(text);
// await pages[1].fill("", "kous");
// const [newWindow] = await Promise.all([
// page.waitForEvent("popup"),
// page.click("'Follow On Twitter'")
// ]);
// console.log(newWindow.url());
// newWindow.fill("", "")
})

// Program : To verify single window handling
test("To verify single window handling", async ({ page }) => {
const browser = await chromium.launch({
headless: true
})
const context = await browser.newContext();
page = await context.newPage();
await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
console.log(page.url());
const [newWindow] = await Promise.all([
page.waitForEvent("popup"),
page.click("'Follow On Twitter'")
]);
console.log(newWindow.url());
await page.waitForTimeout(3000);
await browser.close();
})

// Program : To verify multiple windows handling

test("To verify multiple windows handling", async ({ page }) => {
const browser = await chromium.launch({
headless: false
})
// const context = await browser.newContext();
// page = await context.newPage();
await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
// console.log(page.url());
const [multiPage] = await Promise.all([
page.waitForEvent("popup"),
page.click("#followboth")
])
await multiPage.waitForLoadState();
const pages = multiPage.context().pages();
console.log('No.of tabs: ' + pages.length);
await page.waitForTimeout(3000);
pages.forEach(tab => {
console.log(tab.url());
})
for (let index = 0; index < pages.length; index++) {
const url = pages[index].url()
if (url ==
"https://www.facebook.com/lambdatest/") {
facebookPage = pages[index];
}
}
const text = await facebookPage.textContent("//h1")
console.log(text);
await browser.close()
})
