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
        const notas = await notasModel.selectNotaByReparacion(req.body);
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

module.exports = {
    getAllNotas,
    getNotaById,
    createNota,
    getNotaByReparacion,
};
