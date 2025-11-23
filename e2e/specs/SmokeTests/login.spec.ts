import { expect, Page } from '@playwright/test';
import { test } from '../../base/fixtures';

const suiteName = '@smoke';

test.setTimeout(1200000);

test.describe('Login Test ' + suiteName, () => { 

  test.beforeEach('Test before each', async ({ page, loginPage}) => {
    await loginPage.beforeEachTest();
    await page.goto('https://letcode.in/login');
    console.log('Logged in environment is ' + process.env.ENVIRONMENT);
  })

  test('Login to Fake Store Application', async ({page, loginPage}) => {
    await page.goto('https://letcode.in/login');
    await loginPage.enterUserId('mor_2314');
    await loginPage.enterPassword('83r5^_');
    await loginPage.clickOnLogin();
    await page.getByRole('heading', { name: 'Fake Store' }).waitFor({state: "visible"});
    expect(page.getByRole('heading', { name: 'Fake Store' })).toHaveText('Fake Store');
    console.log('Login Succussful !!!');
  })

  test.afterAll('Test After All', async ({ browser }) => {
    let page: Page;
    page = await browser.newPage();
    await page.goto('https://letcode.in/login');
     console.log('Test After All Test ...');
  })
})
