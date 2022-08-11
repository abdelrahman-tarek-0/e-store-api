const express = require('express')
const routes = express.Router()
const controller = require('../../handlers/testimonials.controller.js')

routes.get('/', (req,res)=>{res.json({ message: 'testimonials api route'})})

module.exports = routes
