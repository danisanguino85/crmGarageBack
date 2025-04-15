const db = require("../config/db.config");

const selectAllReparaciones = async () => {
    const [result] = await db.query(
        "select reparaciones.*, usuarios.nombre as mecanico, vehiculos.matricula as vehiculo from reparaciones join usuarios on reparaciones.usuarios_id=usuarios.id join vehiculos  on reparaciones.vehiculos_id=vehiculos.id",
    );

    return result;
};

const selectAllProgreso = async () => {
    const [result] = await db.query(
        "select * from reparaciones where estado = 'en_progreso'",
    );

    return result;
};

const selectAllPendiente = async () => {
    const [result] = await db.query(
        "select * from reparaciones where estado = 'pendiente'",
    );

    return result;
};

const selectAllFinalizado = async () => {
    const [result] = await db.query(
        "select * from reparaciones where estado = 'finalizado'",
    );

    return result;
};

const selectByIdReparaciones = async (idReparaciones) => {
    const [result] = await db.query(
        "select * from crm_garage.reparaciones where reparaciones.id=?",
        [idReparaciones],
    );

    return result[0];
};
const selectReparacionesByMecanico = async (usuarioId) => {
    const [result] = await db.query(
        "select estado, fecha_ingreso, fecha_finalizacion,estado,presupuesto,precio_total, usuarios.nombre, usuarios.apellidos,usuarios.telefono, reparaciones.id from reparaciones join usuarios on usuarios_id = usuarios.id where usuarios.id =?",
        [usuarioId],
    );
    return result;
};
const selectVehiculoByReparacion = async (reparacionId) => {
    const [result] = await db.query(
        "select vehiculos.matricula, vehiculos.marca,vehiculos.modelo,vehiculos.fecha_matriculacion,vehiculos.km, vehiculos.fecha_entrada, vehiculos.fecha_salida from vehiculos join reparaciones on vehiculos_id = vehiculos.id where reparaciones.id= ?",
        [reparacionId],
    );
    return result;
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
    selectReparacionesByMecanico,
    selectVehiculoByReparacion,
    selectAllProgreso,
    selectAllPendiente,
    selectAllFinalizado,
};
