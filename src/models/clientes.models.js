const db = require("../config/db.config");

const selectAllClientes = async () => {
    const [result] = await db.query("select * from crm_garage.clientes");

    return result;
};

const selectClienteById = async (clienteId) => {
    const [result] = await db.query("select*from clientes where id=?", [
        clienteId,
    ]);
    if (result === 0) return null;
    return result[0];
};

const selectClientesByTelefono = async (telefono) => {
    const [result] = await db.query("select * from clientes where telefono=?", [
        telefono,
    ]);
    if (result === 0) return null;
    return result[0];
};
const selectClientesByEmail = async (email) => {
    const [result] = await db.query("select * from clientes where email=?", [
        email,
    ]);
    if (result === 0) return null;
    return result[0];
};

module.exports = {
    selectAllClientes,
    selectClientesByTelefono,
    selectClientesByEmail,
    selectClienteById,
};
