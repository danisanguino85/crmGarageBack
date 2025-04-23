const clientesModel = require("../models/clientes.models");

const getAllClientes = async (req, res, next) => {
    const { desde, hasta } = req.params;
    try {
        const clientes = await clientesModel.selectAllClientes(
            Number(desde),
            Number(hasta),
        );
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};
const getClienteById = async (req, res, next) => {
    const { clienteId } = req.params;
    try {
        const clientes = await clientesModel.selectClienteById(clienteId);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getClientesByTelefono = async (req, res, next) => {
    const { telefono } = req.body;
    try {
        const clientes = await clientesModel.selectClientesByTelefono(telefono);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};
const getClientesByEmail = async (req, res, next) => {
    const { email } = req.body;
    try {
        const clientes = await clientesModel.selectClientesByEmail(email);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const createCliente = async (req, res, next) => {
    try {
        const result = await clientesModel.insertCliente(req.body);
        const cliente = await clientesModel.selectClienteById(result.insertId);

        res.json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
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
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getClienteByReparacion = async (req, res, next) => {
    const { reparacionId } = req.params;
    try {
        const cliente =
            await clientesModel.selectClienteByReparacion(reparacionId);
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
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
