const { request, response } = require("express");
const Categoria = require("../models/categoria");


const getCategorias = async(req = request, res = response) => {
   
   try {
       
        const categoria = await Categoria.findAll();
       
       res.status(200).json({
            data: categoria
       });
       
   } catch (error) {
       console.log(error);
       res.json({
           msg: 'Algo ha salido mal'
       })
   }
}


module.exports = {
    getCategorias
}