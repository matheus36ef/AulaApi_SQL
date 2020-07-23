//onde faz a conexão com minha base de dados
const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User');



//conexão com banco de dados
const connection = new Sequelize(dbConfig)

User.init(connection)

module.exports = connection;