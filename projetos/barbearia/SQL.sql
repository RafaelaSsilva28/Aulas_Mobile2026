CREATE TABLE usuarios (
id_cliente SERIAL,
nome VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE,
senha TEXT NOT NULL,
tipo VARCHAR(50) NOT NULL,
PRIMARY KEY (id_cliente)
);
CREATE TABLE servicos (
id_servico SERIAL,
nome_servico VARCHAR(50) NOT NULL,
preco DECIMAL(10,2) NOT NULL,
descricao VARCHAR(200) NULL,
PRIMARY KEY (id_servico)
);
CREATE TABLE AGENDAMENTOS (
id_agendamento SERIAL PRIMARY KEY,
id_cliente INT, 
id_servico INT, 
data_hora TIMESTAMP NOT NULL, -- Essencial para saber o horário da reserva    
FOREIGN KEY (id_cliente) REFERENCES USUARIOS (id_cliente),
FOREIGN KEY (id_servico) REFERENCES SERVICOS (id_servico) 
);


SELECT id_cliente, nome, email, tipo FROM usuarios ORDER BY id_cliente
SELECT * FROM usuarios WHERE id_cliente = 1
UPDATE usuarios = false WHERE id_cliente = 1

INSERT INTO servicos (nome_servico, preco, descricao) 
VALUES ('Corte Degradê', 45.00, 'Corte moderno com acabamento na navalha');

INSERT INTO AGENDAMENTOS (id_cliente, id_servico, data_hora) 
VALUES (1, 1, '2023-12-01 15:00:00');

INSERT INTO usuarios (nome, email, senha, tipo) 
VALUES ('Teste User', 'teste@email.com', '123', 'cliente');



