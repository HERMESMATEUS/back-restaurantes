DROP DATABASE restaurantes;

CREATE DATABASE restaurantes;

USE restaurantes;

CREATE TABLE pais (
  Id_Pais MEDIUMINT NOT NULL AUTO_INCREMENT,
  Nombre tinytext NOT NULL,
  PRIMARY KEY (Id_Pais)
) ;

CREATE TABLE ciudad (
  Id_Ciudad MEDIUMINT NOT NULL AUTO_INCREMENT,
  Nombre tinytext NOT NULL,
  Id_Pais MEDIUMINT NOT NULL,
  PRIMARY KEY (Id_Ciudad),
  FOREIGN KEY (Id_Pais) REFERENCES pais (Id_Pais)
) ;

CREATE TABLE restaurante (
  Id_Restaurante bigint(200) NOT NULL,
  Nombre tinytext NOT NULL,
  Id_Pais MEDIUMINT NOT NULL,
  PRIMARY KEY (Id_Restaurante),
  FOREIGN KEY (Id_Pais) REFERENCES pais (Id_Pais)
) ;

CREATE TABLE punto_venta (
  Id_Punto_venta MEDIUMINT NOT NULL AUTO_INCREMENT,
  Direccion varchar(100) NOT NULL,
  Id_Restaurante bigint(200) NOT NULL,
  Id_Ciudad MEDIUMINT NOT NULL,
  PRIMARY KEY (Id_Punto_venta),
  FOREIGN KEY (Id_Restaurante) REFERENCES restaurante (Id_Restaurante),
  FOREIGN KEY (Id_Ciudad) REFERENCES ciudad (Id_Ciudad)
) ;


CREATE TABLE acompañamiento (
  Id_Acompañamiento MEDIUMINT NOT NULL AUTO_INCREMENT,
  Nombre tinytext NOT NULL,
  Id_Restaurante bigint(200) NOT NULL,
  Valor bigint(200) NOT NULL,
  PRIMARY KEY (Id_Acompañamiento),
  FOREIGN KEY (Id_Restaurante) REFERENCES restaurante (Id_Restaurante)
);

CREATE TABLE adicion (
  Id_Adicion MEDIUMINT NOT NULL AUTO_INCREMENT,
  Nombre tinytext NOT NULL,
  Id_Restaurante bigint(200) NOT NULL,
  Valor bigint(200) NOT NULL,
  PRIMARY KEY (Id_Adicion),
  FOREIGN KEY (Id_Restaurante) REFERENCES restaurante (Id_Restaurante)
);

CREATE TABLE ingrediente (
  Id_Ingrediente MEDIUMINT NOT NULL AUTO_INCREMENT,
  Nombre tinytext NOT NULL,
  Id_Restaurante bigint(200) NOT NULL,
  PRIMARY KEY (Id_Ingrediente),
  FOREIGN KEY (Id_Restaurante) REFERENCES restaurante (Id_Restaurante)
) ; 

CREATE TABLE roles (
  Id_Rol MEDIUMINT NOT NULL AUTO_INCREMENT,
  Nombre tinytext NOT NULL,
  PRIMARY KEY (Id_Rol)
) ;

CREATE TABLE cliente (
  Id_Cliente int(20) NOT NULL,
  Nombre tinytext NOT NULL,
  Id_Rol MEDIUMINT NOT NULL,
  PRIMARY KEY (Id_Cliente),
  FOREIGN KEY (Id_Rol) REFERENCES roles (Id_Rol)
) ;

CREATE TABLE plato (
  Id_Plato MEDIUMINT NOT NULL AUTO_INCREMENT,
  Nombre tinytext NOT NULL,
  Valor bigint(200) NOT NULL,
  Id_Restaurante bigint(200) NOT NULL,
  PRIMARY KEY (Id_Plato),
  FOREIGN KEY (Id_Restaurante) REFERENCES restaurante (Id_Restaurante)
) ;

CREATE TABLE usuarios (
  Id_Usuario int(20) NOT NULL,
  Nombre tinytext NOT NULL,
  Contraseña varchar(100) NOT NULL,
  Id_Rol MEDIUMINT NOT NULL,
  Id_Punto_venta MEDIUMINT NOT NULL,
  Cargo_Descripcion text,
  Genero text,
  Edad int(100) DEFAULT NULL,
  Fecha_Ingreso date DEFAULT NULL,
  PRIMARY KEY (Id_Usuario),
  FOREIGN KEY (Id_Rol) REFERENCES roles (Id_Rol),
  FOREIGN KEY (Id_Punto_venta) REFERENCES punto_venta (Id_Punto_venta)
) ;

