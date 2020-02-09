// const knex = require('knex');
// const knexfile = require('../knexfile.js');

// const environment = process.env.NODE_ENV || 'dev';

// module.exports = knex(knexfile[environment]);
const knex = require('knex');

const knexConfig = require('../knexfile');

module.exports = knex(knexConfig.dev)
