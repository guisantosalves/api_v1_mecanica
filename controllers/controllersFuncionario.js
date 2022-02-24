const con = require('../connection/db');

module.exports.getFuncionario = (req, res)=>{
    try{
        var sqlGet = "select * from funcionario"
        con.connect((err)=>{
            if(err) res.send(err);
            con.query(sqlGet, (err, result)=>{
                if(err) res.send(err);
                res.send(result);
                res.status(200);
            });
        });
    }catch(err){
        res.status(400).json({erro: err});
    }
}

module.exports.postFuncionario = (req, res)=>{
    try{
        var nome = req.body.nome;
        var cpf = req.body.cpf;
        var telefone = req.body.telefone;

        con.connect(function(err) {
            var sqlPost = `INSERT INTO funcionario (nome_funcionario, cpf_funcionario, telefone) VALUES ("${nome}", "${cpf}", "${telefone}")`;
                con.query(sqlPost, (err, result)=>{
                if(err) res.send(err);
                res.send("cadastrado com sucesso");
                res.status(200);
            });
        });
    }catch(err){
        res.status(400).json({erro: err});
    }
}

module.exports.putFuncionario = async (req, res)=>{
    try{
        var nome = req.body.nome;
        var cpf = req.body.cpf;
        var telefone = req.body.telefone;
        var id = req.body.id;

        con.connect((err)=>{
            if(err) res.send(err);
            var sqlPut = `UPDATE funcionario SET nome_funcionario = "${nome}", cpf_funcionario = "${cpf}", telefone = "${telefone}" WHERE id_funcionario = ${id}`;
            con.query(sqlPut, (err, result)=>{
                if(err) res.send(err);
                res.send("alteração feita com sucesso");
                res.status(200);
            });
        });
    }catch(err){
        res.status(400).json({erro: err});
    }
}

module.exports.deleteFuncionario = async (req, res)=>{
    try{
        var id = req.body.id;
        con.connect((err)=>{
            if(err) res.send(err);
            var sqlDelete = `DELETE FROM funcionario WHERE id_funcionario = ${id};`;
            con.query(sqlDelete, (err, result)=>{
                if(err) res.send(err);
                res.send("Deletado com sucesso")
                res.status(200);
            });
        });
    }catch(err){
        res.status(400).json({error: err});
    }
}