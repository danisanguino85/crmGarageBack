const vehiculosModel = require("../models/vehiculos.models");

const getAllVehiculos = async (req, res, next) => {
	try {
		const vehiculo = await vehiculosModel.selectAllVehiculos();
		res.json(vehiculo);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllVehiculos,
};
