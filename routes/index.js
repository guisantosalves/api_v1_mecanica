var express = require('express');
var router = express.Router();
var controllersFuncionario = require('../controllers/controllersFuncionario');
/* GET home page. */
router.get('/', controllersFuncionario.getFuncionario);

module.exports = router;
