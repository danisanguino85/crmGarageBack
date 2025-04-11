const usuariosModel = require("../models/usuarios.models");
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
        const usuarios = await usuariosModel.selectAllUsuariosById(id);
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const getUsuariosTelefono = async (req, res, next) => {
    const { telefono } = req.body;

    try {
        const usuarios =
            await usuariosModel.selectAllUsuariosByTelefono(telefono);
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const getUsuariosByEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
        const usuarios = await usuariosModel.selectAllUsuariosByEmail(email);
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const createUsuario = async (req, res, next) => {
    try {
        const result = await usuariosModel.selectAllCrearUsuario(req.body);
        const usuarios = await usuariosModel.selectAllUsuariosById(
            result.insertId,
        );
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const updateUsuario = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await usuariosModel.updateUsuarioById(id, req.body);
        const usuarios = await usuariosModel.selectAllUsuariosById(id);
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

const loginUsuario = async (req, res, next) => {
    try {
        res.json({
            message: "login correcto",
            token: await createToken(req.usuario),
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
