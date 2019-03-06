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

// Select users
router.get('/Users/Get', (req, res) => {
    let sql = 'SELECT * FROM Users';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    });
});

// Select single user
router.get('/Users/Get/:id', (req, res) => {
    let sql = `SELECT * FROM Users WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

module.exports = router;
