const express = require("express")
const UserControllers = require('./controllers/UserControllers')

// const pag = express("express")

const routes = express.Router();



routes.get('/users', UserControllers.index ); //Pesquisa
routes.post('/users', UserControllers.store ); // Criar


//-----------------------------------------------------

routes.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})



module.exports = routes; 
