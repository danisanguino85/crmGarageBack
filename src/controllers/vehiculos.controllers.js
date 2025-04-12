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

module.exports = {
    getAllVehiculos,
    getVehiculoByMatricula,
    getVehiculoById,
};
