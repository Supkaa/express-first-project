# install node nginx pgsql

    brew install node nginx postgresql

# install express and dependencies

    npm i express
    npm i dotenv knex objection pg

# install dev dependencies (only devlocal)

    npm install --save-dev nodemon

# create user and database

    CREATE ROLE <user_name> WITH LOGIN PASSWORD '<password>';
    CREATE DATABASE <dbname>;
    GRANT ALL PRIVILEGES ON DATABASE <dbname> TO <user_name>;

# add on "scripts" into package.json

    "start": "node index.js",
    "dev": "nodemon index.js",
    "knex": "npx knex --knexfile config/database.js",
    "migrate": "npx knex --knexfile config/database.js migrate:latest"

# initialization env on config

    const dotenv = require('dotenv');
    dotenv.config({path:'/path/to/.env'});

# initialization knex on config

    npx knex init

    I'll rename config knexfile to database and move it right directory "config"

    const { knexSnakeCaseMappers } = require('objection'); need to change camelCase to snake_case
    const { fields} = require('./env');
