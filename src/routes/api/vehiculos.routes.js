const router = require("express").Router();
const {
    getVehiculoByReparacion,
} = require("../../controllers/reparaciones.controllers");
const {
    getAllVehiculos,
    getVehiculoByMatricula,
    getVehiculoById,
    createVehiculo,
    getVehiculoByCliente,
} = require("../../controllers/vehiculos.controllers");

router.get("/", getAllVehiculos);
router.post("/reparacion", getVehiculoByReparacion);
router.get("/:vehiculoId", getVehiculoById);
router.get("/vehiculo/:clienteId", getVehiculoByCliente);

router.post("/nuevoVehiculo/:clienteId", createVehiculo);
router.post("/vehiculo", getVehiculoByMatricula);

module.exports = router;
