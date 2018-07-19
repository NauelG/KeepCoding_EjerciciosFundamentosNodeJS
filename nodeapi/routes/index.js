var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // La vista se renderiza EN EL SERVIDOR
    res.render('index', { title: 'Express' });
});

router.get('/otrapagina', function(req, res, next) {
    // res.send('Ok');

    next(new Error('No permitido'));
});

router.get('/paramenruta/:dato', (req, res, next) => {
    const dato = req.params.dato;
    res.send('Ok, recibido dato:' + dato);
});

router.get('/paramenrutaopt/:dato?', (req, res, next) => {
    const dato = req.params.dato;
    res.send('Ok, recibido dato opcional:' + dato);
});

router.get('/params/:id([0-9]+)/piso/:piso/puerta/:puerta', (req, res, next) => {
    const id = req.params.id;
    console.log(req.params)
    res.send('Ok, recibido dato opcional:' + id);
});

module.exports = router;