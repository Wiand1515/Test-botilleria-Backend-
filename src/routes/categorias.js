const express = require('express');
const { getCategorias } = require('../controller/categoria');
const router = express.Router();


//Obtener todas las categorias
router.get('/',getCategorias);

module.exports = router;