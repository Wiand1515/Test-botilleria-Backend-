const express = require('express');
const app = express();
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 8080);

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

app.listen(8080, () => {
    console.log('Server on port:', app.get('port'));
})