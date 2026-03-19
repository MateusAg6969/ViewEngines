var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Importa rotas da aplicação
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bloonsRouter = require('./routes/bloons');
var camaraoRouter = require('./routes/camarao');
var produtoRouter = require('./routes/produto');

var app = express();

// Configuração do motor de visualização (Handlebars)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middlewares de logging e parsing
app.use(logger('dev')); // Log de requisições HTTP
app.use(express.json()); // Parser JSON
app.use(express.urlencoded({ extended: false })); // Parser URL-encoded
app.use(cookieParser()); // Parser de cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serve arquivos estáticos

// Rotas da aplicação
app.use('/users', usersRouter);
app.use('/bloons', bloonsRouter);
app.use('/camarao', camaraoRouter);
app.use('/produto', produtoRouter);

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
