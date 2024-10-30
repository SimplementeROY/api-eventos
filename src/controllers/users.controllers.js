const bcrypt = require('bcryptjs');
const { insertUsuario, selectById, selectByName } = require('../models/users.model');
const jwt = require('jsonwebtoken')
const { createToken } = require('../utils/helpers')
const registro = async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    try {
        const existe = await selectByName(req.body.username);
        if (existe) {
            return res.status(400).json({ message: 'Usuario no disponible' });
        }
        const result = await insertUsuario(req.body);
        if (result === -1) {
            return res.status(400).json({ message: 'La inserción no se ha realizado' });
        }
        const usuario = await selectById(result)
        res.send(usuario)
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const usuario = await selectByName(username);
        if (!usuario) {
            return res.status(401).json({
                message: 'Error en usuario y/o contraseña'
            });
        }
        const iguales = bcrypt.compareSync(password, usuario.password);
        if (!iguales) {
            return res.status(401).json({
                message: 'Error en usuario y/o contraseña'
            });
        }

        res.json({
            message: 'Login correcto 🥳',
            token: createToken(usuario)
        });
    } catch (error) {
        next(error)
    }
}

const perfil = async (req, res, next) => {
    try {
        res.json(req.user)
    } catch (error) {
        next(error)
    }
}

module.exports = { perfil, registro, login }