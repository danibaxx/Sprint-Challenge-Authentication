const supertest = require('supertest');
const testServ = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run()
});

  test('welcome route', async () => {
    const res = await supertest(testServ).get('/')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Welcome to Auth API')
  });
  
  test('post /register', async () => {
    const res = await supertest(testServ)
      .post('/api/auth/register')
      .send({ username: 'harry' })
      expect(res.user.username).toEqual('harry')
      expect(res.type).toBe('application/json')
  });
  
  // test('post /login', async () => {
  //   const res = await supertest(server)
  //   .post('/login')
  //   expect(res.status).toBe(200)
  //   expect(res.type).toBe('application/json')
  // });

