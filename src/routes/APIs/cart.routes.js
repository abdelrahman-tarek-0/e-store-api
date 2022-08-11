const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/cart.controller.js')

routes.get('/', (req,res)=>{res.json({ message: 'cart api route'})})

module.exports = routes
