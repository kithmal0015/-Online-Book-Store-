require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  DATABASE: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
};