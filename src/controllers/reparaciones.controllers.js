const reparacionesModel = require("../models/reparaciones.models");

const getAllReparaciones = async (req, res, next) => {
    try {
        const reparaciones = await reparacionesModel.selectAllReparaciones();

        res.json(reparaciones);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllReparaciones,
};
