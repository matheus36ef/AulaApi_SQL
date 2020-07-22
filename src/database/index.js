//onde faz a conexão com minha base de dados
const Sequelize = require('sequelize');
const dbConfig = require('../config/database')


//conexão com banco de dados
const connection = new Sequelize(dbConfig)

module.exports = connection;