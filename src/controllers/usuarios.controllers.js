const usuariosModel = require("../models/usuarios.models");

const getAllUsuarios = async (req, res, next) => {
    try {
        const usuarios = await usuariosModel.selectAllUsuarios();

        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsuarios,
};
