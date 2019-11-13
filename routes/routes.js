var xml = require('xml');
const path = require('path');
var fs = require('fs');


// Load the MySQL pool connection
const pool = require('../data/config');

const router = app => {


    app.get('/', (request, response) => {
        // response.writeHead(200, { 'Content-Type':'text/html' });

        // fs.readFile('../html/index.html', null , (error , data) => {
        //     if(error){
        //         response.writeHead(404);
        //         response.writeHead('File not found!')
        //     }else{
        //         response.write(data);
        //     }
        //     response.end();
        // })
        response.sendFile(path.join(__dirname + '/../html/index.html'));
    });


    // Display all users
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users', (error, result) => {
            if (error) console.log('error: ', error);
            response.send(result);
        });
    });


    // Display a single user by ID
    app.get('/users/:id_user', (request, response) => {
        const id_user = request.params.id_user;
        pool.query('SELECT * FROM users WHERE id_user = ?', id_user, (error, result) => {
            if (error) console.log(error);
            response.send(result);
        });
    });


    // Add a new user
    app.post('/users', (request, response) => {
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
            if (error) console.log(error);
            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });


    // Update an existing user
    app.put('/users/:id_user', (request, response) => {
        const id_user = request.params.id_user;
        pool.query('UPDATE users SET ? WHERE id_user = ?', [request.body, id_user], (error, result) => {
            if (error) console.log(error);
            response.send('User updated successfully.');
        });
    });


    // Delete a user
    app.delete('/users/:id_user', (request, response) => {
        const id_user = request.params.id_user;
        pool.query('DELETE FROM users WHERE id_user = ?', id_user, (error, result) => {
            if (error) console.log(error);
            response.send('User deleted.');
        });
    });

}

module.exports = router;