const { Pool } =require ('pg')

const pool = new Pool ({
 user : 'postgres',
 host: 'localhost',
 database: 'HappyPest',
 password: '1507',
 port: 5432
})

module.exports = pool;