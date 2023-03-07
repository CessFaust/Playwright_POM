import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/main'
import { RegisterPage } from '../../pages/register'

test('register', async ({ page }) => {

    const Main = new MainPage(page)
    const Register = new RegisterPage(page)

    await Main.goToMainPage()
    await Main.clickRegisterLink()
    await Register.registerLogout('chris', 'bang', 'ccbang@email.com', '123456', '123456')
});