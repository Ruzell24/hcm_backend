"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../../../service/database"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var User = _database["default"].sequelize.define('users', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    // Make id the primary key
    autoIncrement: true

    // Enable auto-increment
  },

  username: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Username cannot be empty."
      }
    }
  },
  first_name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "firstName cannot be empty."
      }
    }
  },
  last_name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "lastName cannot be empty."
      }
    }
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: "email cannot be empty."
      }
    }
  },
  password: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "password cannot be empty."
      }
    }
  }
});
var _default = User;
exports["default"] = _default;