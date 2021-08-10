const express = require('express');
const { getProductos, getProducto } = require('../controller/productos');
const router = express.Router();


//Obtener Todos los productos
router.get('/', getProductos);


router.get('/search', getProducto)









module.exports = router;