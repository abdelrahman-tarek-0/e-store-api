const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/products.controller.js')

routes.get('/', (req, res) => {
   res.json({ message: 'products api route' })
})

routes.get('/all', controller.getAllProducts)
routes.get('/:id', controller.getProduct)
routes.post('/', controller.createProduct)
routes.put('/:id', controller.updateProduct)
routes.delete('/:id', controller.deleteProduct)

module.exports = routes
