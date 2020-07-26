const express = require("express");

//importação dos controles
const UserControllers = require('./controllers/UserControllers')
const addressController = require('./controllers/addressControllers')






const routes = express.Router();
//-------------------------------------------------------------
//DataBase
routes.get('/users', UserControllers.index); //Pesquisa
routes.post('/users', UserControllers.store); // Criar

routes.post('/users/:userid/addresses', addressController.store)




//-------------------------------------------------------------
//Paginas
routes.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html");
})
routes.get('/teste', (req, res) => {
    return res.sendFile(__dirname + '/views/teste.html');
})




module.exports = routes; 
