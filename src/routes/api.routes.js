const { checkToken } = require('../utils/middlewares');

const router = require('express').Router();

router.use('/users', require('./api/users.routes'));
router.use('/events', checkToken, require('./api/events.routes'));

module.exports = router;