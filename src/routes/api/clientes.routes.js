

const router = require('express').Router();

const {getAllClientes} = require('../../controllers/clientes.controllers')

router.get('/', getAllClientes)

module.exports = router;