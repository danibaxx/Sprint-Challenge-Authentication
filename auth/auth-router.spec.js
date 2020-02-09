const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
	await db.seed.run();
});

test('GET /welcome route', async () => {
	const res = await supertest(server).get('/welcome');
	expect(res.status).toBe(200);
	expect(res.body.message).toBe('Welcome to Auth API');
});

test('POST /api/auth/register', async () => {
	const res = await supertest(server)
		.post('/api/auth/register')
    .send({ 
      username: 'danielle',
      password: 'db1'
   });
	expect(res.status).toBe(201)
	expect(res.type).toBe('application/json');
	expect(res.body).toBe({ id: 4, username: 'danielle', password: 'db1' })
});

test('POST /api/auth/login', async () => {
  const res = await supertest(server)
    .post('/api/auth/login')
    .send({
      username: 'danielle',
      password: 'db1'
  });
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});
