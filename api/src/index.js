const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: '172.17.0.3',
  user: 'root',
  password: '',
  database: 'programadorabordo'
});

connection.connect();

app.get('/products', function (request, response){

  connection.query('SELECT * FROM products', function (err, result){

    return response.send(result.map(item => ({ name: item.name, price: item.price })));

  }).on('error', function(err) {
    console.log("[mysql error]",err);
  });

});

app.listen(3001, '0.0.0.0', function(){
  console.log('Listening on port 3001');
});