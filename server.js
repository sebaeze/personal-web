const https      = require('https')       ;
const express    = require('express')     ;
const bodyParser = require('body-parser') ;
const fs         = require('fs')          ;
const path       = require('path')        ;
const app        = express()              ;
var favicon      = require('serve-favicon');
/*
*
*/
/*
app.enable('trust proxy') ;  // Fuerza el uso de protocolo seguro -> https://....
app.use (function (req, res, next) {
  if (req.secure) {
    console.log("...no se usa protocoo seguro !!") ;
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});
*/
//
app.use(require('express-naked-redirect')({
  subDomain: 'www',
  protocol: 'https'
}))
// set up a route to redirect http to https
/*
app.use(function(req, res, next) {
  if (req.secure || String(req.headers.host).indexOf('localhost')!=-1 ) {
      next();
  } else {
      console.log('....redirect:: secure: '+req.secure+' Host: '+req.headers.host+' url: '+req.url+';') ;
      res.redirect('https://' + req.headers.host + req.url);
  }
}) ;
*/
//
//
app.use(express.static(path.join(__dirname, 'dist')));
//
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.use(favicon(__dirname + '/src/assets/images/favicon.ico'));
//
app.enable('trust proxy');
//
/*
*   Rutas
*/
//
var routerIndex          = require('./server/routes/routerIndex' ) ;
app.use('/'              , routerIndex           ) ;
/*
*
*/
app.use(function(err, req, res, next) {
    console.log(' \n ******* (B) ERROR ********** ');
    console.dir(err) ;
    let mensajeError = '' ;
    if ( typeof err=='object' ){
        mensajeError = JSON.stringify(err) ;
    } else {
        mensajeError = err ;
    }
    res.redirect('/error?mensaje='+mensajeError) ;
});
//
/*
app.use(function(req, res, next) {
    console.log(' \n *** ERROR - 404 --> url: '+req.originalUrl+' *** \n');
    let flagAceptaJspon = ( req.headers.accept.toUpperCase().indexOf('APPLICATION/JSON')!=-1 ) ;
    //
    if ( flagAceptaJspon ) {
        res.status(404);
        res.send( { error: 'url: '+req.originalUrl+' Not found' } );
        return;
    }
    res.redirect('/error?mensaje=Url: '+req.originalUrl+' no fue encontrada.') ;
});
*/
/*
*
*/
let puerto = process.env.PORT || 3000  ;
//
app.listen(puerto,function(){
  console.log('....listen server on http://localhost:'+puerto) ;
});
//
/*
const privateKey = fs.readFileSync( path.join(__dirname,'./server/cert/privkey.sebastianandreoletti.20190529.pem')) ;
const fullChain  = fs.readFileSync( path.join(__dirname,'./server/cert/fullchain.sebastianandreoletti.20190529.pem')) ;
console.log('privateKey: '+privateKey+';') ;
console.log('fullChain: '+fullChain+';') ;
const server = https.createServer({ key: privateKey, cert: fullChain }, app ).listen( puerto, function(){
  console.log('.....https server running on port: '+puerto+';') ;
}) ;
*/
//