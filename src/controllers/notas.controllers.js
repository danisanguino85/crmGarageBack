const notasModel = require("../models/notas.models");

const getAllNotas = async (req, res, next) => {
    try {
        const notas = await notasModel.selectAllNotas();
        res.json(notas);
    } catch (error) {
        next(error);
    }
};
const getNotaById = async (req, res, next) => {
    const { notaId } = req.params;
    try {
        const nota = await notasModel.selectNotaById(notaId);
        res.json(nota);
    } catch (error) {
        next(error);
    }
};
const getNotaByReparacion = async (req, res, next) => {
    try {
        const notas = await notasModel.selectNotaByReparacion(req.body.id);
        res.json(notas);
    } catch (error) {
        next(error);
    }
};

const createNota = async (req, res, next) => {
    try {
        const result = await notasModel.insertNota(req.body);
        const nota = await notasModel.selectNotaById(result.insertId);

        res.json(nota);
    } catch (error) {
        next(error);
    }
};

const getReparacionAllNotas = async (req, res, next) => {
    const { reparacionId } = req.params;

    try {
        const reparacionNotas =
            await notasModel.selectReparacionAllNotas(reparacionId);
        res.json(reparacionNotas);
    } catch (error) {
        next(error);
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
        next(error);
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
