const { selectAll, selectById, selectFromTo, selectUpcoming, insertEvent, deleteEventFromId } = require("../models/events.model")

const getAll = async (req, res, next) => {
    const { tipo } = req.query
    try {
        const result = await selectAll(tipo);
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const result = await selectById(req.params.eventID);
        res.json(result)
    }
    catch (error) {
        next(error)
    }
}

const getFromDateToDate = async (req, res, next) => {
    const { from, to } = req.query;

    try {
        const result = await selectFromTo(from, to);
        res.json(result)

    }
    catch (error) {
        next(error)
    }
}

const getByUpcoming = async (req, res, next) => {
    try {
        const result = await selectUpcoming();
        res.json(result)
    }
    catch (error) {
        next(error)
    }
}

const createEvent = async (req, res, next) => {
    try {
        const result = await insertEvent(req.body, req.user.id)
        if (result === -1) {
            res.status(404).json({ message: "El evento no ha podido ser creado" })
        }
        const evento = await selectById(result);
        res.status(201).json(evento)
    }
    catch (error) {
        next(error)
    }
}

const updateEvent = async (req, res, next) => {
    const { eventID } = req.params;
    try {
        const result = await updateEventById(eventID);
        res.json(result)
    }
    catch (error) {
        next(error)
    }
}

const deleteEvent = async (req, res, next) => {
    const { eventID } = req.params
    try {
        const evento = await selectById(eventID);
        await deleteEventFromId(eventID)
        res.json(evento)
    }
    catch (error) {
        next(error)
    }
}

module.exports = { getAll, getFromDateToDate, getById, getByUpcoming, createEvent, updateEvent, deleteEvent }