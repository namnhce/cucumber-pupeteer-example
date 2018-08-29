'use strict'
const Page = require('./page')
const pageConfig = require('../config/pages')
const pageUrl = "https://app.dautu.io/login"

class LoginPage extends Page {

  static errorMessage () {
    return 'small[class="error-message show"]'
  }

  get emailAddress () {
    return browser.element('input[type="email"]')
  }

  get password () {
    return browser.element('button[type="submit"]')
  }

  get submitButton () {
    return browser.element('button[type="submit"]')
  }

  open () {
    super.open(pageUrl)
  }

  expectedPageUrl () {
    return super.expectedPageUrl(pageUrl)
  }

  constructor () {
    super()
    this.waitForForm = () => {
      return browser.waitForVisible('input[type="email"]', 30000)
    }
  }

  doLogin (login, password) {
    this.waitForForm()
    this.emailAddress.click()
    this.emailAddress.setValue(login)
    this.password.click()
    this.password.setValue(password)
    this.clickSignIn()
  }

  waitForRoutesPageToLoad () {
    routesPage.waitForPageToLoad()
  }

  clickSignIn () {
    do {
      browser.pause(200)
      this.submitButton.click()
    }
    while (browser.isVisible(LoginPage.errorMessage()))
  }

}
module.exports = new LoginPage()
