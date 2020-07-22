'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //mudar um campo da tabela
    return queryInterface.addColumn( // R -> Quero add uma nova coluna na('')
      'users', // Nome da tabela 
      'age', // Nome da coluna
      { // tipo da coluna
        type: Sequelize.INTEGER, // define como um tipo INTEIRO
      },
    );
  },
  //-> NOTA: Sempre cria a cola no final das que ja estao criadas

  down: async (queryInterface, Sequelize) => { // Caso algo de errado... 
    return queryInterface.removeColumn( // Remove a coluna da ('')
      'users', // Nome da tabela  
      'age', // Nome da coluna
    );
  }
};
