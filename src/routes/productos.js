const express = require('express');
const { getProductos, getProducto } = require('../controller/productos');
const router = express.Router();


//Obtener Todos los productos
router.get('/', getProductos);









module.exports = router;