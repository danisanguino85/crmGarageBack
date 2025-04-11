const usuariosModel = require("../models/usuarios.models");
const bcrypt = require("bcryptjs");

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
    const { contraseña } = req.body;
    req.body.contraseña = bcrypt.hashSync(contraseña, 10);

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
    const { contraseña } = req.body;
    req.body.contraseña = bcrypt.hashSync(contraseña, 10);

    try {
        const result = await usuariosModel.selectAllupdateById(id, req.body);
        const usuarios = await usuariosModel.selectAllUsuariosById(id);

        res.json(usuarios);
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
};
