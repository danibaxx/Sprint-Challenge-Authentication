const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');


beforeEach(async () => {
  await db.seed.run
});

test('welcome route', async () => {
  const resWel = await supertest(server).get('/')
  expect(resWel.status).toBe(200)
  expect(resWel.body.message).toBe('Welcome to Auth API')
});

test('register', async () => {
  const response = await supertest(server)
    .post('/api/auth/register')
    .send({ username: 'drako' })
    expect(response.status).toBe(201)
    expect(response.body).toEqual({ id: 4, username: 'drako'})
});

test('login', async () => {
const res = await supertest(server).post('/login').send({ username: 'harry', password: 123 })
expect(res.status).toBe(200)
expect(res.type).toBe('application/json')
});