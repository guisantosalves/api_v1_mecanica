var express = require('express');
var router = express.Router();
var controllerRelatorio = require('../controllers/controllerRelatorio');

/* rotas de relatório */
router.get('/relatorio/funcionario', controllerRelatorio.getRelatorioFuncionario);
router.get('/relatorio/valoRetiradoRelatorio', controllerRelatorio.getValorRetiradoRelatorio);
router.get('/relatorio/relatorioLog', controllerRelatorio.getRelatorioLog);

module.exports = router;