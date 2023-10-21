const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type:DataTypes.INTEGER,
         allwNull:false,
         primaryKey:true,
         autoIncrement:true,
      },
      name:{
         type:DataTypes.STRING,
         allwNull:false,
      },
      status:{
         type:DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull:false,
      },
      species:{
         type:DataTypes.STRING,
         allwNull:false,
      },
      gender:{
         type:DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull:false,
      },
      origin:{
         type:DataTypes.STRING,
         allwNull:false, 
      },
      image:{
         type:DataTypes.STRING,
         allwNull:false,
      },
   }, { timestamps: false });
};
