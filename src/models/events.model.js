const pool = require('../config/db');

const selectAll = async (type = '') => {
    let query = 'select * from eventos';
    let params = []
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

//TODO
const selectFromTo = async (date1, date2) => {
    const [result] = await pool.query(
        'select *  from eventos  where fecha between ? and ? order by fecha asc',
        [date1, date2]
    );
    if (result.length === 0) return null;
    return result[0];
}

const selectUpcoming = async () => {
    const [result] = await pool.query(
        'select * from eventos  where fecha > curdate() order by fecha asc');
    if (result.length === 0) return null;
    return result[0];
}

module.exports = {
    selectAll, selectById, selectFromTo, selectUpcoming
}