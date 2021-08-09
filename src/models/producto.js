const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database');

const Producto = sequelize.define('product',
{
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
    },
    url_image:{
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
    discount: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
    sequelize,
    tableName: 'product'
}
);

module.exports = Producto;