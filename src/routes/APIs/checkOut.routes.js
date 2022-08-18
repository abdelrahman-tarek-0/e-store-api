const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/checkOut.controller.js')
const { authUserMiddleware } = require('../../middleware/auth.middleware.js')

routes.post('/', controller.checkOut)

module.exports = routes