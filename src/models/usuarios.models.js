const db = require("../config/db.config");

const selectAllUsuarios = async () => {
	const [result] = await db.query("select*from usuarios");

	return result;
};

const selectAllUsuariosById = async (id) => {
	const [result] = await db.query("select*from usuarios where id = ?", [id]);

	if (result.length === 0) return null;
	return result[0];
};

const selectAllUsuariosByTelefono = async (telefono) => {
	const [result] = await db.query("select*from usuarios where telefono = ?", [
		telefono,
	]);

	if (result.length === 0) return null;
	return result[0];
};

const selectAllUsuariosByEmail = async (email) => {
	const [result] = await db.query("select*from usuarios where email = ?", [
		email,
	]);

	if (result.length === 0) return null;
	return result[0];
};

module.exports = {
	selectAllUsuarios,
	selectAllUsuariosById,
	selectAllUsuariosByTelefono,
	selectAllUsuariosByEmail,
};
