import { Sequelize, DataTypes } from 'sequelize';
import database from '@service/database/index';

const TimeEntry = database.sequelize.define('time_entries', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_ongoing: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

});

export default TimeEntry;
