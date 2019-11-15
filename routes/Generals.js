const pool = require('../data/config');

const Generals = app => {

    app.get('/Generals/GetCountrys', (request, response) => {

        let ErrorCountry = { "success": false, "body": "No existen paises" }
        try {
            pool.query('SELECT * FROM pais', (error, result) => {
                if (error) {
                    console.log('error: ', error);
                    ErrorCountry.body = error.code;
                    response.send(ErrorCountry);
                }
                if (result.length != 0) {
                    response.send({
                        "success": true,
                        "body": result
                    });
                } else response.send(ErrorCountry);
            });
        } catch (error) {
            ErrorCountry.body = error;
            response.send(ErrorCountry);
        }
    });

    app.get('/Generals/GetCities/:Id_Pais', (request, response) => {
        const Id_Pais = request.params.Id_Pais;
        let ErrorCities = { "success": false, "body": "No existen ciudades" }
        try {
            pool.query('SELECT * FROM ciudad WHERE Id_Pais = ? ', Id_Pais, (error, result) => {
                if (error) {
                    console.log('error: ', error);
                    ErrorCities.body = error.code;
                    response.send(ErrorCities);
                }
                if (result.length != 0) {
                    response.send({
                        "success": true,
                        "body": result
                    });
                } else response.send(ErrorCities);
            });
        } catch (error) {
            ErrorCities.body = error;
            response.send(ErrorCities);
        }
    });

    app.get('/Generals/GetRoles', (request, response) => {
        let ErrorRoles = { "success": false, "body": "No existen roles" }
        try {
            pool.query('SELECT * FROM roles', (error, result) => {
                if (error) {
                    console.log('error: ', error);
                    ErrorRoles.body = error.code;
                    response.send(ErrorRoles);
                }
                if (result.length != 0) {
                    response.send({
                        "success": true,
                        "body": result
                    });
                } else response.send(ErrorRoles);
            });
        } catch (error) {
            ErrorRoles.body = error;
            response.send(ErrorRoles);
        }
    });

    // CREATE TABLE punto_venta (
    //     Id_Punto_venta MEDIUMINT NOT NULL AUTO_INCREMENT,
    //     Direccion varchar(100) NOT NULL,
    //     Id_Restaurante bigint(200) NOT NULL,
    //     Id_Ciudad MEDIUMINT NOT NULL,
    //     PRIMARY KEY (Id_Punto_venta),
    //     FOREIGN KEY (Id_Restaurante) REFERENCES restaurante (Id_Restaurante),
    //     FOREIGN KEY (Id_Ciudad) REFERENCES ciudad (Id_Ciudad)
    //   ) ;


    app.post('/Generals/GetPointStore', (request, response) => {
        let ErrorPunto_venta = { "success": false, "body": "No existen puntos de venta" }
        try {
            let QueryId_Restaurante = '';
            let QueryId_Ciudad = '';
            if (request.body.Id_Restaurante) QueryId_Restaurante = ` WHERE Id_Restaurante = ${request.body.Id_Restaurante} `;
            if (request.body.Id_Ciudad) QueryId_Ciudad = ` ${QueryId_Restaurante != '' ? 'AND' : 'WHERE'} Id_Ciudad = ${request.body.Id_Ciudad} `;
            let query = `SELECT * FROM punto_venta ${QueryId_Restaurante + QueryId_Ciudad}`;
            pool.query(query, (error, result) => {
                if (error) {
                    console.log('error: ', error);
                    ErrorPunto_venta.body = error.code;
                    response.send(ErrorPunto_venta);
                }
                if (result.length != 0) {
                    response.send({
                        "success": true,
                        "body": result
                    });
                } else response.send(ErrorPunto_venta);
            });
        } catch (error) {
            ErrorPunto_venta.body = error;
            response.send(ErrorPunto_venta);
        }
    });

}

module.exports = Generals;