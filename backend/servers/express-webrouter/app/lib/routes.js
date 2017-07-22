'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routesWithApp = routesWithApp;
var path = require('path');

var SITE_NAME = process.env.SITE_NAME;
function routesWithApp(app) {

  // we try to get the teleport object that
  // gives the global config of the whole app
  // and we feed the context of the render with that
  var TELEPORT_WELCOME = app.get('TELEPORT_WELCOME') || {};
  var TELEPORT_WELCOME_STRING = '\'' + JSON.stringify(TELEPORT_WELCOME) + '\'';
  var context = {
    SITE_NAME: SITE_NAME,
    TELEPORT_WELCOME: TELEPORT_WELCOME,
    TELEPORT_WELCOME_STRING: TELEPORT_WELCOME_STRING

    // home route
  };app.get('/', function (req, res) {
    console.log('req', req.params);
    var indexFileName = process.env.TYPE === 'localhost' ? '_dev_index.html' : '_prod_index.html';
    var indexFileDir = path.join(__dirname, '../templates/' + indexFileName);
    res.render(indexFileDir, context);
  });
}