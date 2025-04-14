const db = require("../config/db.config");

const selectAllNotas = async () => {
    const [result] = await db.query("select *from crm_garage.notas");

    return result;
};

const selectNotaById = async (notaId) => {
    const [result] = await db.query("select*from notas where id=?", [notaId]);
    if (result === 0) return null;
    return result[0];
};
const insertNota = async ({ notas }) => {
    const [result] = await db.query("insert into notas (notas)values(?)", [
        notas,
    ]);
    return result;
};

const selectNotaByReparacion = async (reparacionId) => {
    const [result] = await db.query(
        "select notas.notas,notas.id from notas join reparaciones on notas.reparaciones_id = reparaciones.id where reparaciones.id=?",
        [reparacionId],
    );

    return result;
};

module.exports = {
    selectAllNotas,
    selectNotaById,
    insertNota,
    selectNotaByReparacion,
};
