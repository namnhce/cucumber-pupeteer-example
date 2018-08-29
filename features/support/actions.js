// Dependencies
const assert = require('assert');
const pages = require('./pages');
const scope = require('./scope');

// Defines whether puppeteer runs Chrome in headless mode.
let headless = true;
let slowMo = 5;

const pending = callback => {
	callback(null, 'pending');
};

const visitHomepage = async () => {
	if (!scope.browser)
		scope.browser = await scope.driver.launch({
			headless,
			slowMo
		});

	scope.context.currentPage = await scope.browser.newPage();
	scope.context.currentPage.setViewport({
		width: 1280,
		height: 1024
	});

	const url = scope.host + pages.home;
	const visit = await scope.context.currentPage.goto(url, {
		waitUntil: 'networkidle2'
	});
	return visit;
};
