import { Sequelize } from "sequelize";
import config from "config/index";

const sequelize = new Sequelize('hcm', config.MYSQL_USERNAME, config.MYSQL_PASSWORD, {
    host: 'mysql_container',
    dialect: 'mysql'
});


const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
};

export default { connectToDatabase, sequelize }