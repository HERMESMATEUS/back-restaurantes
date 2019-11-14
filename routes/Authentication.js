var xml = require('xml');
const path = require('path');
var fs = require('fs');
const sha1 = require('js-sha1');

// Load the MySQL pool connection
const pool = require('../data/config');

const Authentication = app => {


    app.get('/', (request, response) => {
        response.sendFile(path.join(__dirname + '/../html/index.html'));
    });


    // Display all users
    app.get('/Authentication', (request, response) => {
        pool.query('SELECT * FROM usuarios', (error, result) => {
            if (error) console.log('error: ', error);
            response.send(result);
        });
    });

    app.get('/AuthenticationCrypto/:text', (request, response) => {
        const text = request.params.text;
        response.send({ "textEcrypt": sha1(text), "text": text });
    });


    // Display a single user by ID
    app.get('/Authentication/:id_user', (request, response) => {
        const id_user = request.params.id_user;
        pool.query('SELECT * FROM users WHERE id_user = ?', id_user, (error, result) => {
            if (error) console.log(error);
            response.send(result);
        });
    });


    app.post('/Authentication/SignIn', (request, response) => {

        let Id_Usuario = request.body.Id_Usuario;
        let Contraseña = sha1(request.body.Contraseña);
        let ErrorUser = { "success": false, "body": "Usuario o contraseña incorrecta" }

        try {
            if (Id_Usuario && Contraseña) {
                pool.query('SELECT * FROM usuarios WHERE Id_Usuario = ? AND Contraseña = ?', [Id_Usuario, Contraseña], (error, result) => {
                    if (error) response.send(ErrorUser);
                    if (result.length != 0) {
                        response.send({
                            "success": true,
                            "body": { ...result[0] }
                        });
                    } else response.send(ErrorUser);
                });
            } else response.send(ErrorUser);
        } catch (error) {
            response.send(ErrorUser);
        }

    });


    app.post('/Authentication/SignUp', (request, response) => {

        let body = request.body;
        body.Contraseña = sha1(request.body.Contraseña);
        let ErrorUser = { "success": false, "body": "Usuario o contraseña incorrecta" }

        try {
            pool.query('INSERT INTO usuarios SET ? ', body, (error, result, fields) => {
                if (error) {
                    console.log('error: ', error);
                    response.send(ErrorUser);
                }
                else if (result.length != 0) {
                    response.send({
                        "success": true,
                        "body": { ...result[0] }
                    });
                } else response.send(ErrorUser);
            });
        } catch (error) {
            response.send(ErrorUser);
        }

    });



    // Update an existing user
    app.put('/Authentication/:id_user', (request, response) => {
        const id_user = request.params.id_user;
        pool.query('UPDATE users SET ? WHERE id_user = ?', [request.body, id_user], (error, result) => {
            if (error) console.log(error);
            response.send('User updated successfully.');
        });
    });


    // Delete a user
    app.delete('/Authentication/:id_user', (request, response) => {
        const id_user = request.params.id_user;
        pool.query('DELETE FROM users WHERE id_user = ?', id_user, (error, result) => {
            if (error) console.log(error);
            response.send('User deleted.');
        });
    });

}

module.exports = Authentication;