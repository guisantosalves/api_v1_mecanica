var Sequelize = require('sequelize');
const sequelize = require('../connection/db.js');
var database = require('../connection/db.js');

const atividade_caixa = database.define('atividade_caixa', {
    id_atividade: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data_atividade: {
        type: Sequelize.DATE,
        allowNull: false
        
    },
    cpf_funcionario: {
        type: Sequelize.STRING,
        allowNull: true
    },
    valor_retirado:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    id_funcionario: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false
    }


});

//assossiations
database.atividade_caixa.hasMany(database.funcionario);
database.funcionario.belongsTo(database.atividade_caixa);

module.exports = atividade_caixa;