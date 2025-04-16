const router = require("express").Router();

const {
    getAllClientes,
    getClientesByTelefono,
    getClientesByEmail,
    getClienteById,
    createCliente,
    updateCliente,
    getClienteByReparacion
} = require("../../controllers/clientes.controllers");

router.get("/", getAllClientes);
router.get("/:clienteId", getClienteById);
router.get('/cliente/:reparacionId', getClienteByReparacion);


router.post("/tel", getClientesByTelefono);
router.post("/mail", getClientesByEmail);
router.post("/registro", createCliente);
router.put("/:clienteId", updateCliente);

module.exports = router;
