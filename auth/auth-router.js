const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const usersModel = require('../users/users-model');

const router = express.Router()

router.post('/register', async (req, res, next) => {
  // implement registration
  try {
    const saved = await usersModel.add(req.body)
    // console.log(req.body)
    res.status(201).json(saved)
  } catch(err) {
    next(err)
  }
});

router.post('/login', async (req, res, next) => {
  // implement login
  try {
    const { username, password } = req.body;
    const user = await usersModel.findBy({ username }).first()
    const pwValid = await bcrypt.compare(password, user.password)

    if (user && pwValid) {
      const token = jwt.sign({
        subject: user.id,
        username: user.username,
      }, secrets.jwt, {
        expiresIn: '14d',
      })

      res.status(200).json({
        message: `Welcome ${user.username}, you are authorized!`,
        token: token,
      })
    } else {
      res.status(401).json({
        message: 'Please sign-in!'
      })
    }
  } catch(err) {
    next(err)
  }
});

module.exports = router;
