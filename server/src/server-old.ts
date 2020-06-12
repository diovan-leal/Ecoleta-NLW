import express, { request, response } from 'express'

const app = express();

//para que o express entenda json e consiga pegar a request body json
app.use(express.json());

//Rota:  endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema.

//Métodos HTTP
// GET: Buscar uma ou mais informações do back-end.
// POST: Criar uma nova informação no back-end.
// PUT: Atualizar uma informação existente no backend.
// DELETE: Remove informação do back-end.

//Tipos de parâmetros
//Request Param parâmetros que vem na rota que identificam um recurso
//Query Param parâmetros que vem na rota geralmente opcionais para filtros, paginação
// Request Body Corpo da requisição parâmetros para criação e atualização de informações


const users = [
    'Diovan',
    'Alline',
    'Dieizon',
    'Raunam'
];
app.get('/users', (request, response) => {
                   //forçando que é string porque pode ser array
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    //send retorna uma string
    //response.send('Hello World');

    return response.json(filteredUsers);
});

//query
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});  

app.post('/users', (request, response) => {
    
    const data = request.body;
    const user = {
        name: data.nme,
        email: data.email
    };

    return response.json(user);
}); 

app.listen(3333);