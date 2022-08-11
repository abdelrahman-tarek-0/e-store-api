const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/category.controller.js')



routes.get('/all', controller.getAllCategories)
routes.get('/', controller.getCategory)
routes.post('/', controller.createCategory)
routes.patch('/', controller.updateCategory)
routes.delete('/', controller.deleteCategory)

module.exports = routes
