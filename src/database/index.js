//onde faz a conexão com minha base de dados
const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User');
const Address = require('../models/address');
const Tech = require('../models/techs');




//conexão com banco de dados
const connection = new Sequelize(dbConfig)

//Conexoes 
User.init(connection)
Address.init(connection)
Tech.init(connection)


//associações
User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;