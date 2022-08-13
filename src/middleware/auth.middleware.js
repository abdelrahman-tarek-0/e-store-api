const serviceAccount = require('../../config_auth_firebase.json')
const { initializeApp } = require('firebase-admin/app')
const admin = require('firebase-admin')
const { getAuth } = require('firebase-admin/auth')
const db = require('../database/index.js')

async function getAdmins() {
   try {
      const connection = await db.connect()
      const result = await connection.query('SELECT * FROM admin')
      connection.release()
      return result.rows
   } catch (error) {
      throw new Error(error)
   }
}

const app = initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL:
      'https://realchit-e1bb9-default-rtdb.europe-west1.firebasedatabase.app',
})

const authAdminMiddleware = async (req, res, next) => {
   try {
      let adminsId = await getAdmins()
      adminsId = adminsId.map((admin) => admin.uuid)
      let idToken = req.headers.authorization
      if (!idToken) {
         return res.status(401).json({
            status: 401,
            message: 'No token provided.',
         })
      } else {
         idToken = idToken.replace('Bearer ', '')
         getAuth(app)
            .verifyIdToken(idToken)
            .then((decodedToken) => {
               const uid = decodedToken.uid
               if (adminsId.includes(uid)) {
                  next()
               } else {
                  return res.status(401).json({
                     status: 401,
                     message: 'Unauthorized',
                  })
               }
            })
            .catch((error) => {
               next(error)
            })
      }
   } catch (error) {
      next(error)
   }
}
const authUserMiddleware = async (req, res, next) => {
   try {
      let adminsId = await getAdmins()
      adminsId = adminsId.map((admin) => admin.uuid)
      let idToken = req.headers.authorization
      if (!idToken) {
         return res.status(401).json({
            status: 401,
            message: 'No token provided.',
         })
      } else {
         idToken = idToken.replace('Bearer ', '')
         getAuth(app)
            .verifyIdToken(idToken)
            .then((decodedToken) => {
               const uid = decodedToken.uid
               const userId = req.body.id
               if (uid === userId || adminsId.includes(uid)) {
                  next()
               } else {
                  return res.status(401).json({
                     status: 401,
                     message: 'Unauthorized',
                  })
               }
            })
            .catch((error) => {
               next(error)
            })
      }
   } catch (error) {
      next(error)
   }
}

module.exports = { authAdminMiddleware, authUserMiddleware }
