const router = require("express").Router();
const {
    getAllUsuarios,
    getUsuariosById,
    getUsuariosTelefono,
    getUsuariosByEmail,
    createUsuario,
    updateUsuario,
    loginUsuario,
} = require("../../controllers/usuarios.controllers");
const {
    checkToken,
    checkUserloginEmailAndcontraseña,
} = require("../../middlewares/auth.middlewares");

router.post("/login", loginUsuario);
router.get("/", checkToken, getAllUsuarios);
router.get("/:id", getUsuariosById);
router.post("/tel", checkToken, getUsuariosTelefono);
router.post("/email", getUsuariosByEmail);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);


module.exports = router;
