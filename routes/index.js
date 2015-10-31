var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'TEC 2015' });
});

router.get('/enroll', function(req, res, next) {
    res.render('enroll', { title: 'TEC 2015' });
});

module.exports = router;
