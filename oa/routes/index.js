var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/main', function(req, res, next) {
    res.render('main');
})
router.get('/myBusiness', function(req, res, next) {
    res.render('myBusiness');
})
router.get('/allCustomer', function(req, res, next) {
    res.render('allCustomer');
})
router.get('/userinfo', function(req, res, next) {
    res.render('userInfo');
})
router.get('/todayend', function(req, res, next) {
    res.render('todayend');
})
router.get('/todayafter', function(req, res, next) {
    res.render('todayafter');
})
router.get('/todaybusiness', function(req, res, next) {
    res.render('todaybusiness');
})
router.get('/weekbusiness', function(req, res, next) {
    res.render('weekbusiness');
})
router.get('/monthbusiness', function(req, res, next) {
    res.render('monthbusiness');
})
router.get('/search', function(req, res, next) {
    res.render('search');
})
router.get('/myinfo', function(req, res, next) {
    res.render('myInfo');
})
module.exports = router;