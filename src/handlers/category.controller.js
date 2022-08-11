const categoryModel = require('../models/category.model.js')
CategoryModel = new categoryModel()

const getAllCategories = async (req, res) => {
   try {
      const categories = await CategoryModel.getAllCategories()
      res.json(categories)
   } catch (error) {
      throw new Error(error)
   }
}
const getCategory = async (req, res) => {
   try {
      const category = await CategoryModel.getCategory(req.params.id)
      res.json(category)
   } catch (error) {
      throw new Error(error)
   }
}
const createCategory = async (req, res) => {
   try {
      const category = await CategoryModel.createCategory(req.body)
      res.json(category)
   } catch (error) {
      throw new Error(error)
   }
}
const updateCategory = async (req, res) => {
   try {
      const category = await CategoryModel.updateCategory(
         req.params.id,
         req.body
      )
      res.json(category)
   } catch (error) {
      throw new Error(error)
   }
}

module.exports = {
   getAllCategories,
   getCategory,
   createCategory,
   updateCategory,
}
