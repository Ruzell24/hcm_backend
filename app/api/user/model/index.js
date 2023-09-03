import { DataTypes } from "sequelize";
import database from "@service/database/index";

const User = database.sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,        // Make id the primary key
        autoIncrement: true,
        // Enable auto-increment
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Username cannot be empty."
            },
        },
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "firstName cannot be empty."
            },
        }
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "lastName cannot be empty."
            },
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "email cannot be empty."
            },
        }
        // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "password cannot be empty."
            },
        }
        // allowNull defaults to true
    },
})


export default User