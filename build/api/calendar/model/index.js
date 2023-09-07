"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../../../service/database"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TimeEntry = _database["default"].sequelize.define('time_entries', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  start_time: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false
  },
  end_time: {
    type: _sequelize.DataTypes.DATE,
    allowNull: true
  },
  duration: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true
  },
  is_ongoing: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  }
});
var _default = TimeEntry;
exports["default"] = _default;