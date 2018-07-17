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
})

module.exports = router;