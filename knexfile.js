// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: '/etc/fasti/app.db'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
