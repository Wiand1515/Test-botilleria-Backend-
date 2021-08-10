const express = require('express');
const app = express();
const cors = require('cors');


//Settings
const PORT = process.env.PORT || 3000;


//Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hola Mundo');
})
app.use("/api/productos", require('./routes/productos'));
app.use("/api/categorias", require('./routes/categorias'));
app.use("/api/search", require('./routes/search'))

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});