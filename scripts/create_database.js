var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection(dbconfig.connection);
}
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };

    console.log('connected as id ' + connection.threadId);
});

// connection.query('CREATE DATABASE ' + dbconfig.database);

// connection.query('\
// CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.users_table + '` ( \
//     `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
//     `username` VARCHAR(20) NOT NULL, \
//     `password` CHAR(60) NOT NULL, \
//         PRIMARY KEY (`id`), \
//     UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
//     UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
// )');

// console.log('Success: Database Created!')

// connection.end();