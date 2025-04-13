const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Sanguinito85",
    port: 3306,
    database: "crm_garage",
});

module.exports = pool.promise();
