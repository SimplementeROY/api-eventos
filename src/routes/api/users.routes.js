const router = require('express').Router()

const { perfil, registro, login } = require('../../controllers/users.controllers')

router.post('/register', registro)
router.post('/login', login)
router.get('/profile', perfil)

module.exports = router