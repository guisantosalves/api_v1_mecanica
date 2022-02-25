var express = require('express');
var router = express.Router();
var controllerValorRetiradoRoutes = require('../controllers/controllersValorRetirado.js');
const {check, validationResult} = require('express-validator')

/* Rotas valorRetirado */
router.get('/valorRetirado', controllerValorRetiradoRoutes.getValorRetirado);

router.post('/valorRetirado/cadastro', [
    check('data', 'insira a data de maneira correta').not().isEmpty(),
    check('valor', 'insira o valor retirado').not().isEmpty(),
    check('funcionario_id', "insira o funcionário que retirou o dinheiro").not().isEmpty()
],controllerValorRetiradoRoutes.postValorRetirado);

router.put('/valorRetirado/update', [
    check('valorRetirado', 'insira o valor retirado').not().isEmpty(),
    check('idValorRetirado', 'qual registro deseja modificar').not().isEmpty()
], controllerValorRetiradoRoutes.putValorRetirado);

router.delete('/valorRetirado/delete', controllerValorRetiradoRoutes.deleteValorRetirado);

module.exports = router;
