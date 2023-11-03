/*
    AGREGAR TODAS LAS TABLAS NECESARIAS PARA PODER INICIALIZAR EL SISTEMA
    1 USUARIO POR DEFECTO QUE SEA ADMIN
*/
CREATE database soa;
use soa;
CREATE TABLE categories(
   id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  capacity INT,
  space VARCHAR(255),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_deleted TINYINT(1) DEFAULT 0
);
CREATE TABLE Office(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  status VARCHAR(50),
  id_category INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_deleted TINYINT(1) DEFAULT 0,
  FOREIGN KEY (id_category) REFERENCES categories(id)
);


CREATE TABLE role(
	id int primary key  NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL
);

CREATE TABLE user (
   id int NOT NULL AUTO_INCREMENT primary key,
   email varchar(255) NOT NULL,
   password  varchar(255) NOT NULL,
   verified DATE NULL,
   idRole int DEFAULT NULL,
   FOREIGN KEY (idRole) REFERENCES role(id) ON DELETE CASCADE
);

CREATE TABLE Address(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount FLOAT NULL,
    start_date DATE NULL,
    expiration_date DATE NULL,
    status VARCHAR(45) NULL,
    idUser INT,  -- Columna para la referencia a user(id)
    idOffice INT,  -- Columna para la referencia a Office(id)
    FOREIGN KEY (idUser) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (idOffice) REFERENCES Office(id) ON DELETE CASCADE
);


CREATE TABLE Person(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(45) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone BIGINT NOT NULL,
    occupation VARCHAR(255) NOT NULL,
    id_address INT NOT NULL,
    id_user INT NOT NULL,
    status VARCHAR(45) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (id_address) REFERENCES Address(id) ON DELETE CASCADE
);
CREATE TABLE Contract(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount FLOAT NOT NULL,
    start_date DATE NOT NULL,
    expiration_date DATE NOT NULL,
    status varchar(45) NOT NULL,
    id_user INT, -- Columna para la referencia a user(id)
    id_office INT, -- Columna para la referencia a Office(id)
    FOREIGN KEY (id_user) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (id_office) REFERENCES Office(id) ON DELETE CASCADE
);
CREATE TABLE Payment_Method(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status BOOLEAN NOT NULL,
    pb_key_prod VARCHAR(255) NOT NULL,
    pr_key_prod VARCHAR(255) NOT NULL,
    pb_key_test VARCHAR(255) NOT NULL
);
CREATE TABLE Card(
    id_folio INT AUTO_INCREMENT PRIMARY KEY,
    headline VARCHAR(255) NOT NULL,
    emitter_type VARCHAR(50) NOT NULL,
    cvv VARCHAR(4) NOT NULL,
    value_with_vat DECIMAL(10, 2) NOT NULL,
    concept VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    card_number VARCHAR(16) NOT NULL,
    expiration_year INT NOT NULL,
    expiration_month INT NOT NULL,
    status ENUM('process', 'accepted', 'rejected') NOT NULL
);
CREATE TABLE Payment(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(15, 2) NOT NULL,
    payment_date DATETIME NOT NULL,
    status VARCHAR(50) NOT NULL,
    token VARCHAR(255) NOT NULL,
    metaData JSON NOT NULL,
    id_contract INT NOT NULL,
    id_payment_method INT NOT NULL,
    id_card INT DEFAULT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY (id_contract) REFERENCES Contract(id) ON DELETE CASCADE,
    FOREIGN KEY (id_payment_method) REFERENCES Payment_Method(id) ON DELETE CASCADE,
    FOREIGN KEY (id_card) REFERENCES Card(id_folio) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES user(id) ON DELETE CASCADE
);