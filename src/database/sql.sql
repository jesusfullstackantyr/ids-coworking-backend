CREATE TABLE paymentMethod (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    pb_key_prod VARCHAR(255) NOT NULL,
    pd_key_prod VARCHAR(255) NOT NULL,
    pb_key_test VARCHAR(255) NOT NULL,
    pd_key_test VARCHAR(255) NOT NULL
);

