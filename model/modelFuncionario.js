var Sequelize = require('sequelize');
var database = require('../connection/db.js');

const funcionario = database.define('funcionarios', {
    id_funcionario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_funcionario: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    cpf_funcionario: {
        type: Sequelize.STRING,
        allowNull: true
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: true
    }

});

module.exports = funcionario