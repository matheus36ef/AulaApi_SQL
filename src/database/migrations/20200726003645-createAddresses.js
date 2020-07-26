'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //metodo up = diz oque essa migrations vai realizar no banco de dados
    //ex: a criação de uma nova tabela

    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('addresses', { 
       id: { //campo id dentro da tabela (users)
         type: Sequelize.INTEGER, // tipo (sequelize é padrão) INTEIRO
         primaryKey: true, // Fala que ele é unico, id++ sempre e TAMBEM que ele o principal na pesquisa
         autoIncrement: true, //Fala que ele sempre vai estar se incrementando
         allowNull: false, //Fala que ele não pode ser nullo
       },
       userid: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: { model: 'users', key: 'id' },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE',
       },
       zipcode: { //Campo name dentro da tabela (users)
          type: Sequelize.STRING, // fala que o nome é do tipo CARACTER 
          allowNull: false,//Fala que ele não pode ser nullo
       },
       street: {
          type: Sequelize.STRING, // fala que o nome é do tipo CARACTER 
          allowNull: false,//Fala que ele não pode ser nullo
       },
       number: {
          type: Sequelize.INTEGER, // fala que o nome é do tipo INTEIRO 
          allowNull: false,//Fala que ele não pode ser nullo
       },
       created_at: { // Campo que informa a data que foi criada - (É altomatizado)
          type: Sequelize.DATE, // fala que o nome é do tipo datas
          allowNull: false,//Fala que ele não pode ser nullo 
       },
      updated_at: { //Ultima data de atualização - (É altomatizado)
        type: Sequelize.DATE,// fala que o nome é do tipo datas
        allowNull: false,//Fala que ele não pode ser nullo
      }
      });
  
  },

  down: async (queryInterface, Sequelize) => {
    //o metodo down diz que "se alguma coisa dar errada, e eu precisar desfazer
    //essa migration, oque eu preciso desfazer no banco de dados"

    //ex: se eu criei uma tebala no metodo up, o normal e eu deletar ela no metodo down (caso algo de errado)

    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('addresses');
     
  }
};
