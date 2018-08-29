'use strict'
const loginPage = require('../../pageobjects/login')

const {
  Given,
  When,
  Then
} = require('cucumber');

Given(/^I am open dautu page$/, function () {
  loginPage.open()
  loginPage.doLogin("nhnam94@gmail.com","Namnguyen2112")
});

// When(/^I am typing my search request {stringInDoubleQuotes} on GitHub$/, function (stringInDoubleQuotes, callback) {
//   // Write code here that turns the phrase above into concrete actions
//   callback(null, 'pending');
// });

// Then('I am pressing {stringInDoubleQuotes} key on GitHub', function (stringInDoubleQuotes, callback) {
//   // Write code here that turns the phrase above into concrete actions
//   callback(null, 'pending');
// });

// Then('I should see that the first GitHub\'s result is {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
//   // Write code here that turns the phrase above into concrete actions
//   callback(null, 'pending');
// });

// module.exports = function () {

// };
