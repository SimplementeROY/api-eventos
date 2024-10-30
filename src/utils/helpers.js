const jwt = require('jsonwebtoken');
require('dotenv').config()
exports.createToken = (usuario) => {
    const data = {
        usuario_id: usuario.id,
        usuario_role: usuario.role
    }
    return jwt.sign(data, process.env.KEY);
}