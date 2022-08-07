const supertest = require('supertest')
const app = require('../index.js')

const request = supertest(app)

describe('Test main endpoint', () => {
   it('main route test', async () => {
      const response = await request.get('/')
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ message: 'welcome back :)' })
   })
})
