import { test, expect, chromium } from "@playwright/test";
const computerData = [{
name: "Comp A",
manufacture: "Tandy Corporation"
},
{
name: "Comp B",
manufacture: "Commodore International"
},
{
name: "Comp C",
manufacture: "Thinking Machines"
},
{
name: "Comp D",
manufacture: "Nokia"
}
]
computerData.forEach(data => {
test.skip(`Parameterized test ${data.name}`
, async ({ page }) => {
const browser = await chromium.launch({
headless: true
})
const context = await browser.newContext();
page = await context.newPage();
await page.goto("https://computer-database.gatling.io/computers");
await page.click("#add");
await page.fill("#name", data.name);
await page.selectOption("#company", {
label: data.manufacture
});
await page.click("input[type='submit']");
expect(page.locator("div.alert-message.warning")).toContainText("Done")
})
})
