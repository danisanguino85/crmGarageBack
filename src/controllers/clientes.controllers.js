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

const createCliente = async (req, res, next) => {
    try {
        const result = await clientesModel.insertCliente(req.body);
        const cliente = await clientesModel.selectClienteById(result.insertId);

        res.json(cliente);
    } catch (error) {
        next(error);
    }
};

const updateCliente = async (req, res, next) => {
    const { clienteId } = req.params;
    try {
        const result = await clientesModel.updateClienteById(
            clienteId,
            req.body,
        );
        const cliente = await clientesModel.selectClienteById(clienteId);

        res.json(cliente);
    } catch (error) {
        next(error);
    }
};

const getClienteByReparacion = async (req, res, next) => {
    const { reparacionId } = req.params;

    try {
        const cliente =
            await clientesModel.selectClienteByReparacion(reparacionId);
        res.json(cliente);
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getAllClientes,
    getClientesByTelefono,
    getClientesByEmail,
    getClienteById,
    createCliente,
    updateCliente,
    getClienteByReparacion,
};
