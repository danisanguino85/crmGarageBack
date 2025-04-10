const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: 'root',
    password: '',
    port: 3306,
    database: 'crm_'
})

module.exports = pool.promise()