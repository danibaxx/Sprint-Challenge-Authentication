const db = require('../database/dbConfig');
const usersModel = require('./users-model');

beforeAll(async () => {
	await db.seed.run();
});

// testing the contents of the model
describe('users model', () => {
  test('find', async () => {
    const res = await usersModel.find()
    expect(res).toHaveLength(4)
  })

  test('findById', async () => {
    const res = await usersModel.findById(1);
    expect(res.username).toMatch('harry');
    expect(res.password).not.toBeNull();
  })
});
