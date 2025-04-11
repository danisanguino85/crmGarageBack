const usuariosModel = require("../models/usuarios.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const checkUserloginEmailAndcontraseña = async (req, res, next) => {
    const { email, contraseña } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    const emailIsValid = await usuariosModel.selectAllUsuariosByEmail(email);

    if (!emailIsValid) {
        return res.status(404).json({
            message: "Usuario no encontrado, email o/y contraseña incorrecta",
        });
    }

    const contraseñaIsValid = bcrypt.compareSync(
        contraseña,
        emailIsValid.contraseña,
    );

    if (!contraseñaIsValid) {
        return res.status(401).json({
            message: "Usuario no encontrado, email o/y contraseña incorrecta",
        });
    }

    req.usuario = emailIsValid;

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

    req.usuario = tokenDecodify;

    next();
};

module.exports = {
    checkUserloginEmailAndcontraseña,
    checkToken,
};
