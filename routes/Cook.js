var express = require('express');
const mysql = require('mysql');
var router = express.Router();

router.get('/Cook', function(req, res, next) {
  res.render('Cook', { title: 'Express', success: req.session.success , access: req.session.access});
  console.log(req.session.success);
});

module.exports = router;
