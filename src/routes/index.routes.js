const express = require('express')
const routes = express.Router()

const productsRoutes = require('./APIs/products.routes.js')
const categoryRoutes = require('./APIs/category.routes.js')
const cartRoutes = require('./APIs/cart.routes.js')
const checkOutRoutes = require('./APIs/checkOut.routes.js')

routes.get('/', (req, res) => {
   res.json({ message: 'main api route' })
})

routes.use('/product', productsRoutes)
routes.use('/category', categoryRoutes)
routes.use('/cart', cartRoutes)
routes.use('/checkout', checkOutRoutes)

module.exports = routes
