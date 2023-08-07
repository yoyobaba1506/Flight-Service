'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Cities,{
        foreignKey:'cityId',
        onDelete:'cascade'
      });
      this.hasMany(models.Flight,{
        foreignKey:'arrivalAirportId',
        onDelete:'cascade'
      });
      this.hasMany(models.Flight,{
        foreignKey:'departureAirportId',
        onDelete:'cascade'
      })
    }
  }
  Airports.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    code: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    address:{
      type:DataTypes.STRING,
      unique:true
    },
    cityId: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Airports',
  });
  return Airports;
};