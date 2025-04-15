const router = require("express").Router();
const {
    getAllReparaciones,
    getByIdReparaciones,
    createReparacion,
    updateReparacion,
    getReparacionesByMecanico,
    getAllProgreso,
    getAllPendiente,
    getAllFinalizado,
} = require("../../controllers/reparaciones.controllers");

router.get("/", getAllReparaciones);
router.get("/usuario", getReparacionesByMecanico);
router.get("/finalizado", getAllFinalizado);
router.get("/progreso", getAllProgreso);
router.get("/pendiente", getAllPendiente);
router.get("/:idReparaciones", getByIdReparaciones);

router.post("/new", createReparacion);
router.put("/:idReparaciones", updateReparacion);

module.exports = router;
