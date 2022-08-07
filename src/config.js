const dotenv = require('dotenv')
dotenv.config()

module.exports = {
   port: process.env.PORT || 3000,
   env: process.env.NODE_ENV || 'development',
   db_url: process.env.DB_URL || null,
   db_host: process.env.DB_HOST ,
   db_port: process.env.DB_PORT ,
   db_name: process.env.DB_NAME ,
   db_test: process.env.DB_TEST ,
   db_user: process.env.DB_USER ,
   db_pass: process.env.DB_PASS 
}
