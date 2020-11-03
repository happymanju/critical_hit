const express = require("express");
const path = require("path");
const db = require("./knex");

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get("/api/entities", async (req, res) => {
    try{
        const entities = await db.select().table("entities");
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