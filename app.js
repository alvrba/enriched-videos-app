var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var partials = require('express-partials');
var methodOverride = require('method-override');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

var indexRouter = require('./routes/index');

var app = express();

// Method override configuration (for PUT and DELETE methods)
app.use(methodOverride('_method', {methods: ["POST", "GET"]}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(partials())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Session configuration (Express session)
var model = require("./models");
var sessionStore = new SequelizeStore({
  db: model,
  table: "session",
  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds. (15 minutes)
  expiration: 4 * 60 * 60 * 1000  // The maximum age (in milliseconds) of a valid session. (4 hours)
});
app.use(session({
  secret: "ks@d93J",
  store: sessionStore,
  resave: false,
  saveUninitialized: true
}));

// Make the session accessible in the views
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

// Routes configuration
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
