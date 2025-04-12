const router = require("express").Router();
const {
    getAllReparaciones,
    getByIdReparaciones,
    createReparacion,
    updateReparacion,
} = require("../../controllers/reparaciones.controllers");

router.get("/", getAllReparaciones);
router.get("/:idReparaciones", getByIdReparaciones);
router.post("/new", createReparacion);
router.put("/:idReparaciones", updateReparacion);

module.exports = router;
