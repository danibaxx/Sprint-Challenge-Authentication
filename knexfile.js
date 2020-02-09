module.exports = {
	dev: {
    client: 'sqlite3',
    useNullAsDefault: true,
		connection: {
			filename: './database/authDev.db3',
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			},
		},
  },
  
	test: {
    client: 'sqlite3',
    useNullAsDefault: true,
		connection: {
			filename: './database/authTest.db3',
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			},
		},
  }
};
