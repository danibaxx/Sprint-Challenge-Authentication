const db = require('../database/dbConfig');
const usersModel = require('./users-model');

beforeEach(async () => {
	await db.seed.run();
});

describe('users model', () => {
	test('find', async () => {
		const res = await usersModel.find();
		expect(res.length).toBeGreaterThan(0);
		expect(res).toHaveLength(3);
	});

	test('findById', async () => {
		const res = await usersModel.findById(1);
		expect(res.username).toBe('harry');
		expect(res.id).toBe(1);
	});

	test('add user', async () => {
		await usersModel.add({ username: 'drako', password: '014' });
		const res = await db('users').select();
		expect(res).toHaveLength(4);
	});
});
