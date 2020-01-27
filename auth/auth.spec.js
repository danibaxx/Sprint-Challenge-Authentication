const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

test('welcome route', async () => {
  const res = await supertest(server).get('/')
  expect(res.status).toBe(200)
});