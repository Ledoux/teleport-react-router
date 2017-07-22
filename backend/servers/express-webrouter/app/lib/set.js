'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setWithApp = setWithApp;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT;
function setWithApp(app) {
  app.set('port', PORT || 5000);
  var teleportDir = _path2.default.join(__dirname, '../../config/teleport_welcome.json');
  if (_fs2.default.existsSync(teleportDir)) {
    var TELEPORT_WELCOME = JSON.parse(_fs2.default.readFileSync(teleportDir));
    app.set('TELEPORT_WELCOME', TELEPORT_WELCOME);
  }
}