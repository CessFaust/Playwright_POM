exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page
        this.login_link = page.getByRole('link', { name: 'Log in' })
        this.register_link = page.getByRole('link', { name: 'Register' })
    }

    async goToMainPage(){
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async clickLoginLink() {
        await this.login_link.click()
    }

    async clickRegisterLink() {
        await this.register_link.click()
    }

}