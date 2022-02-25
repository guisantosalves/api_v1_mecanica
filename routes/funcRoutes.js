var express = require('express');
var router = express.Router();
var controllersFuncionario = require('../controllers/controllersFuncionario');
const {check, validationResult} = require('express-validator');

/* rotas funcionario validadas */
router.get('/funcionario', controllersFuncionario.getFuncionario);

router.post('/funcionario/cadastro', [
    check('nome', 'O nome deve ser informado').not().isEmpty(),
    check('cpf', 'O cpf do funcionário deve ser informado').not().isEmpty()
],controllersFuncionario.postFuncionario);

router.put('/funcionario/update', [    
    check('nome', 'O nome deve ser informado').not().isEmpty(),
    check('cpf', 'O cpf do funcionário deve ser informado').not().isEmpty(),
    check('id', "insira qual funcionario deseja alterar").not().isEmpty()
], controllersFuncionario.putFuncionario);

router.delete('/funcionario/delete', controllersFuncionario.deleteFuncionario);


module.exports = router;
