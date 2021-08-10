const express = require('express');
const { searchProductos } = require('../controller/search');
const router = express.Router();


router.get('/:name', searchProductos);

router.get('/:category')


module.exports = router;