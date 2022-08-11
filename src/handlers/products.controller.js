const productsModel = require('../models/products.model.js')
const ProductsModel = new productsModel();

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductsModel.getAllProducts()
        res.json(products)
    } catch (error) {
        throw new Error(error)
    }
}
const getProduct = async (req, res) => {
    try {
        const product = await ProductsModel.getProduct(req.params.id)
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
}
const createProduct = async (req, res) => {
    try {
        const product = await ProductsModel.createProduct(req.body)
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
}
const updateProduct = async (req, res) => {
    try {
        const product = await ProductsModel.updateProduct(req.params.id, req.body)
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
}
const deleteProduct = async (req, res) => {
    try {
        const product = await ProductsModel.deleteProduct(req.params.id)
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct }
