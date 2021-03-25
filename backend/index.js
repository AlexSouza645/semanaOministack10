const express = require('express');

const app = express();
// get , post = criar, put= editar usuario, delete
app.get('/', (request, response) => {
    return response.json({message:' hello world'})
});
app.listen(3333);

