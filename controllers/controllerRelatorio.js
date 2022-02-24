const con = require('../connection/db');

//relatório do funcionario
module.exports.getRelatorioFuncionario = (req, res) =>{
    try{
        var relatorioFunc = `select * from funcionario`;
        con.connect((err)=>{
            if(err) res.send(err);
            con.query(relatorioFunc, (err, result)=>{
                res.send(result);
                res.status(200);
            })
        });
    }catch(err){
        res.status(400).json({erro: err})
    }
}

//relatório atividade
module.exports.getValorRetiradoRelatorio = (req, res)=>{
    try{
        var relatorioFunc = `select * from atividade_caixa`;
        con.connect((err)=>{
            if(err) res.send(err);
            con.query(relatorioFunc, (err, result)=>{
                res.send(result);
                res.status(200);
            })
        });
    }catch(err){
        res.status(400).json({erro: err})
    }
}

//join entre os dois formando uma view
module.exports.getRelatorioLog = (req, res)=>{
    try{
        var relFuncionarioAtividade = `select * from relatorio_retirada;`;
        con.connect((err)=>{
            if(err) res.send(err);
            con.query(relFuncionarioAtividade, (err, result)=>{
                if(err) res.send(err);
                res.send(result);
                res.status(200);
            });
        });
    }catch(err){
        res.status(400).json({erro: err})
    }
}