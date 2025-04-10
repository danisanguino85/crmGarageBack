const router = require("express").Router();

router.use("/reparaciones", require("./api/reparaciones.routes"));
router.use("/usuarios", require("./api/usuarios.routes"));
router.use("/vehiculos", require("./api/vehiculos.routes"));
router.use("/clientes", require("../routes/api/clientes.routes"));

module.exports = router;
