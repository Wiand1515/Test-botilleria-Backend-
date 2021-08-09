const express = require('express');
const { getCategorias } = require('../controller/categoria');
const router = express.Router();



router.get('/',getCategorias);








module.exports = router;