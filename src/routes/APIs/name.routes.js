const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/name.controller.js')

routes.get('/', controller.name)

module.exports = routes
