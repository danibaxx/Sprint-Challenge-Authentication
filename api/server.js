const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', jokesRouter);
server.use('/api/users', usersRouter);

server.get('/welcome', (req, res, next) => {
	res.json({
		message: 'Welcome to Auth API',
	});
});

server.use((err, req, res, next) => {
	console.log('Error:', err);
	res.status(500).json({
		message: 'Something went wrong',
	});
});

module.exports = server;
