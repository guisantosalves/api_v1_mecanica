var con = require('../connection/db');
const {check, validationResult} = require('express-validator')

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
        res.status(400).json({erro: err})
    }
}

//validado
module.exports.postValorRetirado = (req, res)=>{
    try{
        var erros = validationResult(req);
        if(!erros.isEmpty()){
            return res.send(erros.array())
        }else{
            var id_funcionario = req.body.funcionario_id;
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
        }
    }catch(err){
        res.status(400).json({erro: err})
    }
}

//validado
module.exports.putValorRetirado = (req, res)=>{
    try{
        var erros = validationResult(req)
        if(!erros.isEmpty()){
            return res.send(erros.array());
        }else{
            var valor_retirado = req.body.valorRetirado;
            var id_valorRetirado = req.body.idValorRetirado
            var sqlPut = `UPDATE atividade_caixa SET valor_retirado = "${valor_retirado}" WHERE id_atividade = ${id_valorRetirado};`
            con.connect((err)=>{
                if(err) res.send(err);
                con.query(sqlPut, (err, result)=>{
                    if(err) res.send(err);
                    res.send("Alteração feita com sucesso");
                    res.status(200);
                })
            });
        }
    }catch(err){
        res.status(400).json({erro: err})
    }
}

module.exports.deleteValorRetirado = (req, res)=>{
    try{
        var id_valorRetirado = req.body.idValorRetirado;
        var sqlDelete = `DELETE FROM atividade_caixa WHERE id_atividade = ${id_valorRetirado};`
        con.connect((err)=>{
            if(err) res.send(err);
            con.query(sqlDelete, (err, result)=>{
                if(err) res.send(err);
                res.send("Registro excluído com sucesso");
                res.status(200);
            });
        });
    }catch(err){
        res.status(400).json({erro: err})
    }
}