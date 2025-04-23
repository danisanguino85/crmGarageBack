const usuariosModel = require("../models/usuarios.models");
const bcrypt = require("bcryptjs");
const { createToken } = require("../helpers/utils");
const multer = require("multer");
const upload = multer({ dest: "public/images" });
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const fs = require("fs");

const getAllUsuarios = async (req, res, next) => {
    try {
        const usuarios = await usuariosModel.selectAllUsuarios();

        res.json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getAllAdmin = async (req, res, next) => {
    try {
        const admin = await usuariosModel.selectAllAdministradores();

        res.json(admin);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getAllMecan = async (req, res, next) => {
    try {
        const mecanicos = await usuariosModel.selectAllMecanicos();

        res.json(mecanicos);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getMecanicoByReparacion = async (req, res, next) => {
    const { reparacionId } = req.params;
    try {
        const mecanico =
            await usuariosModel.selectMecanicoByReparacion(reparacionId);

        res.json(mecanico);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getUsuariosById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const usuarios = await usuariosModel.selectUsuarioById(id);
        res.json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getUsuariosTelefono = async (req, res, next) => {
    const { telefono } = req.body;

    try {
        const usuarios = await usuariosModel.selectUsuarioByTelefono(telefono);
        res.json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getUsuariosByEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
        const usuarios = await usuariosModel.selectUsuarioByEmail(email);
        res.json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const getUsuariosByFoto = async (req, res, next) => {
    const { id } = req.params;
    try {
        const usuarios = await usuariosModel.selectUsuarioByFoto(id);
        res.json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
    }
};

const createUsuario = async (req, res, next) => {
    const { password } = req.body;
    req.body.password = bcrypt.hashSync(password, 10);

    try {
        const result = await usuariosModel.insertUsuario(req.body);
        console.log(result);
        const usuarios = await usuariosModel.selectUsuarioById(result.insertId);

        res.json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error });
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
        res.status(400).json({ message: error.sqlMessage });
    }
};

const updateimagen = async (req, res, next) => {
    // biome-ignore lint/style/useTemplate: <explanation>
    const extension = "." + req.file.mimetype.split("/")[1];

    const newNombre = req.file.filename + extension;

    const newRuta = req.file.path + extension;

    fs.renameSync(req.file.path, newRuta);

    const { filename } = req.file;
    const { id } = req.params;

    try {
        const result = await usuariosModel.updateUsuarioimagen(id, newNombre);
        const usuarios = await usuariosModel.selectUsuarioById(id);
        res.json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error.sqlMessage });
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
        res.status(400).json({ message: error.sqlMessage });
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
    getAllAdmin,
    getAllMecan,
    getMecanicoByReparacion,
    getUsuariosByFoto,
    updateimagen,
};
