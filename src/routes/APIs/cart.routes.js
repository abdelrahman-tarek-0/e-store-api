const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/cart.controller.js')

routes.get('/all', controller.getAllCarts)
routes.get('/', controller.getCart)
routes.post('/', controller.createCart)
routes.patch('/', controller.updateCart)
routes.delete('/', controller.deleteCart)

module.exports = routes
