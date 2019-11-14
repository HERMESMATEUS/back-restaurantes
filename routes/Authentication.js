const path = require('path');
const sha1 = require('js-sha1');
const pool = require('../data/config');

const Authentication = app => {

    app.get('/Authentication', (request, response) => {
        pool.query('SELECT * FROM usuarios', (error, result) => {
            if (error) console.log('error: ', error);
            response.send(result);
        });
    });

    app.get('/Authentication/Crypto/:text', (request, response) => {
        const text = request.params.text;
        response.send({ "textEcrypt": sha1(text), "text": text });
    });

    // INSERT INTO cliente ( Id_Cliente, Nombre, Id_Rol) VALUES (1014290650, 'Hermes Mateus', 3);

    app.post('/Authentication/CreateOrSelectCliente', (request, response) => {
        let Id_Cliente = request.body.Id_Cliente;
        let Nombre = request.body.Nombre;
        let Id_Rol = request.body.Id_Rol;
        let ErrorCliente = { "success": false, "body": "Error en el Usuario Cliente" }
        try {
            if (Id_Cliente && Nombre && Id_Rol) {
                pool.query('SELECT * FROM cliente WHERE Id_Cliente = ? ', Id_Cliente, (error, result) => {
                    if (error) response.send(ErrorCliente);
                    if (result.length != 0) {
                        response.send({
                            "success": true,
                            "body": { ...result[0] }
                        });
                    } else {
                        pool.query('INSERT INTO cliente SET ? ', request.body, (error, result, fields) => {
                            if (error) {
                                console.log('error: ', error);
                                ErrorCliente.body = error.code;
                                response.send(ErrorCliente);
                            }
                            else if (result.length != 0) {
                                response.send({
                                    "success": true,
                                    "body": request.body
                                });
                            } else response.send(ErrorCliente);
                        });
                    };
                });
            } else response.send(ErrorCliente);
        } catch (error) {
            response.send(ErrorCliente);
        }
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
                    ErrorUser.body = error.code;
                    response.send(ErrorUser);
                }
                else if (result.length != 0) {
                    response.send({
                        "success": true,
                        "body": ""
                    });
                } else response.send(ErrorUser);
            });
        } catch (error) {
            response.send(ErrorUser);
        }
    });

}

module.exports = Authentication;