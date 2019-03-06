var express = require('express');
const mysql = require('mysql');
var router = express.Router();

// Create connection
const db = mysql.createConnection({
  host     : 'eu-cdbr-west-02.cleardb.net',
  user     : 'bb95cdd6e1afcc',
  password : '24536535',
  database : 'heroku_adab502e65c006c'
})

var cartName = [];
var id = 0;
router.get('/AddtoCart/:id/:amount', function(req, res, next) {

  if (req.session.success == true){
    if (req.session.access == "SalesClerk"){

  let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
  var amount = req.params.amount;
  let query = db.query(sql, (err, results, fields)=> {
      if(err) throw err;
      id++;
      var subtotal = amount * results[0].Price;
      var name , desc , img , quan, stock ,price;
      name = results[0].PName;
      desc = results[0].PDescription;
      img = results[0].Img;
      quan = amount;
      stock = results[0].Stock;
      newstock = stock - quan;
      price = results[0].Price;

      console.log(subtotal);

      let cname = {
                "id": id,
                "Name": name,
                "desc": desc,
                "img": img,
                "Quanity": amount,
                "Stock": stock,
                "NewStock": newstock,
                "Price": price,
                "Subtotal": subtotal,
                };

      cartName.push(cname);
      req.session.cart = cartName;

      res.send(req.session.cart);
  });
}
}
else{
res.redirect('/');
}
});

router.get('/Cart', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(req.session.cart);
});

router.get('/Cart/Remove/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var minus = req.params.id - 1;
  cartName.splice(minus, 1);
  id = cartName.length;
  req.session.cart = cartName;
  res.send(cartName);
});

router.get('/Cart/PlaceOrder', function(req, res, next) {
  var orderItems;
  var proNames;
  var orderTotal = 0;
  var order = cartName;

            //orderTotal += +subtotal;

  orderItems = order.length;
  var i = 0;
  console.log(cartName);
  console.log(orderItems);

  for(i=0; i <  order.length; i++){
      proNames += " " + cartName[i].Name + " (" + cartName[i].Quanity + ") " + " ,"
      orderTotal += +cartName[i].Subtotal;
      console.log(cartName[i].Name);
  }

  var users = req.session.usernames;
  var d = new Date();
  var date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
  var time = d.getHours() + ":" + d.getMinutes();

    let sql1 = 'INSERT INTO orders (clerk, OrderItems , ProductNames , TotalPrice , Time , Date) VALUES (?,?,?,?,?,?)';
    let todo = [users , orderItems , proNames , orderTotal , time, date];
    let query = db.query(sql1,todo, (err, results, fields) => {
        if (err) {
          return console.error(err.message);
        }
        cartName = [];
        req.session.cart = cartName;
        res.redirect('/SalesClerk', { }, function(err, html){
        });
      });
});

module.exports = router;
