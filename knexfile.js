const sqlite = {
	client: 'sqlite3',
	connection: {
		filename: './database/auth.db3',
	},
	useNullAsDefault: true,
	migrations: {
		directory: './database/migrations',
		tableName: 'dbmigrations',
	},
	seeds: {
		directory: './database/seeds',
	},
};

module.exports = {
	dev: {
		...sqlite,
		connection: {
			filename: './database/authDev.db3',
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			},
		},
	},
	test: {
		...sqlite,
		connection: {
			filename: './database/authTest.db3',
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			},
		},
	},
};
