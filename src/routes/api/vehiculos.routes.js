const router = require("express").Router();
const {
    getVehiculoByReparacion,
} = require("../../controllers/reparaciones.controllers");
const {
    getAllVehiculos,
    getVehiculoByMatricula,
    getVehiculoById,
} = require("../../controllers/vehiculos.controllers");

router.get("/", getAllVehiculos);
router.post("/reparacion", getVehiculoByReparacion);
router.get("/:vehiculoId", getVehiculoById);

router.post("/vehiculo", getVehiculoByMatricula);

module.exports = router;
