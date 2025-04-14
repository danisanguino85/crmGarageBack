const usuariosModel = require("../models/usuarios.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const checkUserloginEmailAndPassword = async (req, res, next) => {
    next();
};

const checkToken = async (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(403).json({
            message: "debes incluir la cabecera de autentificacion",
        });
    }

    const token = req.headers.authorization;

    let tokenDecodify;
    try {
        tokenDecodify = jwt.verify(token, "en un lugar de la mancha");
    } catch (error) {
        return res.status(403).json({ message: "el token es incorrecto" });
    }

    req.usuario = await usuariosModel.selectUsuarioById(tokenDecodify.id);

    next();
};

module.exports = {
    checkUserloginEmailAndPassword,
    checkToken,
};
