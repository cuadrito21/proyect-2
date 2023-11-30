const express = require('express');
const proyectRouter = require('./Proyect.routers');
const router = express.Router();

// colocar las rutas aquí
router.use('/users',proyectRouter);


module.exports = router;