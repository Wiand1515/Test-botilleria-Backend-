const { request, response } = require("express");
const { Op } = require("sequelize");
const Categoria = require("../models/categoria");
const Producto = require("../models/producto");

//Obtener todos los productos
const getProductos = async(req = request, res = response) => {

    try {
        const productos = await Producto.findAll({
            include: [{
                model: Categoria,
                as: "populateCategory"
            }],
            order: [['category', 'ASC']]
        });
     
        res.status(200).json({
            data: productos
        });
        
    } catch (err) {
        console.log(err);
        res.json({
            msg: 'Algo ha salido mal'
        })
    }
};


module.exports = {
    getProductos,
}