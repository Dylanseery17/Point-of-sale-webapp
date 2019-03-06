var express = require('express');
const mysql = require('mysql');
var router = express.Router();

// Create connection
// Create connection
const db = mysql.createConnection({
  host     : 'eu-cdbr-west-02.cleardb.net',
  user     : 'bb95cdd6e1afcc',
  password : '24536535',
  database : 'heroku_adab502e65c006c'
})

// Select orders display json
router.get('/Orders/Get', (req, res) => {
    let sql = 'SELECT * FROM Orders';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    });
});

module.exports = router;
