const {
  Given,
  When,
  Then,
  After,
  Before
} = require("cucumber");

Before(async function (testCase) {
  return await this.openLoginPage();
});

After(async function () {
  // return await this.closeLoginPage();
});

Given("I have logged in with account {string} and password {string}", {
  timeout: 10000
}, function (email, password) {
  this.setLoginData(email, password);
  this.doLogin();
});
