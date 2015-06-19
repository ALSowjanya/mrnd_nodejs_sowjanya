var express = require('express');
var router = express.Router();
var array = new Array();
/* GET contacts */
router.get('/:id', function(req, res, next) {
    console.log(req.);
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    array.push(req.body);
    res.send(array.length - 1);
});

router.put('/:id', function(req, res, next) {
    console.log(req.body);
    array[id] = req.body;
});

module.exports = router;
