const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
/*
*
*/
app.use(express.static(path.join(__dirname, 'dist')));
//
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
/*
*
*/
let puerto = process.env.PORT || 3000  ;
app.listen(puerto,function(){
  console.log('....listen server on http://localhost:'+puerto) ;
});

//