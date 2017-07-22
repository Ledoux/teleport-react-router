'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRender = useRender;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var packageConfig = JSON.parse(_fs2.default.readFileSync(_path2.default.join(__dirname, '../../package.json')).toString('utf-8'));
var SITE_NAME = process.env.SITE_NAME;

var TELEPORT_WELCOME = void 0;
var teleportDir = _path2.default.join(__dirname, '../../config/teleport_welcome.json');
if (_fs2.default.existsSync(teleportDir)) {
  TELEPORT_WELCOME = JSON.parse(_fs2.default.readFileSync(teleportDir));
}
var TELEPORT_WELCOME_STRING = '\'' + JSON.stringify(TELEPORT_WELCOME) + '\'';

function useRender(app) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // unpack
  var extraContext = config.extraContext || {};
  // set render
  app.set('view engine', 'html');
  app.engine('html', _ejs2.default.renderFile);
  app.use(_express2.default.static(_path2.default.join(__dirname, '../'))
  // use
  );app.use('/', function (req, res) {
    // choose the correct html entry point
    var indexFileName = _config.IS_DEV ? '_dev_index.html' : '_prod_index.html';
    var indexFileDir = _path2.default.join(__dirname, '../templates/' + indexFileName
    // update the context
    );app.set('context', Object.assign(app.get('context') || {}, {
      SITE_NAME: SITE_NAME,
      TELEPORT_WELCOME_STRING: TELEPORT_WELCOME_STRING
    }, extraContext)
    // render
    );res.render(indexFileDir, app.get('context'));
  });
}