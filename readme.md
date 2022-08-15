# A basic e-store-API for the e-commerce platform

***api is used in this site [PcMart](https://e-store-api.herokuapp.com/)<br>***

this is api for e-store <br>
you can create , update , delete and get all for products , categories and carts<br>
using auth token from [firebase](https://firebase.google.com/),<br>
no need to create user database in this project <br>
firebase is handling user auth for us<br>

<hr />

## Endpoints
- please read the [Endpoints.md](./Endpoints.md) to know more about endpoints

<hr />

## How to start 

- download and install [node.js](https://nodejs.org/en/)
- download and install [PostgreSql](https://www.postgresql.org/)
- run the following command to install the dependencies:

    ```pash
        npm install
    ```
    `you are now ready to go.`

<hr />


## Database
- after downloading PostgreSql and install it
- run the following command to connect to postgres:

    ```pash
        psql -U postgres
    ```
    to login to the database
    and write your password you created in the installation.

- after login to the database, write the following command to create the database:

    ```sql
        CREATE DATABASE store_dev;
        CREATE DATABASE store_test;
    ```

<hr />


## Environment variables
- put inside the .env file
    ```env
    PORT=3000 #or any other port
    NODE_ENV=dev #{dev, test, production}
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER='...' # your postgres username
    DB_PASSWORD='...' # your postgres password
    DB_NAME=store_dev 
    DB_TEST=store_test 
    DATABASE_URL='...' # connection string for ssl connection, production phase for heroku
    ```

<hr />

## Scripts

- To run the server
    ```pash
        npm run start
    ```

- To run the server in development mode with nodemon
    ```pash
        npm run dev
    ```

- To run db-migrate up to start the migration
    ```pash
        npm run migrate:up
    ```

- To run db-migrate down to rollback the migration
    ```pash
        npm run migrate:down
    ```

- To run prettier to format the code
    ```pash
        npm run prettier
    ```

- To run eslint to check the code
    ```pash
        npm run eslint
    ```

- To clean the code with prettier and eslint
    ```pash
        npm run format
    ```

## Directory structure
```
root:.
    ├───migrations
    │   └───sqls
    ├───spec
    │   └───support
    └───src
        ├───database
        ├───handlers
        ├───helpers
        ├───middleware
        ├───models
        └───routes
            └───APIs
```