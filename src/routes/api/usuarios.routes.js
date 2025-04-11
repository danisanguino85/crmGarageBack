const router = require("express").Router();
const {
    getAllUsuarios,
    getUsuariosById,
    getUsuariosTelefono,
    getUsuariosByEmail,
    createUsuario,
    updateUsuario,
} = require("../../controllers/usuarios.controllers");

router.get("/", getAllUsuarios);
router.get("/:id", getUsuariosById);
router.post("/tel", getUsuariosTelefono);
router.post("/email", getUsuariosByEmail);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);

module.exports = router;
