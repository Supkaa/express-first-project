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
