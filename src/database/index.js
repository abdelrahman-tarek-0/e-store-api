const pg = require('pg')
const config = require('../config')
let dbConfig = {}
if (config.env === 'production' || config.env === 'prod') {
   dbConfig = {
      connectionString: config.db_url,
      ssl: {
         rejectUnauthorized: false,
      },
   }
} else {
   dbConfig = {
      user: config.db_user,
      password: config.db_pass,
      host: config.db_host,
      port: config.db_port,
      database: config.db_name,
   }
}

const pool = new pg.Pool(dbConfig)
pool.on('error', (error) => {
   throw new Error('Error connecting to database: ' + error.message)
})

module.exports = pool
