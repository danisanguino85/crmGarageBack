const { checkToken } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.use("/reparaciones", checkToken, require("./api/reparaciones.routes"));
router.use("/vehiculos", require("./api/vehiculos.routes"));
router.use("/clientes", checkToken, require("../routes/api/clientes.routes"));
router.use("/usuarios", require("./api/usuarios.routes"));
router.use("/notas", require("./api/notas.routes"));
router.use("/mailing", require("./api/mailing.routes"));
router.use("/registro", require("./api/registro.routes"));

module.exports = router;
