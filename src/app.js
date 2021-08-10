const express = require('express');
const app = express();
const cors = require('cors');


//Settings
const PORT = process.env.PORT || 3000;

//Servir contenido estatico
app.use(express.static('public'));

//Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/productos", require('./routes/productos'));
app.use("/api/categorias", require('./routes/categorias'));
app.use("/api/search", require('./routes/search'))

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});