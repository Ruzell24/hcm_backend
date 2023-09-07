"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jwt = _interopRequireDefault(require("../authenticator/jwt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var middleware = function middleware(req, res, next) {
  var authHeader = req.headers['authorization'];
  var token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized'
    });
  }
  try {
    var decodedUser = _jwt["default"].authenticateToken(token);
    if (!decodedUser) {
      return res.status(401).json({
        error: 'Unauthorized'
      });
    }
    req.user = decodedUser; // Store decoded user data in req.user
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({
      error: 'Unauthorized'
    });
  }
};
var _default = middleware;
exports["default"] = _default;