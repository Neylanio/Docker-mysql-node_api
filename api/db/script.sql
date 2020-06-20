CREATE DATABASE IF NOT EXISTS programadorabordo;

USE programadorabordo;

CREATE TABLE IF NOT EXISTS products (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(255),
  price DECIMAL(10,2),
  PRIMARY KEY (id)
);

INSERT INTO products (name, price) VALUES ('Curso NodeJS básico', 20);
INSERT INTO products (name, price) VALUES ('Curso ReactJS básico', 40);