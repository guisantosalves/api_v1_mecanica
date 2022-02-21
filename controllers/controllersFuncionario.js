const database = require('../connection/db');
const modelFunc = require('../model/modelFuncionario');
(async () => {
    
    try {
        const resultado = await database.sync();
        //console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

module.exports.getFuncionario = async (req, res)=>{
    const funcionario = await modelFunc.findAll();
    //console.log(funcionario);
    res.send(funcionario);
}

module.exports.postFuncionario = async (req, res)=>{
    
    const resultadoCreate = await modelFunc.create({
        nome_funcionario: 'guizaoo',
        cpf_funcionario: '10123135645',
        telefone: '123456789'
    })
    res.send(resultadoCreate);
}

module.exports.putFuncionario = (req, res)=>{
    res.send('vc está no update funcionario')
}

module.exports.deleteFuncionario = (req, res)=>{
    res.send('vc está no delete funcionario');
}