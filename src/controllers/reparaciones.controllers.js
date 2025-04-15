const reparacionesModel = require("../models/reparaciones.models");

const getAllReparaciones = async (req, res, next) => {
    try {
        const reparaciones = await reparacionesModel.selectAllReparaciones();

        res.json(reparaciones);
    } catch (error) {
        next(error);
    }
};

const getByIdReparaciones = async (req, res, next) => {
    const { idReparaciones } = req.params;
    try {
        const reparacion =
            await reparacionesModel.selectByIdReparaciones(idReparaciones);
        res.json(reparacion);
    } catch (error) {
        next(error);
    }
};

const getReparacionesByMecanico = async (req, res, next) => {

    try {
        const reparaciones =
            await reparacionesModel.selectReparacionesByMecanico(
                req.usuario.id,
            );
        res.json(reparaciones);
    } catch (error) {
        next(error);
    }
};

const getVehiculoByReparacion = async (req, res, next) => {
    try {
        const vehiculos = await reparacionesModel.selectVehiculoByReparacion(
            req.body.id,
        );
        res.json(vehiculos);
    } catch (error) {
        next(error);
    }
};

const createReparacion = async (req, res, next) => {
    const { estado, presupuesto, precio_total } = req.body;

    try {
        const result = await reparacionesModel.insertRepacion(
            estado,
            presupuesto,
            precio_total,
        );

        const reparacion = await reparacionesModel.selectByIdReparaciones(
            result.insertId,
        );

        res.json(reparacion);
    } catch (error) {
        next(error);
    }
};

const updateReparacion = async (req, res, next) => {
    const { idReparaciones } = req.params;

    try {
        const result = await reparacionesModel.updateReparacionById(
            idReparaciones,
            req.body,
        );

        const reparacion =
            await reparacionesModel.selectByIdReparaciones(idReparaciones);

        res.json(reparacion);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllReparaciones,
    getByIdReparaciones,
    createReparacion,
    updateReparacion,
    getReparacionesByMecanico,
    getVehiculoByReparacion,
};
