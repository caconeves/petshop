const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');

//rotas para paginas institucionais
router.get('/', institucionalController.index);

// rota para /pets que retorna o método index da petsController
router.get('/pets', petsController.index);

router.get('/pets/:nome', petsController.show);

module.exports = router;
