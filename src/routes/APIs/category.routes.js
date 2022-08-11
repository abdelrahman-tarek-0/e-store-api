const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/category.controller.js')

routes.get('/', (req, res) => {
   res.json({ message: 'category api route' })
})

routes.get('/all', controller.getAllCategories)
routes.get('/:id', controller.getCategory)
routes.post('/', controller.createCategory)
routes.put('/:id', controller.updateCategory)

module.exports = routes
