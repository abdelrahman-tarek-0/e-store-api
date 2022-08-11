const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/cart.controller.js')
const {authAdminMiddleware,authUserMiddleware} = require('../../middleware/auth.middleware.js')


routes.get('/all',authAdminMiddleware, controller.getAllCarts)
routes.get('/',authUserMiddleware, controller.getCart)
routes.post('/',authUserMiddleware, controller.createCart)
routes.patch('/',authUserMiddleware, controller.updateCart)
routes.delete('/',authUserMiddleware, controller.deleteCart)

module.exports = routes
