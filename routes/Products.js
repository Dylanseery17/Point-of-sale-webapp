var express = require('express');
const mysql = require('mysql');
var sanitizer = require('sanitizer');
var router = express.Router();

// Create connection
// Create connection
const db = mysql.createConnection({
  host     : 'eu-cdbr-west-02.cleardb.net',
  user     : 'bb95cdd6e1afcc',
  password : '24536535',
  database : 'heroku_adab502e65c006c'
})

// Select products display json
router.get('/Products/Get', (req, res) => {
    let sql = 'SELECT * FROM Products';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    });
});

// Select single product
router.get('/Products/Get/:id', (req, res) => {
    let sql = `SELECT * FROM Products WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Update product stock
router.get('/Products/Update/:id/:Stock', (req, res) => {
    var id = sanitizer.sanitize(req.params.id);
    var stock = sanitizer.sanitize(req.params.Stock);
    let sqln = 'SELECT * FROM Products WHERE id = '+ id +' ';
    let queryn = db.query(sqln, (err, result) => {
        if(err) throw err;
        console.log(result);

        if(req.params.Stock == result[0].Stock){
          res.json({Equal: "Equal"});
        }
        if(req.params.Stock < result[0].Stock){
          res.json({Less: "Less"});
        }
        if(req.params.Stock > result[0].Stock){

          let sql = 'UPDATE Products SET Stock='+ stock +' WHERE id = ' + id  +'';
          let query = db.query(sql, (err, result) => {
              if(err) throw err;
          res.json({More: "More"});
          });
        }
    });


});

module.exports = router;
