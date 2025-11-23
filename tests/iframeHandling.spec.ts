import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000);

test("To verify number of frames", async ({ page }) => {
const browser = await chromium.launch({
headless: false
})
// const context = await browser.newContext();
// page = await context.newPage();
await page.goto("https://letcode.in/frame");
const allframes = page.frames();
console.log("No.of frames: " + allframes.length);
// To verify writing text into textbox in iframe
const myFrame = page.frame("firstFr")
// if (myFrame != null) {
// await myFrame.fill("", "")
// }
await myFrame?.fill("input[name='fname']", "Playwright")
await myFrame?.fill("input[name='lname']", "Automation")
expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")
await page.waitForTimeout(3000);
// To verfiy frames using iframe locator
const frame = page.frameLocator("#firstFr")
await frame.locator("input[name='fname']").fill("Playwright");
await frame.locator("input[name='lname']").fill("Automation");
// To verify Nested frames
// locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().locator('div').filter({ hasText: 'Email' }).nth(2)
// const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
const innerFrame = page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().locator('div').filter({ hasText: 'Email' }).nth(2);
await innerFrame.locator("input[name='email']").fill("qa@testing.com")
await frame.locator("input[name='fname']").fill("letcode");
})
