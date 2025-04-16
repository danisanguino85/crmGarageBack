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
const selectVehiculoByCliente = async (clienteId) => {
    const [result] = await db.query(
        "SELECT * FROM vehiculos v join clientes_has_vehiculos cv on v.id= cv.vehiculos_id join clientes c on c.id= cv.clientes_id where c.id=3",
        [clienteId],
    );

    return result;
};

const insertVehiculo = async ({
    matricula,
    bastidor,
    marca,
    modelo,
    fecha_matriculacion,
    km,
}) => {
    const [result] = await db.query(
        "insert into vehiculos (matricula,bastidor,marca,modelo,fecha_matriculacion,km)values(?,?,?,?,?,?)",
        [matricula, bastidor, marca, modelo, fecha_matriculacion, km],
    );
    return result;
};
const insertRelacionVehiculoCliente = async (vehiculos_id, clienteId) => {
    const [result] = await db.query(
        "insert into clientes_has_vehiculos (vehiculos_id, clientes_id) values (?, ?)",
        [vehiculos_id, clienteId],
    );
    return result;
};

module.exports = {
    selectAllVehiculos,
    selectVehiculoByMatricula,
    selectVehiculoById,
    insertVehiculo,
    insertRelacionVehiculoCliente,
    selectVehiculoByCliente,
};
