// Dependencies
const {
  setWorldConstructor
} = require('cucumber');
const puppeteer = require('puppeteer');
const scope = require('./scope');

const World = function () {
  scope.host = "https://dautu.io/";
  scope.driver = puppeteer;
  scope.context = {};
};

setWorldConstructor(World);