CREATE TABLE pla_inter_ingre (
  Id_Pla MEDIUMINT NOT NULL AUTO_INCREMENT,
  Id_Plato MEDIUMINT NOT NULL,
  Id_Ingrediente MEDIUMINT NOT NULL,
  PRIMARY KEY (Id_Pla),
  FOREIGN KEY (Id_Plato) REFERENCES plato (Id_Plato),
  FOREIGN KEY (Id_Ingrediente) REFERENCES ingrediente (Id_Ingrediente)
) ;

CREATE TABLE pedidos (
  Id_Pedido MEDIUMINT NOT NULL AUTO_INCREMENT,
  Id_Cliente int(20) NOT NULL,
  Id_Pla MEDIUMINT NOT NULL,
  Id_Adicion MEDIUMINT NOT NULL,
  Id_Acompañamiento MEDIUMINT NOT NULL,
  Id_Punto_venta MEDIUMINT NOT NULL,
  Descripcion text NOT NULL,
  Vendido boolean not null default 0,
  PRIMARY KEY (Id_Pedido),
  FOREIGN KEY (Id_Cliente) REFERENCES cliente (Id_Cliente),
  FOREIGN KEY (Id_Pla) REFERENCES pla_inter_ingre (Id_Pla),
  FOREIGN KEY (Id_Adicion) REFERENCES adicion (Id_Adicion),
  FOREIGN KEY (Id_Acompañamiento) REFERENCES acompañamiento (Id_Acompañamiento),
  FOREIGN KEY (Id_Punto_venta) REFERENCES punto_venta (Id_Punto_venta)
) ;

CREATE TABLE valor_total (
  Id_Valor_Total MEDIUMINT NOT NULL,
  Id_Punto_venta MEDIUMINT NOT NULL,
  Id_Pedido MEDIUMINT NOT NULL,
  PRIMARY KEY (Id_Valor_Total),
  FOREIGN KEY (Id_Punto_venta) REFERENCES punto_venta (Id_Punto_venta),
  FOREIGN KEY (Id_Pedido) REFERENCES pedidos (Id_Pedido)
) ;


INSERT INTO pais (Nombre) VALUES ('Colombia');
INSERT INTO pais (Nombre) VALUES ('Ecuador');

INSERT INTO ciudad (Nombre, Id_Pais) VALUES ('Bogotá', 1);
INSERT INTO ciudad (Nombre, Id_Pais) VALUES ('Medellin', 1);
INSERT INTO ciudad (Nombre, Id_Pais) VALUES ('Cartagena', 1);
INSERT INTO ciudad (Nombre, Id_Pais) VALUES ('Cali', 1);
INSERT INTO ciudad (Nombre, Id_Pais) VALUES ('Quito', 2);


INSERT INTO restaurante (Id_Restaurante, Nombre, Id_Pais) VALUES (456789876, 'KFC', 1);
INSERT INTO restaurante (Id_Restaurante, Nombre, Id_Pais) VALUES (876567865, 'PPC', 1);
INSERT INTO restaurante (Id_Restaurante, Nombre, Id_Pais) VALUES (234764567, 'KOKORICO', 1);

INSERT INTO punto_venta ( Direccion, Id_Restaurante, Id_Ciudad) VALUES ('Carrera 14 # 63 - 12', 456789876,  1);
INSERT INTO punto_venta ( Direccion, Id_Restaurante, Id_Ciudad) VALUES ('Calle 20 # 12 - 02', 876567865,  1);
INSERT INTO punto_venta ( Direccion, Id_Restaurante, Id_Ciudad) VALUES ('Carrera 90 # 76B - 52', 234764567,  1);

INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Papas saladas', '1200', 456789876);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Yuca', '1400', 456789876);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Ensalada de fruta', '2000', 456789876);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Arepa', '1000', 456789876);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Papas francesas', '1500', 456789876);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Papas saladas', '1200', 876567865);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Yuca', '1400', 876567865);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Ensalada de fruta', '2000', 876567865);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Arepa', '1000', 876567865);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Papas francesas', '1500', 876567865);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Papas saladas', '1200', 234764567);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Yuca', '1400', 234764567);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Ensalada de fruta', '2000', 234764567);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Arepa', '1000', 234764567);
INSERT INTO acompañamiento (Nombre, Valor, Id_Restaurante) VALUES ('Papas francesas', '1500', 234764567);

