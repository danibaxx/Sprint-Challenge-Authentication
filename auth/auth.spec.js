const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run()
});

describe('auth routes', () => {
  test('welcome route', async () => {
    const res = await supertest(server).get('/')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Welcome to Auth API')
  });
  
  test('post /register', async () => {
    const res = await supertest(server)
      .post('/api/auth/register')
      .send({ username: 'drako' })
      expect(res.status).toBe(201)
      expect(res.body).toEqual({ id: 4, username: 'drako'})
  });
  
  test('post /login', async () => {
    const res = await supertest(server)
    .post('/api/auth/login')
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
  });
})
