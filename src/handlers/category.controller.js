const categoryModel = require('../models/category.model.js')
const { resBuilder } = require('../helpers/res_builder.js')
CategoryModel = new categoryModel()

const getAllCategories = async (req, res, next) => {
   try {
      const categories = await CategoryModel.getAllCategories()
      categories.length === 0
         ? res.status(404).json(resBuilder('no categories', 404))
         : res.status(200).json(resBuilder(categories))
      return
   } catch (error) {
      next(error)
   }
}
const getCategory = async (req, res, next) => {
   try {
      const category = await CategoryModel.getCategory(req.query.id)
      category
         ? res.json(resBuilder(category))
         : res.status(404).json(resBuilder('no category', 404))
      return
   } catch (error) {
      next(error)
   }
}
const createCategory = async (req, res, next) => {
   try {
      const category = await CategoryModel.createCategory(req.body)
      res.json(resBuilder(category))
      return
   } catch (error) {
      next(error)
   }
}
const updateCategory = async (req, res, next) => {
   try {
      const category = await CategoryModel.updateCategory(req.body.id, req.body)
      res.json(resBuilder(category))
      return
   } catch (error) {
      next(error)
   }
}
const deleteCategory = async (req, res, next) => {
   try {
      const category = await CategoryModel.deleteCategory(req.body.id)
      res.json(resBuilder(category))
      return
   } catch (error) {
      next(error)
   }
}

module.exports = {
   getAllCategories,
   getCategory,
   createCategory,
   updateCategory,
   deleteCategory,
}
