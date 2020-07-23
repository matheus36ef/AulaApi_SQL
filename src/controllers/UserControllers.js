//O controllers liga com as requisições
//E devolve respostas para o front-end / Aplicação
const User = require('../models/User');


module.exports = {
    async index(req, res) {
        const users = await User.findAll(); //Buscar por todos findAll, cada find tem varias funções diferentes
        
        return res.json(users)
    },


    async store(req, res) {
        const { name, email } = req.body;
    
        const user = await User.create({name, email});
        return res.json(user);
        
    }
}