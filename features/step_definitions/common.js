// Dependencies
const { Given, When, Then } = require('cucumber');
const {
  visitHomepage,
  pending,
  clickOnItem,
  hoverOverItem,
  takenToPage,
  fillInFormField,
  reloadPage,
  pressButton,
  wait,
  shouldBeOnPage,
  shouldSeeText
} = require('../support/actions');

Given('I am on the homepage', visitHomepage);

When('I click on {string}', clickOnItem);

// When('I am taken to the {string} page', takenToPage);

// When('I fill in {string} with {string}', fillInFormField);

// When('I press {string}', pressButton);

// Then('I should be on the {string} page', shouldBeOnPage);

Given('pending', pending);

// Then('I should see {string}', shouldSeeText);

// Then('I should not see {string}', shouldNotSeeText);

// Then('I reload the page', reloadPage);

// Then('I wait for {int} seconds', { timeout: 60 * 1000 }, wait);
