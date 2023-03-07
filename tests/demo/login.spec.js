import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/main'
import { LoginPage } from '../../pages/login'

test('login', async ({ page }) => {

  const Login = new LoginPage(page)
  const Main = new MainPage(page)

  await Main.goToMainPage()
  await Main.clickLoginLink()
  await Login.login('bangchan@email.com', '123456')
});

//import { RegisterPage } from '../../pages/register'


// test('register', async ({ page }) => {

//   const Main = new MainPage(page)
//   const Register = new RegisterPage(page)

//   await Main.goToMainPage()
//   await Main.clickRegisterLink()
//   await Register.registerLogout('chris','bang','cbang@email.com','123456','123456')
// });

