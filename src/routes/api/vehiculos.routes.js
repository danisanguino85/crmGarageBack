const router = require("express").Router();
const {
    getAllVehiculos,
    getVehiculoByMatricula,
    getVehiculoById,
} = require("../../controllers/vehiculos.controllers");

router.get("/", getAllVehiculos);
router.get("/:vehiculoId", getVehiculoById);

router.post("/vehiculo", getVehiculoByMatricula);

module.exports = router;
