require("dotenv").config();
const knex = require("knex");

const db = knex({
    client:'postgres',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    },
    migrations: {
        directory: "./migrations",
        tablename: "knex_migrations",
    },
    seeds: {
        directory: "./seeds"
    }
})

module.exports = db;