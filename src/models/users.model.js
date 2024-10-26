const pool = require('../config/db');

const insertUsuario = async ({ username, email, password }) => {
    const [result] = await pool.query(
        'insert into usuarios (username, email, password, role) values (?, ?, ?, ?)',
        [username, email, password, 'regular']
    );
    return result.insertId;
}

module.exports = { insertUsuario }