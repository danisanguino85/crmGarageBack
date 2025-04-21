const router = require("express").Router();
const {
    getAllUsuarios,
    getUsuariosById,
    getUsuariosTelefono,
    getUsuariosByEmail,
    createUsuario,
    updateUsuario,
    loginUsuario,
    getAllAdmin,
    getAllMecan,
    getMecanicoByReparacion,
    getUsuariosByFoto,
} = require("../../controllers/usuarios.controllers");
const { checkToken } = require("../../middlewares/auth.middlewares");

router.get("/", getAllUsuarios);
router.get("/admin", getAllAdmin);
router.get("/mecanico/:reparacionId", getMecanicoByReparacion);
router.get("/mecanico", getAllMecan);
router.get("/:id", getUsuariosById);
router.post("/login", loginUsuario);
router.get("/foto/:id", getUsuariosByFoto);
router.post("/tel", checkToken, getUsuariosTelefono);
router.post("/email", getUsuariosByEmail);
router.post("/register", createUsuario);
router.put("/update/:id", updateUsuario);

module.exports = router;
