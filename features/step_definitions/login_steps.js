const {
  Given,
  When,
  Then,
  After,
  Before
} = require("cucumber");

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

Then('I login', { timeout: 10000 }, async () => {
	//return await visitHomepage();
	// await clickOnItem('Login');
	// await takenToPage('login');
	// await fillInFormField('identifier', email);
	// await fillInFormField('password', password);
	// await pressButton('Login');
	// return await shouldBeOnPage('dashboard');
});
