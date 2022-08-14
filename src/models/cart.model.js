const db = require('../database/index.js')

class cartModel {
   constructor() {
      this.db = db
   }
   async getCarts() {
      try {
         const connection = await this.db.connect()
         const result =
            await connection.query(`SELECT jsonb_agg(to_jsonb(products)-'user_id') as cart,user_id as user_id FROM (
               select products.id,products.name,products.rating,products.price,products.description,products.images,products.stock,products.category_id,cart_product.quantity,cart.user_id from products inner join cart_product on (products.id = cart_product.product_id) 
                           inner join cart on cart.id = cart_product.cart_id )  as products group by user_id `)
         connection.release()
         return result.rows
      } catch (error) {

         throw new Error(error)
      }
   }
   async getCart(userId) {
      try {
         const connection = await this.db.connect()
         const result =
            await connection.query(`SELECT jsonb_agg(to_jsonb(products)-'user_id') as cart FROM (
               select products.id,products.name,products.rating,products.price,products.description,products.images,products.stock,products.category_id,cart_product.quantity,cart.user_id from products inner join cart_product on (products.id = cart_product.product_id) 
                           inner join cart on cart.id = cart_product.cart_id where cart.user_id = $1 )  as products  group by user_id `,[userId])
         connection.release()

         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }
   // create cart
   async createCart(userId) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            'INSERT INTO cart(user_id) VALUES($1) RETURNING *',
            [userId]
         )
         connection.release()
         return result.rows[0]
      } catch (error) {
         
         throw new Error(error)
      }
   }
   // update cart
   async updateCart(userId,itemId,action,quantity=1) {
      try {
         const connection = await this.db.connect()
         const checkQuery = `INSERT INTO cart (user_id) VALUES ($1) ON CONFLICT(user_id) DO nothing;`
         await connection.query(checkQuery, [userId])
         let result= '';
         // increase quantity of product by one
         if(action == 'add'){
            result = await connection.query(
               `INSERT INTO cart_product (cart_id,product_id,quantity) VALUES ((SELECT id FROM cart WHERE user_id = $1),$2,1) on conflict(hashed_cart_id) do UPDATE SET quantity = cart_product.quantity + $3 WHERE cart_product.cart_id = (SELECT id FROM cart WHERE user_id = $1) AND cart_product.product_id = $2`,
               [userId, itemId, quantity]   
            )
         }
         // decrease quantity of product by one
         else if(action == 'remove'){
            result = await connection.query(
               `UPDATE cart_product SET quantity = quantity - $3 WHERE cart_id = (SELECT id FROM cart WHERE user_id = $1) AND product_id = $2`,  
               [userId, itemId,quantity]   
            )
         }  
         // delete product from cart
         else if(action == 'delete'){
            result = await connection.query(
               `DELETE FROM cart_product WHERE cart_id = (SELECT id FROM cart WHERE user_id = $1) AND product_id = $2`,
               [userId, itemId]
            )
         }
         connection.release()
         return result.rows[0]
      } catch (error) {
         if (error.message === "new row for relation \"cart_product\" violates check constraint \"cart_product_quantity_check\"") {
            const connection = await this.db.connect()
            const result = await connection.query(
               `DELETE FROM cart_product WHERE cart_id = (SELECT id FROM cart WHERE user_id = $1) AND product_id = $2`,
               [userId, itemId]
            )
            connection.release()
        }else{
            throw new Error(error)
         }
      }
   }
   async deleteCart(userId) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            'DELETE FROM cart_product WHERE cart_id = (select id from cart where user_id = $1) RETURNING *',
            [userId]
         )
         connection.release()
         return result.rows
      } catch (error) {
         throw new Error(error)
      }
   }
}
module.exports = cartModel
