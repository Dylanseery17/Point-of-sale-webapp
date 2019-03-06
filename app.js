var createError = require('http-errors');
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSession = require('express-session');
var app = express();
var indexRouter = require('./routes/Index');
var managerRouter = require('./routes/Managers');
var productsRouter = require('./routes/Products');
var cookRouter = require('./routes/Cook');
var cartRouter = require('./routes/Cart');
var usersRouter = require('./routes/Users');
var ordersRouter = require('./routes/Orders');
var schedule = require('node-schedule');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('trust proxy', 1) // trust first proxy
app.use(expressSession({
    secret: "fd34s@!@dfa453f3DF#$D&W",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: !true }
}));



app.use(express.static(path.join(__dirname, 'public')));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies



app.use('/', indexRouter);
app.use('/', managerRouter);
app.use('/', cookRouter);
app.use('/', cartRouter);
app.use('/', productsRouter);
app.use('/', ordersRouter);
app.use('/', usersRouter);

//listen on localhost port 80
console.log('listening on local host');

module.exports = app;
