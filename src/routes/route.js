const { Router } = require('express');
const routers = Router();

routers.get('/inicio', (req, res) => {
    res.json({"nombre": "hola"})
})

module.exports = routers;