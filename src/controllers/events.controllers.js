const { selectAll } = require("../models/events.model")
const { get } = require("../routes/api/users.routes")

const getAll = async (req, res, next) => {
    try {
        const result = await selectAll(req.params);
        res.json(result)
    } catch (error) {
        next(error)
    }

}

const getById = (req, res, next) => {
    try {

    }
    catch (error) {

    }
}

const getByDate = (req, res, next) => {
    try {

    }
    catch (error) {

    }
}

const getByUpcoming = (req, res, next) => {
    try {

    }
    catch (error) {

    }
}

const createEvent = (req, res, next) => {
    try {

    }
    catch (error) {

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