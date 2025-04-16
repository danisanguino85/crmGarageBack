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

const deleteNota = async (req, res, next) => {
    try {
        const deletedNota = await notasModel.getNotaById();
        const result = await notasModel.selectDeleteNota();
        res.json(deletedNota);
    } catch (error) {
        next(error);
    }
};

const updateNota = async (req, res, next) => {};

module.exports = {
    getAllNotas,
    getNotaById,
    createNota,
    getNotaByReparacion,
    getReparacionAllNotas,
    deleteNota,
    updateNota,
};
