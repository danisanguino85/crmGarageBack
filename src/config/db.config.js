const mysql = require("mysql2");

const pool = mysql.createPool({
<<<<<<< HEAD
    host: "127.0.0.1",
    user: "root",
    password: "Sanguinito85",
    port: 3306,
    database: "crm_garage",
=======
	host: "127.0.0.1",
	user: "root",
	password: "Pelotero2005",
	port: 3306,
	database: "crm_garage",
>>>>>>> feature2
});

module.exports = pool.promise();
