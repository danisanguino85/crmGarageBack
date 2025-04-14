const router = require("express").Router();
const {
    getAllReparaciones,
    getByIdReparaciones,
    createReparacion,
    updateReparacion,
    getReparacionesByMecanico,
} = require("../../controllers/reparaciones.controllers");

router.get("/", getAllReparaciones);
router.get("/usuario", getReparacionesByMecanico);
router.get("/:idReparaciones", getByIdReparaciones);

router.post("/new", createReparacion);
router.put("/:idReparaciones", updateReparacion);

module.exports = router;
