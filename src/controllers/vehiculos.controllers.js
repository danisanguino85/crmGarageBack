const vehiculosModel = require("../models/vehiculos.models");

const getAllVehiculos = async (req, res, next) => {
    try {
        const vehiculo = await vehiculosModel.selectAllVehiculos();
        res.json(vehiculo);
    } catch (error) {
        next(error);
    }
};
const getVehiculoById = async (req, res, next) => {
    const { vehiculoId } = req.params;
    try {
        const vehiculo = await vehiculosModel.selectVehiculoById(vehiculoId);
        res.json(vehiculo);
    } catch (error) {
        next(error);
    }
};

const getVehiculoByMatricula = async (req, res, next) => {
    const { matricula } = req.body;

    try {
        const vehiculo =
            await vehiculosModel.selectVehiculoByMatricula(matricula);

        res.json(vehiculo[0]);
    } catch (error) {
        console.log(error);
    }
};
const createVehiculo = async (req, res, next) => {
    try {
        const result = await vehiculosModel.insertVehiculo(req.body);
        const vehiculo = await vehiculosModel.selectVehiculoById(
            result.insertId,
        );

        res.json(vehiculo);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllVehiculos,
    getVehiculoByMatricula,
    getVehiculoById,
    createVehiculo,
};
