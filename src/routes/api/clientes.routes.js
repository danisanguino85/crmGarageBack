const router = require("express").Router();

const {
    getAllClientes,
    getClientesByTelefono,
    getClientesByEmail,
    getClienteById,
    createCliente,
    updateCliente,
    getClienteByReparacion,
} = require("../../controllers/clientes.controllers");

router.get("/cliente/:reparacionId", getClienteByReparacion);
router.get("/:desde/:hasta", getAllClientes);
router.get("/:clienteId", getClienteById);

router.post("/tel", getClientesByTelefono);
router.post("/mail", getClientesByEmail);
router.post("/registro", createCliente);
router.put("/:clienteId", updateCliente);

module.exports = router;