INSERT INTO adicion (Nombre, Valor, Id_Restaurante) VALUES ('Carne de res', '2500', 456789876);
INSERT INTO adicion (Nombre, Valor, Id_Restaurante) VALUES ('Carne de cerdo', '3500', 456789876);
INSERT INTO adicion (Nombre, Valor, Id_Restaurante) VALUES ('Carne de pollo', '2000', 456789876);
INSERT INTO adicion (Nombre, Valor, Id_Restaurante) VALUES ('Carne de res', '2500',876567865);
INSERT INTO adicion (Nombre, Valor, Id_Restaurante) VALUES ('Carne de cerdo', '3500',876567865);
INSERT INTO adicion (Nombre, Valor, Id_Restaurante) VALUES ('Carne de pollo', '2000',876567865);
INSERT INTO adicion (Nombre, Valor, Id_Restaurante) VALUES ('Carne de res', '2500',234764567);
INSERT INTO adicion (Nombre, Valor, Id_Restaurante) VALUES ('Carne de cerdo', '3500',234764567);
INSERT INTO adicion (Nombre, Valor, Id_Restaurante) VALUES ('Carne de pollo', '2000',234764567);

INSERT INTO ingrediente ( Nombre, Id_Restaurante) VALUES ('Arroz', 456789876);
INSERT INTO ingrediente ( Nombre, Id_Restaurante) VALUES ('Leche', 456789876);
INSERT INTO ingrediente ( Nombre, Id_Restaurante) VALUES ('Arroz', 234764567);
INSERT INTO ingrediente ( Nombre, Id_Restaurante) VALUES ('Leche', 234764567);
INSERT INTO ingrediente ( Nombre, Id_Restaurante) VALUES ('Arroz', 876567865);
INSERT INTO ingrediente ( Nombre, Id_Restaurante) VALUES ('Leche', 876567865);

INSERT INTO roles ( Nombre) VALUES ('Administrador de Restaurante');
INSERT INTO roles ( Nombre) VALUES ('Administrador de Punto de venta');
INSERT INTO roles ( Nombre) VALUES ('Cliente');

INSERT INTO plato ( Nombre, Valor, Id_Restaurante) VALUES ('Arroz con leche', 8900, 456789876);
INSERT INTO plato ( Nombre, Valor, Id_Restaurante) VALUES ('Arroz con leche', 8900, 234764567);
INSERT INTO plato ( Nombre, Valor, Id_Restaurante) VALUES ('Arroz con leche', 8900, 876567865);

INSERT INTO pla_inter_ingre ( Id_Plato, Id_Ingrediente) VALUES (1,1);
INSERT INTO pla_inter_ingre ( Id_Plato, Id_Ingrediente) VALUES (1,2);
INSERT INTO pla_inter_ingre ( Id_Plato, Id_Ingrediente) VALUES (2,1);
INSERT INTO pla_inter_ingre ( Id_Plato, Id_Ingrediente) VALUES (2,2);
INSERT INTO pla_inter_ingre ( Id_Plato, Id_Ingrediente) VALUES (3,1);
INSERT INTO pla_inter_ingre ( Id_Plato, Id_Ingrediente) VALUES (3,2);

INSERT INTO cliente ( Id_Cliente, Nombre, Id_Rol) VALUES (1014290650, 'Hermes Mateus', 3);

INSERT INTO usuarios ( Id_Usuario, Nombre, Id_Rol, Contraseña, Id_Punto_venta, Cargo_Descripcion, Genero, Edad, Fecha_Ingreso)  
VALUES (1014290650, 'Hermes Mateus', 1,'f865b53623b121fd34ee5426c792e5c33af8c227', 1,'Soy el dueño del chuzo perro','Masculino',22, curdate());


SELECT pla_inter_ingre.Id_Pla, pla_inter_ingre.Id_Plato, pla_inter_ingre.Id_Ingrediente, ingrediente.Nombre
FROM pla_inter_ingre
INNER JOIN ingrediente ON pla_inter_ingre.Id_Ingrediente = ingrediente.Id_Ingrediente
WHERE Id_Plato = 1;
