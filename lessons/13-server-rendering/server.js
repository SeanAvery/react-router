var express = require('express')
var path = require('path')
var compression = require('compression')

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  // res.sendFile(path.join(__dirname, 'public', 'index.html'))

  const appHtml = renderToStrsing(<RouterContext {...props} />)

  res.send(renderPage(appHtml))
})

function renderPage(appHtml) {
  return `
    <title>React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}
    </div>
    <script src="/bundle.js"></script>
  `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
