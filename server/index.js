require("dotenv").config();
const app = require("./app");
const db = require("./knex");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
})