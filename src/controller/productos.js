const { request, response } = require("express");
const { Op } = require("sequelize");
const Categoria = require("../models/categoria");
const Producto = require("../models/producto");






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
        
    }
};


const getProducto = async(req = request, res = response) => {
    try {
        const {name} = req.query;
        console.log(req.query)

        const producto = await Producto.findAll({
            include: [{
                model: Categoria,
                as: "populateCategory"
            }],            
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });

        res.json({
            data: producto
        })

    } catch (error) {
        res.json({
            msg: 'No se puede procesar su solicitud'
        })        
    }
};



module.exports = {
    getProductos,
    getProducto
}