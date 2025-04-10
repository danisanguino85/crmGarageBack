const clientesModel = require("../models/clientes.models");

const getAllClientes = async (req, res, next) => {
    try {
        const clientes = await clientesModel.selectAllClientes();
        res.json(clientes);
    } catch (error) {
        next(error);
    }
};
const getClienteById = async (req, res, next) => {
    const { clienteId } = req.params;
    try {
        const clientes = await clientesModel.selectClienteById(clienteId);
        res.json(clientes);
    } catch (error) {
        next(error);
    }
};

const getClientesByTelefono = async (req, res, next) => {
    const { telefono } = req.body;
    try {
        const clientes = await clientesModel.selectClientesByTelefono(telefono);
        res.json(clientes);
    } catch (error) {
        next(error);
    }
};
const getClientesByEmail = async (req, res, next) => {
    const { email } = req.body;
    try {
        const clientes = await clientesModel.selectClientesByEmail(email);
        res.json(clientes);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllClientes,
    getClientesByTelefono,
    getClientesByEmail,
    getClienteById,
};
