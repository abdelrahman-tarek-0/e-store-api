const cartModel = require('./cart.model.js')
const productModel = require('./products.model.js')
const CartModel = new cartModel()
const ProductModel = new productModel()

class checkOutModel {
   async checkOut(userId) {
      try {
         const cart = await CartModel.getCart(userId)
         if (cart.length > 0) {
            cart.forEach((item) => {
               let quantity = item.quantity
               let stock = item.stock
               if (quantity > stock) {
                  throw new Error('Not enough stock')
               } else {
                  ProductModel.updateProduct(item.id, {
                     stock: stock - quantity,
                  })
               }
            })
            CartModel.deleteCart(userId)
            return 'Checkout successful'
         } else {
            throw new Error('Cart is empty')
         }
      } catch (error) {
         throw new Error(error)
      }
   }
}
module.exports = checkOutModel
