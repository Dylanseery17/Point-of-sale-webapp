var express = require('express');
const mysql = require('mysql');
var router = express.Router();

router.get('/Manager', function(req, res, next) {
  res.render('Manager', { title: 'Express', success: req.session.success ,manager:req.session.usernames, access: req.session.access });

});

module.exports = router;
