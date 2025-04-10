const db = require("../config/db.config");

const selectAllClientes = async () => {
    const [result] = await db.query("select * from crm_garage.clientes");

    return result;
};

module.exports = {
    selectAllClientes,
};
