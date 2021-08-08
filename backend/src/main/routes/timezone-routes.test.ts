import request from 'supertest'
import app from '../config/app'

describe('Timezone Routes', () => {
  describe('GET /timezone', () => {
    test('Should return 200 on load timezone', async () => {
      await request(app)
        .get('/timezone')
        .expect(200)
    })
  })
})
