const router = require("express").Router();

const {
    getAllClientes,
    getClientesByTelefono,
    getClientesByEmail,
    getClienteById,
    createCliente,
    updateCliente,
} = require("../../controllers/clientes.controllers");

router.get("/", getAllClientes);
router.get("/:clienteId", getClienteById);
router.post("/tel", getClientesByTelefono);
router.post("/mail", getClientesByEmail);
router.post("/new", createCliente);
router.put("/:clienteId", updateCliente);

module.exports = router;
