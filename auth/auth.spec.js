const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');


beforeEach(async () => {
  await db.seed.run
});

test('welcome route', async () => {
  const res = await supertest(server).get('/')
  expect(res.status).toBe(200)
  expect(res.body.message).toBe('Welcome to Auth API')
});

test('register', async () => {
  const res = await supertest(server).post('/register')
  expect(res.status).toBe(201)
  expect(res.type).toBe('application/json')
})