var con = require('../connection/db');

module.exports.getValorRetirado = (req, res)=>{
    try{
        con.connect((err)=>{
            var sqlGet = "select * from atividade_caixa";
            if(err) res.send(err);
            con.query(sqlGet, (err, result)=>{
                if(err) res.send(err);
                res.send(result);
                res.status(200)
            });
        });
    }catch(err){
        res.status(400).json({erro: err.array()})
    }
}

module.exports.postValorRetirado = (req, res)=>{
    try{
        var id_funcionario = req.body.id;
        var data_atividade = req.body.data;
        var valor_retirado = req.body.valor;

        con.connect((err)=>{
            var sqlPost = `insert into atividade_caixa(id_funcionario, data_atividade, valor_retirado) values(${id_funcionario}, "${data_atividade}", ${valor_retirado});`
            if(err) res.send(err);
            con.query(sqlPost, (err, result)=>{
                if(err) res.send(err);
                res.send("Cadastrado com sucesso");
                res.status(200);
            });
        });
    }catch(err){
        res.status(400).json({erro: err.array()})
    }
}

module.exports.putValorRetirado = (req, res)=>{
    res.send("ESTOU NO PUT DO VALOR RETIRADO")
}

module.exports.deleteValorRetirado = (req, res)=>{
    res.send("ESTOU NO DELETE DO VALOR RETIRADO")
}