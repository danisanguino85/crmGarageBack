const router = require("express").Router();

router.use("/reparaciones", require("./api/reparaciones.routes"));
router.use("/vehiculos", require("./api/vehiculos.routes"));
router.use("/clientes", require("../routes/api/clientes.routes"));
router.use("/usuarios/:id", require("./api/usuarios.routes"));
router.use("/usuarios/telefono", require("./api/usuarios.routes"));
router.use("/usuarios/email", require("./api/usuarios.routes"));
router.use("/usuarios", require("./api/usuarios.routes"));

module.exports = router;
