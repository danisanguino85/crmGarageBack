const router = require("express").Router();
const {
    createEntrada,
    createSalida,
    getLatestEntradas,
    getLatestSalidas,
} = require("../../controllers/registro.controllers");

router.get("/entradas/:usuarioId", getLatestEntradas);
router.get("/salidas/:usuarioId", getLatestSalidas);

router.post("/entrada", createEntrada);
router.post("/salida", createSalida);

module.exports = router;
