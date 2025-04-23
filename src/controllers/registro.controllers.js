const registroModels = require("../models/registro.models");

const createEntrada = async (req, res, next) => {
    try {
        const result = await registroModels.insertEntrada(req.body);
        const registro = await registroModels.selectRegistroById(
            result[0].insertId,
        );
        res.json(registro);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
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
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getLatestSalidas = async (req, res, next) => {
    const { usuarioId } = req.params;
    try {
        const result = await registroModels.selectLatestSalidas(usuarioId);
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};
const getLatestEntradas = async (req, res, next) => {
    const { usuarioId } = req.params;
    try {
        const result = await registroModels.selectLatestEntradas(usuarioId);
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

module.exports = {
    createEntrada,
    createSalida,
    getLatestSalidas,
    getLatestEntradas,
};
