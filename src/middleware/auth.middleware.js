const serviceAccount = require('../../config_auth_firebase.json')
const {initializeApp} = require('firebase-admin/app')
const admin = require('firebase-admin')
const cartModel = require('../models/cart.model.js')
const {getAuth} = require('firebase-admin/auth')

const CartModel = new cartModel()


// make database
let adminsId = ['DtTsJGP7D8XMmBmoHE2hS7Ta20w2','vZQ37Nc7yreZauG5xIDqCEZ1XZg1']


const app = initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL:
      'https://realchit-e1bb9-default-rtdb.europe-west1.firebasedatabase.app',
})


const authAdminMiddleware = (req, res, next) => {
   let idToken = req.headers.authorization
   idToken = idToken.replace('Bearer ', '')
   if (!idToken) {
      return res.status(401).json({
         status: 401,
         message: 'No token provided.',
      })
   } else {
        getAuth(app)
         .verifyIdToken(idToken)
         .then((decodedToken) => {
            const uid = decodedToken.uid
            if (adminsId.includes(uid)) {
                next()
            }else{
                throw {status: 401, message: 'Unauthorized'}
            }
         })
         .catch((error) => {
            next(error)
         })
   }
}
const authUserMiddleware = (req, res, next) => {
    let idToken = req.headers.authorization
    idToken = idToken.replace('Bearer ', '')
    if (!idToken) {
        return res.status(401).json({
            status: 401,
            message: 'No token provided.',
        })
    } else {
          getAuth(app)
            .verifyIdToken(idToken)
            .then((decodedToken) => {
                const uid = decodedToken.uid
                const user_id = req.body.id
                if (uid === user_id || adminsId.includes(uid)) {
                    next()
                }
                else{
                    throw {status: 401, message: 'Unauthorized'}
                }
            })
            .catch((error) => {
                next(error)
            })
    }
}

module.exports = {authAdminMiddleware, authUserMiddleware}