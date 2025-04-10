const router = require("express").Router();
const { getAllVehiculos } = require("../../controllers/vehiculos.controllers");

router.get("/", getAllVehiculos);

module.exports = router;
