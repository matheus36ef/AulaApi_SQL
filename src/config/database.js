//configurações da minha database
module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'sqlnode',
    define: {
        timestamps: true, // basicamente entende que toda tabela no banco de dados possui uma tabela created_at, updated_at
        underscored: true,//basicamente define que o nome das tabelas e colunas no formato snake case -> quando escreve alguma coisa separada por ' _ '
    },
};
