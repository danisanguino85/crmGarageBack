const usuariosModel = require("../models/usuarios.models");

const getAllUsuarios = async (req, res, next) => {
	try {
		const usuarios = await usuariosModel.selectAllUsuarios();

		res.json(usuarios);
	} catch (error) {
		next(error);
	}
};

const getUsuariosById = async (req, res, next) => {
	const { id } = req.body;
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
		const usuarios = await usuariosModel.selectAllUsuariosByTelefono(telefono);
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

module.exports = {
	getAllUsuarios,
	getUsuariosById,
	getUsuariosTelefono,
	getUsuariosByEmail,
};
