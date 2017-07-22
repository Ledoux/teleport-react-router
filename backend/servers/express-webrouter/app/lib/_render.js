'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderWithApp = renderWithApp;
var express = require('express');
var ejs = require('ejs');
var path = require('path');

function renderWithApp(app) {
  app.set('view engine', 'html');
  app.engine('html', ejs.renderFile);
  app.use(express.static(path.join(__dirname, '../')));
}