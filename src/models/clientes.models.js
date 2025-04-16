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
const insertCliente = async ({
    nombre,
    apellidos,
    dni,
    telefono,
    email,
    direccion,
}) => {
    const [result] = await db.query(
        "insert into clientes (nombre,apellidos,dni,telefono,email,direccion)values(?,?,?,?,?,?)",
        [nombre, apellidos, dni, telefono, email, direccion],
    );
    return result;
};

const updateClienteById = async (
    clienteId,
    { nombre, apellidos, dni, telefono, email, direccion },
) => {
    const [result] = await db.query(
        "update clientes set nombre=?,apellidos=?,dni=?,telefono=?,email=?,direccion=? where id=?",
        [nombre, apellidos, dni, telefono, email, direccion, clienteId],
    );
    return result;
};

const selectClienteByReparacion = async (reparacionId) => {
    const [result] = await db.query(
        `
        SELECT c.* 
        FROM crm_garage.reparaciones r
        JOIN vehiculos v ON r.vehiculos_id = v.id
        JOIN clientes_has_vehiculos cv ON v.id = cv.vehiculos_id
        JOIN clientes c ON cv.clientes_id = c.id
        WHERE r.id = ?
      `,
        [reparacionId],
    );

    return result[0];
};

module.exports = {
    selectAllClientes,
    selectClientesByTelefono,
    selectClientesByEmail,
    selectClienteById,
    insertCliente,
    updateClienteById,
    selectClienteByReparacion,
};
