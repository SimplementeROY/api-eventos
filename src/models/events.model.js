const pool = require('../config/db');

const selectAll = async (type = '') => {
    let query = 'select * from eventos';
    let params = [];
    if (type) {
        query += ' where tipoDeporte = ?';
        params.push(type)
    }
    const [result] = await pool.query(query, [params]);
    return result;
}

const selectById = async (eventID) => {
    const [result] = await pool.query(
        'select * from eventos where id = ?',
        [eventID]
    );
    if (result.length === 0) return null;
    return result[0];
}

const selectFromTo = async (date1, date2) => {
    const [result] = await pool.query(
        'select *  from eventos  where fecha between ? and ? order by fecha asc',
        [date1, date2]
    );
    if (result.length === 0) return null;
    return result;
}

const selectUpcoming = async () => {
    const [result] = await pool.query(
        'select * from eventos  where fecha > curdate() order by fecha asc');
    if (result.length === 0) return null;
    return result;
}

const insertEvent = async ({ nombre, descripcion, fecha, ubicacion, tipoDeporte }) => {
    const [result] = await pool.query(
        'insert into eventos (nombre, descripcion, fecha, ubicacion, tipoDeporte) values ?,?,?,?,?', [nombre, descripcion, fecha, ubicacion, tipoDeporte]
    )
    if (result.affectedRows === 0) {
        return -1;
    }
    return result.insertId;
}

const updateEventById = async (eventID, { nombre, descripcion, fecha, ubicacion, tipoDeporte }) => {
    const [result] = await pool.query(
        'update eventos set nombre = ?, descripcion = ?, fecha = ?, ubicacion = ?, tipoDeporte = ? where id = ?',
        [nombre, descripcion, fecha, ubicacion, tipoDeporte, eventID]
    );
    return result;
}

const deleteEventFromId = async (eventID) => {
    const result = await pool.query('delete from eventos where id = ? ', [eventID]);
    return result
}

module.exports = {
    selectAll, selectById, selectFromTo, selectUpcoming, insertEvent, updateEventById, deleteEventFromId
}