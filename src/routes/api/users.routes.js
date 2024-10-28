const router = require('express').Router()

const { perfil, registro, login } = require('../../controllers/users.controllers')
const { checkToken } = require('../../utils/middlewares')

router.post('/register', registro)
router.post('/login', login)
router.get('/profile', checkToken, perfil)

module.exports = router