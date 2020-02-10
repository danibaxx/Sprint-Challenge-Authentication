const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

const authToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6ImhlZHdpZyIsImlhdCI6MTU4MTIxNjI3NSwiZXhwIjoxNTgyNDI1ODc1fQ.SfGgINxSNLZQ_pnE__ywKmuBQ_-eCU7xo2hfMOOuf9Y';

beforeAll(async () => {
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
			username: 'hedwig',
			password: 'hedwig1',
		});
	expect(res.status).toBe(201);
	expect(res.type).toBe('application/json');
});

test('POST /api/auth/login', async () => {
	const res = await supertest(server)
		.post('/api/auth/login')
		.set({
			Authorization: authToken,
		})
		.send({
			username: 'hedwig',
			password: 'hedwig1',
		});
	expect(res.type).toBe('application/json');
	expect(res.body.message).toMatch('Welcome, you are authorized!');
});
