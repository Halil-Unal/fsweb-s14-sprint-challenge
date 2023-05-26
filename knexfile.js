// DEĞİŞTİRMEYİN
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './Projeler.db3'
    },
    useNullAsDefault: true,
    migrations:{
      directory:"./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    }
   
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};
