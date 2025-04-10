

const router = require('express').Router();


router.use('/clientes', require('../routes/api/clientes.routes'))
module.exports = router;