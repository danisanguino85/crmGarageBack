const router = require("express").Router();

router.use("/reparaciones", require("./api/reparaciones.routes"));
router.use("/usuarios", require("./api/usuarios.routes"));

module.exports = router;
