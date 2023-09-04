import dotenv from 'dotenv'

dotenv.config()



export default {
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_USERNAME: process.env.MYSQL_ROOT_USERNAME,
    SECRET_KEY: process.env.SECRET_KEY
}