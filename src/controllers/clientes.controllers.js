
const clientesModel = require('../models/clientes.models')

const getAllClientes = async (req, res, next)=>{

    const result = await clientesModel.selectAllClientes();

    res.json(result)

}



module.exports = {
    getAllClientes
}