const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 8080);

//Middlewares
app.use(express.json());

// Routes
app.use("/api/productos", require('./routes/productos'));
app.use("/api/categorias", require('./routes/categorias'));
app.use("/api/search", require('./routes/search'))

app.listen(8080, () => {
    console.log('Server on port:', app.get('port'));
})