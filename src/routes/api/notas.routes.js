const router = require("express").Router();
const {
    getAllNotas,
    getNotaById,
    createNota,
    getNotaByReparacion,
} = require("../../controllers/notas.controllers");

router.get("/", getAllNotas);
router.get("/:notaId", getNotaById);
router.post("/", createNota);
router.post("/rep", getNotaByReparacion);

module.exports = router;
