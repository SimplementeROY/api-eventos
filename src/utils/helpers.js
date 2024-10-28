const jwt = require('jsonwebtoken');

exports.createToken = (usuario) => {
    const data = {
        usuario_id: usuario.id,
    }
    return jwt.sign(data, 'en un lugar de la mancha');
}