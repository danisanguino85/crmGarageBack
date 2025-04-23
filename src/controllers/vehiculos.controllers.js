const vehiculosModel = require("../models/vehiculos.models");

const getAllVehiculos = async (req, res, next) => {
    try {
        const vehiculo = await vehiculosModel.selectAllVehiculos();
        res.json(vehiculo);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};
const getVehiculoById = async (req, res, next) => {
    const { vehiculoId } = req.params;
    try {
        const vehiculo = await vehiculosModel.selectVehiculoById(vehiculoId);
        res.json(vehiculo);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getVehiculoByMatricula = async (req, res, next) => {
    const { matricula } = req.body;

    try {
        const vehiculo =
            await vehiculosModel.selectVehiculoByMatricula(matricula);

        res.json(vehiculo[0]);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getVehiculoByCliente = async (req, res, next) => {
    const { clienteId } = req.params;
    try {
        const vehiculo =
            await vehiculosModel.selectVehiculoByCliente(clienteId);

        res.json(vehiculo);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};
const createVehiculo = async (req, res, next) => {
    const { clienteId } = req.params;

    try {
        const result = await vehiculosModel.insertVehiculo(req.body);
        const vehiculo = await vehiculosModel.selectVehiculoById(
            result.insertId,
        );

        await vehiculosModel.insertRelacionVehiculoCliente(
            vehiculo.id,
            clienteId,
        );

        res.json(vehiculo, clienteId);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllVehiculos,
    getVehiculoByMatricula,
    getVehiculoById,
    createVehiculo,
    getVehiculoByCliente,
};
