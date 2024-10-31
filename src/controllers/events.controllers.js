const { selectAll, selectById, selectFromTo, selectUpcoming, insertEvent, deleteEventFromId, updateEventById } = require("../models/events.model")

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
        if (!result) {
            return res.status(404).json('Evento no encontrado')
        }
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
        if (!result) {
            return res.json({ message: "No hay eventos entre esas fechas" })
        }
        res.json(result)

    }
    catch (error) {
        next(error)
    }
}

const getByUpcoming = async (req, res, next) => {
    try {
        const result = await selectUpcoming();
        if (!result) {
            return res.json({ message: "No hay eventos futuros" })
        }
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
            res.status(400).json({ message: "El evento no ha podido ser creado" })
        }
        const evento = await selectById(result);
        res.status(201).json({ message: "Evento creado exitósamente 🎊", evento })
    }
    catch (error) {
        next(error)
    }
}

const updateEvent = async (req, res, next) => {
    const { eventID } = req.params;
    try {
        const result = await updateEventById(eventID, req.body);
        if (!result) {
            return res.status(404).json({ message: 'No se ha podido actualizar el evento' })
        }
        const event = await selectById(eventID)
        res.json({ message: "Evento actualizado con éxito", event })
    }
    catch (error) {
        next(error)
    }
}

const deleteEvent = async (req, res, next) => {
    const { eventID } = req.params
    try {
        const evento = await selectById(eventID);
        if (!evento) {
            return res.status(404).json({ message: 'No se ha podido eliminar el evento ya que no existe' })
        }
        await deleteEventFromId(eventID)
        res.json(evento)
    }
    catch (error) {
        next(error)
    }
}

module.exports = { getAll, getFromDateToDate, getById, getByUpcoming, createEvent, updateEvent, deleteEvent }