import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/main'
import { LoginPage } from '../../pages/login'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)
  const Main = new MainPage(page)

  await Main.goToMainPage()
  await Main.clickLoginLink()
  await Login.login('bangchan@email.com', '123456')
  // await Login.goToLoginPage()
  // await Login.login('tomsmith', 'SuperSecretPassword!')

  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});