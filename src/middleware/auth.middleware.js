const { checkUser } = require('../helpers/userHelper')

const authAdminMiddleware = async (req, res, next) => {
   try {
      const token = req.headers.authorization
      if (!token) {
         throw { status: 401, message: 'No token provided.' }
      } else {
         if (await checkUser(token, req.body.id, true)) {
            next()
         } else {
            throw { status: 401, message: 'Unauthorized' }
         }
      }
   } catch (error) {
      next(error)
   }
}
const authUserMiddleware = async (req, res, next) => {
   try {
      const token = req.headers.authorization
      if (!token) {
         throw { status: 401, message: 'No token provided.' }
      } else {
         if (await checkUser(token, req.body.id)) {
            next()
         } else {
            throw { status: 401, message: 'Unauthorized' }
         }
      }
   } catch (error) {
      next(error)
   }
}

module.exports = { authAdminMiddleware, authUserMiddleware }
