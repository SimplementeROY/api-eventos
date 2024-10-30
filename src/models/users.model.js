const pool = require('../config/db');

const insertUsuario = async ({ username, password, rol = 'regular' }) => {
    const [result] = await pool.query(
        'insert into usuarios (username, password, rol) values (?, ?, ?)',
        [username, password, rol]
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