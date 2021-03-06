  // var express = require('express')
  // var path = require('path')
  //
  // var app = express();
  //
  // app.use(express.static(__dirname));
  //
  // app.get('*', function(req, res) {
  //   res.sendFile(path.join(__dirname, 'index.html'))
  // })
  //
  //
  // app.listen('8080', function () {
  //   console.log('server listening on port 8080');
  // })

// server.js
var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(compression())
// serve our static stuff like index.css
app.use(express.static(__dirname))
console.log('app', app)
// send all requests to index.html so browserHistory in React Router works
app.get('/', function (req, res) {
  console.log('res', res)
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
