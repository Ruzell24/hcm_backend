"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _database = _interopRequireDefault(require("./service/database"));
var _route = _interopRequireDefault(require("./api/user/route.js"));
var _route2 = _interopRequireDefault(require("./api/calendar/route.js"));
var _docs = _interopRequireDefault(require("./service/docs"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: '*' // Replace with your client app's origin
}));

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
_database["default"].connectToDatabase();
app.use('/api-docs', _docs["default"].swaggerUi.serve, _docs["default"].swaggerUi.setup(_docs["default"].swaggerSpec));
app.use('/api/user', _route["default"].router);
app.use('/api/calendar', _route2["default"].router);
app.get('/api', function (req, res) {
  res.send('Hello Worlssssssd');
});
var _default = app;
exports["default"] = _default;