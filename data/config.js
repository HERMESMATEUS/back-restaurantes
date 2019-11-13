const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: '127.0.0.1',
    user: 'root',
    password: 'Cheil01!',
    database: 'test_api',
    port: 3302,
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;