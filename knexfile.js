// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config = {

  development: {
    client: 'pg',
    connection: {
      host: '35.247.68.220',
      database: 'postgres',
      user:     'postgres',
      password: 'sM@kacjVG@Zr8YPHqHUE2FmB!PizT'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },



  production: {
    client: 'pg',
    connection: {
      host: '35.247.68.220',
      database: 'postgres',
      user:     'postgres',
      password: 'sM@kacjVG@Zr8YPHqHUE2FmB!PizT'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

export default config