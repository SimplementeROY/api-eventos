const mysql = require('mysql2');
require('dotenv').config();
// TODO: Colocar los datos en .env
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: 3306,
    database: process.env.DATABASE
});

module.exports = pool.promise();