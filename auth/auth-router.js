const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const router = require('express').Router();

router.post('/register', async (req, res, next) => {
  // implement registration
  try {
    const saved = await 
  } catch(err) {

  }
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
