const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: '127.0.0.1',
    user: 'restaurantes',
    password: '123456',
    database: 'restaurantes',
    port: 3306,
};

// Create a MySQL pool
// const pool = mysql.createPool(config);
const pool = mysql.createConnection(config);

// Export the pool
module.exports = pool;