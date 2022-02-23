var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Paodequeijo123@",
    database: "mecanica"
});

module.exports = con;