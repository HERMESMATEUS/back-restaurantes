const pool = require('../data/config');

const Plates = app => {

    app.get('/Plates', (request, response) => {
        pool.query('SELECT * FROM plato ', (error, result) => {
            if (error) console.log('error: ', error);
            response.send(result);
        });
    });

    app.get('/Plates/GetPlates/:Id_Restaurante', (request, response) => {
        const Id_Restaurante = request.params.Id_Restaurante;
        let ErrorPlatos = { "success": false, "body": "No se encontraron platos" }
        try {
            pool.query('SELECT * FROM plato WHERE Id_Restaurante = ? ', Id_Restaurante, (error, result) => {
                if (error) {
                    console.log('error: ', error);
                    ErrorPlatos.body = error.code;
                    response.send(ErrorPlatos);
                }
                if (result.length != 0) {
                    response.send({
                        "success": true,
                        "body": { ...result[0] }
                    });
                } else response.send(ErrorPlatos);
            });
        } catch (error) {
            console.log('error: ', error);
            ErrorPlatos.body = error;
            response.send(ErrorPlatos);
        }
    });

    app.get('/Plates/Features/:Id_Plato', (request, response) => {
        const Id_Plato = request.params.Id_Plato;
        let ErrorPlatos = { "success": false, "body": "No se encontraron platos" }
        try {
            pool.query(`SELECT pla_inter_ingre.Id_Pla, pla_inter_ingre.Id_Plato, pla_inter_ingre.Id_Ingrediente, ingrediente.Nombre
                FROM pla_inter_ingre
                INNER JOIN ingrediente ON pla_inter_ingre.Id_Ingrediente = ingrediente.Id_Ingrediente
                WHERE Id_Plato = ? `, Id_Plato, (error, result) => {
                if (error) {
                    console.log('error: ', error);
                    ErrorPlatos.body = error.code;
                    response.send(ErrorPlatos);
                }
                if (result.length != 0) {
                    response.send({
                        "success": true,
                        "body": result
                    });
                } else response.send(ErrorPlatos);
            });
        } catch (error) {
            console.log('error: ', error);
            ErrorPlatos.body = error;
            response.send(ErrorPlatos);
        }
    });

    app.post('/Plates/CreatePlate', (request, response) => {

        pool.beginTransaction(function (err) {
            if (err) { throw err; }
            let ErrorUser = { "success": false, "body": "Usuario o contraseña incorrecta" };
            if (request.body.Nombre && request.body.Valor && request.body.Id_Restaurante && request.body.Ingredientes.length > 0) {
                let body = { Nombre: request.body.Nombre, Valor: request.body.Valor, Id_Restaurante: request.body.Id_Restaurante };
                try {
                    pool.query(' INSERT INTO plato SET ? ', body, (error, result, fields) => {
                        if (error) {
                            return pool.rollback(function () {
                                console.log('error: ', error);
                                ErrorUser.body = error.code;
                                response.send(ErrorUser);
                            });
                        } else if (result.length != 0) {
                            request.body.Ingredientes.map((item) => {
                                pool.query(' INSERT INTO pla_inter_ingre SET Id_Plato = ? Id_Ingrediente = ? ', [result.insertId, item], (error, result, fields) => {
                                    if (error) {
                                        return pool.rollback(function () {
                                            console.log('error: ', error);
                                            ErrorUser.body = error.code;
                                            response.send(ErrorUser);
                                        });
                                    }
                                    pool.commit(function (err) {
                                        if (err) {
                                            return pool.rollback(function () {
                                                console.log('error: ', error);
                                                ErrorUser.body = error.code;
                                                response.send(ErrorUser);
                                            });
                                        }
                                        response.send({
                                            "success": true,
                                            "body": request.body
                                        });
                                    });
                                });
                            })
                        } else response.send(ErrorUser);
                    });
                } catch (error) {
                    response.send(ErrorUser);
                }
            } else response.send(ErrorUser);
        });

    });

}

module.exports = Plates;