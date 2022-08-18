const { checkUser } = require('../helpers/userHelper')

const authAdminMiddleware = async (req, res, next) => {
   try {
      const token = req.headers.authorization
      if (!token) {
         throw new Error('No token provided.')
      } else {
         if (await checkUser(token, req.body.user_id, true)) {
            next()
         } else {
            throw new Error('Unauthorized')
         }
      }
   } catch (error) {
      error.status = 401
      next(error)
   }
}
const authUserMiddleware = async (req, res, next) => {
   try {
      const token = req.headers.authorization
      if (!token) {
         throw new Error('No token provided.')
      } else {
         if (await checkUser(token, req.body.user_id)) {
            next()
         } else {
            throw new Error('Unauthorized')
         }
      }
   } catch (error) {
      error.status = 401
      next(error)
   }
}

module.exports = { authAdminMiddleware, authUserMiddleware }
