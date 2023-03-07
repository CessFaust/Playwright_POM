exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page
        this.login_link = page.getByRole('link', { name: 'Log in' })
    }

    async goToMainPage(){
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async clickLoginLink() {
        await this.login_link.click()
    }

}