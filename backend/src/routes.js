const axios = require('axios');
//importar o módulo de roteamento do express com {}
const { Router } = require('express');

const DevController = require('./controllers/devController')
const SearchController = require('./controllers/SearchController')

const routes = Router();
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index );
    

   
//exportar rotas
module.exports = routes