"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var generateToken = function generateToken(userDetails) {
  try {
    var token = _jsonwebtoken["default"].sign({
      userDetails: userDetails
    }, _config["default"].SECRET_KEY, {
      expiresIn: '1h'
    });
    return token;
  } catch (error) {
    throw new Error('generateToken failed');
  }
};
var authenticateToken = function authenticateToken(token) {
  try {
    var user = _jsonwebtoken["default"].verify(token, _config["default"].SECRET_KEY);
    return user;
  } catch (error) {
    throw new Error('Token verification failed or has expired');
  }
};
var _default = {
  generateToken: generateToken,
  authenticateToken: authenticateToken
};
exports["default"] = _default;