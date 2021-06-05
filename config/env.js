const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    app_name            = process.env.APP_NAME,
    app_env             = process.env.APP_ENV,
    app_url             = process.env.APP_URL,
    app_port            = process.env.APP_PORT,
    first_db_connection = process.env.FIRST_DB_CONNECTION,
    first_db_host       = process.env.FIRST_DB_HOST,
    first_db_port       = process.env.FIRST_DB_PORT,
    first_db_database   = process.env.FIRST_DB_DATABASE,
    first_db_username   = process.env.FIRST_DB_USERNAME,
    first_db_password   = process.env.FIRST_DB_PASSWORD,
};