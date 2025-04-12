const db = require("../config/db.config");

const selectAllVehiculos = async () => {
    const [result] = await db.query("SELECT * FROM vehiculos");
    return result;
};

const selectVehiculoByMatricula = async (matricula) => {
    const [result] = await db.query(
        "select * from crm_garage.vehiculos where vehiculos.matricula=?",
        [matricula],
    );

    return result;
};
const selectVehiculoById = async (vehiculoId) => {
    const [result] = await db.query("select*from vehiculos where id=?", [
        vehiculoId,
    ]);
    if (result === 0) return null;
    return result[0];
};

module.exports = {
    selectAllVehiculos,
    selectVehiculoByMatricula,
    selectVehiculoById,
};
