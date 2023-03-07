exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.email_textbox = page.getByLabel('Email:')
        this.password_textbox = page.getByLabel('Password:')
        this.login_button = page.getByRole('button', { name: 'Log in' })
    }

    // async goToLoginPage(){
    //     await this.page.goto('https://the-internet.herokuapp.com/login');
    // }

    async login(email, password) {
        await this.email_textbox.fill(email)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

    //enterUsername(){
    //}

    //enterPassword(){
    // }

    // clickOnLogin(){
    // }
}