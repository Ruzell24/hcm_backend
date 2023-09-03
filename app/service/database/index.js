import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize('hmc_db', 'root', 'password', {
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

export default connectToDatabase