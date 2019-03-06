var express = require('express');
const mysql = require('mysql');
var router = express.Router();

// Create connection
const db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'projectdonuts'
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
