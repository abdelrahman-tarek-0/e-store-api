const cartModel = require('../models/cart.model.js')
const { resBuilder } = require('../helpers/res_builder.js')
const CartModel = new cartModel()

const getAllCarts = async (req, res, next) => {
   try {
      const carts = await CartModel.getCarts()
      carts.length === 0
         ? res.status(404).json(resBuilder('no carts', 404))
         : res.status(200).json(resBuilder(carts))
      return
   } catch (error) {
      next(error)
   }
}
const getCart = async (req, res, next) => {
   try {
      const cart = await CartModel.getCart(req.query.id)
      cart
         ? res.json(resBuilder(cart))
         : res.status(404).json(resBuilder('no cart', 404))
      return
   } catch (error) {
      next(error)
   }
}

const createCart = async (req, res, next) => {
   try {
      const cart = await CartModel.createCart(req.body.id)
      res.json(resBuilder(cart))
      return
   } catch (error) {
      next(error)
   }
}
const updateCart = async (req, res, next) => {
   try {
      const cart = await CartModel.updateCart(req.body.id, req.body.item_id,req.body.action,req.body.quantity)
      res.json(resBuilder(cart))
      return
   } catch (error) {
      next(error)
   }
}
const deleteCart = async (req, res, next) => {
   try {
      const cart = await CartModel.deleteCart(req.body.id)
      res.json(resBuilder(cart))
      return
   } catch (error) {
      next(error)
   }
}

module.exports = { getAllCarts, getCart, createCart, updateCart, deleteCart }
