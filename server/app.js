const express = require("express");
const path = require("path");


const knex = require("knex")({
    client: "postgres",
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    }
});



const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get("/api/entities", async (req, res) => {
    try{
        const entities = await knex.select().table("entities");
        res.json(entities);
    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
})

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"))
})


module.exports = app;