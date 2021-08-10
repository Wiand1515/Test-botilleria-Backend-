const express = require('express');
const { searchProductos, searchCategory } = require('../controller/search');
const router = express.Router();

//Buscar por Parametro Producto
router.get('/productos/:name', searchProductos);

//Buscar Productos por categoria
router.get('/categorias/:id', searchCategory);


module.exports = router;