const {router} = require('express')
const routes = router();
routes.post('/users/:id', (request, response) => {
    console.log(request.body)
    return response.json({message:' hello world'})
});