const usuariosModel = require("../models/usuarios.models");
const bcrypt = require("bcryptjs");
const { createToken } = require("../helpers/utils");

const getAllUsuarios = async (req, res, next) => {
    try {
        const usuarios = await usuariosModel.selectAllUsuarios();

        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const getUsuariosById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const usuarios = await usuariosModel.selectUsuarioById(id);
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const getUsuariosTelefono = async (req, res, next) => {
    const { telefono } = req.body;

    try {
        const usuarios = await usuariosModel.selectUsuarioByTelefono(telefono);
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const getUsuariosByEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
        const usuarios = await usuariosModel.selectUsuarioByEmail(email);
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const createUsuario = async (req, res, next) => {
    const { password } = req.body;
    req.body.password = bcrypt.hashSync(password, 10);

    try {
        const result = await usuariosModel.insertUsuario(req.body);
        const usuarios = await usuariosModel.selectUsuarioById(result.insertId);

        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const updateUsuario = async (req, res, next) => {
    const { id } = req.params;
    const { password } = req.body;
    req.body.password = bcrypt.hashSync(password, 10);

    try {
        const result = await usuariosModel.updateUsuarioById(id, req.body);
        const usuarios = await usuariosModel.selectUsuarioById(id);

        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const loginUsuario = async (req, res, next) => {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    const emailIsValid = await usuariosModel.selectUsuarioByEmail(email);

    if (!emailIsValid) {
        return res.status(404).json({
            message: " 1 Usuario no encontrado, email o/y password incorrecta",
        });
    }

    const passwordIsValid = bcrypt.compareSync(password, emailIsValid.password);

    console.log(emailIsValid.password);

    if (!passwordIsValid) {
        return res.status(401).json({
            message: "Usuario no encontrado, email o/y password incorrecta",
        });
    }

    try {
        res.json({
            message: "login correcto",
            token: createToken(emailIsValid),
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsuarios,
    getUsuariosById,
    getUsuariosTelefono,
    getUsuariosByEmail,
    createUsuario,
    updateUsuario,
    loginUsuario,
};
