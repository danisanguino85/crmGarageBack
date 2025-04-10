const router = require("express").Router();
const { getAllUsuarios } = require("../../controllers/usuarios.controllers");

router.get("/", getAllUsuarios);

module.exports = router;
