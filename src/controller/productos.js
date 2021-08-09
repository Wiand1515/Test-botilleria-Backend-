const { request, response } = require("express");
const Categoria = require("../models/categoria");
const Producto = require("../models/producto");





const getProductos = async(req = request, res = response) => {

    try {
        const producto = await Producto.findAll({
            include: {
                model: Categoria,
                as: "populateCategory"
            }
        });
     
        res.status(200).json({
            data: producto
        });
        
    } catch (err) {
        
    }
}




module.exports = {
    getProductos,
}