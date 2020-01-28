const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');

function find() {
  return db('users')
    .select('id', 'username')
};

function findBy(data) {
  return db('users')
    .where(data)
    .select('id', 'username', 'password')
};

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14)

  const [id] =  await db('users')
    .insert(user)

  return findById(id) 
};

function findById(id) {
  return db('users')
    .where({ id })
    .first('id', 'username')
};

module.exports = {
  find,
  findBy,
  findById,
  add,
};