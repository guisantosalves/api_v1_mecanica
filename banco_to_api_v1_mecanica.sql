/* criando dbs*/
create database mecanica;
use mecanica;

/*criando tables*/
create table if not exists funcionario(
	id_funcionario int not null auto_increment,
    nome_funcionario varchar(36) not null,
    cpf_funcionario varchar(15),
    telefone varchar(15),
    primary key(id_funcionario)
);

create table if not exists atividade_caixa(
	id_atividade int not null auto_increment,
    id_funcionario int, 
    data_atividade date not null,
    valor_retirado double not null,
    primary key(id_atividade),
    constraint FK_AtividadeFuncionario foreign key(id_funcionario) references funcionario(id_funcionario)
    ON DELETE CASCADE
	ON UPDATE CASCADE
    
);

/*criando view de pesquisa para o relatório*/
create view relatorio_retirada as select funcionario.nome_funcionario, cpf_funcionario, atividade_caixa.data_atividade, atividade_caixa.valor_retirado 
from atividade_caixa inner join funcionario on atividade_caixa.id_funcionario = funcionario.id_funcionario;

/*inserções testes*/
/*
insert into funcionario(nome_funcionario, cpf_funcionario, telefone) values("guilherme", "123456789", "69984636038");
insert into funcionario(nome_funcionario, cpf_funcionario, telefone) values("lucas", "123456789", "69984636038");
insert into funcionario(nome_funcionario, cpf_funcionario, telefone) values("henrique", "123456789", "69984636038");
insert into funcionario(nome_funcionario, cpf_funcionario, telefone) values("lucia", "123456789", "69984636038");

insert into atividade_caixa(id_funcionario, data_atividade, valor_retirado) values(1, "2002-02-15", 2000);
insert into atividade_caixa(id_funcionario, data_atividade, valor_retirado) values(1, "2002-02-15", 3000);
insert into atividade_caixa(id_funcionario, data_atividade, valor_retirado) values(3, "2002-02-15", 3000);
insert into atividade_caixa(id_funcionario, data_atividade, valor_retirado) values(4, "2002-02-15", 3000);
insert into atividade_caixa(id_funcionario, data_atividade, valor_retirado) values(2, "2002-02-15", 3000);
*/


