const vehiculosModel = require("../models/vehiculos.models");

const getAll = async (req, res, next) => {
	try {
		const vehiculo = await vehiculosModel.selectAll();
		res.json(vehiculo);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAll,
};
