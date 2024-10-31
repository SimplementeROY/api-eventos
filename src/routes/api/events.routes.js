const { getAll, getById, getFromDateToDate, getByUpcoming, createEvent, deleteEvent, updateEvent } = require('../../controllers/events.controllers');
const { checkAdmin } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/', getAll);
router.get('/date', getFromDateToDate);
router.get('/upcoming', getByUpcoming);
router.get('/:eventID', getById);

router.post('/', createEvent);
router.put('/:eventID', updateEvent)
router.delete('/:eventID', checkAdmin, deleteEvent);

module.exports = router