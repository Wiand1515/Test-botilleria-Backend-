const { request, response } = require("express");
const Categoria = require("../models/categoria");


const getCategorias = async(req = request, res = response) => {
   const categoria = await Categoria.findAll();
   
   res.status(200).json({
        data: categoria
   });
}


module.exports = {
    getCategorias
}