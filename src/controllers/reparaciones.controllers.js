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

module.exports = {
    getAllReparaciones,
    getByIdReparaciones,
};
