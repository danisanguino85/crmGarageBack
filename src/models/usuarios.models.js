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

const insertUsuario = async ({
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
    activo,
    password,
    fecha_actualizacion,
    jornada,
    foto_perfil,
    especialidad,
}) => {
    try {
        const [result] = await db.query(
            `INSERT INTO usuarios (
                nombre, apellidos, dni, telefono, email, fecha_nacimiento, 
                direccion, numero_ss, fecha_alta, fecha_baja, rol, activo, 
                password, fecha_actualizacion, jornada, foto_perfil, 
                especialidad
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
                activo,
                password,
                fecha_actualizacion,
                jornada,
                foto_perfil,
                especialidad,
            ],
        );
        return result;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
    }
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
        activo,
        password,
        fecha_actualizacion,
        jornada,
        foto_perfil,
        especialidad,
    },
) => {
    const [result] = await db.query(
        "UPDATE usuarios SET nombre = ?, apellidos = ?, dni = ?, telefono = ?, email = ?, fecha_nacimiento = ?, direccion = ?, numero_ss = ?, fecha_alta = ?, fecha_baja = ?, rol = ?, activo = ?, password = ?, fecha_actualizacion = ?, jornada = ?, foto_perfil = ?, especialidad = ? WHERE id = ?",
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
            activo,
            password,
            fecha_actualizacion,
            jornada,
            foto_perfil,
            especialidad,
            id,
        ],
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
};
