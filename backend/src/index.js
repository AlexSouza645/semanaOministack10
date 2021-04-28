const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb+srv://oministack:Inquisiti0n6@cluster0.of40q.mongodb.net/oministack10?retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology:true,
});
app.use(express.json());



//Métodos http: get= buscar informação , post = criar, put= editar usuario, delete
//tipos de parametros 
//query params:req.query(filtros, ordenação , paginação)

//route params:equest.params (identificar um recurso na alteração ou remoção ) put, delete
//route params app.delete('/users/:id', (request, response)console.log(request.params)

//body: request.body (dados para criação pou alteração de um registro)

app.listen(3333);    
 
 