const { request, response } = require("express");
const Categoria = require("../models/categoria");
const Producto = require("../models/producto");
const { Op } = require("sequelize");

//Buscar productos por parametros
const searchProductos = async (req = request, res = response) => {
    const { name } = req.params
    try {
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
        console.log(error)
        res.json({
            msg: 'No se puede procesar su solicitud'
        })        
    }
};

//Buscar Productos por query
const searchProductosQuery = async(req = request, res = respose) => {
    const { name } = req.query;
    try {
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
        console.log(error)
        res.json({
            msg: 'No se puede procesar su solicitud'
        })        
    }
};

//Buscar categorias por parametro
const searchCategory = async (req = request, res = response ) => {
    try {
        const { id } = req.params;
        const filteredProducts = await Categoria.findAll({
          include: [
            {
              model: Producto,
              as: "products",
            },
          ],
          where: {
            id: {
              [Op.eq]: id,
            },
        }
        });
        res.json({data: filteredProducts});
      } catch (err) {
        console.log(err);
        res.json({
          data: {},
          message: "[SERVER] Algo ha ido mal al filtrar productos",
        });
      }
};

//Buscar categoria por query


//Buscar productos por categorias







module.exports = {
    searchProductos,
    searchCategory
}