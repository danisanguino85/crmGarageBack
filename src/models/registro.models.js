const db = require("../config/db.config");

const insertEntrada = async ({ entrada, usuarios_id }) => {
    const result = db.query(
        "INSERT INTO registro_laboral (entrada, usuarios_id) VALUES (?,?)",
        [entrada, usuarios_id],
    );
    return result;
};

const insertSalida = async ({ salida, usuarios_id }) => {
    const result = db.query(
        "INSERT INTO registro_laboral (salida, usuarios_id) VALUES (?,?)",
        [salida, usuarios_id],
    );
    return result;
};

const selectRegistroById = async (registroId) => {
    const [result] = await db.query(
        "select * from registro_laboral where id=?",
        [registroId],
    );
    if (result === 0) return null;
    return result[0];
};
const selectLatestSalidas = async (usuarioId) => {
    const [result] = await db.query(
        "select salida, entrada from registro_laboral  where usuarios_id=? and salida is not null order by id desc limit 5",
        [usuarioId],
    );
    return result;
};
const selectLatestEntradas = async (usuarioId) => {
    const [result] = await db.query(
        "select entrada, entrada from registro_laboral  where usuarios_id=? and entrada is not null order by id desc limit 5",
        [usuarioId],
    );
    return result;
};
module.exports = {
    insertEntrada,
    insertSalida,
    selectRegistroById,
    selectLatestEntradas,
    selectLatestSalidas,
};
