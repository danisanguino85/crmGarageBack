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
const { checkToken, checkUserloginEmailAndcontraseña } = require("../../middlewares/auth.middlewares");

router.get("/", checkToken, getAllUsuarios);
router.get("/:id", checkToken, getUsuariosById);
router.post("/tel", checkToken, getUsuariosTelefono);
router.post("/email", checkToken, getUsuariosByEmail);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.post('/login', checkUserloginEmailAndcontraseña,  loginUsuario)

module.exports = router;
