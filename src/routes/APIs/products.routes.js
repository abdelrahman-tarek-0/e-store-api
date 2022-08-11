const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/products.controller.js')
const {authAdminMiddleware,authUserMiddleware} = require('../../middleware/auth.middleware.js')


routes.get('/all', controller.getAllProducts)
routes.get('/', controller.getProduct)
routes.post('/',authAdminMiddleware, controller.createProduct)
routes.patch('/',authAdminMiddleware, controller.updateProduct)
routes.delete('/',authAdminMiddleware, controller.deleteProduct)

module.exports = routes
