const serviceAccount = require('../../config_auth_firebase.json')
const { initializeApp } = require('firebase-admin/app')
const { getAuth } = require('firebase-admin/auth')
const admin = require('firebase-admin')
const db = require('../database/index.js')

const app = initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL:
      'https://realchit-e1bb9-default-rtdb.europe-west1.firebasedatabase.app',
})

async function getAdmins() {
   try {
      const connection = await db.connect()
      const result = await connection.query('SELECT * FROM admin')
      connection.release()
      let adminsId = result.rows
      adminsId = adminsId.map((admin) => admin.uuid)
      return adminsId
   } catch (error) {
      throw new Error(error)
   }
}

const checkUser = async (token, userId, admin = false) => {
   try {
      token = token.replace('Bearer ', '')
      const decodedToken = await getAuth(app).verifyIdToken(token)
      const adminsId = await getAdmins()
      const uid = decodedToken.uid
      if (admin) {
         if (adminsId.includes(uid)) {
            return true
         } else {
            return false
         }
      } else {
         if (uid === userId || adminsId.includes(uid)) {
            return true
         } else {
            return false
         }
      }
   } catch (error) {
      throw new Error(error)
   }
}

module.exports = { checkUser, getAdmins }
