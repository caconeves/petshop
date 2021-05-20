const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');
const institucionalController = require('../controllers/institucionalController');

//rotas para paginas institucionais

// http://localhost:3000/
router.get('/', institucionalController.index);

// http://localhost:3000/sobre
router.get('/sobre', institucionalController.sobre);

// http://localhost:3000/contato
router.get('/contato', institucionalController.contato);

// http://localhost:3000/cadastro
router.get('/cadastro', institucionalController.cadastro);


// rota para /pets que retorna o método index da petsController
router.get('/pets', petsController.index);

router.get('/pets/:nome', petsController.show);

module.exports = router;
