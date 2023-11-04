/*
    AGREGAR TODAS LAS TABLAS NECESARIAS PARA PODER INICIALIZAR EL SISTEMA
    1 USUARIO POR DEFECTO QUE SEA ADMIN
*//*
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
   verified tinyint(1) DEFAULT '0',
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
CREATE TABLE paymentMethod (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    pb_key_prod VARCHAR(255) NOT NULL,
    pd_key_prod VARCHAR(255) NOT NULL,
    pb_key_test VARCHAR(255) NOT NULL,
    pd_key_test VARCHAR(255) NOT NULL
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
    status ENUM('process', 'accepted', 'rejected', 'cancel') NOT NULL
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
    FOREIGN KEY (id_payment_method) REFERENCES paymentMethod(id) ON DELETE CASCADE,
    FOREIGN KEY (id_card) REFERENCES Card(id_folio) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES user(id) ON DELETE CASCADE
);

-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- Ejemplo de llenado para hacer pruebas si alguien las ocupa

-- Para la tabla 'categories'
INSERT INTO categories (name, price, capacity, space, status) VALUES
  ('Category 1', 50.00, 100, 'Space A', 'Active'),
  ('Category 2', 75.00, 150, 'Space B', 'Inactive');

-- Para la tabla 'Office'
INSERT INTO Office (name, image_url, status, id_category) VALUES
  ('Office 1', 'url_imagen_1', 'Active', 1),
  ('Office 2', 'url_imagen_2', 'Inactive', 2);

-- Para la tabla 'role'
INSERT INTO role (name) VALUES
  ('role 1'),
  ('role 2');

-- Para la tabla 'user'
INSERT INTO user (email, password, verified, idRole) VALUES
  ('usuario1@example.com', 'contraseña1', 1, 1),
  ('usuario2@example.com', 'contraseña2', 1, 2);

-- Para la tabla 'Address'
INSERT INTO Address (amount, start_date, expiration_date, status, idUser, idOffice) VALUES
  (1000.00, '2023-01-01', '2023-06-30', 'Active', 1, 1),
  (1500.00, '2023-02-01', '2023-07-30', 'Inactive', 2, 2);
  SELECT * FROM Address;


-- Para la tabla 'Person'
INSERT INTO Person (name, lastname, email, phone, occupation, id_address, id_user, status) VALUES
  ('Persona 1', 'Apellido 1', 'persona1@example.com', 1234567890, 'Ocupación 1', 1, 1, 'Activo'),
  ('Persona 2', 'Apellido 2', 'persona2@example.com', 9876543210, 'Ocupación 1', 2, 2, 'Inactivo');

-- Para la tabla 'Contract'
INSERT INTO Contract (amount, start_date, expiration_date, status, id_user, id_office) VALUES
  (500.00, '2023-01-01', '2023-06-30', 'Active', 1, 1),
  (750.00, '2023-02-01', '2023-07-30', 'Inactive', 2, 2);
  SELECT * FROM Contract;

-- Para la tabla 'paymentMethod'
INSERT INTO paymentMethod (name, status, pb_key_prod, pd_key_prod, pb_key_test,pd_key_test) VALUES
  ('Payment Method 1', 1, 'pb_key_1', 'pr_key_1', 'pb_key_test_1', 'pb_key_test_1'),
  ('Payment Method 2', 1, 'pb_key_2', 'pr_key_2', 'pb_key_test_2','pb_key_test_2');

-- Para la tabla 'Card'
INSERT INTO Card (headline, emitter_type, cvv, value_with_vat, concept, phone, email, card_number, expiration_year, expiration_month, status) VALUES
  ('Titular 1', 'Tipo 1', '123', 100.00, 'Concepto 1', '1234567890', 'email1@example.com', '1234567890123456', 2025, 12, 'accepted'),
  ('Titular 2', 'Tipo 2', '456', 150.00, 'Concepto 2', '9876543210', 'email2@example.com', '6543210987654321', 2024, 10, 'rejected');

-- Para la tabla 'Payment'
INSERT INTO Payment (amount, payment_date, status, token, metaData, id_contract, id_payment_method, id_card, id_user) VALUES
  (200.00, '2023-05-15', 'Success', 'token_1', '{"key": "value"}', 1, 1, 1, 1),
  (300.00, '2023-06-20', 'Pending', 'token_2', '{"key": "value"}', 2, 2, 2, 2);
  
  
