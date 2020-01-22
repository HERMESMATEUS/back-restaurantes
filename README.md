# back-restaurantes

Pasos para la instalacion y ejecucion del REST API

1- Ingrese al siguiente link https://github.com/HERMESMATEUS/back-restaurantes
 
 Este link es un bucket en el cual estoy guardando el proyecto

2- Clone el proyecto de la manera que mas le convienve sea por consola o descargando el proyecto

3- Para correr el proyecto es necesario que instalemos la siguiente herramienta https://nodejs.org/es/

4- Una vez instalada la herramienta entramos por consola en el proyecto y ejecutamos primero este comando " npm install "

5- Una vez descargada las dependencias del proyecto corremos el comando " npm start " si todo sale bien en consola saldra u nmensaje como este : Server listening on port 3002

6- EL proyecto esta desarrallado con mysql por lo tanto es necesario descargar y configurar mysql

7- Una vez configurado el motor de base de datos mysql corremos el script ubicado en la raiz del mismo proyeco llamado : "app_pedidos.sql"

8- En la ubicacion raiz del proyeto en data/config.js tenemos una constante como la siguiente:

        const config = {
            host: '127.0.0.1',
            user: 'restaurantes',
            password: '123456',
            database: 'restaurantes',
            port: 3306,
        };
    En esta constante reemplazamos el el user y password junto con el puerto por la confiuracion que pongamos en nuestro motor mysql

9- Para realizar pruebas recomiendo usar la siguiente herramienta Postman https://www.getpostman.com/

10- Si uso la herramienta que recomende solo sera necesario importar la configuracion que adjunto en la entrega, ahi tendra los endpoint funcionando junto con la estrucctura.

11- en caso de no saber la configuracion de la variable de entorno solo es necesario reemplazar la variables {{urlServer}} por http://localhost:3002/

12- Para evitar que no tomara los cambios realizados desde la ejecucion por consola de servicio de node volvemos a ejecutarlo pero ahora con este comando :" npm start --reset-cache "

