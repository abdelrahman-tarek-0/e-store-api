const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/category.controller.js')

routes.get('/', (req,res)=>{res.json({ message: 'category api route'})})

module.exports = routes
