const db = require("../config/db.config");

const selectAllUsuarios = async () => {
    const [result] = await db.query("select*from usuarios");

    return result;
};

const selectAllUsuariosById = async (id) => {
    const [result] = await db.query("select*from usuarios where id = ?", [id]);

    if (result.length === 0) return null;
    return result[0];
};

const selectAllUsuariosByTelefono = async (telefono) => {
    const [result] = await db.query("select*from usuarios where telefono = ?", [
        telefono,
    ]);

    if (result.length === 0) return null;
    return result[0];
};

const selectAllUsuariosByEmail = async (email) => {
    const [result] = await db.query("select*from usuarios where email = ?", [
        email,
    ]);

    if (result.length === 0) return null;
    return result[0];
};

const selectAllCrearUsuario = async ({
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
    contraseña,
    fecha_actualizacion,
    jornada,
    foto_perfil,
    especialidad,
    notas,
}) => {
    try {
        const [result] = await db.query(
            `INSERT INTO usuarios (
                nombre, apellidos, dni, telefono, email, fecha_nacimiento, 
                direccion, numero_ss, fecha_alta, fecha_baja, rol, activo, 
                contraseña, fecha_actualizacion, jornada, foto_perfil, 
                especialidad, notas
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
                contraseña,
                fecha_actualizacion,
                jornada,
                foto_perfil,
                especialidad,
                notas,
            ],
        );
        return result;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error;
    }
};

updateUsuarioById = async (
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
        contraseña,
        fecha_actualizacion,
        jornada,
        foto_perfil,
        especialidad,
        notas,
    },
) => {
    const [result] = await db.query(
        "UPDATE usuarios SET nombre = ?, apellidos = ?, dni = ?, telefono = ?, email = ?, fecha_nacimiento = ?, direccion = ?, numero_ss = ?, fecha_alta = ?, fecha_baja = ?, rol = ?, activo = ?, contraseña = ?, fecha_actualizacion = ?, jornada = ?, foto_perfil = ?, especialidad = ?, notas = ? WHERE id = ?",
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
            contraseña,
            fecha_actualizacion,
            jornada,
            foto_perfil,
            especialidad,
            notas,
            id,
        ],
    );
    return result;
};

module.exports = {
    selectAllUsuarios,
    selectAllUsuariosById,
    selectAllUsuariosByTelefono,
    selectAllUsuariosByEmail,
    selectAllCrearUsuario,
    updateUsuarioById,
};
