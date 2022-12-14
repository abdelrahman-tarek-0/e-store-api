const express = require('express')
const routes = require('./routes/index.routes')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const expressRateLimit = require('express-rate-limit')
const errorHandlerMiddleware = require('./middleware/error.middleware.js')
const config = require('./config')

// config the server
const app = express()
const PORT = config.port

app.use(morgan('dev'))
app.use(
   expressRateLimit({
      windowMs: 30 * 1000,
      max: 15,
      standardHeaders: true,
      legacyHeaders: false,
   })
)

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/', (req, res) => {
   res.json({
      message:
         'hi! refer to the documentation at <https://github.com/abdelrahman-tarek-0/e-store-api/blob/main/Endpoints.md>',
   })
})

app.use('/api', routes)

// error handling
app.use(errorHandlerMiddleware)
app.use((_req, res) => {
   res.status(404).json({
      message:
         'API route not found (check the documentation <https://github.com/abdelrahman-tarek-0/e-store-api/blob/main/Endpoints.md>)',
   })
})

app.listen(PORT, () => {
   console.log('server is running')
   console.log(`on localhost:${PORT}`)
})

module.exports = app
