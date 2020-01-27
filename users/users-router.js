const express = require('express');
const usersModel = require('./users-model');
// const auth = require('../auth/authenticate-middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await usersModel.find()
    
    res.json(users)
  } catch(err) {
    next(err)
  }
});

module.exports = router;