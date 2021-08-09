const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database');
const Producto = require('./producto');

const Categoria = sequelize.define('category', {
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
    }
},{ 
    timestamps: false,
    sequelize,
    tableName: 'category'
});

Categoria.hasMany(Producto,{
    as: "products",
    foreignKey: "category"
});

Producto.belongsTo(Categoria,{
    as: "populateCategory",
    foreignKey: 'category'
});

module.exports = Categoria;