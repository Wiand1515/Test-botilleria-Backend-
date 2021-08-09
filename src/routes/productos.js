const express = require('express');
const { getProductos } = require('../controller/productos');
const router = express.Router();


//Obtener Todos los productos
router.get('/', getProductos);








module.exports = router;