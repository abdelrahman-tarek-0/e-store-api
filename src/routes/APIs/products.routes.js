const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/products.controller.js')

routes.get('/', (req,res)=>{res.json({ message: 'products api route'})})

module.exports = routes
