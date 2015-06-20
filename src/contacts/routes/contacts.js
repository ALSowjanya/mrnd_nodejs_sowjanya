var express = require('express');
var router = express.Router();
var array = new Array();
var count = 0;
//var i = 0;

/* GET contacts */
router.get('/message/:contact', function (req, res, next) {
    var k = req.params.contact;
    //console.log(JSON.stringify(array.msg));
    res.json(array[k].msg[0]);
});
router.get('/:id', function(req, res, next) {
    var k = req.params.id;
    //console.log(req.params.id);
    res.json(array[k]);
 });

router.post('/', function(req, res, next) {
    array[count] = req.body;
    //console.log("Entered Post----");
    //console.log(req.body);
    //console.log(array[count]);
    //array[i] = req.body;
    //i = i+ 1;
    //res.send((i - 1) + "");
    //array.push(req.body);
    res.json(count);
});

router.post('/:contact', function (req, res, next) {
    var k = req.params.contact;
    //console.log(req.body);
    array[k].msg.push(req.body.msg);
    res.json(k - 1);
});

router.put('/:id', function(req, res, next) {
    //console.log(req.body);
    var k = req.params.id;
    array[k].firstName = req.body.firstName;
   // array[k].lastName = req.body.lastName;
    //array[k].phone = req.body.phone;
    res.json(array[k]);
});

module.exports = router;
