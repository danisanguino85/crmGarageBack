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
router.get("/", getAllUsuarios);
router.get("/:id", getUsuariosById);
router.post("/tel", checkToken, getUsuariosTelefono);
router.post("/email", getUsuariosByEmail);
router.post("/register", createUsuario);
router.put("/update/:id", updateUsuario);

module.exports = router;
