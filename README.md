# SHORTS OF STRUCTURE

    |-app/       - main backend directory
     |--Controller/ - directory where u create Controllers(used to process Request)
     |--Model/      - directory where u create Models(used to process information of DB table)
     |--Service     - directory where u create Services(used to process business logic)
    |-config/    - main config directory
    |-database/  - main DB directory
     |--migrations/ - directory where u create migrations
     |--seeds/      - directory where u create seeds
    |-resources/ - main frontend directory
     |--css/   - directory where u create styles
     |--js/    - directory where u create scripts
     |--views/ - directory where u create layouts
    |-routes/    - main routes directory
    |-.env       - environment file

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

    I'll rename config knexfile to database and move it into right directory "config"

    const { knexSnakeCaseMappers } = require('objection'); need to change camelCase to snake_case
    const { fields } = require('/path/to/.env');

# nginx config

    I created nodeJS server on 3000 PORT, because

    server {
        listen 80;
        server_name <server_name>;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
