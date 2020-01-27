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
  const res = await supertest(server)
    .post('/register')
    .send({ username: 'drako' })
    // expect(res.status).toBe(201)
    expect(res.body).toEqual({ id: 4, username: 'drako'})
});

test('login', async () => {
const res = await supertest(server).post('/login').send({ username: 'harry', password: 123 })
expect(res.status).toBe(200)
expect(res.type).toBe('application/json')
});