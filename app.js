var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
require('./passport/passport')(passport)

// var route = require('./routes/routes');
// var users = require('./routes/users');

//TODO: aqui se agrega las carpetas de rutas

var principal = require('./routes/principal');
var menu = require('./routes/menu');
var empresa = require('./routes/empresa');
var personal = require('./routes/personal');
var indicadores = require('./routes/indicadores');
var comunicacion = require('./routes/comunicacion');
var procesos = require('./routes/procesos');
var correlativo = require('./routes/correlativo')
var app = express();



app.use(cookieParser());
app.use(session({
    secret: 'SMA_CLOUDBIT_SRL_FACEBBOK_ANALIZAERTONE_WATSON',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//TODO: definicion de conexion a backend
//var backend_server = 'http://172.17.1.139:8000';

//DESARROLLO
var backend_server = 'http://127.0.0.1:8000';

//PREPRODUCCION
//var backend_server = 'http://192.168.30.248:8000';
const servidor = backend_server;


app.set('backend_ws', backend_server);


// TODO: inicio de variables globales
app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

//TODO: definicion de rutas padre
app.use('/', principal);
app.use('/menu', menu);
app.use('/empresa', empresa);
app.use('/personal', personal);
app.use('/indicadores', indicadores);
app.use('/comunicacion', comunicacion);

app.use('/procesos', procesos);



// catch 404 and forward to error handler
app.use('/correlativo', correlativo);
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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