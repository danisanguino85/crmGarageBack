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

module.exports = {
    selectAllNotas,
    selectNotaById,
    insertNota,
};
