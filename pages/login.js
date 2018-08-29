const pageUrl = pageConfig.LOGIN.pageUrl

class LoginPage extends Page {

  static errorMessage () {
    return 'span[class="input-msg text-error"]'
  }

  static passwordField () {
    return 'input[type="password"]'
  }

  get emailAddress () {
    return browser.element('input[type="email"]')
  }

  get password () {
    return browser.element(LoginPage.passwordField())
  }

  get submitButton () {
    return browser.element('button[type="submit"]')
  }

  get loginForm () {
    return browser.element('form')
  }

  get errorMessage () {
    return browser.element(LoginPage.errorMessage())
  }

  open () {
    super.open(pageUrl)
    browser.pause(1000) // Fixes issue with Chrome freezing
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
