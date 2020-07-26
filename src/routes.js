const express = require("express");

//importação dos controles
const UserControllers = require('./controllers/UserControllers')
const addressController = require('./controllers/addressControllers')
const techController = require('./controllers/techController')






const routes = express.Router();
//-------------------------------------------------------------
//DataBase
routes.get('/users', UserControllers.index); //Pesquisa
routes.post('/users', UserControllers.store); // Criar

routes.get('/users/:userid/addresses', addressController.index)
routes.post('/users/:userid/addresses', addressController.store)


routes.get('/users/:userid/techs', techController.index)
routes.post('/users/:userid/techs', techController.store)
routes.delete('/users/:userid/techs', techController.delete)

//-------------------------------------------------------------
//Paginas
routes.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html");
})
routes.get('/teste', (req, res) => {
    return res.sendFile(__dirname + '/views/teste.html');
})




module.exports = routes; 
