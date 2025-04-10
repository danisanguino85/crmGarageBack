const router = require("express").Router();
const {
    getAllReparaciones, getByIdReparaciones
} = require("../../controllers/reparaciones.controllers");

router.get("/", getAllReparaciones);
router.get('/:idReparaciones', getByIdReparaciones)

module.exports = router;
