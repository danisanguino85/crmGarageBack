const reparacionesModel = require("../models/reparaciones.models");
const notasModel = require("../models/notas.models");

const getAllReparaciones = async (req, res, next) => {
    try {
        const reparaciones = await reparacionesModel.selectAllReparaciones();

        res.json(reparaciones);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getAllProgreso = async (req, res, next) => {
    try {
        const progreso = await reparacionesModel.selectAllProgreso();

        res.json(progreso);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getAllPendiente = async (req, res, next) => {
    try {
        const pendiente = await reparacionesModel.selectAllPendiente();

        res.json(pendiente);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getAllFinalizado = async (req, res, next) => {
    try {
        const finalizado = await reparacionesModel.selectAllFinalizado();

        res.json(finalizado);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getAllPorFechaIngreso = async (req, res, next) => {
    try {
        const fechaIngreso = await reparacionesModel.selectAllPorFechaIngreso();

        res.json(fechaIngreso);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getAllFechaAntigua = async (req, res, next) => {
    try {
        const fechaAntigua =
            await reparacionesModel.selectAllPorFechaIngresoAntigua();

        res.json(fechaAntigua);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};
const getReparacionesByVehiculo = async (req, res, next) => {
    try {
        const { vehiculoId } = req.body;
        const reparaciones =
            await reparacionesModel.selectReparacionesByVehiculo(vehiculoId);
        res.json(reparaciones);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getByIdReparaciones = async (req, res, next) => {
    const { idReparaciones } = req.params;
    try {
        const reparacion =
            await reparacionesModel.selectByIdReparaciones(idReparaciones);
        res.json(reparacion);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
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
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getVehiculoByReparacion = async (req, res, next) => {
    try {
        const vehiculos = await reparacionesModel.selectVehiculoByReparacion(
            req.body.id,
        );
        res.json(vehiculos);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const createReparacion = async (req, res, next) => {
    try {
        const result = await reparacionesModel.insertRepacion(req.body);

        const reparacion = await reparacionesModel.selectByIdReparaciones(
            result.insertId,
        );
        const nota = await notasModel.insertReparacionNota(
            req.body.notas,
            result.insertId,
        );

        res.json(reparacion, nota);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
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
        res.status(400).json({ message: error.sqlMessage });
    }
};

const marcarCompletada = async (req, res, next) => {
    const { idReparaciones } = req.params;

    try {
        const result = await reparacionesModel.selectMarcarCompeltado(
            idReparaciones,
            req.body,
        );

        const reparacion =
            await reparacionesModel.selectByIdReparaciones(idReparaciones);

        res.json(reparacion);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
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
    marcarCompletada,
};
