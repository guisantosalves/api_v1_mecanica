var express = require('express');
var router = express.Router();
var controllerValorRetiradoRoutes = require('../controllers/controllersValorRetirado.js');

/* Rotas valorRetirado */
router.get('/valorRetirado', controllerValorRetiradoRoutes.getValorRetirado);
router.post('/valorRetirado/cadastro', controllerValorRetiradoRoutes.postValorRetirado);
router.put('/valorRetirado/update', controllerValorRetiradoRoutes.putValorRetirado);
router.delete('/valorRetirado/delete', controllerValorRetiradoRoutes.deleteValorRetirado);

module.exports = router;
