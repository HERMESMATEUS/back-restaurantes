CREATE DATABASE IF NOT EXISTS test_api;

USE test_api;

SHOW TABLES;

CREATE TABLE users (
  id_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  descripcion TEXT
);

DESCRIBE users;

INSERT INTO users (nombre, descripcion) values ('pitagoras', 'matematico filosofo');

SELECT * FROM users;
