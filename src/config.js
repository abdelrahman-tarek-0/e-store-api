const dotenv = require('dotenv')
dotenv.config()

module.exports = {
   port: process.env.PORT || 3000,
   url: process.env.URL || 'http://localhost:3000',
   env: process.env.NODE_ENV || 'development',
}
