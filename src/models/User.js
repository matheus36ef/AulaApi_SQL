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

    static associate(models) {
        //  hasMany -  um usuariio tem varios enderessos
        this.hasMany(models.Address, { foreignKey: 'userid', as: 'addresses' });
        this.belongsToMany(models.Tech, { foreignKey: 'userid', through: 'user_techs', as: 'techs' });

    }
}

module.exports = User; //Exportando User / Model