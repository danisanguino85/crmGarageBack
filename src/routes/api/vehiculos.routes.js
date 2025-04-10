const router = require("express").Router();
const { getAll } = require("../../controllers/vehiculos.controllers");

router.get("/", getAll);

module.exports = router;
