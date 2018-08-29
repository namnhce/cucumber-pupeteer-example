const {
  setWorldConstructor
} = require("cucumber");
const {
  expect
} = require("chai");
const puppeteer = require("puppeteer");

const PAGE = "https://app.dautu.io/login";

class CustomWorld {
  constructor() {
    this.email = "";
    this.password = "";
  }

  static emailField() {
    return 'input[type="email"]';
  }

  static passwordField() {
    return 'input[type="password"]';
  }

  static loginButton() {
    return 'button[type="submit"]';
  }

  async openLoginPage() {
    this.browser = await puppeteer.launch({
      headless: false,
      slowMo: 200
    });
    this.page = await this.browser.newPage();
    await this.page.goto(PAGE);
  }

  setLoginData(email, password) {
    this.email = email;
    this.password = password;
  }

  async doLogin() {
    await this.page.waitForSelector('input[type="email"]');
    this.inputElement = await this.page.$('input[type="email"]');
    await this.inputElement.type(this.email);

    await this.page.waitForSelector('input[type="password"]');
    this.inputElement = await this.page.$('input[type="password"]');
    await this.inputElement.type(this.password);

    await this.page.waitForSelector('button[type="submit"]');
    this.inputElement = await this.page.$('button[type="submit"]');
    await this.inputElement.click('button[type="submit"]');
  }

  async closeLoginPage() {
    await this.browser.close();
  }

  const visitHomepage = async () => {
    if (!this.browser)
      this.browser = await this.driver.launch({
        headless,
        slowMo
      });
    this.context.currentPage = await this.browser.newPage();
    this.context.currentPage.setViewport({
      width: 1280,
      height: 1024
    });
    const url = this.host + pages.home;
    const visit = await this.context.currentPage.goto(url, {
      waitUntil: 'networkidle2'
    });
    return visit;
  };

}

setWorldConstructor(CustomWorld);
