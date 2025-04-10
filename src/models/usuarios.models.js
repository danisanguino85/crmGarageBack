const db = require("../config/db.config");

const selectAllUsuarios = async () => {
    const [result] = await db.query("select*from usuarios");

    return result;
};

module.exports = {
    selectAllUsuarios,
};
