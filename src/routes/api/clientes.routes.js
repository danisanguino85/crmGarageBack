const router = require("express").Router();

const {
    getAllClientes,
    getClientesByTelefono,
    getClientesByEmail,
    getClienteById,
} = require("../../controllers/clientes.controllers");

router.get("/", getAllClientes);
router.get("/:clienteId", getClienteById);
router.post("/tel", getClientesByTelefono);
router.post("/mail", getClientesByEmail);

module.exports = router;
