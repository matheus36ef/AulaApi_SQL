const { Model, DataTypes } = require('sequelize'); // Importando Model de dentro do sequelize

class Address extends Model {
    static init(connection){
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userid', as: 'user' });
    }
}

module.exports = Address