const router = require("express").Router();

router.use("/vehiculos", require("./api/vehiculos.routes"));

module.exports = router;
