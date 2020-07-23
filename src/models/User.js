const { Model, DataTypes } = require('sequelize'); // Importando Model de dentro do sequelize

class User extends Model {
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = User; //Exportando User / Model