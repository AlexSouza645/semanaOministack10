const express = require('express');
const mongoose = require('mongoose');// biblioteca que interliga ao mongodb
const cors = require ('cors')
const routes = require('./routes')
const app = express();


mongoose.connect('mongodb+srv://oministack:oministack@cluster0.of40q.mongodb.net/oministack?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
app.use(express.json());//faz com q o express entenda o JSON
app.use(routes);
app.use(cors())

//app.get('/',(request, response)=>{
// return response.send('hello world')
//})

//Métodos http: get= buscar informação , post = criar, put= editar usuario, delete
//tipos de parametros 
//query params:req.query(filtros, ordenação , paginação)
//route params:request.params (identificar um recurso na alteração ou remoção ) put, delete
//route params app.delete('/users/:id', (request, response)console.log(request.params)
//body: request.body (dados para criação pou alteração de um registro)

app.listen(3333);

