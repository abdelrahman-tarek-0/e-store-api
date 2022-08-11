const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/category.controller.js')
const {authAdminMiddleware,authUserMiddleware} = require('../../middleware/auth.middleware.js')

routes.get('/all', controller.getAllCategories)
routes.get('/',authAdminMiddleware, controller.getCategory)
routes.post('/',authAdminMiddleware, controller.createCategory)
routes.patch('/',authAdminMiddleware, controller.updateCategory)
routes.delete('/',authAdminMiddleware, controller.deleteCategory)

module.exports = routes
