const pageUrl = pageConfig.LOGIN.pageUrl

class LoginPage extends Page {

  static errorMessage () {
    return 'span[class="input-msg text-error"]'
  }

  static passwordField () {
    return 'input[type="password"]'
  }

  static emailField () {
    return 'input[type="email"]'
  }
}
module.exports = new LoginPage()
