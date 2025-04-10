const db = require("../config/db.config");

const selectAllReparaciones = async () => {
    const [result] = await db.query("select*from reparaciones");

    return result;
};

module.exports = {
    selectAllReparaciones,
};
