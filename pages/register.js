exports.RegisterPage = class RegisterPage {


    constructor(page) {
        this.page = page
        this.gender_radio = page.getByLabel('Male', { exact: true })
        this.fname_textbox = page.getByLabel('First name:')
        this.lname_textbox = page.getByLabel('Last name:')
        this.email_textbox = page.getByLabel('Email:')
        this.pw_textbox = page.getByLabel('Password:', { exact: true })
        this.confirmpw_textbox = page.getByLabel('Confirm password:')
        this.register_button = page.getByRole('button', { name: 'Register' })
        this.logout_link = page.getByRole('link', { name: 'Log out' })
    }

    async registerLogout(fname, lname, email, password, confirmpw) {
        await this.gender_radio.click()
        await this.fname_textbox.fill(fname)
        await this.lname_textbox.fill(lname)
        await this.email_textbox.fill(email)
        await this.pw_textbox.fill(password)
        await this.confirmpw_textbox.fill(confirmpw)
        await this.register_button.click()
        await this.logout_link.click()
    }

}