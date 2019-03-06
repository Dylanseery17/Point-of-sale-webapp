var express = require('express');
const mysql = require('mysql');
var bcrypt = require('bcryptjs');
var router = express.Router();
var passwordHash = require('password-hash');
var session = require('express-session');
var sanitizer = require('sanitizer');
const saltRounds = 10;
// Create connection
// Create connection
const db = mysql.createConnection({
  host     : 'eu-cdbr-west-02.cleardb.net',
  user     : 'bb95cdd6e1afcc',
  password : '24536535',
  database : 'heroku_adab502e65c006c'
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('req.session', req.session);
  req.session.success = false;
  cartName = [];
  req.session.cart = [];
});



router.get('/Logout', function(req, res, next) {
  req.session.destroy();
  var cartName = [];
  res.render('index', { title: 'Express' });
});

router.get('/SalesClerk', function(req, res,) {
  res.render('SalesClerk', { title: 'Express' , success: req.session.success  , access: req.session.access });
  console.log(req.session.success);
});

router.post('/Login', function(req, res, next) {

  var user_name= sanitizer.sanitize(req.body.Username);
  var pass_word=sanitizer.sanitize(req.body.Password);


  if(!user_name.length && !pass_word.length){
    res.json({UNull: true ,PNull: true});
  }
  else if(!user_name.length){
    res.json({UNull: true});
  }
  else if(!pass_word.length){
    res.json({PNull: true});
  }
  else if(user_name.length > 10 && pass_word.length > 10){
    res.json({ULength: true , PLength: true});
  }
  else if(user_name.length > 10){
    res.json({ULength: true});
  }
  else if(pass_word.length > 10){
    res.json({PLength: true});
  }
  else{



   let sql = 'SELECT * FROM users WHERE username = "'+ user_name +'"';
   console.log(sql);
   let query = db.query(sql, (err, results, fields) => {
       if(err) throw err;
       numRows = results.length;
       console.log(numRows);
       console.log(results);
       bcrypt.compare(pass_word, results[0].password, function (err, output) {

       console.log(pass_word);
       console.log(results[0].password);
       console.log(output);

       if(output = true){

         req.session.success = true;
         var access = results[0].access;
         req.session.access = access;
         req.session.usernames = user_name;
         res.json({Username: user_name, Access: access, Logged: true });

       }
       if(output = false){
         res.json({Error: true, Logged: false });
       }

       });
   });
   }
 });



router.get('/Register', function(req, res, next) {
  res.render('Register', { title: 'Express' });
  res.end();
});


router.post('/Registered', function(req, res, next) {
  var user=req.body.usersn;
  var pass=req.body.pass;
  var first_name=req.body.FName;
  var second_name=req.body.SName;
  var e_mail=req.body.Email1;
  var address =req.body.Address;


  console.log(user);
  console.log(pass);

  let sql = 'INSERT INTO users (username, email , password , firstname , lastname , address, access) VALUES (?,?,?,?,?,?,?)';
  let todo = [user , e_mail , pass , first_name , second_name , address , 'SalesClerk'];
  let query = db.query(sql,todo, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      // get inserted id
      res.redirect('/', { register: e_mail }, function(err, html){
      });
    });

});


module.exports = router;
