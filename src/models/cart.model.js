const db = require('../database/index.js')

class cartModel {
   constructor() {
      this.db = db
   }
   async getCarts() {
      try {
         const connection = await this.db.connect()
         const result = await connection.query('SELECT * FROM cart')
         connection.release()
         return result.rows
      } catch (error) {
         throw new Error(error)
      }
   }
   async getCart(userId) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            'SELECT * FROM cart WHERE user_id = $1',
            [userId]
         )
         connection.release()

         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }
   // create cart
   async createCart(userId, items) {
      try {
         const connection = await this.db.connect()
         const products = await connection.query('SELECT * FROM products')
         connection.release()
         const productIds = products.rows.map((product) => product.id)

         const itemsArray = Object.keys(items)
         const itemsId = itemsArray.map(Number)

         const itemValues = Object.values(items)
         for (let i = 0; i < itemsId.length; i++) {
            if (!productIds.includes(itemsId[i])) {
               throw new Error(`Product with id: ${itemsId[i]}  does not exist`)
            } else {
               if (
                  itemValues[i] >
                  products.rows.find((product) => product.id === itemsId[i])
                     .stock
               ) {
                  throw new Error(
                     'Not enough stock for product: ' +
                        products.rows.find(
                           (product) => product.id === itemsId[i]
                        ).name +
                        ' -- with id ' +
                        itemsId[i]
                  )
               }
            }
         }
         const connection2 = await this.db.connect()
         const result = await connection.query(
            'INSERT INTO cart (user_id,items) VALUES ($1,$2) RETURNING *',
            [userId, items]
         )
         connection2.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }
   // update cart
   async updateCart(userId, items) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            'UPDATE cart SET items = $1 WHERE user_id = $2 RETURNING *',
            [items, userId]
         )
         connection.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }
   async deleteCart(userId) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            'DELETE FROM cart WHERE user_id = $1 RETURNING *',
            [userId]
         )
         connection.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }
}
module.exports = cartModel
