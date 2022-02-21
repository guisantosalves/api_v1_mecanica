var express = require('express');
var router = express.Router();
var controllersFuncionario = require('../controllers/controllersFuncionario');

/* rotas funcionario */
router.get('/funcionario', controllersFuncionario.getFuncionario);
router.post('/funcionario/cadastro', controllersFuncionario.postFuncionario);
router.put('/funcionario/update', controllersFuncionario.putFuncionario)
router.delete('/funcionario/delete', controllersFuncionario.deleteFuncionario);


module.exports = router;
