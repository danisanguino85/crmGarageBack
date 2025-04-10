const router = require("express").Router();
const {
	getAllUsuarios,
	getUsuariosById,
	getUsuariosTelefono,
	getUsuariosByEmail,
} = require("../../controllers/usuarios.controllers");

router.get("/", getAllUsuarios);
router.get("/id", getUsuariosById);
router.post("/telefono", getUsuariosTelefono);
router.post("/email", getUsuariosByEmail);

module.exports = router;
