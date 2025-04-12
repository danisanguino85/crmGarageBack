const router = require("express").Router();
const {
    getAllNotas,
    getNotaById,
    createNota,
} = require("../../controllers/notas.controllers");

router.get("/", getAllNotas);
router.get("/:notaId", getNotaById);
router.post("/", createNota);

module.exports = router;
