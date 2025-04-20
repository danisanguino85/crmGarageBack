const registroModels = require("../models/registro.models");

const createEntrada = async (req, res, next) => {
    try {
        const result = await registroModels.insertEntrada(req.body);
        const registro = await registroModels.selectRegistroById(
            result[0].insertId,
        );
        res.json(registro);
    } catch (error) {
        next(error);
    }
};

const createSalida = async (req, res, next) => {
    try {
        const result = await registroModels.insertSalida(req.body);
        const registro = await registroModels.selectRegistroById(
            result[0].insertId,
        );
        res.json(registro);
    } catch (error) {
        next(error);
    }
};

const getLatestSalidas = async (req, res, next) => {
    const { usuarioId } = req.params;
    try {
        const result = await registroModels.selectLatestSalidas(usuarioId);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
const getLatestEntradas = async (req, res, next) => {
    const { usuarioId } = req.params;
    try {
        const result = await registroModels.selectLatestEntradas(usuarioId);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createEntrada,
    createSalida,
    getLatestSalidas,
    getLatestEntradas,
};
