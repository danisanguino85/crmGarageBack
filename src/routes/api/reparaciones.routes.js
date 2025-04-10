const router = require("express").Router();
const {
    getAllReparaciones,
} = require("../../controllers/reparaciones.controllers");

router.get("/", getAllReparaciones);

module.exports = router;
