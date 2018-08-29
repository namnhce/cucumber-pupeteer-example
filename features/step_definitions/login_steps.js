const {
  Given,
  When,
  Then,
  After,
  Before
} = require("cucumber");

Given('I login', { timeout: 10000 }, async () => {
	await visitHomepage();
	await clickOnItem('Login');
	await takenToPage('login');
	await fillInFormField('identifier', email);
	await fillInFormField('password', password);
	await pressButton('Login');
	// return await shouldBeOnPage('dashboard');
});
