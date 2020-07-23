//O controllers liga com as requisições
//E devolve respostas para o front-end / Aplicação
const User = require('../models/User');


module.exports = {
    async index(req, res) {
        const users = await User.findAll(); //Buscar por todos findAll, cada find tem varias funções diferentes
        
        return res.json(users)
    },


    async store(req, res, err) {
        if( err ){
            return console.log('err ', err)
        }
        const { name, email } = req.body;
    
        const user = await User.create({name:name, email:email});
        return res.json(user);
        
    }
}