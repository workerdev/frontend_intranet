const mysql = require('mysql');
const env=require('./env');
var conecttion = mysql.createConnection({
    host: env.HOST_MYSL,
    port: env.PORT_MSQL,
    user: env.USER_MYSQL,
    password: env.PASS_MYSQL,
    database: env.DATABE_MYSQL
});

conecttion.connect(function(err) {
    if (err) {console.log('error: '+err);  return 401;}

});
conecttion.query("SET NAMES utf8mb4;");

module.exports=conecttion;