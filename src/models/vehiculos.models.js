const db = require("../config/db.config");

const selectAll = async () => {
	const [result] = await db.query("SELECT * FROM vehiculos");
	return result;
};

module.exports = {
	selectAll,
};
