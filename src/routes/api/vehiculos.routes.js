const router = require("express").Router();
const {
    getAllVehiculos,
    getVehiculoByMatricula,
} = require("../../controllers/vehiculos.controllers");

router.get("/", getAllVehiculos);

router.post("/", getVehiculoByMatricula);

module.exports = router;
