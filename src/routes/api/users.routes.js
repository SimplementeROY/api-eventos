const router = require('express').Router()

const { getUsers } = require('../../controllers/users.controllers')

router.get('/', getUsers) // Agregar funcion
// router.post('/register')
// router.post('/login')
// router.get('/profile')

module.exports = router