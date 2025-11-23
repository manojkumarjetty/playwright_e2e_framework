import { Page, type Locator, expect } from '@playwright/test';

export default class loginPage {
  page: Page;
  userId: Locator; 
  password: Locator; 
  loginBtn: Locator;

constructor(page: Page) {
  this.page = page;
  this.userId = page.getByRole('textbox', { name: 'Enter Username' });
  this.password = page.getByRole('textbox', { name: 'Enter Password' });
  this.loginBtn =  page.getByRole('button', { name: 'Login' });  
}

public async beforeEachTest() {
  console.log('Test before each Test ...');  
}

public async afterAllTest() {
  console.log('Test before each Test ...');
}

public async enterUserId(uid: string) {
  await this.userId.fill(uid);
}

public async enterPassword(pwd: string) {
  await this.password.fill(pwd);
}

public async clickOnLogin() {
  await this.loginBtn.click();
}

}
