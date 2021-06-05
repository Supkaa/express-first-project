# install node nginx pgsql

    brew install node nginx postgresql

# install express and dependencies

    npm i express
    npm i dotenv knex objection pg

# install dev dependencies (only devlocal)

    npm install --save-dev nodemon

# create user and database

    CREATE ROLE <user_name> WITH LOGIN PASSWORD <password>;
    GRANT ALL PRIVILEGES ON DATABASE <dbname> TO <user_name>;
