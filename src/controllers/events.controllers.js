const { selectAll, selectById, selectFromTo, selectUpcoming, insertEvent } = require("../models/events.model")
const { get } = require("../routes/api/users.routes")

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

const getByDate = async (req, res, next) => {
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

    }
}

const createEvent = async (req, res, next) => {
    try {
        const result = await insertEvent(req.body)
        res.json(result)
    }
    catch (error) {
        next(error)
    }
}

const updateEvent = (req, res, next) => {
    try {

    }
    catch (error) {

    }
}

const deleteEvent = (req, res, next) => {
    try {

    }
    catch (error) {

    }
}

module.exports = { getAll, getByDate, getById, getByUpcoming, createEvent, updateEvent, deleteEvent }