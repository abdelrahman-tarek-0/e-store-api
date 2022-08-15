const productsModel = require('../models/products.model.js')
const { resBuilder } = require('../helpers/res_builder.js')

const ProductsModel = new productsModel()

const getAllProducts = async (req, res, next) => {
   try {
      const limit = req.query.limit || 50
      const offset = req.query.offset || 0
      const sort = req.query.sort || 'DESC'
      const sortBy = req.query.sortBy || 'id'
      const products = await ProductsModel.getAllProducts(
         limit,
         offset,
         sortBy,
         sort
      )
      products.length === 0
         ? res.status(404).json(resBuilder('no products', 404))
         : res.status(200).json(resBuilder(products))
      return
   } catch (error) {
      next(error)
   }
}
const getProduct = async (req, res, next) => {
   try {
      const product = await ProductsModel.getProduct(req.query.id)
      product
         ? res.json(resBuilder(product))
         : res.status(404).json(resBuilder('no product', 404))
      return
   } catch (error) {
      next(error)
   }
}
const createProduct = async (req, res, next) => {
   try {
      const product = await ProductsModel.createProduct(req.body)
      res.json(resBuilder(product))
      return
   } catch (error) {
      next(error)
   }
}
const updateProduct = async (req, res, next) => {
   try {
      const product = await ProductsModel.updateProduct(req.body.id, req.body)
      res.json(resBuilder(product))
      return
   } catch (error) {
      next(error)
   }
}
const deleteProduct = async (req, res, next) => {
   try {
      const product = await ProductsModel.deleteProduct(req.body.id)
      res.json(resBuilder(product))
      return
   } catch (error) {
      next(error)
   }
}

module.exports = {
   getAllProducts,
   getProduct,
   createProduct,
   updateProduct,
   deleteProduct,
}
