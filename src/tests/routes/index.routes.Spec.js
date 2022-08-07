const supertest = require('supertest')
const app = require('../../index')

const request = supertest(app)

describe('Test router API endpoint', () => {
   it('api route test', async () => {
      const response = await request.get('/api')
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ message: 'main api route' })
   })
})
