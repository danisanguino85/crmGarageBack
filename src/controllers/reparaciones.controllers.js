const reparacionesModel = require("../models/reparaciones.models");

const getAllReparaciones = async (req, res, next) => {
    try {
        const reparaciones = await reparacionesModel.selectAllReparaciones();

        res.json(reparaciones);
    } catch (error) {
        next(error);
    }
};

const getAllProgreso = async (req, res, next) => {
    try {
        const progreso = await reparacionesModel.selectAllProgreso();

        res.json(progreso);
    } catch (error) {
        next(error);
    }
};

const getAllPendiente = async (req, res, next) => {
    try {
        const pendiente = await reparacionesModel.selectAllPendiente();

        res.json(pendiente);
    } catch (error) {
        next(error);
    }
};

const getAllFinalizado = async (req, res, next) => {
    try {
        const finalizado = await reparacionesModel.selectAllFinalizado();

        res.json(finalizado);
    } catch (error) {
        next(error);
    }
};

const getAllPorFechaIngreso = async (req, res, next) => {
    try {
        const fechaIngreso = await reparacionesModel.selectAllPorFechaIngreso();

        res.json(fechaIngreso);
    } catch (error) {
        next(error);
    }
};

const getAllFechaAntigua = async (req, res, next) => {
    try {
        const fechaAntigua =
            await reparacionesModel.selectAllPorFechaIngresoAntigua();

        res.json(fechaAntigua);
    } catch (error) {
        next(error);
    }
};
const getReparacionesByVehiculo = async (req, res, next) => {
    try {
        const { vehiculoId } = req.body;
        const reparaciones =
            await reparacionesModel.selectReparacionesByVehiculo(vehiculoId);
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
    const { presupuesto, usuarios_id, vehiculos_id } = req.body;

    try {
        const result = await reparacionesModel.insertRepacion(req.body);

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
    getAllProgreso,
    getAllPendiente,
    getAllFinalizado,
    getAllPorFechaIngreso,
    getAllFechaAntigua,
    getReparacionesByVehiculo,
};
