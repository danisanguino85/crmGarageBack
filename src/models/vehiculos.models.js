const db = require("../config/db.config");

const selectAllVehiculos = async () => {
	const [result] = await db.query("SELECT * FROM vehiculos");
	return result;
};

module.exports = {
	selectAllVehiculos,
};
