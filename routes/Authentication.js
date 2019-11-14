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