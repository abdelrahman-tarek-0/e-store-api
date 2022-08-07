const supertest = require('supertest')
const app = require('../../../index')

const request = supertest(app)

describe('Test name endpoint', () => {
   it('name route test', async () => {
      const response = await request.get('/api/name')
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ message: 'name api route' })
   })
})
