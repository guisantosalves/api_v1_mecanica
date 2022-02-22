const database = require('../connection/db');
const modelFunc = require('../model/modelFuncionario');

(async () => {
    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

module.exports.getFuncionario = async (req, res)=>{
    try{
        const funcionario = await modelFunc.findAll();
        res.status(200);
        res.send(funcionario);
    }catch(err){
        res.status(400).json({erro: err});
    }
}

module.exports.postFuncionario = async (req, res)=>{
    try{
        var nome = req.body.nome_funcionario;
        var cpf = req.body.cpf_funcionario;
        var telefone = req.body.telefone;

        const resultadoCreate = await modelFunc.create({
            nome_funcionario: nome,
            cpf_funcionario: cpf,
            telefone: telefone
        })
        res.status(200);
        res.send(resultadoCreate);
    }catch(err){
        res.status(400).json({erro: err})
    }
}

module.exports.putFuncionario = async (req, res)=>{
    try{
        var nome = req.body.nome_funcionario;
        var cpf = req.body.cpf_funcionario;
        var telefone = req.body.telefone;
        var id = req.body.id;

        const resultadoUpdate = await modelFunc.update({nome_funcionario: nome, cpf_funcionario: cpf, telefone: telefone},
        {where: {id_funcionario: id}});
        
        if(resultadoUpdate == 1){
            res.status(200);
            res.send('Registro alterado com sucesso');
        }else{
            res.send('Algo inesperado aconteceu');
        }
    }catch(err){
        res.status(400).json({error: err});
    }
}

module.exports.deleteFuncionario = async (req, res)=>{

    try{
        var id = req.body.id;

        const resultadoDelete = await modelFunc.destroy({where: {
            id_funcionario: id
        }}).then((a)=>{
            res.send('deletado com sucesso');
            res.status(200);
        });
    }catch(err){
        res.status(400).json({erro: err});
    }
    
}