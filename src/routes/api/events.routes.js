const { getAll, getById, getByDate, getByUpcoming, createEvent } = require('../../controllers/events.controllers')

const router = require('express').Router();

router.get('/', getAll) // Agregar funcion
router.get('/:eventID', getById)
router.get('/date', getByDate)
router.get('/upcoming', getByUpcoming)
router.post('/', createEvent)

module.exports = router