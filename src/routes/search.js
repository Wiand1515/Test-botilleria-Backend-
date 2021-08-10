const express = require('express');
const { searchProductos, searchCategory } = require('../controller/search');
const router = express.Router();

//Buscar por Parametro Producto
router.get('/productos/:name', searchProductos);

//Buscar por Query producto

//Buscar por query Categoria

//Buscar por parametro Categoria
router.get('/categorias/:name', searchCategory);

//Buscar Productos por categoria

module.exports = router;