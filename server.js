const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
/*
* Paginas staticas
*/
let opciones = { dotfiles: 'ignore', etag: false, extensions: [], index: false, maxAge: '1d' , redirect: false,
  setHeaders: function (res, path, stat) {
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Methods', '*');
  }
} ;
//
app.use(express.static(path.join(__dirname, 'public' ), opciones ));
app.use(express.static(path.join(__dirname, 'dist'   ), opciones ));
//
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
/*
*
*/
let serverPort = process.env.PORT || 3000 ;
app.listen( serverPort, function(){
  console.log('Server listening on port ' + serverPort + ' localhost:'+serverPort );
} );
//