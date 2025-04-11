const { checkToken } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.use("/reparaciones", checkToken, require("./api/reparaciones.routes"));
router.use("/vehiculos", checkToken, require("./api/vehiculos.routes"));
router.use("/clientes", checkToken, require("../routes/api/clientes.routes"));
router.use("/usuarios", require("./api/usuarios.routes"));

module.exports = router;
