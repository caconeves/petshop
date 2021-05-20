const institucionalController = {
    index: (request, response) => {
        return response.render('index');
    },
    sobre: (request, response) => {
        return response.render('sobre');
    },
    servicos: (request, response) => {
        return response.render('servicos');
    },
    cadastro: (request, response) => {
        return response.render('cadastro');
    },
    contato: (request, response) => {
        return response.render('contato');
    }
}

module.exports = institucionalController;