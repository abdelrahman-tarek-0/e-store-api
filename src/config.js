const dotenv = require('dotenv')
dotenv.config()

module.exports = {
   port: process.env.PORT || 3000,
   env: process.env.NODE_ENV || 'dev',
   db_url: process.env.DATABASE_URL || null,
   db_host: process.env.DB_HOST,
   db_port: Number(process.env.DB_PORT),
   db_name:
      process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev'
         ? process.env.DB_NAME
         : process.env.DB_TEST,
   db_user: process.env.DB_USER,
   db_pass: process.env.DB_PASS,
}
