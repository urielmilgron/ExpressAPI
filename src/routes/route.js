const { Router } = require('express');
const routers = Router();

routers.get('/inicio', (req, res) => {
    res.json({"nombvre": "hola"})
})

module.exports = routers;