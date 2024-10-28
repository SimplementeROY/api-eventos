const pool = require('../config/db');

const insertUsuario = async ({ username, password }) => {
    const [result] = await pool.query(
        'insert into usuarios (username, password) values (?, ?)',
        [username, password]
    );
    return result.insertId;
}

const selectById = async (usuarioID) => {
    const [result] = await pool.query(
        'select * from usuarios where id = ?',
        [usuarioID]
    );
    if (result.length === 0) return null;
    return result[0];
}

const selectByName = async (nombre) => {
    const [result] = await pool.query(
        'select * from usuarios where username = ?',
        [nombre]
    );
    if (result.length === 0) return null;
    return result[0];
}

module.exports = { insertUsuario, selectById, selectByName }