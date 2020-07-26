//onde faz a conexão com minha base de dados
const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User');
const Address = require('../models/address');




//conexão com banco de dados
const connection = new Sequelize(dbConfig)

//Conexoes 
User.init(connection)
Address.init(connection)


//associações
Address.associate(connection.models);

module.exports = connection;