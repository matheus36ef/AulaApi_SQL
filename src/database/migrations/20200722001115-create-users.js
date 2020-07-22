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
     await queryInterface.createTable('users', { id: Sequelize.INTEGER });
  
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
    await queryInterface.dropTable('users');
     
  }
};
