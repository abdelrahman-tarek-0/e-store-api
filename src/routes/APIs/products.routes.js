const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/products.controller.js')

routes.get('/all', controller.getAllProducts)
routes.get('/', controller.getProduct)
routes.post('/', controller.createProduct)
routes.patch('/', controller.updateProduct)
routes.delete('/', controller.deleteProduct)

module.exports = routes
