const notasModel = require("../models/notas.models");

const getAllNotas = async (req, res, next) => {
    try {
        const notas = await notasModel.selectAllNotas();
        res.json(notas);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};
const getNotaById = async (req, res, next) => {
    const { notaId } = req.params;
    try {
        const nota = await notasModel.selectNotaById(notaId);
        res.json(nota);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};
const getNotaByReparacion = async (req, res, next) => {
    try {
        const notas = await notasModel.selectNotaByReparacion(req.body.id);
        res.json(notas);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const createNota = async (req, res, next) => {
    try {
        const result = await notasModel.insertNota(req.body);
        const nota = await notasModel.selectNotaById(result.insertId);

        res.json(nota);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getReparacionAllNotas = async (req, res, next) => {
    const { reparacionId } = req.params;

    try {
        const reparacionNotas =
            await notasModel.selectReparacionAllNotas(reparacionId);
        res.json(reparacionNotas);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const insertReparacionNota = async (req, res, next) => {
    const { reparacionId } = req.params;

    try {
        const result = await notasModel.selectInsertReparacionNota(
            req.body,
            reparacionId,
        );

        const reparacion = await notasModel.selectNotaById(result.insertId);
        res.json(reparacion);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

module.exports = {
    getAllNotas,
    getNotaById,
    createNota,
    getNotaByReparacion,
    getReparacionAllNotas,
    insertReparacionNota,
};
