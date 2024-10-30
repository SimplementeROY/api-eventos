const { getAll, getById, getFromDateToDate, getByUpcoming, createEvent, deleteEvent } = require('../../controllers/events.controllers');
const { updateEventById } = require('../../models/events.model');
const { checkAdmin } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/', getAll);
router.get('/date', getFromDateToDate);
router.get('/upcoming', getByUpcoming);
router.get('/:eventID', getById);

router.post('/', createEvent);
router.put('/:eventID', updateEventById)
router.delete('/:eventID', checkAdmin, deleteEvent);

module.exports = router