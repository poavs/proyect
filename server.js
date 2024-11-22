const express = require('express');
const path = require('path');

const app = express();
const PORT = 3009;

// Servir archivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta para la página del formulario
app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});

// Ruta para la página de información
app.get('/informacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'informacion.html'));
});

// Escuchar en el puerto 3009
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
