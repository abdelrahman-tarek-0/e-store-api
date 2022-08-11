const db = require('../database/index.js')

class CategoryModel {
   constructor() {
      this.db = db
   }

   // get all categories
   async getAllCategories() {
      try {
         const connection = await this.db.connect()
         const result = await connection.query('SELECT * FROM category')
         connection.release()
         return result.rows
      } catch (error) {
         throw new Error(error)
      }
   }

   // get a single category
   async getCategory(id) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            'SELECT * FROM category WHERE id = $1',
            [id]
         )
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }

   // create a category
   async createCategory(category) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            `INSERT INTO category (name)
            VALUES ($1) RETURNING *
            `,
            [category.name]
         )
         connection.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }

   // update a category
   async updateCategory(id, category) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            `UPDATE category SET name = $1
            WHERE id = $2 RETURNING *
            `,
            [category.name, id]
         )
         connection.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }

   // delete a category
   async deleteCategory(id) {
      try {
         const connection = await this.db.connect()
         const result = await connection.query(
            `DELETE FROM category
            WHERE id = $1 RETURNING *
            `,
            [id]
         )
         connection.release()
         return result.rows[0]
      } catch (error) {
         throw new Error(error)
      }
   }
}

module.exports = CategoryModel
