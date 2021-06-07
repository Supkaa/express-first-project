const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
module.exports = {
    app_name: process.env.APP_NAME,
    app_env:process.env.APP_ENV,
    app_url: process.env.APP_URL,
    app_port: process.env.APP_PORT,
    first_db_connection: process.env.FIRST_DB_CONNECTION,
    first_db_host: process.env.FIRST_DB_HOST,
    first_db_port: process.env.FIRST_DB_PORT,
    first_db_name: process.env.FIRST_DB_NAME,
    first_db_username: process.env.FIRST_DB_USERNAME,
    first_db_password: process.env.FIRST_DB_PASSWORD,
    second_db_connection: process.env.SECOND_DB_CONNECTION,
    second_db_host: process.env.SECOND_DB_HOST,
    second_db_port: process.env.SECOND_DB_PORT,
    second_db_name: process.env.SECOND_DB_NAME,
    second_db_username: process.env.SECOND_DB_USERNAME,
    second_db_password: process.env.SECOND_DB_PASSWORD,
};