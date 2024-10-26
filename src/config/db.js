const mysql = require('mysql2');
require('dotenv').config();
// TODO: Colocar los datos en .env
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    port: 3306,
    database: 'eventos_deportivos'
});

module.exports = pool.promise();