const db = require("../config/db.config");

const selectAllUsuarios = async () => {
    const [result] = await db.query("select * from usuarios");

    return result;
};

const selectAllAdministradores = async () => {
    const [result] = await db.query(
        "select * from usuarios where rol = 'admin'",
    );

    return result;
};

const selectMecanicoByReparacion = async (reparacionId) => {
    const [result] = await db.query(
        "select nombre,apellidos from usuarios join reparaciones on usuarios.id = usuarios_id where reparaciones.id=?",
        [reparacionId],
    );
    return result[0];
};

const selectAllMecanicos = async () => {
    const [result] = await db.query(
        "select * from usuarios where rol = 'mecanico'",
    );

    return result;
};

const selectUsuarioById = async (id) => {
    const [result] = await db.query("select * from usuarios where id = ?", [
        id,
    ]);

    if (result.length === 0) return null;
    return result[0];
};

const selectUsuarioByTelefono = async (telefono) => {
    const [result] = await db.query(
        "select * from usuarios where telefono = ?",
        [telefono],
    );

    if (result.length === 0) return null;
    return result[0];
};

const selectUsuarioByEmail = async (email) => {
    const [result] = await db.query("select * from usuarios where email = ?", [
        email,
    ]);

    if (result.length === 0) return null;
    return result[0];
};

const selectUsuarioByFoto = async (id) => {
    const [result] = await db.query(
        "select foto_perfil from usuarios where id = ?",
        [id],
    );

    if (result.length === 0) return null;
    return result[0];
};

const insertUsuario = async ({
    nombre,
    apellidos,
    dni,
    telefono,
    email,
    fecha_nacimiento,
    direccion,
    numero_ss,
    rol,
    password,
    jornada,
    especialidad,
}) => {
    const [result] = await db.query(
        `INSERT INTO usuarios (
          nombre,
          apellidos,
          dni,
          telefono,
          email,
          fecha_nacimiento,
          direccion,
          numero_ss,
          rol,
          password,
          jornada,
          especialidad
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            nombre,
            apellidos,
            dni,
            telefono,
            email,
            fecha_nacimiento,
            direccion,
            numero_ss,
            rol,
            password,
            jornada,
            especialidad,
        ],
    );
    return result;
};
const updateUsuarioById = async (
    id,
    {
        nombre,
        apellidos,
        dni,
        telefono,
        email,
        fecha_nacimiento,
        direccion,
        numero_ss,
        fecha_alta,
        fecha_baja,
        rol,
        password,
        fecha_actualizacion,
        jornada,
        especialidad,
    },
) => {
    const [result] = await db.query(
        `UPDATE usuarios SET 
        nombre = ?, apellidos = ?, dni = ?, telefono = ?, email = ?, 
        fecha_nacimiento = ?, direccion = ?, numero_ss = ?, 
        fecha_alta = ?, fecha_baja = ?, rol = ?, password = ?, 
        fecha_actualizacion = ?, jornada = ?, especialidad = ? 
        WHERE id = ?`,
        [
            nombre,
            apellidos,
            dni,
            telefono,
            email,
            fecha_nacimiento,
            direccion,
            numero_ss,
            fecha_alta,
            fecha_baja,
            rol,
            password,
            fecha_actualizacion,
            jornada,
            especialidad,
            id,
        ],
    );

    return result;
};

const updateUsuarioimagen = async (id, imagen) => {
    console.log(typeof imagen, id);
    const [result] = await db.query(
        "UPDATE usuarios SET foto_perfil = ? WHERE id = ?",
        [imagen, id],
    );
    return result;
};

module.exports = {
    selectAllUsuarios,
    selectUsuarioById,
    selectUsuarioByTelefono,
    selectUsuarioByEmail,
    insertUsuario,
    updateUsuarioById,
    selectAllAdministradores,
    selectAllMecanicos,
    selectMecanicoByReparacion,
    selectUsuarioByFoto,
    updateUsuarioimagen,
};
