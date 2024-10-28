const { getAll, getById, getFromDateToDate, getByUpcoming, createEvent, deleteEvent } = require('../../controllers/events.controllers');
const { updateEventById } = require('../../models/events.model');

const router = require('express').Router();

router.get('/', getAll);
router.get('/date', getFromDateToDate);
router.get('/upcoming', getByUpcoming);
router.get('/:eventID', getById);

router.post('/', createEvent);
router.put('/:eventID', updateEventById)
router.delete('/:eventID', deleteEvent);

module.exports = router