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

module.exports = {
    selectAllReparaciones,
    selectByIdReparaciones,
};
