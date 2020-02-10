const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

const userToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRyYWNvIiwiaWF0IjoxNTgxMjEwMTA5LCJleHAiOjE1ODI0MTk3MDl9.HHtPFog_9k4Of2lRdYYJUKgLBVopbXj3ZTPlrfUheVk';

beforeAll(async () => {
	await db.seed.run();
});

// testing end-point of user router
test('GET /api/users', async () => {
	const res = await supertest(server)
		.get('/api/users')
		.set({
			Authorization: userToken,
		});

	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.length).toBe(3);
});
