const jwt = require('jsonwebtoken');

const getUsers = (req, res, next) => {
    try {
        res.send('Hola')
    } catch (error) {
        next(error)
    }
}

const createUser = (req, res, next) => {
    try {
        res.send('Usuario creado')
    } catch (error) {
        next(error)
    }
}

const login = (req, res, next) => {
    try {
        res.send('Usuario logado')
    } catch (error) {
        next(error)
    }
}

module.exports = { getUsers }