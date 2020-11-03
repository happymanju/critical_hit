require("dotenv").config();

module.exports = {
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
  }
};
