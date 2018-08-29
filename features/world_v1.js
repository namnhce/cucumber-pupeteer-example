// Dependencies
const {
  setWorldConstructor
} = require('cucumber');
const puppeteer = require('puppeteer');
const scope = require('./support/scope');

const World = function () {
  scope.host = "https://app.dautu.io/";
  scope.driver = puppeteer;
  scope.context = {};
};

setWorldConstructor(World);
