const db = require('../database/index.js')

class ProductsModel {
   constructor() {
      this.db = db
   }

   // get all products
   async getAllProducts(limit = 50, offset = 0, sortBy = 'id', sort = 'DESC') {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            `SELECT * FROM products ORDER BY ${sortBy} ${sort} LIMIT $1 OFFSET $2`,
            [limit, offset]
         )
         connection.release()
         return result.rows
      } catch (error) {
         throw new Error(error)
      }
   }

   // get a single product
   async getProduct(id) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            'SELECT * FROM products WHERE id = $1',
            [id]
         )
         connection.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }

   // create a product
   async createProduct(product) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            `INSERT INTO products (name, rating, price, description, images, stock, category_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            `,
            [
               product.name,
               product.rating,
               product.price,
               product.description,
               product.images,
               product.stock,
               product.category_id,
            ]
         )
         connection.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }

   // update a product
   async updateProduct(id, product) {
      try {
         const connection = await this.db.connect()
         let query = 'UPDATE products SET '
         const values = []
         let i = 1
         if (product.name) {
            query += ' name = $' + i + ','
            values.push(product.name)
            i++
         }
         if (product.rating) {
            query += ' rating = $' + i + ','
            values.push(product.rating)
            i++
         }
         if (product.price) {
            query += ' price = $' + i + ','
            values.push(product.price)
            i++
         }
         if (product.description) {
            query += ' description = $' + i + ','
            values.push(product.description)
            i++
         }
         if (product.images) {
            query += ' images = $' + i + ','
            values.push(product.images)
            i++
         }
         if (product.stock || product.stock === 0) {
            query += ' stock = $' + i + ','
            values.push(product.stock)
            i++
         }
         if (product.category_id) {
            query += ' category_id = $' + i + ','
            values.push(product.category_id)
            i++
         }
         query = query.slice(0, -1)
         query += ' WHERE id = $' + i
         query += ' '
         values.push(id)
         const result = await connection.query(query, values)
         connection.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }

   // delete a product
   async deleteProduct(id) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            'DELETE FROM products WHERE id = $1 ',
            [id]
         )
         connection.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }
}

module.exports = ProductsModel
