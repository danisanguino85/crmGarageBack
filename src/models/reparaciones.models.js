const db = require("../config/db.config");

const selectAllReparaciones = async () => {
    const [result] = await db.query("select*from reparaciones");

    return result;
};

const selectByIdReparaciones = async (idReparaciones) => {
    const [result] = await db.query(
        "select * from crm_garage.reparaciones where reparaciones.id=?",
        [idReparaciones],
    );

    return result[0];
};

const insertRepacion = async ({ estado, presupuesto, precio_total }) => {
    const [result] = await db.query(
        "insert into crm_garage.reparaciones (estado, presupuesto, precio_total) values (?,?,?)",
        [estado, presupuesto, precio_total],
    );

    return result;
};

const updateReparacionById = async (
    idReparaciones,
    { estado, presupuesto, precio_total },
) => {
    const [result] = await db.query(
        `update crm_garage.reparaciones set estado=?, presupuesto=?, precio_total=? where reparaciones.id = ${idReparaciones}`,
        [estado, presupuesto, precio_total],
    );

    return result;
};

module.exports = {
    selectAllReparaciones,
    selectByIdReparaciones,
    insertRepacion,
    updateReparacionById,
};
